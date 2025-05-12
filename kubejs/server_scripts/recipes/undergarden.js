let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
      event.remove('forge:ingots')
    })
}

ServerEvents.recipes(event => {

    // Catalyst recipe LV + invar
    event.remove({output: 'undergarden:catalyst'})
    event.shaped(
        'undergarden:catalyst',
        [
            'GIG',
            'ICI',
            'GIG'
        ],
        {
            G: 'gtceu:gold_plate',
            I: 'gtceu:invar_plate',
            C: '#gtceu:circuits/lv'
        }
    )

    event.remove({input: 'undergarden:catalyst'})
})
