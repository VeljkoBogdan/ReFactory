let upgrades = [
    'sophisticatedstorage:upgrade_base', //
    'sophisticatedstorage:pickup_upgrade', //
    'sophisticatedstorage:advanced_pickup_upgrade', //
    'sophisticatedstorage:filter_upgrade', //
    'sophisticatedstorage:feeding_upgrade', //
    'sophisticatedstorage:advanced_filter_upgrade', //
    'sophisticatedstorage:magnet_upgrade', //
    'sophisticatedstorage:advanced_magnet_upgrade', //
    'sophisticatedstorage:advanced_feeding_upgrade', //
    'sophisticatedstorage:compacting_upgrade', //
    'sophisticatedstorage:advanced_compacting_upgrade', //
    'sophisticatedstorage:void_upgrade', //
    'sophisticatedstorage:advanced_void_upgrade', //
    'sophisticatedstorage:smelting_upgrade', //
    'sophisticatedstorage:auto_smelting_upgrade', //
    'sophisticatedstorage:smoking_upgrade', //
    'sophisticatedstorage:auto_smoking_upgrade', //
    'sophisticatedstorage:blasting_upgrade', //
    'sophisticatedstorage:auto_blasting_upgrade', //
    'sophisticatedstorage:crafting_upgrade', //
    'sophisticatedstorage:stonecutter_upgrade', //
    'sophisticatedstorage:stack_upgrade_tier_1', //
    'sophisticatedstorage:stack_upgrade_tier_1_plus', //
    'sophisticatedstorage:stack_upgrade_tier_2', //
    'sophisticatedstorage:stack_upgrade_tier_3', //
    'sophisticatedstorage:stack_upgrade_tier_4', //
    'sophisticatedstorage:stack_upgrade_tier_5', //
    'sophisticatedstorage:stack_downgrade_tier_1', //
    'sophisticatedstorage:stack_downgrade_tier_2', //
    'sophisticatedstorage:stack_downgrade_tier_3', //
    'sophisticatedstorage:stack_upgrade_omega_tier', //
    'sophisticatedstorage:jukebox_upgrade', 
    'sophisticatedstorage:advanced_jukebox_upgrade', 
    'sophisticatedstorage:pump_upgrade', 
    'sophisticatedstorage:advanced_pump_upgrade', 
    'sophisticatedstorage:xp_pump_upgrade', 
    'sophisticatedstorage:compression_upgrade', 
    'sophisticatedstorage:hopper_upgrade', 
    'sophisticatedstorage:advanced_hopper_upgrade', 
    'sophisticatedstorage:infinity_upgrade', 
    'sophisticatedstorage:survival_infinity_upgrade'
]

ServerEvents.recipes(event => {
    // Remove all upgrades
    upgrades.map(upgrade => event.remove({output: upgrade}))

    event.shaped(
        'sophisticatedstorage:pickup_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:magnetic_steel_plate",
            U: "hopper",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:upgrade_base',
        [
            'TIT',
            'IPI',
            'TIT'
        ],
        {
            I: 'gtceu:copper_foil',
            T: 'gtceu:treated_wood_plate',
            P: 'tconstruct:pattern'
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_pickup_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:pickup_upgrade",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_filter_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:filter_upgrade",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_magnet_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:magnet_upgrade",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_feeding_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:feeding_upgrade",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_compacting_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:compacting_upgrade",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_void_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:void_upgrade",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:filter_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:zinc_foil",
            U: "gtceu:item_filter",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:feeding_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:wood_plate",
            U: "botania:mana_cookie",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:magnet_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:magnetic_steel_plate",
            U: "gtceu:lv_item_magnet",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:compacting_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:obsidian_plate",
            U: "piston",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:void_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:steel_plate",
            U: "trashcans:item_trash_can",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:smelting_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:invar_plate",
            U: "furnace",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:smoking_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:wood_plate",
            U: "smoker",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:crafting_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:wood_plate",
            U: "crafting_table",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:stonecutter_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:iron_plate",
            U: "stonecutter",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:blasting_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:invar_plate",
            U: "minecraft:blast_furnace",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:auto_smelting_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:aluminium_plate",
            U: "ironfurnaces:iron_furnace",
            B: "sophisticatedstorage:smelting_upgrade"
        }
    )

    event.shaped(
        'sophisticatedstorage:auto_blasting_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:aluminium_plate",
            U: "minecraft:blast_furnace",
            B: "sophisticatedstorage:blasting_upgrade"
        }
    )

    event.shaped(
        'sophisticatedstorage:auto_smoking_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:aluminium_plate",
            U: "smoker",
            B: "sophisticatedstorage:smoking_upgrade"
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_1',
        [
            'SCS',
            'PBP',
            'SUS'
        ],
        {
            C: "gtceu:red_alloy_double_cable",
            P: "gtceu:steel_plate",
            U: "piston",
            B: "sophisticatedstorage:upgrade_base",
            S: 'gtceu:lv_electric_piston'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_1_plus',
        [
            'SCS',
            'PBP',
            'SUS'
        ],
        {
            C: "gtceu:annealed_copper_double_cable",
            P: "gtceu:aluminium_plate",
            U: "piston",
            B: "sophisticatedstorage:stack_upgrade_tier_1",
            S: 'gtceu:lv_electric_piston'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_2',
        [
            'SCS',
            'PBP',
            'SUS'
        ],
        {
            C: "gtceu:annealed_copper_double_cable",
            P: "gtceu:aluminium_plate",
            U: "piston",
            B: "sophisticatedstorage:stack_upgrade_tier_1_plus",
            S: 'gtceu:mv_electric_piston'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_3',
        [
            'SCS',
            'PBP',
            'SUS'
        ],
        {
            C: "gtceu:gold_double_cable",
            P: "gtceu:stainless_steel_plate",
            U: "piston",
            B: "sophisticatedstorage:stack_upgrade_tier_2",
            S: 'gtceu:hv_electric_piston'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_4',
        [
            'SCS',
            'PBP',
            'SUS'
        ],
        {
            C: "gtceu:aluminium_double_cable",
            P: "gtceu:titanium_plate",
            U: "piston",
            B: "sophisticatedstorage:stack_upgrade_tier_3",
            S: 'gtceu:ev_electric_piston'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_5',
        [
            'SCS',
            'PBP',
            'SUS'
        ],
        {
            C: "gtceu:platinum_double_cable",
            P: "gtceu:tungsten_steel_plate",
            U: "piston",
            B: "sophisticatedstorage:stack_upgrade_tier_4",
            S: 'gtceu:iv_electric_piston'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_omega_tier',
        [
            'SCS',
            'PBP',
            'SUS'
        ],
        {
            C: "gtceu:niobium_titanium_hex_cable",
            P: "gtceu:dense_rhodium_plated_palladium_plate",
            U: "gtceu:luv_compressor",
            B: "sophisticatedstorage:stack_upgrade_tier_5",
            S: 'gtceu:luv_electric_piston'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_downgrade_tier_1',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:copper_foil",
            U: "piston",
            B: "sophisticatedstorage:upgrade_base"
        }
    )
    
    event.shaped(
        'sophisticatedstorage:stack_downgrade_tier_2',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:steel_foil",
            U: "piston",
            B: "sophisticatedstorage:stack_downgrade_tier_1"
        }
    )
    
    event.shaped(
        'sophisticatedstorage:stack_downgrade_tier_3',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:copper_single_cable",
            P: "gtceu:aluminium_foil",
            U: "gtceu:lv_electric_piston",
            B: "sophisticatedstorage:stack_downgrade_tier_2"
        }
    )

// -------

    event.shaped(
        'sophisticatedstorage:jukebox_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:brass_plate",
            U: "jukebox",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_jukebox_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:jukebox_upgrade",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:pump_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:bronze_plate",
            U: "gtceu:lv_electric_pump",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_pump_upgrade',
        [
            ' C ',
            'PBP',
            'SUS'
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:pump_upgrade",
            B: "sophisticatedstorage:upgrade_base",
            S: 'gtceu:mv_electric_pump'
        }
    )

    event.shaped(
        'sophisticatedstorage:xp_pump_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:silver_plate",
            U: "mob_grinding_utils:tank_sink",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:compression_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:lead_plate",
            U: "piston",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:hopper_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:red_alloy_single_cable",
            P: "gtceu:red_alloy_plate",
            U: "hopper",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    event.shaped(
        'sophisticatedstorage:advanced_hopper_upgrade',
        [
            ' C ',
            'PBP',
            ' U '
        ],
        {
            C: "gtceu:annealed_copper_single_cable",
            P: "gtceu:aluminium_plate",
            U: "sophisticatedstorage:hopper_upgrade",
            B: "sophisticatedstorage:upgrade_base"
        }
    )

    // NO INFINITY STUFF YET!!!
    // event.shaped(
    //     'sophisticatedstorage:infinity_upgrade',
    //     [
    //         ' E ',
    //         'PBP',
    //         ' U '
    //     ],
    //     {
    //         E: "ae2:singularity",
    //         P: "gtceu:naquadah_plate",
    //         U: "gtceu:zpm_quantum_chest",
    //         B: "sophisticatedstorage:upgrade_base"
    //     }
    // )

    // event.shaped(
    //     'sophisticatedstorage:survival_infinity_upgrade',
    //     [
    //         ' G ',
    //         'PBP',
    //         ' U '
    //     ],
    //     {
    //         G: "minecraft:dragon_egg",
    //         P: "gtceu:naquadah_alloy_plate",
    //         U: "sophisticatedstorage:infinity_upgrade",
    //         B: "sophisticatedstorage:upgrade_base"
    //     }
    // )

    
})