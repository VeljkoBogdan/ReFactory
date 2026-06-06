# Contributing

## Commit messages

Prefix your commit message to control the CI build:

| Prefix | Builds | Artifact | Release |
|--------|--------|----------|---------|
| none   | no     | no       | no      |
| `[build]` | yes | yes | no |
| tag `v*` | yes | yes | yes |

**Examples**

- `fix typo in quest book` -- no build
- `[build] update EnderIO to 6.2.14` -- build + artifact
- `git tag v0.6.1 && git push origin v0.6.1` -- build + release

## Building the pack locally

```bash
python download_mods.py
python compile.py
```

The zip is written to `build/modpack-latest.zip`. Import it into Prism Launcher
via Add Instance > Import from ZIP.

## Mod index files

Each mod has a `.pw.toml` file in `minecraft/mods/.index/`. These track the
download URL, file hash, and CurseForge file ID. When you update a mod, replace
its file in `minecraft/mods/` and run `python download_mods.py` to update the
hash in the index.

## Structure

```
mmc-pack.json          Prism/MultiMC instance manifest
instance.cfg           Prism instance config
compile.py             Builds the final ZIP
download_mods.py       Downloads mods from the index
.packignore            Files excluded from the ZIP
minecraft/
  mods/
    .index/            One .pw.toml per mod
    refactorycore-2.4.0.jar   Coremod (committed directly)
  config/
  kubejs/
  defaultconfigs/
  ...
```

## First-time setup

If you are setting up this repo on a new machine, do the following.

### 1. Clone the repo

```
git clone https://github.com/irislgtm/ReFactory.git
cd ReFactory
```

### 2. Set up your remote

If you forked the repo, point your remote at your fork:

```
git remote add origin https://github.com/YOUR_USERNAME/ReFactory.git
git remote -v
```

### 3. Download the mods

```
python download_mods.py
python compile.py
```

This fetches all mod jars from CurseForge and Modrinth, verifies their
hashes against the index, then builds `build/modpack-latest.zip`.

### 4. Import the pack into Prism Launcher

Open Prism Launcher, go to Add Instance > Import from ZIP, and select
`build/modpack-latest.zip`.

### 5. Push changes and trigger CI

The CI runs when you push a tag or use `[build]` in your commit message.

```
git add .
git commit -m "[build] update some mods"
git push
```

To create a release build:

```
git tag v0.6.1
git push origin v0.6.1
```

### 6. Release permissions

The CI uses the built-in `GITHUB_TOKEN` for releases. It works automatically.
If you fork the repo, make sure Actions are enabled in your fork under
Settings > Actions > General.
