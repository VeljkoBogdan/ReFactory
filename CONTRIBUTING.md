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
