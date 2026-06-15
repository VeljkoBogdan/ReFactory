ServerEvents.recipes(event => {
    event.remove({ id: 'torchmaster:megatorch' })
    event.remove({ id: 'torchmaster:dreadlamp' })
    event.remove({ id: 'torchmaster:feral_flare_lantern' })
    event.remove({ id: 'torchmaster:frozen_pearl'})

    event.recipes.gtceu.assembler('torchmaster:megatorch')
    .circuit(24)
    .itemInputs(
        '32x minecraft:torch',
        '16x #minecraft:logs',
        '4x gtceu:gold_plate'
    )
    .itemOutputs('torchmaster:megatorch')
    .EUt(GTValues.VA[GTValues.LV] / 2)
    .duration(20*8)

    event.recipes.gtceu.assembler('torchmaster:dreadlamp')
    .circuit(24)
    .itemInputs(
        '8x gtceu:obsidian_plate',
        'minecraft:glowstone',
        '4x #forge:glass_panes'
    )
    .itemOutputs('torchmaster:dreadlamp')
    .EUt(GTValues.VA[GTValues.LV] / 2)
    .duration(20*8)

    event.recipes.gtceu.assembler('torchmaster:feral_flare_lantern')
    .circuit(25)
    .itemInputs(
        '4x gtceu:gold_plate',
        'minecraft:glowstone',
        '4x #forge:glass_panes'
    )
    .itemOutputs('torchmaster:feral_flare_lantern')
    .EUt(GTValues.VA[GTValues.LV] / 2)
    .duration(20*8)

    event.recipes.gtceu.chemical_reactor('torchmaster:frozen_pearl')
    .itemInputs(
        'minecraft:ender_pearl',
        'minecraft:ice'
    )
    .itemOutputs('torchmaster:frozen_pearl')
    .EUt(GTValues.VA[GTValues.LV] / 2)
    .duration(20*8)
})