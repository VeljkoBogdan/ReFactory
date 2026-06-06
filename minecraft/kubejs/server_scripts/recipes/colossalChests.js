let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

const chestTypes = [
    'wood',
    'copper',
    'iron',
    'silver',
    'gold'
]

yeet('colossalchests:chest_wall_diamond')
yeet('colossalchests:colossal_chest_diamond')
yeet('colossalchests:interface_diamond')
yeet('colossalchests:chest_wall_obsidian')
yeet('colossalchests:colossal_chest_obsidian')
yeet('colossalchests:interface_obsidian')
yeet('colossalchests:uncolossal_chest')

ServerEvents.recipes(event => {
    event.remove({id: /colossalchests:(.*)/})

    chestTypes.forEach(type => {
        // Chest walls
        event.shaped(
            `colossalchests:chest_wall_${type}`,
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'gtceu:iron_screw',
                B: `gtceu:${type}_plate`,
                C: `gtceu:${type}_frame`
            }
        )

        // Chest cores
        event.shaped(
            `colossalchests:colossal_chest_${type}`,
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                B: '#gtceu:circuits/ulv',
                A: `gtceu:${type}_plate`,
                C: `gtceu:${type}_frame`
            }
        )

        // Chest interfaces
        event.shaped(
            `colossalchests:interface_${type}`,
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                B: 'gtceu:tin_large_item_pipe',
                A: `gtceu:${type}_plate`,
                C: `gtceu:${type}_frame`
            }
        )
    })

    // Upgrade tool
    event.shaped(
        'colossalchests:upgrade_tool',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'gtceu:iron_plate',
            B: 'colossalchests:chest_wall_wood'
        }
    )

    // Upgrade tool permutations
    event.shapeless(
        'colossalchests:upgrade_tool',
        ['colossalchests:upgrade_tool_reverse']
    )
    event.shapeless(
        'colossalchests:upgrade_tool_reverse',
        ['colossalchests:upgrade_tool']
    )
})