import os, zipfile, json

def load_packignore(base):
    ignore = set()
    ignore_path = os.path.join(base, ".packignore")
    if os.path.exists(ignore_path):
        with open(ignore_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    ignore.add(line.replace("\\", "/"))
    return ignore

def build_modpack(base, packignore, output_zip):
    manifest_mods_path = os.path.join(base, "gooning", "mod-list.json")
    manifest_mods = []
    if os.path.exists(manifest_mods_path):
        with open(manifest_mods_path, "r", encoding="utf-8-sig") as f:
            manifest_mods = json.load(f)

    mc_version = None
    forge_version = None
    mmc_path = os.path.join(base, "mmc-pack.json")
    if os.path.exists(mmc_path):
        with open(mmc_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        for comp in data.get("components", []):
            uid = comp.get("uid")
            if uid == "net.minecraft":
                mc_version = comp.get("version")
            elif uid == "net.minecraftforge":
                forge_version = comp.get("version")

    manifest = {
        "minecraft": {
            "version": mc_version or "1.20.1",
            "modLoaders": [
                {"id": f"forge-{forge_version}" if forge_version else "forge-47.4.10", "primary": True}
            ]
        },
        "manifestType": "minecraftModpack",
        "manifestVersion": 1,
        "name": "ReFactory: Expert",
        "version": "0.5.1",
        "author": "",
        "files": [{"projectID": m["projectID"], "fileID": m["fileID"], "required": True} for m in manifest_mods],
        "overrides": "overrides"
    }

    seen = set()
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for entry in ["mmc-pack.json", "instance.cfg"]:
            path = os.path.join(base, entry)
            if os.path.isfile(path):
                zipf.write(path, entry)
                seen.add(entry)

        manifest_json = json.dumps(manifest, indent=2)
        zipf.writestr("manifest.json", manifest_json)
        seen.add("manifest.json")

        mc_dir = os.path.join(base, "minecraft")
        if os.path.isdir(mc_dir):
            for root, _, files in os.walk(mc_dir):
                for file in files:
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, mc_dir)
                    full_rel = os.path.relpath(file_path, base).replace("\\", "/")
                    if full_rel in packignore or arcname in packignore:
                        continue
                    if arcname in seen:
                        continue
                    _, ext = os.path.splitext(file)
                    if ext.lower() in (".jar",):
                        if arcname in seen:
                            continue
                        project_id = None
                        for m in manifest_mods:
                            if m["filename"] == file:
                                project_id = m["projectID"]
                                break
                        if project_id:
                            continue
                    seen.add(arcname)
                    zipf.write(file_path, os.path.join("overrides", arcname))
    return len(manifest["files"])

if __name__ == "__main__":
    base = os.path.dirname(os.path.abspath(__file__))
    packignore = load_packignore(base)

    os.makedirs(os.path.join(base, "build"), exist_ok=True)
    output_zip = os.path.join(base, "build", "modpack-latest.zip")

    count = build_modpack(base, packignore, output_zip)
    print(f"Modpack zipped successfully: {output_zip} ({count} mods in manifest)")
