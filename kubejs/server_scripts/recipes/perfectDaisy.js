ServerEvents.recipes(event => {
    let Daisy = (id, inItems, outItems, duration, eu) => {
        event.recipes.gtceu.perfect_daisy(id)
            .itemInputs(inItems)
            .itemOutputs(outItems)
            .duration(duration)
            .EUt(eu)
    }

    let DaisyF = (id, inFluids, outItems, duration, eu) => {
        event.recipes.gtceu.perfect_daisy(id)
            .inputFluids(inFluids)
            .itemOutputs(outItems)
            .duration(duration)
            .EUt(eu)
    }

    // Controller
    event.shaped('gtceu:perfect_daisy',
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'gtceu:hv_electric_pump',
            B: 'botania:pure_daisy',
            C: 'kubejs:livingrock_casing',
            D: 'gtceu:hv_machine_hull',
            E: 'kubejs:mana_core',
            F: '#gtceu:circuits/hv'
        }
    )

    const mv = GTValues.VA[GTValues.MV]

    Daisy('packed_ice', 'ice', 'packed_ice', 20*4, mv)
    Daisy('soul_sand_to_sand', 'soul_sand', 'sand', 20*4, mv)
    Daisy('livingrock', '#forge:stone', 'botania:livingrock', 20*4, mv)
    Daisy('cobblestone', 'netherrack', 'cobblestone', 20*4, mv)
    Daisy('cobbled_deepslate', 'end_stone', 'cobbled_deepslate', 20*4, mv)
    Daisy('blue_ice', 'packed_ice', 'blue_ice', 20*4, mv)
    Daisy('obsidian_from_blaze', 'botania:blaze_block', 'obsidian', 20*4, mv)
    Daisy('livingwood', '#minecraft:logs', 'botania:livingwood_log', 20*4, mv)

    DaisyF('snow', Fluid.of('water', 1000), 'snow_block', 20*4, mv)
})