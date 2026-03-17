ServerEvents.recipes(event => {
    event.replaceInput({id: 'mob_grinding_utils:recipe_tank_sink'}, 'minecraft:ender_eye', 'gtceu:aluminium_normal_fluid_pipe')
    event.replaceInput({id: 'mob_grinding_utils:recipe_tank_sink'}, 'minecraft:iron_bars', 'gtceu:manasteel_plate')

    event.remove({id: 'mob_grinding_utils:recipe_fan'})
    event.shaped(
        'mob_grinding_utils:fan',
        [
            'PPP',
            'PRF',
            'PPP'
        ],
        {
            P: 'gtceu:steel_plate',
            R: 'redstone_block',
            F: 'gtceu:iron_rotor'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_saw'})
    event.shaped(
        'mob_grinding_utils:saw',
        [
            'POP',
            'SRS',
            'THT'
        ],
        {
            P: 'gtceu:redstone_alloy_plate',
            O: 'enderio:player_token',
            S: 'mob_grinding_utils:spikes',
            R: 'gtceu:dark_steel_rod',
            T: 'thermal:redstone_servo',
            H: 'gtceu:mv_machine_casing'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_spikes'})
    event.shaped(
        'mob_grinding_utils:spikes',
        [
            ' S ',
            'SIS',
            'IBI'
        ],
        {
            S: 'gtceu:iron_bolt',
            I: 'gtceu:double_iron_plate',
            B: 'iron_block'
        }
    )


})