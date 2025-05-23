let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
    })
}

let knifeTypes = [
    'flint',
    'iron',
    'diamond',
    'netherite',
    'golden'
]

knifeTypes.map(type => {
    yeet(`farmersdelight:${type}_knife`)
})

ServerEvents.recipes(event => {
    event.remove({output: 'farmersdelight:stove'})
    event.shaped(
        'farmersdelight:stove',
        [
            'III',
            'BFB',
            'BHB'
        ],
        {
            I: 'gtceu:iron_plate',
            B: 'minecraft:bricks',
            F: 'minecraft:furnace',
            H: '#forge:tools/hammers'
        }
    )

    event.remove({output: 'farmersdelight:cooking_pot'})
    event.shaped(
        'farmersdelight:cooking_pot',
        [
            'B B',
            'IHI',
            'III'
        ],
        {
            I: 'gtceu:iron_plate',
            B: 'minecraft:brick',
            H: '#forge:tools/hammers'
        }
    )

    event.remove({output: 'farmersdelight:skillet'})
    event.shaped(
        'farmersdelight:skillet',
        [
            'BII',
            'HII',
            '   '
        ],
        {
            I: 'gtceu:iron_plate',
            B: 'minecraft:brick',
            H: '#forge:tools/hammers'
        }
    )

    event.remove({output: 'farmersdelight:cutting_board'})
    event.shaped(
        'farmersdelight:cutting_board',
        [
            'SPP',
            'SPP',
            '   '
        ],
        {
            S: 'minecraft:stick',
            P: 'gtceu:wood_plate'
        }
    )

    // Dead Logs and Rubber Logs on the chopping board
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'biomesoplenty:dead_log' }
        ],
        tool: { tag: 'minecraft:axes' },
        result: [
            { item: 'biomesoplenty:stripped_dead_log', count: 1 },
            { item: 'farmersdelight:tree_bark', count: 1 }

        ]
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'biomesoplenty:dead_wood' }
        ],
        tool: { tag: 'minecraft:axes' },
        result: [
            { item: 'biomesoplenty:stripped_dead_wood', count: 1 },
            { item: 'farmersdelight:tree_bark', count: 1 }

        ]
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'gtceu:rubber_log' }
        ],
        tool: { tag: 'minecraft:axes' },
        result: [
            { item: 'gtceu:stripped_rubber_log', count: 1 },
            { item: 'farmersdelight:tree_bark', count: 1 }

        ]
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'gtceu:rubber_wood' }
        ],
        tool: { tag: 'minecraft:axes' },
        result: [
            { item: 'gtceu:stripped_rubber_wood', count: 1 },
            { item: 'farmersdelight:tree_bark', count: 1 }
        ]
    })
})