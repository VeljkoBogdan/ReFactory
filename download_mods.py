import os, sys, hashlib, urllib.request, urllib.parse

def parse_toml(path):
    try:
        import tomllib
    except ImportError:
        try:
            import tomli as tomllib
        except ImportError:
            import subprocess
            subprocess.check_call([sys.executable, "-m", "pip", "install", "tomli"])
            import tomli as tomllib
    with open(path, "r", encoding="utf-8-sig") as f:
        return tomllib.loads(f.read())

def hash_file(path, fmt):
    h = hashlib.new(fmt)
    with open(path, "rb") as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

def file_id_to_url(file_id, filename):
    s = str(file_id)
    first = s[:-3]
    last = s[-3:]
    return f"https://edge.forgecdn.net/files/{first}/{last}/{urllib.parse.quote(filename)}"

def append_download_section(toml_path, url, hash_val, hash_fmt):
    with open(toml_path, "r", encoding="utf-8-sig") as f:
        original = f.read()
    if "\n[download]\n" in original:
        return
    section = f"\n[download]\nurl = \"{url}\"\nhash = \"{hash_val}\"\nhash-format = \"{hash_fmt}\"\n"
    with open(toml_path, "w", encoding="utf-8") as f:
        f.write(original.rstrip("\n") + section)

def main():
    base = os.path.dirname(os.path.abspath(__file__))
    mods_dir = os.path.join(base, "minecraft", "mods")
    index_dir = os.path.join(mods_dir, ".index")

    if not os.path.isdir(index_dir):
        print("No .index directory found")
        return

    downloaded = 0
    skipped = 0
    failed = 0

    toml_files = sorted([f for f in os.listdir(index_dir) if f.endswith(".toml")])

    for tf in toml_files:
        toml_path = os.path.join(index_dir, tf)
        data = parse_toml(toml_path)
        filename = data.get("filename", "")
        mod_name = data.get("name", tf)
        jar_path = os.path.join(mods_dir, filename)

        download = data.get("download", {})
        update = data.get("update", {})

        url = download.get("url") if download else None

        if not url:
            cf = update.get("curseforge", {})
            if cf and cf.get("file-id"):
                url = file_id_to_url(cf["file-id"], filename)
            else:
                mr = update.get("modrinth", {})
                if mr and mr.get("url"):
                    url = mr["url"]

        is_coremod = not url

        if os.path.exists(jar_path):
            fmt = download.get("hash-format") or "sha256"
            if download.get("hash"):
                expected = download["hash"]
                actual = hash_file(jar_path, fmt)
                if actual != expected:
                    print(f"HASH MISMATCH: {filename}")
                    print(f"  expected: {expected}")
                    print(f"  actual:   {actual}")
                    sys.exit(1)
            elif url:
                h = hash_file(jar_path, fmt)
                append_download_section(toml_path, url, h, fmt)
            skipped += 1
            continue

        if is_coremod:
            print(f"{mod_name[:30]:30s} — coremod, expect {filename}")
            failed += 1
            continue

        print(f"{mod_name[:25]:25s} {filename[:40]:40s}", end=" ", flush=True)
        try:
            urllib.request.urlretrieve(url, jar_path)
            fmt = download.get("hash-format") or "sha256"
            h = hash_file(jar_path, fmt)
            if download.get("hash"):
                if h != download["hash"]:
                    print("HASH MISMATCH!")
                    os.remove(jar_path)
                    sys.exit(1)
            else:
                append_download_section(toml_path, url, h, fmt)
            print("OK")
            downloaded += 1
        except Exception as e:
            print(f"FAILED: {e}")
            failed += 1

    print(f"\nDownloaded: {downloaded}  Skipped: {skipped}  Failed: {failed}")

if __name__ == "__main__":
    main()
