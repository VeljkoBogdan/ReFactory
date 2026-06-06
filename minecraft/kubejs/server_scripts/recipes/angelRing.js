let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

yeet('angelring:diamond_ring')
yeet('angelring:energetic_angel_ring')
yeet('angelring:leadstone_angel_ring')
yeet('angelring:hardened_angel_ring')
yeet('angelring:reinforced_angel_ring')
yeet('angelring:resonant_angel_ring')

ServerEvents.recipes(event => {
    event.remove({id: 'angelring:angel_ring'})
    event.recipes.naturesaura.tree_ritual(
        'angelring:angel_ring',
        [
            'botania:pixie_ring',
            'gtceu:lumium_plate',
            'gtceu:elementium_plate',
            'gtceu:lv_field_generator',
            'botania:rune_air',
            'botania:rune_pride',
            'gtceu:lumium_plate',
            'gtceu:elementium_plate'
        ]
    )
})