ServerEvents.recipes(event => {
    event.remove({ id: 'hangglider:hang_glider' })
    event.remove({ id: 'hangglider:reinforced_hang_glider' })
    event.remove({ id: 'hangglider:glider_wing' })
    event.remove({ id: 'hangglider:glider_framework' })

    event.shaped(
        'hangglider:hang_glider',
        [
            'SHS',
            'WFW',
            'SRS'
        ],
        {
            S: 'gtceu:steel_screw',
            H: '#forge:tools/hammers',
            W: 'hangglider:glider_wing',
            F: 'hangglider:glider_framework',
            R: '#forge:tools/wrenches'
        }
    )

    event.shaped(
        'hangglider:glider_framework',
        [
            'HRW',
            'R R',
            'RRR'
        ],
        {
            R: 'gtceu:steel_rod',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }
    )

    event.shaped(
        'hangglider:glider_wing',
        [
            '  R',
            ' RL',
            'RLL'
        ],
        {
            R: 'gtceu:steel_rod',
            L: 'minecraft:leather'
        }
    )

    event.shaped(
        'hangglider:glider_wing',
        [
            '  R',
            ' RL',
            'RLL'
        ],
        {
            R: 'gtceu:steel_rod',
            L: 'gtceu:polyethylene_foil'
        }
    )

    event.shaped(
        'hangglider:reinforced_hang_glider',
        [
            'WFH',
            'FGF',
            'SPC'
        ],
        {
            S: '#forge:tools/screwdrivers',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            F: 'gtceu:polyethylene_foil',
            C: '#forge:tools/wire_cutters',
            G: 'hangglider:hang_glider',
            P: 'gtceu:aluminium_screw'
        }
    )


})