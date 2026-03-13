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

    event.remove({id: 'farmingforblockheads:feeding_trough'})
    event.shaped(
        'farmingforblockheads:feeding_trough',
        [
            'PHP',
            'PPP',
            'SDS'
        ],
        {
            P: 'gtceu:wood_plate',
            H: 'hay_block',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/screwdrivers'
        }
    )

    event.remove({id: 'farmingforblockheads:chicken_nest'})
    event.shaped(
        'farmingforblockheads:chicken_nest',
        [
            'PHP',
            'SPM',
            '   '
        ],
        {
            P: 'gtceu:wood_plate',
            H: 'hay_block',
            S: '#forge:tools/saws',
            M: '#forge:tools/hammers'
        }
    )
})