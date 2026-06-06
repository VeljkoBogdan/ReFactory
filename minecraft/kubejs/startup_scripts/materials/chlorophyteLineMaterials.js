GTCEuStartupEvents.registry('gtceu:material', event => {

    // Chlorophyte line --------------------------------------------------------------------------------------------------
    event.create('chlorophyte')
        .element(GTElements.get('chlorophyte'))
        .liquid()
        .ore()
        .ingot()
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x248900)
        .secondaryColor(0x040D1B)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_ROTOR
        )
        .blastTemp(5500, null, GTValues.VA[GTValues.LuV], 20*20)

    event.create('indole_3_acetic_acid')
        .element(GTElements.get('indole_3_acetic_acid'))
        .dust()
        .color(0xd6d6d6)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('indole')
        .element(GTElements.get('indole'))
        .dust()
        .color(0xd1c7b8)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('pyruvic_acid')
        .element(GTElements.get('pyruvic_acid'))
        .liquid()
        .color(0xde8b71)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('glyceric_acid')
        .element(GTElements.get('glyceric_acid'))
        .liquid()
        .color(0x8bd15c)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('phenylhydrazine')
        .element(GTElements.get('phenylhydrazine'))
        .liquid()
        .color(0xd3d672)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('aniline')
        .element(GTElements.get('aniline'))
        .liquid()
        .color(0xa89277)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('glycolic_acid')
        .element(GTElements.get('glycolic_acid'))
        .dust()
        .color(0xe3e3e3)
        .iconSet(GTMaterialIconSet.SHINY)

    event.create('chlorophyte_growth_medium')
        .element(GTElements.get('chlorophyte_growth_medium'))
        .dust()
        .color(0x625d66)
        .iconSet(GTMaterialIconSet.DULL)

})