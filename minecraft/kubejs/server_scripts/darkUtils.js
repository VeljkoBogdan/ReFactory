ServerEvents.recipes(event => {
    event.remove({id: 'darkutils:crafting/vector_plate'})
    event.remove({id: 'darkutils:crafting/vector_plate_fast'})
    event.remove({id: 'darkutils:crafting/vector_plate_extreme'})
    event.remove({id: 'darkutils:crafting/vector_plate_ultra'})
    event.remove({id: /darkutils:(.*)plate(.*)/})

    let blankPlate = 'darkutils:blank_plate'

    event.recipes.gtceu.assembler('vector_plate')
        .itemInputs(
            '6x darkutils:blank_plate',
            '4x gtceu:pulsating_alloy_plate',
            'gtceu:lv_conveyor_module'
        )
        .itemOutputs('6x darkutils:vector_plate')
        .duration(20*16)
        .EUt(GTValues.VA[GTValues.LV])

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

    event.remove({id: 'darkutils:stonecutting/dark_stones_to_blank_plate'})
    event.recipes.gtceu.assembler('blank_plate')
        .itemInputs('gtceu:dark_steel_plate')
        .circuit(1)
        .itemOutputs('darkutils:blank_plate')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV])

    event.shaped(
        '3x darkutils:damage_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'gtceu:redstone_alloy_plate',
            B: 'mob_grinding_utils:spikes',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:damage_plate_maim',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'gtceu:copper_plate',
            B: 'mob_grinding_utils:spikes',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:damage_plate_player',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            B: 'enderio:player_token',
            A: 'mob_grinding_utils:spikes',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:flame_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'gtceu:copper_plate',
            B: 'campfire',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:slowness_plate',
        [
            'BBB',
            'CCC',
            '   '
        ],
        {
            B: 'snow_block',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:fatigue_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'prismarine_shard',
            B: 'prismarine_crystals',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:darkness_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'ink_sac',
            B: 'phantom_membrane',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:hunger_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'rotten_flesh',
            B: 'nether_wart',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:weakness_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'sugar',
            B: 'fermented_spider_eye',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:poison_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'poisonous_potato',
            B: 'spider_eye',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:wither_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'enderio:withering_powder',
            B: 'wither_skeleton_skull',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:alert_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'glowstone',
            B: 'glow_ink_sac',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:levitation_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'feather',
            B: 'popped_chorus_fruit',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:misfortune_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'gtceu:gold_plate',
            B: 'gtceu:lapis_plate',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:slowfall_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'feather',
            B: 'phantom_membrane',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:omen_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'gtceu:dark_steel_plate',
            B: 'totem_of_undying',
            C: blankPlate
        }
    )

    event.shaped(
        '3x darkutils:frost_plate',
        [
            'ABA',
            'CCC',
            '   '
        ],
        {
            A: 'ice',
            B: 'snow_block',
            C: blankPlate
        }
    )

    event.remove({id: 'darkutils:crafting/redstone_randomizer'})
    event.shaped(
        'darkutils:redstone_randomizer',
        [
            'AAA',
            'BCD',
            'AAA'
        ],
        {
            A: '#darkutils:dark_stones',
            B: 'repeater',
            C: 'thermal:redstone_servo',
            D: 'comparator'
        }
    )

    

})