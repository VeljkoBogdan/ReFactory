ServerEvents.recipes(event => {
    event.remove({id: 'darkutils:crafting/vector_plate'})
    event.remove({id: 'darkutils:crafting/vector_plate_fast'})
    event.remove({id: 'darkutils:crafting/vector_plate_extreme'})
    event.remove({id: 'darkutils:crafting/vector_plate_ultra'})

    event.shaped(
        '10x darkutils:vector_plate',
        [
            'PPP',
            'MEM',
            'DDD'
        ],
        {
            D: 'gtceu:dark_steel_plate',
            P: 'gtceu:pulsating_alloy_plate',
            E: 'gtceu:lv_conveyor_module',
            M: 'gtceu:lv_electric_motor'
        }
    )

    event.recipes.gtceu.assembler('fast_vector_plate')
        .itemInputs(
            '6x darkutils:vector_plate',
            '4x gtceu:energetic_alloy_plate',
            'gtceu:lv_conveyor_module'
        )
        .itemOutputs('6x darkutils:vector_plate_fast')
        .duration(20*16)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('extreme_vector_plate')
        .itemInputs(
            '6x darkutils:vector_plate_fast',
            '4x gtceu:redstone_alloy_plate',
            'gtceu:mv_conveyor_module'
        )
        .itemOutputs('6x darkutils:vector_plate_extreme')
        .duration(20*16)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('ultra_vector_plate')
        .itemInputs(
            '6x darkutils:vector_plate_extreme',
            '4x gtceu:enderium_plate',
            'gtceu:hv_conveyor_module'
        )
        .itemOutputs('6x darkutils:vector_plate_ultra')
        .duration(20*16)
        .EUt(GTValues.VA[GTValues.LV])
})