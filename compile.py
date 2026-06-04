import os, zipfile, json

def build_modpack(sources, output_filename):
    seen = set()
    with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for src, prefix in sources:
            if os.path.isdir(src):
                for root, _, files in os.walk(src):
                    for file in files:
                        file_path = os.path.join(root, file)
                        relpath = os.path.relpath(file_path, src)
                        arcname = os.path.join(prefix, relpath) if prefix else relpath
                        if arcname in seen:
                            continue
                        seen.add(arcname)
                        zipf.write(file_path, arcname)
            elif os.path.isfile(src):
                arcname = prefix or os.path.basename(src)
                if arcname not in seen:
                    seen.add(arcname)
                    zipf.write(src, arcname)

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

    def walk_with_filter(src_dir, arc_prefix):
        if not os.path.isdir(src_dir):
            return []
        entries = []
        for root, dirs, files in os.walk(src_dir):
            rel_root = os.path.relpath(root, base)
            dirs[:] = [d for d in dirs if os.path.join(rel_root, d).replace("\\", "/") not in packignore and os.path.join(rel_root, d) not in packignore]
            for file in files:
                file_path = os.path.join(root, file)
                relpath = os.path.relpath(file_path, src_dir)
                arcname = os.path.join(arc_prefix, relpath) if arc_prefix else relpath
                full_rel = os.path.relpath(file_path, base).replace("\\", "/")
                if full_rel not in packignore and arcname not in packignore:
                    entries.append((file_path, arcname))
        return entries

    sources = [
        (os.path.join(base, "flame", "manifest.json"), "manifest.json"),
        (os.path.join(base, "minecraft", "config"), "overrides/config"),
        (os.path.join(base, "minecraft", "defaultconfigs"), "overrides/defaultconfigs"),
        (os.path.join(base, "minecraft", "global_packs"), "overrides/global_packs"),
        (os.path.join(base, "minecraft", "kubejs"), "overrides/kubejs"),
        (os.path.join(base, "minecraft", "resourcepacks"), "overrides/resourcepacks"),
        (os.path.join(base, "minecraft", "scripts"), "overrides/scripts"),
        (os.path.join(base, "minecraft", "groovy"), "overrides/groovy"),
        (os.path.join(base, "minecraft", "mods"), "overrides/mods"),
    ]

    seen = set()
    output_zip = os.path.join(base, "build", "modpack-latest.zip")
    os.makedirs(os.path.join(base, "build"), exist_ok=True)
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for src_dir, arc_prefix in sources:
            entries = walk_with_filter(src_dir, arc_prefix)
            for file_path, arcname in entries:
                if arcname in seen:
                    continue
                seen.add(arcname)
                zipf.write(file_path, arcname)

    print(f"Modpack zipped successfully: {output_zip}")
