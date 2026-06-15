ServerEvents.recipes(event => {
    // Ender Seeds
    event.remove({id: 'endercrop:ender_seeds'})
    event.recipes.botania.petal_apothecary(
        'endercrop:ender_seeds',
        [
            'botania:cyan_petal',
            'botania:cyan_petal',
            'botania:cyan_petal',
            'botania:cyan_petal',
            'minecraft:ender_pearl',
            'minecraft:ender_pearl',
        ],
        'botania:mycelium_seeds'
    )
})