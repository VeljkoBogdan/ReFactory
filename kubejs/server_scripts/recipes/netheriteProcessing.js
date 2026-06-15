ServerEvents.recipes(event => {
    event.remove({output: 'netherite_scrap', mod: {not: 'bloodmagic'}})
    event.remove({output: 'netherite_ingot', mod: {not: 'gtceu'}})
    event.remove({id: 'tconstruct:smeltery/melting/metal/molten_debris/ore'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/molten_debris/scrap'})
    event.remove({id: 'bloodmagic:arc/reversion/netherite_ingot'})
    event.remove({id: 'minecraft:netherite_ingot'})
    event.remove({id: 'tconstruct:common/materials/netherite_ingot_from_nuggets'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_netherite'})
    event.remove({id: 'thermal:machines/smelter/smelter_netherite_plate_to_ingot'})
    event.remove({id: 'thermal:machines/smelter/smelter_alloy_netherite'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/netherite/dust'})
    event.remove({input: 'thermal:netherite_dust'})

    event.recipes.gtceu.large_chemical_reactor('netherite_purification')
        .itemInputs('2x gtceu:purified_netherite_ore')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 6000))
        .itemOutputs(
            '2x gtceu:netherite_chloride_dust',
            '2x gtceu:titanium_dioxide_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:enriched_netherite_ammonia_solution', 2000),
            Fluid.of('gtceu:carbon_dioxide', 1000)
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electrolyzer('netherite_chloride_decomp')
        .itemInputs('gtceu:netherite_chloride_dust')
        .itemOutputs('gtceu:netherite_dust')
        .outputFluids(Fluid.of('gtceu:chlorine', 2000))
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.electrolyzer('enriched_netherite_ammonia_solution_decomp')
        .inputFluids(Fluid.of('gtceu:enriched_netherite_ammonia_solution', 1000))
        .itemOutputs('gtceu:enriched_netherite_dust')
        .outputFluids(Fluid.of('gtceu:ammonia', 1000))
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace('titanium_oxide_blasting')
        .itemInputs(
            'gtceu:titanium_dioxide_dust',
            'gtceu:carbon_dust'
        )
        .itemOutputs('gtceu:hot_titanium_ingot')
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
        .blastFurnaceTemp(2300)
        .duration(20*40)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.electric_blast_furnace('netherite_blasting')
        .itemInputs('gtceu:netherite_dust')
        .itemOutputs('netherite_ingot')
        .blastFurnaceTemp(3800)
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace('netherite_blasting_helium')
        .itemInputs('gtceu:netherite_dust')
        .inputFluids(Fluid.of('gtceu:helium', 100))
        .itemOutputs('netherite_ingot')
        .blastFurnaceTemp(3800)
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace('enriched_netherite_blasting')
        .itemInputs('gtceu:enriched_netherite_dust')
        .itemOutputs('gtceu:hot_enriched_netherite_ingot')
        .blastFurnaceTemp(4000)
        .duration(20*40)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electric_blast_furnace('enriched_netherite_blasting_helium')
        .itemInputs('gtceu:enriched_netherite_dust')
        .inputFluids(Fluid.of('gtceu:helium', 100))
        .itemOutputs('gtceu:hot_enriched_netherite_ingot')
        .blastFurnaceTemp(4000)
        .duration(20*27)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.vacuum_freezer('enriched_netherite_cooling')
        .itemInputs('gtceu:hot_enriched_netherite_ingot')
        .itemOutputs('gtceu:enriched_netherite_ingot')
        .duration(20*12)
        .EUt(GTValues.VA[GTValues.HV])
})