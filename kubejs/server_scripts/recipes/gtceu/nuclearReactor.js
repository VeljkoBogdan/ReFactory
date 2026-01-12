// 1mb water = 160mb steam
ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:nuclear_reactor',
        [
            'AEA',
            'BCB',
            'DBD'
        ],
        {
            A: '#gtceu:circuits/iv',
            B: 'gtceu:zircaloy_frame',
            C: 'gtceu:ev_machine_hull',
            D: 'gtceu:hv_emitter',
            E: 'gtceu:computer_monitor_cover'
        }
    )

    event.recipes.gtceu.nuclear_reactor('uranium_reactor')
        .itemInputs('kubejs:uranium_fuel_rod')
        .inputFluids(Fluid.of('gtceu:distilled_water', 16000))
        .itemOutputs(
            '8x gtceu:nuclear_waste_dust',
            'gtceu:aluminium_fluid_cell'
        )
        .outputFluids(Fluid.of('gtceu:steam', 16000*160))
        .duration(20*30)

    event.recipes.gtceu.nuclear_reactor('thorium_reactor')
        .itemInputs('kubejs:thorium_fuel_rod')
        .inputFluids(Fluid.of('gtceu:distilled_water', 12000))
        .itemOutputs(
            '6x gtceu:nuclear_waste_dust',
            'gtceu:aluminium_fluid_cell'
        )
        .outputFluids(Fluid.of('gtceu:steam', 12000*160))
        .duration(20*30)

    event.recipes.gtceu.nuclear_reactor('plutonium_reactor')
        .itemInputs('kubejs:plutonium_fuel_rod')
        .inputFluids(Fluid.of('gtceu:distilled_water', 14000))
        .itemOutputs(
            '10x gtceu:nuclear_waste_dust',
            'gtceu:aluminium_fluid_cell'
        )
        .outputFluids(Fluid.of('gtceu:steam', 14000*160))
        .duration(20*30)
})