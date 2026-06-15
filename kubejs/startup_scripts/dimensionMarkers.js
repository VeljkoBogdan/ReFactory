GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {

    let planets = ['moon', 'mars', 'venus', 'mercury', 'glacio']

    // Aether marker
    event.create("aether:the_aether")
        .iconSupplier(() => Item.of("kubejs:aether_dim_marker").getItem())
        .tier(0)

    event.create("undergarden:undergarden")
        .iconSupplier(() => Item.of("kubejs:undergarden_dim_marker").getItem())
        .tier(0)

    planets.forEach(planet => {
        event.create(`ad_astra:${planet}`)
        .iconSupplier(() => Item.of(`kubejs:${planet}_dim_marker`).getItem())
        .tier(0)
    })
})