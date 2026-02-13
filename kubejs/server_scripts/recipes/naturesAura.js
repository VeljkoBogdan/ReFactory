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
            'ADA',
            '   '
        ],
        {
            A: goldPowder,
            B: 'gtceu:gold_plate',
            D: '#minecraft:logs'
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

    // Pasture Seed
    naturesaura.tree_ritual(
        'botania:grass_seeds',
        [
            'grass',
            'bone_meal',
            goldPowder,
            'grass',
            'bone_meal',
            goldPowder,
            'grass',
            'bone_meal'
        ]
    )

    let auraPlastics = ['gtceu:polybenzimidazole', 'gtceu:polytetrafluoroethylene', 'gtceu:polyethylene']

    auraPlastics.forEach(plastic => {
            let plasticAmount = (auraPlastics.indexOf(plastic) + 1) * 108
            // Input hatch
            event.recipes.gtceu.assembler(`mv_aura_input_hatch_using_${plastic}`)
                .circuit(1)
                .itemInputs(`gtceu:mv_machine_hull`, 'naturesaura:aura_cache')
                .inputFluids(Fluid.of(plastic, plasticAmount))
                .itemOutputs(`refactorycore:mv_aura_input_hatch`)
                .duration(20*15)
                .EUt(GTValues.VA[GTValues.LV])

            // Output hatch
            event.recipes.gtceu.assembler(`mv_aura_output_hatch_using_${plastic}`)
                .circuit(2)
                .itemInputs(`gtceu:mv_machine_hull`, 'naturesaura:aura_cache')
                .inputFluids(Fluid.of(plastic, plasticAmount))
                .itemOutputs(`refactorycore:mv_aura_export_hatch`)
                .duration(20*15)
                .EUt(GTValues.VA[GTValues.LV])
        })

        // Input hatch conversion
        event.shaped(
            `refactorycore:mv_aura_input_hatch`,
            [
                ' S ',
                ' L ',
                '   '
            ],
            {
                S: '#forge:tools/screwdrivers',
                L: `refactorycore:mv_aura_export_hatch`
            }
        )

        // Output hatch conversion
        event.shaped(
            `refactorycore:mv_aura_export_hatch`,
            [
                ' S ',
                ' L ',
                '   '
            ],
            {
                S: '#forge:tools/screwdrivers',
                L: `refactorycore:mv_aura_input_hatch`
            }
        )

    // Exchange poppy and dandelion for pasture seeds in the ancient sapling recipe
    event.replaceInput({id: 'naturesaura:tree_ritual/ancient_sapling'}, 'poppy', 'botania:grass_seeds')
    event.replaceInput({id: 'naturesaura:tree_ritual/ancient_sapling'}, 'dandelion', 'botania:grass_seeds')

    // Removal of debris changes
    event.remove({ id: 'naturesaura:depth_ingot_creation' })
    event.recipes.gtceu.alloy_smelter('ingot_of_the_depths')
        .itemInputs('naturesaura:sky_ingot', 'netherite_ingot')
        .itemOutputs('naturesaura:depth_ingot')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.HV])
})