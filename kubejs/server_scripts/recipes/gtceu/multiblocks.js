ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:crystal_puller',
        [
            'MCM',
            'CHC',
            'FFF'
        ],
        {
            M: 'gtceu:mv_electric_motor',
            C: '#gtceu:circuits/lv',
            H: 'gtceu:mv_machine_hull',
            F: 'ironfurnaces:iron_furnace'
        }
    )

    event.shaped(
        'refactorycore:steam_foundry',
        [
            'ABA',
            'BCB',
            'FFF'
        ],
        {
            A: 'gtceu:bronze_gear',
            B: 'gtceu:steam_machine_casing',
            C: 'gtceu:lp_steam_alloy_smelter',
            F: 'furnace'
        }
    )

    event.shaped(
        'refactorycore:steam_foundry',
        [
            'ABA',
            'BCB',
            'FFF'
        ],
        {
            A: 'gtceu:bronze_gear',
            B: 'gtceu:steam_machine_casing',
            C: 'gtceu:hp_steam_alloy_smelter',
            F: 'furnace'
        }
    )

    event.shaped(
        'refactorycore:steam_separator',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'gtceu:steam_machine_casing',
            B: 'gtceu:bronze_rotor',
            C: 'gtceu:bronze_machine_casing'
        }
    )
})