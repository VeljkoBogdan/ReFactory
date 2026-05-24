GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('tzm_alloy')
        .ingot()
        .dust()
        .components(
            'titanium',
            'zirconium',
            'molybdenum',
            'carbon'
        )
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FRAME
        )
        .color(0x556066)
        .iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(7500, null, GTValues.VA[GTValues.LuV], 20*30)

    event.create('ceramic_radiative_coating')
        .dust()
        .color(0xd4d0cb)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )
        .iconSet(GTMaterialIconSet.DULL)

})