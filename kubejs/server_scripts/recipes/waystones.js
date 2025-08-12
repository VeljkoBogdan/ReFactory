ServerEvents.recipes(event => {
    let recipesToRemove = [
        'waystones:waystone',
        'waystones:mossy_waystone',
        'waystones:sandy_waystone',
        'waystones:deepslate_waystone',
        'waystones:blackstone_waystone',
        'waystones:end_stone_waystone',
        'waystones:sharestone',
        'waystones:warp_plate',
        'waystones:portstone',
        'waystones:return_scroll',
        'waystones:bound_scroll',
        'waystones:warp_scroll'
    ]

    let waystoneStoneTypes = {
        'waystones:waystone': 'stone_bricks',
        'waystones:mossy_waystone': 'mossy_stone_bricks',
        'waystones:sandy_waystone': 'chiseled_sandstone',
        'waystones:deepslate_waystone': 'deepslate',
        'waystones:blackstone_waystone': 'blackstone',
        'waystones:end_stone_waystone': 'end_stone_bricks',
    }

    recipesToRemove.forEach(recipeId => {
        event.remove({id: recipeId})
    })

    Object.entries(waystoneStoneTypes).forEach(([waystoneId, stoneType]) => {
        event.shaped(
            waystoneId,
            [
                'SSS',
                'PWP',
                'OOO'
            ],
            {
                S: stoneType,
                P: 'gtceu:stone_plate',
                W: 'waystones:warp_stone',
                O: 'gtceu:dense_obsidian_plate'
            }
        )
    })

    event.remove({id: 'waystones:warp_stone'})
    event.recipes.gtceu.autoclave('warp_stone')
        .itemInputs('ae2:fluix_pearl')
        .inputFluids(Fluid.of('blasmatech:mana', 500))
        .itemOutputs('waystones:warp_stone')
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.MV])

})