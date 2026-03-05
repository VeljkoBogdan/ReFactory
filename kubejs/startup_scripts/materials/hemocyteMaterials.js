GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('organic_slurry')
        .liquid()
        .color(0x7bc710)

    event.create('cellular_suspension')
        .liquid()
        .color(0xd3e657)
        
    event.create('plasma_fluid')
        .liquid()
        .color(0xefffa6)

    event.create('cellular_sediment')
        .dust()
        .color(0xcf4121)

    event.create('hemocyte_suspension')
        .liquid()
        .color(0xcc1d1d)
})