ServerEvents.recipes(event => {
    event.remove({id: 'disenchanting_table:disenchanting_table'})
    event.shaped(
        'disenchanting_table:disenchanting_table',
        [
            ' A ',
            'BCB',
            'CDC'
        ],
        {
            A: 'kubejs:advanced_mana_core',
            B: 'book',
            C: 'enderio:reinforced_obsidian_block',
            D: 'enchanting_table'
        }
    )

    event.remove({id: 'aether:skyroot_beehive'})
    event.remove({id: 'minecraft:target'})
    event.remove({id: 'aether:skyroot_tripwire_hook'})
    event.remove({id: 'tconstruct:common/glass/vanilla/daylight_detector'})
    event.remove({id: 'aether:skyroot_piston'})
    event.remove({id: 'minecraft:minecart'})

    event.shaped(
        'minecart',
        [
            'P P',
            'PPP',
            'WRW'
        ],
        {
            P: 'gtceu:iron_plate',
            W: 'gtceu:iron_minecart_wheels',
            R: '#forge:tools/wrenches'
        }
    )

    event.remove({id: 'redstoneclock:redstone_clock'})
    event.shaped(
        'redstoneclock:redstone_clock',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'repeater',
            B: 'smooth_stone',
            C: 'thermal:redstone_servo'
        }
    )

    event.remove({id: 'redstoneclock:pulse_divider'})
    event.shaped(
        'redstoneclock:pulse_divider',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'repeater',
            B: 'smooth_stone',
            C: 'observer'
        }
    )

    
})