ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor('adamantite_processing')
        .itemInputs(
            'gtceu:adamantite_dust',
            '2x gtceu:calcium_dust'
        )
        .itemOutputs(
            'gtceu:adamantium_dust',
            '2x gtceu:quicklime_dust'
        )
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace('adamantium_smelting_gas')
        .itemInputs('gtceu:adamantium_dust')
        .inputFluids(Fluid.of('gtceu:argon', 50))
        .itemOutputs('gtceu:hot_adamantium_ingot')
        .duration(20*20)
        .blastFurnaceTemp(7500)
        .EUt(GTValues.VA[GTValues.ZPM])
    

    event.recipes.gtceu.electric_blast_furnace('adamantium_smelting')
        .itemInputs('gtceu:adamantium_dust')
        .itemOutputs('gtceu:hot_adamantium_ingot')
        .duration(20*30)
        .blastFurnaceTemp(7500)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.vacuum_freezer('adamantium_cooling')
        .itemInputs('gtceu:hot_adamantium_ingot')
        .inputFluids(Fluid.of('gtceu:liquid_helium', 500))
        .itemOutputs('gtceu:adamantium_ingot')
        .outputFluids(Fluid.of('gtceu:helium', 250))
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.EV])
})