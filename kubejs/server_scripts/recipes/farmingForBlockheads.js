ServerEvents.recipes(event => {
    // removing default market recipe
    event.remove({ id: 'farmingforblockheads:market' })

    // market recipe
    event.shaped(
        'farmingforblockheads:market',
        [
            'SPS',
            'T T',
            'RLR'
        ],
        {
            S: 'gtceu:steel_screw',
            P: 'gtceu:steel_plate',
            T: 'minecraft:stick',
            R: 'gtceu:rubber_plate',
            L: '#minecraft:logs'
        }
    )
})