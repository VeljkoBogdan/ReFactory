ServerEvents.recipes(event => {
    event.remove({ id: 'explorerscompass:explorers_compass' })
    event.shaped(
        'explorerscompass:explorerscompass',
        [
            'SPS',
            'PCP',
            'SPS'
        ],
        {
            S: 'minecraft:string',
            C: 'minecraft:compass',
            P: 'gtceu:steel_plate'
        }
    )
})