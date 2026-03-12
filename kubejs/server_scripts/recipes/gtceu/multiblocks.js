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

    event.recipes.gtceu.assembler('basic_fluid_rig')
        .itemInputs(
            'gtceu:lv_machine_hull',
            '4x gtceu:steel_frame',
            '4x #gtceu:circuits/lv',
            '4x gtceu:lv_electric_motor',
            '4x gtceu:lv_electric_pump',
            '4x gtceu:cobalt_brass_gear'
        )
        .circuit(2)
        .itemOutputs('refactorycore:lv_basic_fluid_drilling_rig')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.LV])

    event.shaped(
        'refactorycore:aura_altar',
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A: '#gtceu:circuits/mv',
            B: 'gtceu:lv_sensor',
            C: 'naturesaura:infused_iron_block',
            D: 'naturesaura:nature_altar',
            E: 'naturesaura:infused_brick'
        }
    )

    event.shaped(
        'refactorycore:cooling_tower',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'gtceu:stainless_steel_rotor',
            B: 'ad_astra:vent',
            C: '#gtceu:circuits/hv',
            D: 'gtceu:ev_machine_hull'
        }
    )
})