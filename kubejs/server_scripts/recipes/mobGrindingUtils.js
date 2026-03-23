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

    event.remove({id: 'mob_grinding_utils:recipe_absorbtion_hopper'})
    event.shaped(
        'mob_grinding_utils:absorption_hopper',
        [
            ' E ',
            'POP',
            ' H '
        ],
        {
            E: 'gtceu:ender_pearl_plate',
            P: 'gtceu:double_dark_steel_plate',
            H: 'hopper',
            O: 'obsidian'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_tank'})
    event.shaped(
        'mob_grinding_utils:tank',
        [
            'PGP',
            'G G',
            'PGP'
        ],
        {
            P: 'gtceu:long_iron_rod',
            G: 'gtceu:glass_plate'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_jumbotank'})
    event.shaped(
        'mob_grinding_utils:jumbo_tank',
        [
            'PGP',
            'G G',
            'PGP'
        ],
        {
            P: 'gtceu:long_aluminium_rod',
            G: 'mob_grinding_utils:tank'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_xp_tap'})
    event.shaped(
        'mob_grinding_utils:xp_tap',
        [
            ' C ',
            'SST',
            '  T'
        ],
        {
            C: 'gtceu:small_iron_gear',
            S: 'gtceu:tin_alloy_small_fluid_pipe',
            T: 'gtceu:tin_alloy_tiny_fluid_pipe'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_entity_conveyor'})
    event.shaped(
        'mob_grinding_utils:entity_conveyor',
        [
            'V  ',
            'B  ',
            '   '
        ],
        {
            V: 'darkutils:vector_plate',
            B: 'gtceu:ulv_machine_casing'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_entity_spawner'})
    event.shaped(
        'mob_grinding_utils:entity_spawner',
        [
            'EEE',
            'PSP',
            'OOO'
        ],
        {
            E: 'gtceu:ender_eye_plate',
            P: 'gtceu:double_stainless_steel_plate',
            S: 'enderio:broken_spawner',
            O: 'enderio:reinforced_obsidian_block'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_tintedglass'})
    event.recipes.gtceu.alloy_smelter('tinted_glass')
        .itemInputs('thermal:obsidian_glass', '#minecraft:coals')
        .itemOutputs('mob_grinding_utils:tinted_glass')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove({id: 'mob_grinding_utils:recipe_solidifier'})
    event.shaped(
        'mob_grinding_utils:xpsolidifier',
        [
            ' P ',
            'FHF',
            ' T '
        ],
        {
            P: 'piston',
            F: 'gtceu:tin_alloy_normal_fluid_pipe',
            H: 'hopper',
            T: 'mob_grinding_utils:tank'
        }
    )

})