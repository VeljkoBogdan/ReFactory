ServerEvents.recipes(event => {
    // LV
    event.recipes.gtceu.mixer('mana_alloy_dust')
        .circuit(31)
        .itemInputs(
            'gtceu:manasteel_dust',
            '2x minecraft:redstone'
        )
        .itemOutputs('3x gtceu:mana_alloy_dust')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('mana_alloy_smelter')
        .itemInputs(
            'botania:manasteel_ingot',
            '2x minecraft:redstone'
        )
        .itemOutputs('3x gtceu:mana_alloy_ingot')
        .duration(20*7.5)
        .EUt(16)

    // MV
    event.recipes.gtceu.mixer('terralumina')
        .circuit(31)
        .itemInputs(
            '2x gtceu:aluminium_dust',
            'gtceu:terrasteel_dust'
        )
        .itemOutputs('3x gtceu:terralumina_dust')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.alloy_smelter('terralumina_alloy_smelter')
        .itemInputs(
            '2x gtceu:aluminium_ingot',
            'botania:terrasteel_ingot'
        )
        .itemOutputs('3x gtceu:terralumina_ingot')
        .duration(20*7.5)
        .EUt(16)

    // HV
    event.recipes.gtceu.mixer('elventium')
        .circuit(31)
        .itemInputs(
            'gtceu:elementium_dust',
            '2x gtceu:gold_dust',
            'gtceu:ambrosium_dust'
        )
        .itemOutputs('4x gtceu:elventium_dust')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.HV])
})