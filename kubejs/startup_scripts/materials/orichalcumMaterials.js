GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('orichalcum')
        .ingot()
        .element('orichalcum')
        .color(0xdb21c9)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.NO_SMELTING
        )
        .blastTemp(6000, null, GTValues.VA[GTValues.ZPM], 20*30)

    event.create('arsenorichalcide')
        .ore()
        .color(0xebc0e4)
        .components(
            'orichalcum',
            'arsenic',
            'sulfur'
        )
        .flags(
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    
    event.create('arsenic_oxide_vapor')
        .gas()
        .color(0xefefff)
        .components(
            '4x arsenic',
            '6x oxygen'
        )

    event.create('orichalcum_iii_oxide')
        .liquid()
        .color(0x685d74)
        .components(
            '2x orichalcum',
            '3x oxygen'
        )
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
})