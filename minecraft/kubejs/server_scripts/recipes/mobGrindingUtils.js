// Son, i'm dead.
// I had to use data arrays ts was annoying !


ServerEvents.recipes(event => {
    const saw_upgrades = [
        { id: 'saw_upgrade_arthropod',  key: 'minecraft:spider_eye' },
        { id: 'saw_upgrade_fire',        key: 'flint_and_steel' },
        { id: 'saw_upgrade_looting',     key: '#forge:dyes/blue' },
        { id: 'saw_upgrade_sharpness',   key: 'iron_sword' },
        { id: 'saw_upgrade_smite',       key: 'minecraft:rotten_flesh' },
        { id: 'saw_upgrade_beheading',   key: 'beheading' },
    ]

    const fan_upgrades = [
        { id: 'fan_upgrade_height', pattern: ['IPI',' P ','IPI'], keys: { P: '#forge:feathers', I: 'gtceu:steel_plate' } },
        { id: 'fan_upgrade_speed',  pattern: ['PIP','IRI','PIP'], keys: { P: '#forge:feathers', I: 'gtceu:steel_plate', R: 'gtceu:steel_rotor' } },
        { id: 'fan_upgrade_width',  pattern: ['I I','PPP','I I'], keys: { P: '#forge:feathers', I: 'gtceu:steel_plate' } },
    ]

    const spawner_upgrades = [
        { id: 'spawner_upgrade_height', pattern: ['EBE','EXE','EBE'] },
        { id: 'spawner_upgrade_width',  pattern: ['EEE','BXB','EEE'] },
    ]

    const resets = ['tank', 'jumbo_tank', 'tank_sink', 'xpsolidifier']

    const feed_recipes = [
        {
            id: 'recipe_cursed_feed',
            output: 'gm_chicken_feed_cursed',
            pattern: ['BEB','RSX','BGB'],
            keys: {
                B: 'mob_grinding_utils:fluid_xp_bucket',
                E: 'minecraft:spider_eye',
                R: 'minecraft:rotten_flesh',
                S: '#forge:seeds',
                X: '#forge:bones',
                G: '#forge:gunpowder'
            }
        },
        {
            id: 'recipe_nutritious_feed',
            output: 'nutritious_chicken_feed',
            pattern: ['BCB','PSX','BWB'],
            keys: {
                B: 'mob_grinding_utils:fluid_xp_bucket',
                C: 'minecraft:carrot',
                P: 'minecraft:potato',
                S: '#forge:seeds',
                X: 'minecraft:beetroot',
                W: 'minecraft:wheat'
            }
        },
    ]

    event.remove({id: 'mob_grinding_utils:recipe_fan'})
    event.shaped(
        'mob_grinding_utils:fan',
        ['PPP','PRF','PPP'],
        { P: 'gtceu:steel_plate', R: 'redstone_block', F: 'gtceu:iron_rotor' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_saw'})
    event.shaped(
        'mob_grinding_utils:saw',
        ['POP','SRS','THT'],
        {
            P: 'gtceu:redstone_alloy_plate', O: 'enderio:player_token',
            S: 'mob_grinding_utils:spikes', R: 'gtceu:dark_steel_rod',
            T: 'thermal:redstone_servo', H: 'gtceu:mv_machine_casing'
        }
    )

    event.remove({id: 'mob_grinding_utils:recipe_spikes'})
    event.shaped(
        'mob_grinding_utils:spikes',
        [' S ','SIS','IBI'],
        { S: 'gtceu:iron_bolt', I: 'gtceu:double_iron_plate', B: 'iron_block' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_absorbtion_hopper'})
    event.shaped(
        'mob_grinding_utils:absorption_hopper',
        [' E ','POP',' H '],
        { E: 'gtceu:ender_pearl_plate', P: 'gtceu:double_dark_steel_plate', H: 'hopper', O: 'obsidian' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_tank'})
    event.shaped(
        'mob_grinding_utils:tank',
        ['PGP','G G','PGP'],
        { P: 'gtceu:long_iron_rod', G: 'gtceu:glass_plate' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_jumbotank'})
    event.shaped(
        'mob_grinding_utils:jumbo_tank',
        ['PGP','G G','PGP'],
        { P: 'gtceu:long_aluminium_rod', G: 'mob_grinding_utils:tank' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_xp_tap'})
    event.shaped(
        'mob_grinding_utils:xp_tap',
        [' C ','SST','  T'],
        { C: 'gtceu:small_iron_gear', S: 'gtceu:tin_alloy_small_fluid_pipe', T: 'gtceu:tin_alloy_tiny_fluid_pipe' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_entity_conveyor'})
    event.shaped(
        'mob_grinding_utils:entity_conveyor',
        ['V  ','B  ','   '],
        { V: 'darkutils:vector_plate', B: 'gtceu:ulv_machine_casing' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_entity_spawner'})
    event.shaped(
        'mob_grinding_utils:entity_spawner',
        ['EEE','PSP','OOO'],
        { E: 'gtceu:ender_eye_plate', P: 'gtceu:double_stainless_steel_plate', S: 'enderio:broken_spawner', O: 'enderio:reinforced_obsidian_block' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_tintedglass'})
    event.recipes.gtceu.alloy_smelter('tinted_glass')
        .itemInputs('thermal:obsidian_glass', '#minecraft:coals')
        .itemOutputs('mob_grinding_utils:tinted_glass')
        .duration(20*4).EUt(GTValues.VA[GTValues.LV])

    event.remove({id: 'mob_grinding_utils:recipe_solidifier'})
    event.shaped(
        'mob_grinding_utils:xpsolidifier',
        [' P ','FHF',' T '],
        { P: 'piston', F: 'gtceu:tin_alloy_normal_fluid_pipe', H: 'hopper', T: 'mob_grinding_utils:tank' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_tank_sink'})
    event.shaped(
        'mob_grinding_utils:tank_sink',
        [' P ','EHE',' T '],
        { P: 'gtceu:manasteel_plate', E: 'gtceu:aluminium_normal_fluid_pipe', H: 'hopper', T: 'mob_grinding_utils:tank' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_absorbtion_upgrade'})
    event.shaped(
        'mob_grinding_utils:absorption_upgrade',
        [' E ','ERE','OHO'],
        { E: 'gtceu:ender_pearl_plate', R: 'gtceu:red_alloy_plate', H: 'hopper', O: 'gtceu:obsidian_plate' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_dragon_muffler'})
    event.shaped(
        'mob_grinding_utils:dragon_muffler',
        ['WWW','WEW','WWW'],
        { W: '#minecraft:wool', E: 'minecraft:dragon_egg' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_wither_muffler'})
    event.shaped(
        'mob_grinding_utils:wither_muffler',
        ['WWW','WSW','WWW'],
        { W: '#minecraft:wool', S: 'minecraft:wither_skeleton_skull' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_ender_inhibitor'})
    event.recipes.gtceu.assembler('ender_inhibitor')
        .circuit(31)
        .itemInputs('2x gtceu:iron_plate', 'ender_eye', 'minecraft:glowstone_dust', 'gtceu:red_alloy_plate')
        .itemOutputs('mob_grinding_utils:ender_inhibitor_on')
        .duration(20*8).EUt(GTValues.VA[GTValues.LV])

    fan_upgrades.forEach(u => {
        event.remove({id: `mob_grinding_utils:recipe_${u.id}`})
        event.shaped(`mob_grinding_utils:${u.id}`, u.pattern, u.keys)
    })

    saw_upgrades.forEach(u => {
        event.remove({id: `mob_grinding_utils:recipe_${u.id}`})
        if (u.id == 'saw_upgrade_beheading') {
            event.shaped(
                `mob_grinding_utils:${u.id}`,
                ['PHP','IRI','PHP'],
                { P: 'gtceu:gold_foil', H: 'minecraft:golden_helmet', I: 'minecraft:iron_helmet', R: 'gtceu:red_alloy_plate' }
            )
        } else {
            event.shaped(
                `mob_grinding_utils:${u.id}`,
                ['PSP','SRS','PSP'],
                { P: 'gtceu:gold_foil', S: u.key, R: 'gtceu:red_alloy_plate' }
            )
        }
    })

    spawner_upgrades.forEach(u => {
        event.remove({id: `mob_grinding_utils:recipe_${u.id}`})
        event.shaped(
            `mob_grinding_utils:${u.id}`,
            u.pattern,
            { E: 'minecraft:egg', B: 'minecraft:blaze_powder', X: 'mob_grinding_utils:fluid_xp_bucket' }
        )
    })

    feed_recipes.forEach(r => {
        event.remove({id: `mob_grinding_utils:${r.id}`})
        event.shaped(`mob_grinding_utils:${r.output}`, r.pattern, r.keys)
    })

    event.remove({id: 'mob_grinding_utils:recipe_mould_blank'})
    event.shaped(
        'mob_grinding_utils:solid_xp_mould_blank',
        ['PPP','PXP','PPP'],
        { P: 'gtceu:gold_foil', X: 'mob_grinding_utils:fluid_xp_bucket' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_mould_baby_upgrade'})
    event.shapeless('mob_grinding_utils:solid_xp_mould_baby', ['mob_grinding_utils:solid_xp_mould_blank'])

    event.remove({id: 'mob_grinding_utils:recipe_mould_reset'})
    event.shapeless('mob_grinding_utils:solid_xp_mould_blank', ['mob_grinding_utils:solid_xp_mould_baby'])

    event.remove({id: 'mob_grinding_utils:recipe_xpsolidifier_upgrade'})
    event.shaped(
        'mob_grinding_utils:xp_solidifier_upgrade',
        ['SRS','BXB','SRS'],
        { S: 'gtceu:silicon_dust', R: 'gtceu:red_alloy_plate', B: 'minecraft:blaze_powder', X: 'mob_grinding_utils:fluid_xp_bucket' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_xp_block'})
    event.shaped('mob_grinding_utils:solid_xp_block', ['PPP','PPP','PPP'], { P: 'mob_grinding_utils:solid_xp_baby' })

    event.shaped(
        'mob_grinding_utils:dreadful_dirt',
        ['BMB','MCM','BMB'],
        { B: 'minecraft:bone_block', M: 'minecraft:rotten_flesh', C: 'gtceu:ender_pearl_dust' }
    )

    event.shaped(
        'mob_grinding_utils:delightful_dirt',
        ['GMG','MCM','GMG'],
        { G: 'minecraft:golden_carrot', M: 'minecraft:wheat', C: 'gtceu:ender_pearl_dust' }
    )

    event.remove({id: 'mob_grinding_utils:recipe_xp_block_uncraft'})
    event.shapeless('9x mob_grinding_utils:solid_xp_baby', ['mob_grinding_utils:solid_xp_block'])

    resets.forEach(r => {
        event.remove({id: `mob_grinding_utils:recipe_${r}_reset`})
        event.shapeless(`mob_grinding_utils:${r}`, [`mob_grinding_utils:${r}`])
    })

})