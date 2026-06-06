ServerEvents.recipes(event => {
    event.remove({output: 'xpbook:xp_tome'})
    event.shaped(
        'xpbook:xp_tome',
        [
            'CEC',
            'EBE',
            'CEC'
        ],
        {
            C: 'gtceu:fluid_cell',
            B: 'minecraft:book',
            E: 'minecraft:ender_pearl'
        }
    )
})