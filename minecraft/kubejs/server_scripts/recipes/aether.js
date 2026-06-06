// they call me the yeeter (a function that hides an element from recipe viewers)
let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
    })
}

ServerEvents.recipes(event => {

    // replace all aether ambrosium and zanite recipes with custom GT ambrosium and zanite
    event.replaceInput({}, 'aether:ambrosium_shard', 'gtceu:ambrosium_gem')
    event.replaceInput({}, 'aether:zanite_gemstone', 'gtceu:zanite_gem')
})

yeet('aether:ambrosium_shard')
yeet('aether:zanite_gemstone')

ServerEvents.tags('block', event => {
  // Aether only in HV
  event.remove('aether:aether_portal_blocks', 'minecraft:glowstone')
})