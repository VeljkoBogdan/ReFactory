//priority: -9999

MysticalAgricultureStartupEvents.crop(event => {
    let ignoredMaterials = [
        'coke', 'wrought_iron', 'annealed_copper', 'magnetic_samarium', 'magnetic_neodymium', 'fluix_crystal', 'magnetic_steel', 'damascus_steel',
        'magnetic_iron', 'gaia', 'dawnstone', 'chlorophyte', 'adamantium', 'orichalcum', 'enriched_netherite', 'demonite', 'sky_ingot', 'infused_iron',
        'desh', 'plutonium_241', 'mythril', 'uranium_235', 'ostrum', 'indium', 'yttrium', 'lapotron', 'darmstadtium', 'duranium', 'trinium', 'tritanium',
        'neutronium', 'europium', 'americium'
    ]

    GTMaterialRegistry.getRegisteredMaterials().forEach(mat => {
        if (!mat.isSolid()) return
        if (mat.getMaterialComponents() != null && mat.getMaterialComponents().size() > 1) return

        const name = String(mat.getName())
        if (ignoredMaterials.includes(name)) return

        const displayName = name.split("_")
            .map(word => String(word).charAt(0).toUpperCase() + String(word).slice(1))
            .join(" ");
        const color = mat.getMaterialRGB()
        
        let texture, ingredient
        if (mat.hasProperty(PropertyKey.INGOT)) {
            texture = CropTextures.INGOT_CROP_TEXTURES
            ingredient = `gtceu:${name}_ingot`
        } else if (mat.hasProperty(PropertyKey.GEM)) {
            texture = CropTextures.GEM_CROP_TEXTURES
            ingredient = `gtceu:${name}_gem`
        } else if (mat.hasProperty(PropertyKey.DUST)) {
            texture = CropTextures.DUST_CROP_TEXTURES
            ingredient = `gtceu:${name}_dust`
        } else return

        let crop = new Crop(
            `kubejs:${name}`,
            CropTier.FIVE,
            CropType.RESOURCE,
            texture,
            color,
            ingredient
        )

        crop.setDisplayName(Text.ofString(displayName))
        event.registry.register(crop)
    })
})