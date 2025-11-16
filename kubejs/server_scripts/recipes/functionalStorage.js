let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

yeet(/functionalstorage:fluid_(.*)/)
yeet(/functionalstorage:(.*)compacting(.*)/)

let woodTypes = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'crimson',
    'warped',
    'mangrove',
    'cherry'
]

let gregWoodTypes = [
    'rubber',
]

let thermalWoodTypes = [
    'rubberwood'
]

ServerEvents.recipes(event => {
    event.remove({ output: /functionalstorage:(.*)/ })
    event.remove({ output: /functional_aether:(.*)/ })

    // MINECRAFT WOOD TYPES
    woodTypes.forEach(item => {

        // 1x1 drawers
        event.shaped(`functionalstorage:${item}_1`, [ 
                'ABA', 
                'BCB', 
                'ABA'  
            ], {
                B: `minecraft:${item}_planks`, 
                A: 'gtceu:iron_screw',  
                C: '#forge:chests'   
            }
        )
        // 1x2 drawers
        event.shaped(`functionalstorage:${item}_2`, [
                'ACA', 
                'BBB', 
                'ACA'  
            ], {
                B: `minecraft:${item}_planks`, 
                A: 'gtceu:iron_screw',  
                C: '#forge:chests'   
            }
        )
        // 2x2 drawers
        event.shaped(`functionalstorage:${item}_4`, [
                'ABA', 
                'BCB', 
                'ABA'  
            ], {
                C: `minecraft:${item}_planks`, 
                B: 'gtceu:iron_screw',  
                A: '#forge:chests'   
            }
        )
    })

    // GREGTECH WOOD TYPES
    gregWoodTypes.forEach(item => {

        // 1x1 drawers
        event.shaped(`functionalstorage:${item}_1`, [ 
                'ABA', 
                'BCB', 
                'ABA'  
            ], {
                B: `gtceu:${item}_planks`, 
                A: 'gtceu:iron_screw',  
                C: '#forge:chests'   
            }
        )
        // 1x2 drawers
        event.shaped(`functionalstorage:${item}_2`, [
                'ACA', 
                'BBB', 
                'ACA'  
            ], {
                B: `gtceu:${item}_planks`, 
                A: 'gtceu:iron_screw',  
                C: '#forge:chests'   
            }
        )
        // 2x2 drawers
        event.shaped(`functionalstorage:${item}_4`, [
                'ABA', 
                'BCB', 
                'ABA'  
            ], {
                C: `gtceu:${item}_planks`, 
                B: 'gtceu:iron_screw',  
                A: '#forge:chests'   
            }
        )
    })

    // TREATED WOOD HAS NAME MISMATCH SO HAS TO BE EXPLICITLY DEFINED :/
    // 1x1 drawers
    event.shaped(`functionalstorage:treated_1`, [ 
            'ABA', 
            'BCB', 
            'ABA'  
        ], {
            B: `gtceu:treated_wood_planks`, 
            A: 'gtceu:iron_screw',  
            C: '#forge:chests'   
        }
    )
    // 1x2 drawers
    event.shaped(`functionalstorage:treated_2`, [
            'ACA', 
            'BBB', 
            'ACA'  
        ], {
            B: `gtceu:treated_wood_planks`, 
            A: 'gtceu:iron_screw',  
            C: '#forge:chests'   
        }
    )
    // 2x2 drawers
    event.shaped(`functionalstorage:treated_4`, [
            'ABA', 
            'BCB', 
            'ABA'  
        ], {
            C: `gtceu:treated_wood_planks`, 
            B: 'gtceu:iron_screw',  
            A: '#forge:chests'   
        }
    )

    // AETHER RECIPES CUZ WHY NOT
    // 1x1
    event.shaped(`functional_aether:skyroot_1`, [ 
            'ABA', 
            'BCB', 
            'ABA'  
        ], {
            B: `aether:skyroot_planks`, 
            A: 'gtceu:iron_screw',  
            C: '#forge:chests'   
        }
    )
    // 1x2 drawers
    event.shaped(`functional_aether:skyroot_2`, [
            'ACA', 
            'BBB', 
            'ACA'  
        ], {
            B: `aether:skyroot_planks`, 
            A: 'gtceu:iron_screw',  
            C: '#forge:chests'   
        }
    )
    // 2x2 drawers
    event.shaped(`functional_aether:skyroot_4`, [
            'ABA', 
            'BCB', 
            'ABA'  
        ], {
            C: `aether:skyroot_planks`, 
            B: 'gtceu:iron_screw',  
            A: '#forge:chests'   
        }
    )

    // THERMAL WOOD TYPES
    thermalWoodTypes.forEach(item => {

        // 1x1 drawers
        event.shaped(`functionalstorage:${item}_1`, [ 
                'ABA', 
                'BCB', 
                'ABA'  
            ], {
                B: `thermal:${item}_planks`, 
                A: 'gtceu:iron_screw',  
                C: '#forge:chests'   
            }
        )
        // 1x2 drawers
        event.shaped(`functionalstorage:${item}_2`, [
                'ACA', 
                'BBB', 
                'ACA'  
            ], {
                B: `thermal:${item}_planks`, 
                A: 'gtceu:iron_screw',  
                C: '#forge:chests'   
            }
        )
        // 2x2 drawers
        event.shaped(`functionalstorage:${item}_4`, [
            'ABA', 
            'BCB', 
            'ABA'  
            ], {
            C: `thermal:${item}_planks`, 
            B: 'gtceu:iron_screw',  
            A: '#forge:chests'   
            }
        )
    })

    //recipes for the framed drawers
    event.shaped(`functionalstorage:framed_1`, [
            'ABA', 
            'BCB', 
            'ABA'  
        ], {
            A: 'gtceu:iron_screw',  
            B: `framedblocks:framed_cube`, 
            C: '#forge:chests'   
        }
    )
    event.shaped(`functionalstorage:framed_2`, [
            'ACA', 
            'BBB', 
            'ACA'  
        ], {
            A: 'gtceu:iron_screw',  
            B: `framedblocks:framed_cube`, 
            C: '#forge:chests'   
        }
    )
    event.shaped(`functionalstorage:framed_4`, [
            'ABA', 
            'BCB', 
            'ABA'  
        ], {
            A: '#forge:chests',
            B: 'gtceu:iron_screw',  
            C: `framedblocks:framed_cube` 
        }
    )
    event.shaped('functionalstorage:storage_controller', [
            'ADA', 
            'BCB', 
            'ADA'  
        ], {
            A: 'gtceu:stone_plate', 
            B: '#functionalstorage:drawer',  
            C: '#gtceu:circuits/ulv',
            D: 'minecraft:quartz_block'
        }
    )
    event.shaped('functionalstorage:framed_storage_controller', [
            'ADA', 
            'BCB', 
            'ADA'  
        ], {
            A: 'gtceu:iron_rod', 
            B: '#functionalstorage:drawer',  
            C: '#gtceu:circuits/ulv',
            D: 'minecraft:quartz_block'
        }
    )
    event.shaped('functionalstorage:controller_extension', [
            'ADA', 
            'BCB', 
            'ADA'  
        ], {
            A: 'gtceu:stone_plate', 
            B: '#functionalstorage:drawer',  
            C: '#gtceu:circuits/ulv',
            D: 'minecraft:quartz'
        }
    )
    event.shaped('functionalstorage:framed_controller_extension', [
            'ADA', 
            'BCB', 
            'ADA'  
        ], {
            A: 'gtceu:iron_rod', 
            B: '#functionalstorage:drawer',  
            C: '#gtceu:circuits/ulv',
            D: 'minecraft:quartz'
        }
    )
    event.recipes.gtceu.assembler('functionalstorage:ender_drawer')
        .circuit(8)
        .itemInputs(
            'ender_chest',
            'gtceu:stainless_steel_crate',
            'gtceu:mv_field_generator',
            '8x gtceu:ender_pearl_plate',
            'gtceu:hv_emitter',
            'gtceu:hv_sensor'
        )
        .itemOutputs('functionalstorage:ender_drawer')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.HV])

    // UPGRADES
    event.shaped(`functionalstorage:copper_upgrade`, [
            'A A', 
            'HDW', 
            'A A'  
        ], {
            A: 'gtceu:red_alloy_plate',
            D: "#functionalstorage:drawer",
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }
    )

    event.shaped(`functionalstorage:gold_upgrade`, [
            'A A', 
            'HDW', 
            'A A'  
        ], {
            A: 'gtceu:steel_plate',
            D: "functionalstorage:copper_upgrade",
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }
    )

    event.shaped(`functionalstorage:diamond_upgrade`, [
            'A A', 
            'HDW', 
            'A A'  
        ], {
            A: 'gtceu:aluminium_plate',
            D: "functionalstorage:gold_upgrade",
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }
    )

    event.shaped(`functionalstorage:netherite_upgrade`, [
            'A A', 
            'HDW', 
            'A A'  
        ], {
            A: 'gtceu:stainless_steel_plate',
            D: "functionalstorage:diamond_upgrade",
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }
    )

  
    event.shaped(`functionalstorage:iron_downgrade`, [
            'AAA', 
            'ABA', 
            'AAA'  
        ], {
            A: 'gtceu:iron_plate', 
            B: '#functionalstorage:drawer'
        }
    )

    event.shaped(`functionalstorage:armory_cabinet`, [
            'ABA', 
            'B B', 
            'ADA'  
        ], {
            A: 'gtceu:stone_plate', 
            D: 'gtceu:double_steel_plate',  
            B: '#functionalstorage:drawer'
        }
    )

    event.shaped(`functionalstorage:redstone_upgrade`, [
            'ADA', 
            'BCB', 
            'AAA'  
        ], {
            A: 'gtceu:red_alloy_plate', 
            B: 'minecraft:comparator',  
            C: '#functionalstorage:drawer',
            D: '#forge:tools/hammers'
        }
    )

    event.shaped(`functionalstorage:void_upgrade`, [
            'ADA', 
            'BCB', 
            'ABA'  
        ], {
            A: 'gtceu:obsidian_plate', 
            B: '#forge:ender_pearls',  
            C: '#functionalstorage:drawer',
            D: '#forge:tools/hammers'
        }
    )

    event.shaped(`functionalstorage:puller_upgrade`, [
            'AEA', 
            'DCF', 
            'ABA'  
        ], {
            A: 'gtceu:stone_plate', 
            B: 'gtceu:red_alloy_ingot', 
            C: '#functionalstorage:drawer',
            D: '#forge:tools/hammers',
            E: 'minecraft:hopper',
            F: '#forge:tools/wrenches'
        }
    )

    event.shaped(`functionalstorage:pusher_upgrade`, [
            'AEA', 
            'DCF', 
            'ABA'  
        ], {
            A: 'gtceu:stone_plate', 
            B: 'minecraft:hopper', 
            C: '#functionalstorage:drawer',
            D: '#forge:tools/hammers',
            E: 'gtceu:red_alloy_ingot',
            F: '#forge:tools/wrenches'
        }
    )

    event.shaped(`functionalstorage:collector_upgrade`, [
            'AAA', 
            'CDE', 
            'AAA'  
        ], {
            A: 'gtceu:stone_plate', 
            C: 'functionalstorage:puller_upgrade',
            D: '#forge:tools/hammers',
            E: 'functionalstorage:pusher_upgrade'
        }
    )

    event.shaped('functionalstorage:linking_tool', [
            'ABA', 
            'CDC', 
            'ABA'  
        ], {
            A: 'minecraft:diamond', 
            B: 'gtceu:red_alloy_double_cable',
            C: 'minecraft:paper',
            D: 'gtceu:stone_plate'
        }
    )
    event.shaped('functionalstorage:configuration_tool', [
            'ABA', 
            'CDC', 
            'ABA'  
        ], {
            A: 'minecraft:emerald', 
            B: 'gtceu:red_alloy_double_cable',
            C: 'minecraft:paper',
            D: 'gtceu:stone_plate'
        }
    )
})