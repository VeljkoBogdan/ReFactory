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


})