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

if __name__ == "__main__":
    base = os.path.dirname(os.path.abspath(__file__))
    packignore = load_packignore(base)

    seen = set()
    output_zip = os.path.join(base, "build", "modpack-latest.zip")
    os.makedirs(os.path.join(base, "build"), exist_ok=True)

    sources = []
    for name in ["config", "defaultconfigs", "global_packs", "kubejs", "mods", "resourcepacks", "scripts", "groovy"]:
        path = os.path.join(base, name)
        if os.path.isdir(path):
            sources.append((path, f"overrides/{name}"))

    root_files = ["instance.cfg", "mmc-pack.json"]
    for name in root_files:
        path = os.path.join(base, name)
        if os.path.isfile(path):
            sources.append((path, name))

    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for src, arc_prefix in sources:
            if os.path.isfile(src):
                zipf.write(src, arc_prefix)
                seen.add(arc_prefix)
            elif os.path.isdir(src):
                for root, _, files in os.walk(src):
                    for file in files:
                        file_path = os.path.join(root, file)
                        relpath = os.path.relpath(file_path, src)
                        arcname = os.path.join(arc_prefix, relpath) if arc_prefix else relpath
                        full_rel = os.path.relpath(file_path, base).replace("\\", "/")
                        if full_rel in packignore or arcname in packignore:
                            continue
                        if arcname in seen:
                            continue
                        seen.add(arcname)
                        zipf.write(file_path, arcname)

    print(f"Modpack zipped successfully: {output_zip}")
