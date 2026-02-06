GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('boron_carbide')
    .ingot()
    .color(0x48628c)
    .components(
        '4x boron',
        '1x carbon'
    )
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
        GTMaterialFlags.GENERATE_ROD
    )
    .blastTemp(1800, null, GTValues.VA[GTValues.HV], 20*25)

    event.create('zircon')
    .gem()
    .ore()
    .color(0xdb4918)
    .components(
        '1x zirconium',
        '1x silicon',
        '4x oxygen'
    )
    .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)

    event.create('zircaloy')
    .ingot()
    .color(0x33575b)
    .components(
        '4x zirconium',
        '1x niobium',
        '1x iron',
        '1x tin'
    )
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_FRAME
    )
})