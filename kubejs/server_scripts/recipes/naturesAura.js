ServerEvents.recipes(event => {
    const {naturesaura} = event.recipes

    const goldLeaf = 'naturesaura:gold_leaf'
    const goldPowder = 'naturesaura:gold_powder'

    // Gold powder from crushing
    event.remove({id: 'naturesaura:gold_powder'})
    event.shapeless(
        '2x naturesaura:gold_powder',
        [
            goldLeaf,
            '#gtceu:tools/crafting_mortars'
        ]
    )

    // Sugar cane
    naturesaura.tree_ritual(
        '2x sugar_cane',
        [
            '#forge:seeds',
            goldPowder,
            'stick',
            '#minecraft:saplings',
            'stick'
        ]
    )

    // Pure Daisy
    event.remove({id: 'botania:petal_apothecary/pure_daisy'})
    naturesaura.tree_ritual(
        'botania:pure_daisy',
        [
            'botania:white_petal',
            'botania:white_petal',
            goldPowder,
            'naturesaura:sky_ingot',
            'botania:white_petal',
            'botania:white_petal',
            'naturesaura:sky_ingot',
            goldPowder
        ]
    )

    // Wooden stand
    event.remove({id: 'naturesaura:wood_stand'})
    event.shaped(
        'naturesaura:wood_stand',
        [
            'ABA',
            'CDE',
            '   '
        ],
        {
            A: goldPowder,
            B: 'gtceu:gold_plate',
            C: '#minecraft:axes',
            D: '#minecraft:logs',
            E: '#forge:tools/files'
        }
    )

    // Offering table
    event.remove({id: 'naturesaura:offering_table'})
    event.shaped(
        'naturesaura:offering_table',
        [
            'ABA',
            'CDE',
            'DDD'
        ],
        {
            A: 'minecraft:stone_slab',
            B: 'gtceu:infused_iron_plate',
            C: 'naturesaura:token_fear',
            D: '#minecraft:logs',
            E: 'naturesaura:token_sorrow'
        }
    )

    // Spirit of Calling
    event.remove({id: 'naturesaura:calling_spirit'})
    event.shaped(
        '4x naturesaura:calling_spirit',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'gtceu:infused_iron_nugget',
            B: 'minecraft:gold_nugget',
            C: goldPowder
        }
    )

    // Gold Fiber
    event.remove({id: 'naturesaura:gold_fiber'})
    event.shaped(
        '4x naturesaura:gold_fiber',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#minecraft:leaves',
            B: 'gtceu:gold_dust',
            C: 'biomesoplenty:dead_grass'
        }
    )

    event.remove({id: 'naturesaura:gold_fiber'})
    event.shaped(
        '4x naturesaura:gold_fiber',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#minecraft:leaves',
            B: 'gtceu:gold_dust',
            C: 'biomesoplenty:desert_grass'
        }
    )
})