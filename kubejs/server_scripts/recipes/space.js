ServerEvents.recipes(event => {
    // event.recipes.gtceu.forming_press("t1_welded_plate")
    //   .itemInputs(['4x gtceu:zanite_steel_plate', '4x gtceu:black_steel_plate', '4x gtceu:titanium_plate', '4x gtceu:manasteel_plate'])
    //   .circuit(1)
    //   .itemOutputs('kubejs:t1_welded_rocket_plate')
    //   .duration(20*8)
    //   .EUt(GTValues.VA[GTValues.HV])

    // event.recipes.gtceu.implosion_compressor("t1_rocket_plate")
    //   .itemInputs('kubejs:t1_welded_rocket_plate', 'gtceu:industrial_tnt')
    //   .circuit(1)
    //   .itemOutputs('kubejs:t1_rocket_plate')
    //   .duration(20*0.75)
    //   .EUt(GTValues.VA[GTValues.HV])

    // event.replaceInput({id: 'gcyr:assembler/basic_rocket_motor'}, 'gtceu:stainless_steel_frame', '2x kubejs:t1_rocket_plate')
    // event.replaceInput({id: 'gcyr:assembler/basic_fuel_tank'}, 'gtceu:stainless_steel_frame', '2x kubejs:t1_rocket_plate')
})