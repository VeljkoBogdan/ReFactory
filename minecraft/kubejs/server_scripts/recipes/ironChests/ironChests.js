ServerEvents.recipes(event => {

    event.remove({ id:'ironchest:chests/vanilla_copper_chest' })
    event.remove({ id:'ironchest:chests/vanilla_iron_chest' })
    event.remove({ id:'ironchest:chests/copper_iron_chest' })
    event.remove({ id:'ironchest:chests/gold_diamond_chest' })
    event.remove({ id:'ironchest:chests/diamond_crystal_chest' })
    event.remove({ id:'ironchest:chests/diamond_obsidian_chest' })
    event.remove({ id:'ironchest:chests/vanilla_dirt_chest' })

    event.remove({id: 'ironchest:upgrades/wood_to_iron_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/iron_to_gold_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/gold_to_diamond_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/copper_to_iron_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/wood_to_iron_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/diamond_to_crystal_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/wood_to_copper_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/diamond_to_obsidian_chest_upgrade'})

    // let upgrade = (input, output) => {
    //     event.recipes.gtceu.assembler(output)
    //     .circuit(32)
    //     .itemInputs(
    //         input
    //     )
    //     .itemOutputs(
    //         output
    //     )
    //     .duration(20*8)
    //     .EUt(8)
    // }

    // upgrade('8x gtceu:copper_plate', 'ironchest:wood_to_copper_chest_upgrade')
    // upgrade('8x gtceu:iron_plate', 'ironchest:wood_to_iron_chest_upgrade')
    // upgrade('4x gtceu:gold_plate', 'ironchest:iron_to_gold_chest_upgrade')
    // upgrade('4x gtceu:diamond_plate', 'ironchest:gold_to_diamond_chest_upgrade')
    // upgrade('4x ae2:quartz_glass', 'ironchest:diamond_to_crystal_chest_upgrade')
    // upgrade('4x gtceu:obsidian_plate', 'ironchest:diamond_to_obsidian_chest_upgrade')
    // upgrade('4x gtceu:iron_plate', 'ironchest:copper_to_iron_chest_upgrade')

    // copper chest
    event.recipes.gtceu.assembler('kubejs_copper_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:copper_plate'
    )
    .itemOutputs(
        'ironchest:copper_chest'
    )
    .duration(20*8)
    .EUt(8)

    // iron chest
    event.recipes.gtceu.assembler('kubejs_iron_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:iron_plate'
    )
    .itemOutputs(
        'ironchest:iron_chest'
    )
    .duration(20*12)
    .EUt(16)

    // gold chest
    event.remove({ id:'ironchest:chests/iron_gold_chest' })
    event.recipes.gtceu.assembler('kubejs_gold_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:gold_plate'
    )
    .itemOutputs(
        'ironchest:gold_chest'
    )
    .duration(20*16)
    .EUt(32)

    // diamond chest
    event.recipes.gtceu.assembler('kubejs_diamond_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:diamond_plate'
    )
    .itemOutputs(
        'ironchest:diamond_chest'
    )
    .duration(20*20)
    .EUt(64)

    // obsidian chest
    event.recipes.gtceu.assembler('kubejs_obsidian_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:obsidian_plate'
    )
    .itemOutputs(
        'ironchest:obsidian_chest'
    )
    .duration(20*20)
    .EUt(128)

    // crystal chest
    event.recipes.gtceu.assembler('kubejs_crystal_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x ae2:quartz_glass'
    )
    .itemOutputs(
        'ironchest:crystal_chest'
    )
    .duration(20*20)
    .EUt(128)

    // dirt chest troll recipe
    event.recipes.gtceu.assembler('kubejs_dirt_chest')
    .circuit(32)
    .itemInputs(
        'gtceu:ev_super_chest',
        '64x minecraft:dirt'
    )
    .itemOutputs(
        'ironchest:dirt_chest'
    )
    .duration(20*60)
    .EUt(GTValues.VA[GTValues.EV])

    // Upgrade recipes
    const upgrades = [
        { result: 'ironchest:iron_to_gold_chest_upgrade', from: 'iron', to: 'gold' },
        { result: 'ironchest:gold_to_diamond_chest_upgrade', from: 'gold', to: 'diamond' },
        { result: 'ironchest:copper_to_iron_chest_upgrade', from: 'copper', to: 'iron' },
        { result: 'ironchest:wood_to_iron_chest_upgrade', from: 'wood', to: 'iron' },
        { result: 'ironchest:wood_to_copper_chest_upgrade', from: 'wood', to: 'copper' },
        { result: 'ironchest:diamond_to_obsidian_chest_upgrade', from: 'diamond', to: 'obsidian' }
    ]

    event.shaped('ironchest:diamond_to_crystal_chest_upgrade',
        [
            'PPP',
            'PMP',
            'PWP'
        ], {
            P: 'ae2:quartz_glass',
            M: 'gtceu:diamond_plate',
            W: '#forge:tools/wrenches'
        }
    )

    for (const { result, from, to } of upgrades) {
        event.shaped(result, [
            'PPP',
            'PMP',
            'PWP'
        ], {
            P: `gtceu:${to}_plate`,
            M: `gtceu:${from}_plate`,
            W: '#forge:tools/wrenches'
        })
    }

    // Chest recipes
    const chests = [
        { result: 'ironchest:iron_chest', plate: 'iron', screw: 'iron', base: 'minecraft:chest' },
        { result: 'ironchest:gold_chest', plate: 'gold', screw: 'gold', base: 'ironchest:iron_chest' },
        { result: 'ironchest:diamond_chest', plate: 'diamond', screw: 'diamond', base: 'ironchest:gold_chest' },
        { result: 'ironchest:copper_chest', plate: 'copper', screw: 'copper', base: 'minecraft:chest' }
    ]

    for (const { result, plate, screw, base } of chests) {
        event.shaped(result, [
            'SPS',
            'PCP',
            'SPS'
        ], {
            S: `gtceu:${screw}_screw`,
            P: `gtceu:${plate}_plate`,
            C: base
        })
    }
})