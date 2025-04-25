// let bulletAmmoIDs = [
//     'ea:408cheytac',
//     'ea:357sig',
//     'ea:556x30',
//     'ea:75fk',
//     'tacz:762x54',
//     'ea:300winmag',
//     'tacz:338',
//     'ea:22hornet',
//     'tacz:57x28',
//     'ea:22lr',
//     'ea:300blk',
//     'ea:9x18',
//     'ea:366tkm',
//     'ea:44magnum',
//     'ea:380auto',
//     'tacz:68x51fury',
//     'ea:17hmr',
//     'ea:602x41',
//     'tacz:308',
//     'maxstuff:can_blanks',
//     'tacz:45acp',
//     'tacz:50bmg',
//     'ea:416barrett',
//     'tacz:58x42',
//     'ea:32acp',
//     'tacz:762x39',
//     'ea:40sw',
//     'ea:223remington',
//     'ea:9x21',
//     'tacz:9mm',
//     'ea:545x39',
//     'tacz:357mag',
//     'tacz:46x30',
//     'ea:65creedmoor',
//     'ea:454casull',
//     'tacz:30_06',
//     'tacz:50ae',
//     'ea:44special',
//     'ea:9x39',
//     'ea:50beowulf',
//     'tacz:762x25',
//     'tacz:556x45',
//     'ea:10mm',
//     'ea:127x55',
//     'ea:500sw'
// ]
// let gaugeIds = [
//     'maxstuff:12g_db',
//     'ea:410bore',
//     'tacz:12g',
//     'maxstuff:12g_fl'
// ]
// let bannanaId = 'maxstuff:bannana'
// let grenadeId = 'tacz:40mm'
// let rpgRocketId = 'tacz:rpg_rocket'
// let laserId = 'maxstuff:laser'
// let nailsId = 'mastuff:nails' 

ServerEvents.recipes(event => {
    // Gun Smith Table
    event.remove({output: 'tacz:gun_smith_table'})
    event.shaped(
        'tacz:gun_smith_table',
        [
            'PPP',
            'RSR',
            'RHR'
        ],
        {
            P: 'gtceu:wood_plate',
            R: 'gtceu:steel_rod',
            S: 'gtceu:steel_block',
            H: '#forge:tools/hammers'
        }
    )

    // Ammo bench
    event.remove({output: Item.of('tacz:workbench_b', '{BlockId:"ea:ammobench"}')})
    event.shaped(
        Item.of('tacz:workbench_b', '{BlockId:"ea:ammobench"}'),
        [
            'PPP',
            'RCR',
            'RHR'
        ],
        {
            P: 'gtceu:wood_plate',
            R: 'gtceu:steel_rod',
            C: 'minecraft:copper_block',
            H: '#forge:tools/hammers'
        }
    )

    // I am stupid and this will make the recipes collide...
    // bulletAmmoIDs.map(id => {
    //     event.recipes.gtceu.assembler(`kubejs:${id}`)
    //         .circuit(9)
    //         .itemInputs(
    //             '4x gtceu:copper_plate',
    //             'minecraft:gunpowder'
    //         )
    //         .itemOutputs(Item.of('tacz:ammo', `{AmmoId:"${id}"}`).withCount(32))
    //         .duration(20*8)
    //         .EUt(GTValues.VA[GTValues.ULV])
    // })

    // gaugeIds.map(id => {
    //     event.recipes.gtceu.assembler(`kubejs:${id}`)
    //         .circuit(9)
    //         .itemInputs(
    //             '4x gtceu:polyethylene_plate',
    //             '4x gtceu:iron_round',
    //             'minecraft:gunpowder'
    //         )
    //         .itemOutputs(Item.of('tacz:ammo', `{AmmoId:"${id}"}`).withCount(32))
    //         .duration(20*8)
    //         .EUt(GTValues.VA[GTValues.ULV])
    // })

    // event.recipes.gtceu.assembler(`kubejs:${bannanaId}`)
    //     .circuit(9)
    //     .itemInputs(
    //         '8x #minecraft:leaves'
    //     )
    //     .itemOutputs(Item.of('tacz:ammo', `{AmmoId:"${bannanaId}"}`).withCount(32))
    //     .duration(20*8)
    //     .EUt(GTValues.VA[GTValues.ULV])
    // event.recipes.gtceu.assembler(`kubejs:${grenadeId}`)
    //     .circuit(9)
    //     .itemInputs(
    //         '4x gtceu:iron_plate',
    //         'minecraft:gunpowder'
    //     )
    //     .itemOutputs(Item.of('tacz:ammo', `{AmmoId:"${grenadeId}"}`).withCount(6))
    //     .duration(20*8)
    //     .EUt(GTValues.VA[GTValues.ULV])
})