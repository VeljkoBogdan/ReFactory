ServerEvents.recipes(event => {
    event.recipes.gtceu.large_chemical_reactor('arsenorichalcide_processing')
        .itemInputs('2x gtceu:arsenorichalcide_dust')
        .inputFluids(Fluid.of('gtceu:oxygen', 10000))
        .outputFluids(
            Fluid.of("gtceu:iron_iii_oxide", 1000),
            Fluid.of('gtceu:sulfur_dioxide', 2000),
            Fluid.of('gtceu:arsenic_oxide_vapor', 500)
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electric_blast_furnace('orichalcum_smelting_gas')
        .itemInputs('gtceu:orichalcum_dust')
        .inputFluids(Fluid.of('gtceu:argon', 50))
        .itemOutputs('gtceu:hot_orichalcum_ingot')
        .duration(20*20)
        .blastFurnaceTemp(8000)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.electric_blast_furnace('orichalcum_smelting')
        .itemInputs('gtceu:orichalcum_dust')
        .itemOutputs('gtceu:hot_orichalcum_ingot')
        .duration(20*30)
        .blastFurnaceTemp(8000)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.vacuum_freezer('orichalcum_cooling')
        .itemInputs('gtceu:hot_orichalcum_ingot')
        .inputFluids(Fluid.of('gtceu:liquid_helium', 500))
        .itemOutputs('gtceu:orichalcum_ingot')
        .outputFluids(Fluid.of('gtceu:helium', 250))
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.electrolyzer('orichalcum_iii_oxide_processing')
        .inputFluids(Fluid.of('gtceu:orichalcum_iii_oxide', 1000))
        .itemOutputs('2x gtceu:orichalcum_dust')
        .outputFluids(Fluid.of("gtceu:oxygen", 3000))
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.IV])
})