let book_recipe_outer = [
    'leather',
    'tconstruct:pattern',
    'farmersdelight:canvas',
    'rabbit_hide'
]

let book_recipe_inner = [
    'gtceu:sticky_resin',
    '#forge:slimeballs',
]

ServerEvents.recipes(event => {

    event.remove({id: 'gtceu:shaped/book'})
    event.remove({id: 'tconstruct:tables/book_substitute'})
    event.remove({id: 'farmersdelight:book_from_canvas'})
    event.remove({id: 'gtceu:assembler/book_from_leather'})
    book_recipe_outer.forEach(outer => {
        book_recipe_inner.forEach(inner => {
            event.shaped(
                'minecraft:book',
                [
                    'SPO',
                    'SPI',
                    'SPO'
                ],
                {
                    S: 'string',
                    P: 'paper',
                    O: outer,
                    I: inner
                }
            )
        })

        event.recipes.gtceu.assembler(`book_from_${outer}`)
                .itemInputs(
                    '3x paper',
                    outer
                )
                .inputFluids(Fluid.of('gtceu:glue', 20))
                .itemOutputs('book')
                .duration(20)
                .EUt(7)
    })

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