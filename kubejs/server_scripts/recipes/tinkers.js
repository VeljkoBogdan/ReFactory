ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator('kubejs_seared_brick_dust_macerator')
        .itemInputs(
            'tconstruct:seared_bricks',
        )
        .itemOutputs('gtceu:seared_brick_dust')
        .duration(20*2.5)
        .EUt(GTValues.VA[GTValues.ULV])
    event.recipes.gtceu.forge_hammer('kubejs_seared_brick_dust_forge_hammer')
        .itemInputs(
            'tconstruct:seared_bricks',
        )
        .itemOutputs('gtceu:seared_brick_dust')
        .duration(20*2.5)
        .EUt(GTValues.VA[GTValues.ULV])
    // Removed to make the macerator or forge hammer required to make
    // event.shapeless(
    //     'gtceu:seared_brick_dust',
    //     [
    //         'tconstruct:seared_bricks',
    //         '#forge:tools/mortars'
    //     ]
    // )

    event.remove({input: 'tconstruct:grout', output: 'tconstruct:seared_brick'})
    event.shaped(
        '8x kubejs:unfired_seared_brick',
        [
            'GGG',
            'GBG',
            'GGG'
        ],
        {
            G: 'tconstruct:grout',
            B: 'gtceu:brick_wooden_form'
        }
    ).keepIngredient('gtceu:brick_wooden_form')

    event.smelting(
        'tconstruct:seared_brick',
        'kubejs:unfired_seared_brick'
    )
        
    event.remove({ id: 'tconstruct:common/materials/steel_block_from_ingots'})

    // Smeltery Controller
    event.shaped(
        'tconstruct:smeltery_controller',
        [
            'BRB',
            'SPS',
            'BGB'
        ],
        {
            B: 'tconstruct:seared_brick',
            R: 'gtceu:copper_ring',
            S: 'gtceu:copper_screw',
            P: 'gtceu:copper_plate',
            G: 'gtceu:copper_spring'
        }
    )

    // Seared drain
    event.remove({output: 'tconstruct:seared_drain'})
    event.shaped(
        'tconstruct:seared_drain',
        [
            'BCB',
            'CWC',
            'BCB'
        ],
        {
            B: 'tconstruct:seared_brick',
            C: 'gtceu:copper_plate',
            W: '#forge:tools/wrenches'
        }
    )

    // Seared Tank
    event.remove({output: 'tconstruct:seared_fuel_tank'})
    event.shaped(
        'tconstruct:seared_fuel_tank',
        [
            'BBB',
            'BWB',
            'BBB'
        ],
        {
            B: 'tconstruct:seared_brick',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({output: 'tconstruct:seared_basin'})
    event.shaped(
        'tconstruct:seared_basin',
        [
            'B B',
            'S S',
            'BSB'
        ],
        {
            B: 'tconstruct:seared_brick',
            S: 'gtceu:steel_plate'
        }
    )

    // Remove the Foundry to remove byproducts
    event.remove({output: 'tconstruct:foundry_controller'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/platinum/ore_singular'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/platinum/raw'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/platinum/raw_block'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/platinum/dust'})
})

ServerEvents.tags('item', event => {
    event.add('forge:tools/mining_hammers', 'tconstruct:sledge_hammer')
})