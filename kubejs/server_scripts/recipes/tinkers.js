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
})