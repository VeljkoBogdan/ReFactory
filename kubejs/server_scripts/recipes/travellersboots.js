ServerEvents.recipes(event => {
    event.remove({ mod: 'travellersbootsreloaded'})

    event.recipes.naturesaura.tree_ritual(
        "travellersbootsreloaded:travellers_boots_tier1",
        [
            'minecraft:leather_boots',
            'gtceu:manasteel_plate',
            'gtceu:manasteel_plate',
            'naturesaura:token_joy',
            'gtceu:sky_ingot_plate',
            'gtceu:sky_ingot_plate',
            'botania:manaweave_cloth',
            'botania:manaweave_cloth',
        ]
    )

    event.recipes.naturesaura.tree_ritual(
        "travellersbootsreloaded:travellers_boots_tier2",
        [
            'travellersbootsreloaded:travellers_boots_tier1',
            'gtceu:manasteel_plate',
            'gtceu:manasteel_plate',
            'naturesaura:token_euphoria',
            'kubejs:primitive_mana_core',
            'kubejs:primitive_mana_core',
            'botania:spell_cloth',
            'botania:spell_cloth',
        ]
    )

    event.recipes.naturesaura.tree_ritual(
        "travellersbootsreloaded:travellers_boots_tier3",
        [
            'travellersbootsreloaded:travellers_boots_tier2',
            'gtceu:terrasteel_plate',
            'gtceu:terrasteel_plate',
            'naturesaura:token_euphoria',
            'kubejs:primitive_mana_core',
            'botania:spell_cloth',
            'botania:rune_earth',
            'botania:rune_air',
        ]
    )

    event.recipes.naturesaura.tree_ritual(
        "travellersbootsreloaded:travellers_boots_tier4",
        [
            'travellersbootsreloaded:travellers_boots_tier3',
            'gtceu:terrasteel_plate',
            'gtceu:terrasteel_plate',
            'aether:valkyrie_boots',
            'kubejs:advanced_mana_core',
            'botania:travel_belt',
            'botania:rune_pride',
            'botania:rune_gluttony',
        ]
    )

    event.recipes.naturesaura.tree_ritual(
        "travellersbootsreloaded:travellers_boots_tier5",
        [
            'travellersbootsreloaded:travellers_boots_tier4',
            'gtceu:elementium_plate',
            'gtceu:elementium_plate',
            'bloodmagic:livingboots',
            'kubejs:elite_mana_core',
            'botania:life_essence',
            'botania:super_travel_belt',
            'botania:cloud_pendant',
        ]
    )
})