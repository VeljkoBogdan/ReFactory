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

    event.create('dawnstone')
        .ingot()
        .element(GTElements.get('dawnstone'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
        )
        .color(0xfffff0)
        .secondaryColor(0xff4800)
        .iconSet(GTMaterialIconSet.SHINY)
})