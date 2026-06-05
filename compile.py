import os, zipfile

def load_packignore(base):
    ignore = set()
    ignore_path = os.path.join(base, ".packignore")
    if os.path.exists(ignore_path):
        with open(ignore_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip().replace("\\", "/")
                if line and not line.startswith("#"):
                    ignore.add(line)
    return ignore

def is_ignored(path, ignore_patterns):
    for pattern in ignore_patterns:
        if pattern.endswith("/**"):
            prefix = pattern[:-3]
            if path == prefix.rstrip("/") or path.startswith(prefix):
                return True
        elif path == pattern:
            return True
        elif path.startswith(pattern + "/"):
            return True
    return False

if __name__ == "__main__":
    base = os.path.dirname(os.path.abspath(__file__))
    packignore = load_packignore(base)

    os.makedirs(os.path.join(base, "build"), exist_ok=True)
    output_zip = os.path.join(base, "build", "modpack-latest.zip")

    seen = set()
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for entry in ["mmc-pack.json", "instance.cfg"]:
            path = os.path.join(base, entry)
            if os.path.isfile(path):
                zipf.write(path, entry)
                seen.add(entry)

        mc_dir = os.path.join(base, "minecraft")
        if os.path.isdir(mc_dir):
            for root, _, files in os.walk(mc_dir):
                for file in files:
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, mc_dir)
                    full_rel = os.path.relpath(file_path, base).replace("\\", "/")
                    if is_ignored(full_rel, packignore) or is_ignored(arcname, packignore):
                        continue
                    if arcname in seen:
                        continue
                    seen.add(arcname)
                    zipf.write(file_path, "minecraft/" + arcname.replace("\\", "/"))

    print(f"Modpack zipped successfully: {output_zip}")
