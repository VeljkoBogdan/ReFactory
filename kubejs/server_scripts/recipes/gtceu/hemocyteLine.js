ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor('organic_slurry')
        .inputFluids(
            Fluid.of('gtceu:biomass', 6000),
            Fluid.of('water', 2000)
        )
        .itemInputs('gtceu:sulfur_dust')
        .outputFluids(Fluid.of('gtceu:organic_slurry', 8000))
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.fermenter('cellular_suspension')
        .inputFluids(Fluid.of('gtceu:organic_slurry', 1000))
        .outputFluids(Fluid.of('gtceu:cellular_suspension', 1000))
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge('cellular_suspension_centrifuging')
        .inputFluids(Fluid.of('gtceu:cellular_suspension', 2000))
        .outputFluids(Fluid.of('gtceu:plasma_fluid', 1000))
        .itemOutputs('gtceu:cellular_sediment_dust')
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('hemocyte_suspension')
        .inputFluids(Fluid.of('gtceu:salt_water', 1000))
        .itemInputs('gtceu:cellular_sediment_dust')
        .outputFluids(Fluid.of('gtceu:hemocyte_suspension', 1000))
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge('plasma_fluid_recycling')
        .inputFluids(Fluid.of('gtceu:plasma_fluid', 4000))
        .outputFluids(
            Fluid.of('water', 3000),
            Fluid.of('gtceu:carbon_dioxide', 250)
        )
        .chancedOutput('gtceu:small_sodium_dust', 2000, 0)
        .chancedOutput('gtceu:small_calcium_dust', 2000, 0)
        .chancedOutput('gtceu:small_magnesium_dust', 1500, 0)
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({id: 'gtceu:chemical_reactor/epoxy_board'})
    event.remove({id: 'gtceu:chemical_reactor/epoxy_circuit_board'})
    event.remove({id: 'gtceu:large_chemical_reactor/epoxy_circuit_board'})
    event.recipes.gtceu.chemical_reactor('sanguine_circuit_board')
        .itemInputs(
            'gtceu:epoxy_plate',
            '8x gtceu:lumium_foil',
        )
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 500),
            Fluid.of('gtceu:hemocyte_suspension', 500)
        )
        .itemOutputs('gtceu:epoxy_circuit_board')
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove({output: 'gtceu:epoxy_printed_circuit_board'})
    event.recipes.gtceu.chemical_reactor('sanguine_printed_circuit_board1')
        .itemInputs(
            'gtceu:epoxy_circuit_board',
            '8x gtceu:enderium_foil'
        )
        .inputFluids(Fluid.of('gtceu:iron_iii_chloride', 500))
        .itemOutputs('gtceu:epoxy_printed_circuit_board')
        .duration(20*45)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('sanguine_printed_circuit_board2')
        .itemInputs(
            'gtceu:epoxy_circuit_board',
            '8x gtceu:enderium_foil'
        )
        .inputFluids(Fluid.of('gtceu:sodium_persulfate', 1000))
        .itemOutputs('gtceu:epoxy_printed_circuit_board')
        .duration(20*45)
        .EUt(GTValues.VA[GTValues.LV])
})