ServerEvents.recipes(event => {
    // Blank rune
    event.recipes.gtceu.compressor('blank_rune')
        .itemInputs('5x gtceu:livingrock_plate')
        .itemOutputs('kubejs:blank_rune')
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.LV])
    
    // Fire
    event.recipes.botania.runic_altar(
        'botania:rune_fire',
        [
            'blaze_powder',
            'fire_charge',
            'botania:quartz_blaze',
            'tconstruct:ichor_slime_crystal',
            'thermal:basalz_powder',
            'kubejs:blank_rune'
        ],
        '1000'
    )

    // Air
    event.recipes.botania.runic_altar(
        'botania:rune_air',
        [
            'ghast_tear',
            'botania:white_petal',
            'thermal:blitz_powder',
            'botania:quartz_sunny',
            'gtceu:charged_certus_quartz_gem',
            'kubejs:blank_rune'
        ],
        '1000'
    )

    // Water
    event.recipes.botania.runic_altar(
        'botania:rune_water',
        [
            'water_bucket',
            'thermal:blizz_powder',
            'botania:quartz_mana',
            'ice',
            'botania:manaweave_cloth',
            'kubejs:blank_rune'
        ],
        '1000'
    )

    // Earth
    event.recipes.botania.runic_altar(
        'botania:rune_earth',
        [
            'naturesaura:infused_iron',
            'thermal:basalz_powder',
            'botania:quartz_mana',
            'amethyst_shard',
            '#forge:slimeballs',
            'kubejs:blank_rune'
        ],
        '1000'
    )

    // Mana
    event.recipes.botania.runic_altar(
        'botania:rune_mana',
        [
            'gtceu:manasteel_plate',
            'botania:mana_pearl',
            'botania:mana_diamond',
            'botania:quartz_mana',
            'botania:manaweave_cloth',
            'kubejs:blank_rune'
        ],
        '1000'
    )
})