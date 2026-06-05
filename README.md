<div align="center">
  <img src="https://github.com/user-attachments/assets/a98ba95e-db5b-4237-803f-72299b584eb4" alt="RFLogo" height="300">

  ***This is a quest driven GregTech pack, inspired by the likes of Regrowth, Nomifactory and GT New Horizons.***

  [![Discord](https://dcbadge.limes.pink/api/server/vMurKTcaY5)](https://discord.gg/vMurKTcaY5)
  [![CurseForge](https://cf.way2muchnoise.eu/title/1098482.svg?badge_style=for_the_badge)](https://www.curseforge.com/minecraft/modpacks/re-factory)

  #### There are plenty of recipe changes, but fear not, the questbook will guide you through these.

  ### **Currently features content to and including EV**
</div>

---

## Overview

Start rebuilding the world by building massive factories and working through the GregTech tiers with the help of Botania. This is an expert modpack with custom recipes and content that make every step of progress feel challenging (and earned). But don't worry, the questbook will guide you through the progression, with handcrafted quests that will not only guide you, but also let you in on the tips and tricks. Search for resources among the planet, the underground, the sky and the stars, featuring dimension mods such as The Aether, The Undergarden and Ad Astra, each featuring resources required for progression. If you want a fresh, hard but rewarding experience, look no further!

**Also guns… anyone?**

---

## Features

### Questbook that will help you with every step along your journey, with 800+ handcrafted quests.

![Quests](https://u.cubeupload.com/IlluminatiJoe/quests.jpg)

---

### Progress through the pack and make automated lines using GregTech with the help of EnderIO, Thermal Foundation and plenty of other mods.

### Custom machines, multiblocks, items and mechanics to keep the pack fresh and exciting, while also adding to the complexity.

![Multiblocks](https://u.cubeupload.com/IlluminatiJoe/multiblocks.jpg)

---

### Plenty of recipe and config tweaks to keep the experience unique.

![Recipes](https://u.cubeupload.com/IlluminatiJoe/recipes.jpg)

---

### Custom world generation made for the pack.

![Worldgen](https://u.cubeupload.com/IlluminatiJoe/worldgen.jpg)

---

### Restore the biosphere using Botania and provide blood sacrifice to reap the benefits of Blood Magic.

### Manage your logistics using Applied Energistics 2 and LaserIO and farm drops using Mob Grinding Utils and Botany Pots.

### Fight and survive the buffed Infernal Mobs using Apotheosis, Tinker's Construct and Timeless and Classics Zero (guns!!!) or become a designer with Rechiseled and Xtones Reworked.

### Travel to the Aether, Moon, Mars and many other planets and dimensions.

### Focuses on providing an optimized and smooth-running experience for everyone.

---

<div align="center">

# CURRENTLY IN EARLY BETA, SUBJECT TO CHANGE

</div>


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
