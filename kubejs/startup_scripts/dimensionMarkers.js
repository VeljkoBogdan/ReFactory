GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {

    let planets = ['moon', 'mars', 'venus', 'mercury', 'glacio']

    // Aether marker
    event.create("aether:the_aether")
        .iconSupplier(() => Item.of("aether:aether_grass_block").getItem())
        .tier(0)

    event.create("undergarden:undergarden")
        .iconSupplier(() => Item.of("undergarden:depthrock").getItem())
        .tier(0)

    planets.forEach(planet => {
        event.create(`ad_astra:${planet}`)
        .iconSupplier(() => Item.of(`ad_astra:${planet}_globe`).getItem())
        .tier(0)
    })
})