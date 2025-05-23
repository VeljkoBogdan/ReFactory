StartupEvents.registry('item', event => {
    // Single Crystal Silicon
    event.create('single_crystal_silicon')
        .displayName('Single Crystal Silicon')
        .texture('gtceu:item/single_crystal_silicon')

    // Seed Crystal
    event.create('seed_crystal')
        .displayName('Seed Crystal')
        .texture('gtceu:item/seed_crystal')

    // Mana core
    event.create('mana_core')
        .displayName('Mana core')
        .texture('gtceu:item/mana_core')

    // Elven Circuit
    event.create('elven_circuit')
        .displayName('Elven Circuit')
        .texture('gtceu:item/elven_circuit')
        .tooltip('An ancient circuit used by the elves.')

    event.create('unfired_seared_brick')
        .displayName('Unfired Seared Brick')

    // Refactory coin
    event.create('refactory_coin')
        .displayName('ReFactory Coin')
        .tooltip('§3Used to trade for items in the Shop')

    event.create('mythril_infused_carbon_fibers')
        .displayName('§3Mythril Infused Carbon Fibers')

    // // Simulated Egg
    // event.create('simulated_egg')
    //     .displayName('Simulated Egg')
    //     .texture('gtceu:item/simulated_egg')
    //     .tooltip('Used to simulate spawn eggs.')
})