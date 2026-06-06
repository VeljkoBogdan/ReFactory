let yeet = (recipeId) => {
    ServerEvents.recipes(event => {
      event.remove({ id: recipeId })
    })
}

ServerEvents.recipes(event => {
    event.remove({ id: 'silentgear:bronze_ingot'})
    event.remove({ id: 'thermal:fire_charge/bronze_ingot_4'})
    event.remove({ id: 'thermal:bronze_dust_4'})
})

yeet(/thermal:storage(.*)_block/)
yeet(/thermal:storage(.*)_from_ingot/)