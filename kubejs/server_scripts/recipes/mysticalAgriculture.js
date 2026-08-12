let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

let toRemove = [
    'mysticalagriculture:harvester', 'mysticalagriculture:prosperity_block', 'mysticalagriculture:inferium_block', 'mysticalagriculture:prudentium_block', 'mysticalagriculture:tertium_block',
    'mysticalagriculture:imperium_block', 'mysticalagriculture:supremium_block', 'mysticalagriculture:awakened_supremium_block', 'mysticalagriculture:soulium_block',
    'mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:inferium_ingot_block', 'mysticalagriculture:prudentium_ingot_block', 'mysticalagriculture:tertium_ingot_block',
    'mysticalagriculture:imperium_ingot_block', 'mysticalagriculture:supremium_ingot_block', 'mysticalagriculture:awakened_supremium_ingot_block', 'mysticalagriculture:soulium_ingot_block',
    'mysticalagriculture:prosperity_gemstone_block', 'mysticalagriculture:inferium_gemstone_block', 'mysticalagriculture:prudentium_gemstone_block', 'mysticalagriculture:imperium_gemstone_block',
    'mysticalagriculture:tertium_gemstone_block', 'mysticalagriculture:supremium_gemstone_block', 'mysticalagriculture:awakened_supremium_gemstone_block',
    'mysticalagriculture:soulium_gemstone_block', 'mysticalagriculture:inferium_farmland', 'mysticalagriculture:prudentium_farmland', 'mysticalagriculture:tertium_farmland',
    'mysticalagriculture:imperium_farmland', 'mysticalagriculture:supremium_farmland', 'mysticalagriculture:inferium_growth_accelerator', 'mysticalagriculture:prudentium_growth_accelerator',
    'mysticalagriculture:tertium_growth_accelerator', 'mysticalagriculture:imperium_growth_accelerator', 'mysticalagriculture:supremium_growth_accelerator', 'mysticalagriculture:prudentium_furnace',
    'mysticalagriculture:tertium_furnace', 'mysticalagriculture:inferium_furnace', 'mysticalagriculture:imperium_furnace', 'mysticalagriculture:supremium_furnace',
    'mysticalagriculture:awakened_supremium_furnace', 'mysticalagriculture:prosperity_ore', 'mysticalagriculture:deepslate_prosperity_ore', 'mysticalagriculture:inferium_ore',
    'mysticalagriculture:deepslate_inferium_ore', 'mysticalagriculture:soulium_ore', 'mysticalagriculture:infusion_pedestal', 'mysticalagriculture:infusion_altar',
    'mysticalagriculture:tinkering_table', 'mysticalagriculture:enchanter', 'mysticalagriculture:machine_frame', 'mysticalagriculture:seed_reprocessor', 'mysticalagriculture:soul_extractor',
    'mysticalagriculture:prosperity_gemstone', 'mysticalagriculture:inferium_gemstone', 'mysticalagriculture:prudentium_gemstone', 'mysticalagriculture:tertium_gemstone',
    'mysticalagriculture:imperium_gemstone', 'mysticalagriculture:supremium_gemstone', 'mysticalagriculture:awakened_supremium_gemstone', 'mysticalagriculture:soulium_gemstone',
    'mysticalagriculture:cognizant_dust', 'mysticalagriculture:creative_soulium_dagger', 'mysticalagriculture:fertilized_essence', 'mysticalagriculture:mystical_fertilizer',
    'mysticalagriculture:unattuned_augment', 'mysticalagriculture:soul_jar', 'mysticalagriculture:upgrade_base', 'mysticalagriculture:inferium_upgrade', 'mysticalagriculture:prudentium_upgrade',
    'mysticalagriculture:tertium_upgrade', 'mysticalagriculture:imperium_upgrade', 'mysticalagriculture:supremium_upgrade', 'mysticalagriculture:awakened_supremium_upgrade',
    'mysticalagriculture:supremium_sword', 'mysticalagriculture:supremium_pickaxe', 'mysticalagriculture:supremium_shovel', 'mysticalagriculture:supremium_axe', 'mysticalagriculture:supremium_hoe',
    'mysticalagriculture:supremium_bow', 'mysticalagriculture:supremium_crossbow', 'mysticalagriculture:supremium_shears', 'mysticalagriculture:supremium_fishing_rod',
    'mysticalagriculture:supremium_sickle', 'mysticalagriculture:supremium_scythe', 'mysticalagriculture:awakened_supremium_sword', 'mysticalagriculture:awakened_supremium_pickaxe',
    'mysticalagriculture:awakened_supremium_shovel', 'mysticalagriculture:awakened_supremium_axe', 'mysticalagriculture:awakened_supremium_hoe', 'mysticalagriculture:awakened_supremium_bow',
    'mysticalagriculture:awakened_supremium_crossbow', 'mysticalagriculture:awakened_supremium_shears', 'mysticalagriculture:awakened_supremium_fishing_rod',
    'mysticalagriculture:awakened_supremium_sickle', 'mysticalagriculture:awakened_supremium_scythe', 'mysticalagriculture:absorption_i_augment', 'mysticalagriculture:luck_i_augment',
    'mysticalagriculture:health_boost_i_augment', 'mysticalagriculture:pathing_aoe_i_augment', 'mysticalagriculture:nausea_resistance_augment', 'mysticalagriculture:night_vision_augment',
    'mysticalagriculture:water_breathing_augment', 'mysticalagriculture:jump_boost_i_augment', 'mysticalagriculture:absorption_ii_augment', 'mysticalagriculture:health_boost_ii_augment',
    'mysticalagriculture:speed_i_augment', 'mysticalagriculture:mining_aoe_i_augment', 'mysticalagriculture:tilling_aoe_i_augment', 'mysticalagriculture:pathing_aoe_ii_augment',
    'mysticalagriculture:blindness_resistance_augment', 'mysticalagriculture:absorption_iii_augment', 'mysticalagriculture:luck_ii_augment', 'mysticalagriculture:fire_resistance_augment',
    'mysticalagriculture:jump_boost_ii_augment', 'mysticalagriculture:step_assist_augment', 'mysticalagriculture:health_boost_iii_augment', 'mysticalagriculture:strength_i_augment',
    'mysticalagriculture:speed_ii_augment', 'mysticalagriculture:haste_i_augment', 'mysticalagriculture:no_fall_damage_augment', 'mysticalagriculture:slow_falling_augment',
    'mysticalagriculture:mining_aoe_ii_augment', 'mysticalagriculture:attack_aoe_i_augment', 'mysticalagriculture:tilling_aoe_ii_augment', 'mysticalagriculture:pathing_aoe_iii_augment',
    'mysticalagriculture:weakness_resistance_augment', 'mysticalagriculture:slowness_resistance_augment', 'mysticalagriculture:absorption_iv_augment', 'mysticalagriculture:poison_resistance_augment',
    'mysticalagriculture:jump_boost_iii_augment', 'mysticalagriculture:health_boost_iv_augment', 'mysticalagriculture:strength_ii_augment', 'mysticalagriculture:speed_iii_augment',
    'mysticalagriculture:haste_ii_augment', 'mysticalagriculture:mining_aoe_iii_augment', 'mysticalagriculture:watering_can', 'mysticalagriculture:attack_aoe_ii_augment',
    'mysticalagriculture:tilling_aoe_iii_augment', 'mysticalagriculture:pathing_aoe_iv_augment', 'mysticalagriculture:mining_fatigue_resistance_augment',
    'mysticalagriculture:hunger_resistance_augment', 'mysticalagriculture:absorption_v_augment', 'mysticalagriculture:luck_iii_augment', 'mysticalagriculture:wither_resistance_augment',
    'mysticalagriculture:health_boost_v_augment', 'mysticalagriculture:strength_iii_augment', 'mysticalagriculture:haste_iii_augment', 'mysticalagriculture:flight_augment',
    'mysticalagriculture:mining_aoe_iv_augment', 'mysticalagriculture:attack_aoe_iii_augment', 'mysticalagriculture:tilling_aoe_iv_augment',
    'mysticalagriculture:soulstone', 'mysticalagriculture:soulstone_cobble', 'mysticalagriculture:soulstone_bricks', 'mysticalagriculture:soulstone_cracked_bricks',
    'mysticalagriculture:soulstone_chiseled_bricks', 'mysticalagriculture:soulstone_smooth', 'mysticalagriculture:soul_glass', 'mysticalagriculture:soulstone_slab',
    'mysticalagriculture:soulstone_cobble_slab', 'mysticalagriculture:soulstone_bricks_slab', 'mysticalagriculture:soulstone_stairs', 'mysticalagriculture:soulstone_cobble_stairs',
    'mysticalagriculture:soulstone_cobble_wall', 'mysticalagriculture:soulstone_bricks_stairs', 'mysticalagriculture:soulstone_bricks_wall', 'mysticalagriculture:witherproof_block',
    'mysticalagriculture:awakening_pedestal', 'mysticalagriculture:awakening_altar', 'mysticalagriculture:essence_vessel', 'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:tertium_essence', 'mysticalagriculture:imperium_essence', 'mysticalagriculture:supremium_essence', 'mysticalagriculture:awakened_supremium_essence',
    'mysticalagriculture:prosperity_ingot', 'mysticalagriculture:inferium_ingot', 'mysticalagriculture:prudentium_ingot', 'mysticalagriculture:tertium_ingot',
    'mysticalagriculture:imperium_ingot', 'mysticalagriculture:supremium_ingot', 'mysticalagriculture:awakened_supremium_ingot', 'mysticalagriculture:soulium_ingot',
    'mysticalagriculture:prosperity_nugget', 'mysticalagriculture:inferium_nugget', 'mysticalagriculture:prudentium_nugget', 'mysticalagriculture:tertium_nugget',
    'mysticalagriculture:imperium_nugget', 'mysticalagriculture:supremium_nugget', 'mysticalagriculture:awakened_supremium_nugget', 'mysticalagriculture:soulium_nugget',
    'mysticalagriculture:soulium_seed_base', 'mysticalagriculture:soul_dust', 'mysticalagriculture:soulium_dust', 'mysticalagriculture:infusion_crystal',
    'mysticalagriculture:master_infusion_crystal', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:dye_agglomeratio', 'mysticalagriculture:nether_agglomeratio',
    'mysticalagriculture:coral_agglomeratio', 'mysticalagriculture:honey_agglomeratio', 'mysticalagriculture:prismarine_agglomeratio', 'mysticalagriculture:end_agglomeratio',
    'mysticalagriculture:mystical_flower_agglomeratio', 'mysticalagriculture:wand', 'mysticalagriculture:blank_skull', 'mysticalagriculture:blank_record', 'mysticalagriculture:soulstone_smooth_slab'
]
toRemove.forEach(e => yeet(e));

let essencesToRemove = ['mysticalagriculture:chrome_essence', 'mysticalagriculture:pulsating_alloy_essence', 'mysticalagriculture:dark_steel_essence', 'mysticalagriculture:soularium_essence',
    'mysticalagriculture:rose_gold_essence', 'mysticalagriculture:lumium_essence', 'mysticalagriculture:signalum_essence', 'mysticalagriculture:soulium_essence',
    'mysticalagriculture:peridot_essence', 'mysticalagriculture:enriched_naquadah_essence', 'mysticalagriculture:naquadria_essence', 'mysticalagriculture:elementium_essence',
    'mysticalagriculture:calorite_essence', 'mysticalagriculture:constantan_essence', 'mysticalagriculture:steel_essence', 'mysticalagriculture:manasteel_essence',
    'mysticalagriculture:conductive_alloy_essence', 'mysticalagriculture:graphite_essence', 'mysticalagriculture:redstone_alloy_essence', 'mysticalagriculture:copper_alloy_essence',
    'mysticalagriculture:slimesteel_essence', 'mysticalagriculture:brass_essence', 'mysticalagriculture:pig_iron_essence', 'mysticalagriculture:amethyst_bronze_essence',
    'mysticalagriculture:bronze_essence', 'mysticalagriculture:energetic_alloy_essence', 'mysticalagriculture:fluix_essence', 'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:queens_slime_essence', 'mysticalagriculture:hepatizon_essence', 'mysticalagriculture:vibrant_alloy_essence', 'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:terrasteel_essence', 'mysticalagriculture:electrum_essence', 'mysticalagriculture:invar_essence', 'mysticalagriculture:mithril_essence', 'mysticalagriculture:iridium_essence'
]
essencesToRemove.forEach(item => {
    yeet(item)
    yeet(item.split('_')[0] + "_seeds")
})

let hvCrops = ['mysticalagriculture:air_essence', 'mysticalagriculture:earth_essence', 'mysticalagriculture:water_essence', 'mysticalagriculture:fire_essence', 'mysticalagriculture:stone_essence', 'mysticalagriculture:dirt_essence', 'mysticalagriculture:wood_essence', 'mysticalagriculture:deepslate_essence']
let evCrops = ['mysticalagriculture:sheep_essence', 'mysticalagriculture:skeleton_essence', 'mysticalagriculture:zombie_essence', 'mysticalagriculture:prismarine_essence', 'mysticalagriculture:redstone_essence', 'mysticalagriculture:tin_essence', 'mysticalagriculture:nickel_essence', 'mysticalagriculture:sky_stone_essence', 'mysticalagriculture:flint_essence', 'mysticalagriculture:ice_essence', 'mysticalagriculture:copper_essence', 'mysticalagriculture:iron_essence', 'mysticalagriculture:mystical_flower_essence', 'mysticalagriculture:grains_of_infinity_essence', 'mysticalagriculture:apatite_essence', 'mysticalagriculture:saltpeter_essence', 'mysticalagriculture:rubber_essence', 'mysticalagriculture:turtle_essence', 'mysticalagriculture:slime_essence', 'mysticalagriculture:fish_essence', 'mysticalagriculture:squid_essence', 'mysticalagriculture:creeper_essence', 'mysticalagriculture:spider_essence', 'mysticalagriculture:rabbit_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:dye_essence', 'mysticalagriculture:nether_essence', 'mysticalagriculture:coral_essence', 'mysticalagriculture:honey_essence', 'mysticalagriculture:pig_essence', 'mysticalagriculture:chicken_essence', 'mysticalagriculture:cow_essence']
let ivCrops = ['mysticalagriculture:sapphire_essence', 'mysticalagriculture:lapis_lazuli_essence', 'mysticalagriculture:certus_quartz_essence', 'mysticalagriculture:ruby_essence', 'mysticalagriculture:amethyst_essence', 'mysticalagriculture:ghast_essence', 'mysticalagriculture:obsidian_essence', 'mysticalagriculture:blaze_essence', 'mysticalagriculture:glass_essence', 'mysticalagriculture:coal_essence', 'mysticalagriculture:wax_essence', 'mysticalagriculture:emerald_essence', 'mysticalagriculture:opal_essence', 'mysticalagriculture:charcoal_essence', 'mysticalagriculture:enderman_essence', 'mysticalagriculture:diamond_essence', 'mysticalagriculture:experience_essence']
let luvCrops = ['mysticalagriculture:silver_essence', 'mysticalagriculture:nether_quartz_essence', 'mysticalagriculture:blitz_essence', 'mysticalagriculture:cobalt_essence', 'mysticalagriculture:prosperity_shard_essence', 'mysticalagriculture:zanite_essence', 'mysticalagriculture:ambrosium_essence', 'mysticalagriculture:molybdenum_essence', 'mysticalagriculture:blizz_essence', 'mysticalagriculture:glowstone_essence', 'mysticalagriculture:lead_essence', 'mysticalagriculture:zinc_essence', 'mysticalagriculture:aluminium_essence', 'mysticalagriculture:basalz_essence', 'mysticalagriculture:graphene_essence', 'mysticalagriculture:silicon_essence', 'mysticalagriculture:utherium_essence', 'mysticalagriculture:gold_essence', 'mysticalagriculture:manganese_essence', 'mysticalagriculture:sulfur_essence', 'mysticalagriculture:antimony_essence']
let zpmCrops = ['mysticalagriculture:gallium_essence', 'mysticalagriculture:chromium_essence', 'mysticalagriculture:beryllium_essence', 'mysticalagriculture:vanadium_essence']
let uvCrops = ['mysticalagriculture:wither_skeleton_essence', 'mysticalagriculture:platinum_essence', 'mysticalagriculture:titanium_essence', 'mysticalagriculture:tantalum_essence', 'mysticalagriculture:thorium_essence', 'mysticalagriculture:samarium_essence', 'mysticalagriculture:zirconium_essence', 'mysticalagriculture:palladium_essence', 'mysticalagriculture:neodymium_essence', 'mysticalagriculture:bismuth_essence', 'mysticalagriculture:plutonium_essence', 'mysticalagriculture:strontium_essence', 'mysticalagriculture:niobium_essence', 'mysticalagriculture:uranium_essence']
let uhvCrops = ['mysticalagriculture:ruthenium_essence', 'mysticalagriculture:netherite_essence', 'mysticalagriculture:nether_star_essence', 'mysticalagriculture:rhodium_essence', 'mysticalagriculture:tungsten_essence', 'mysticalagriculture:naquadah_essence']

let tierCropLists = [
    { crops: hvCrops, tier: GTValues.HV },
    { crops: evCrops, tier: GTValues.EV },
    { crops: ivCrops, tier: GTValues.IV },
    { crops: luvCrops, tier: GTValues.LuV },
    { crops: zpmCrops, tier: GTValues.ZPM },
    { crops: uvCrops, tier: GTValues.UV },
    { crops: uhvCrops, tier: GTValues.UHV }
]

yeet(/mysticalagriculture:(.)*sickle/)
yeet(/mysticalagriculture:(.)*scythe/)
yeet(/mysticalagriculture:(.)*sword/)
yeet(/mysticalagriculture:(.)*pickaxe/)
yeet(/mysticalagriculture:(.)*shovel/)
yeet(/mysticalagriculture:(.)*axe/)
yeet(/mysticalagriculture:(.)*hoe/)
yeet(/mysticalagriculture:(.)*watering_can/)
yeet(/mysticalagriculture:(.)*bow/)
yeet(/mysticalagriculture:(.)*shears/)
yeet(/mysticalagriculture:(.)*fishing_rod/)
yeet(/mysticalagriculture:(.)*helmet/)
yeet(/mysticalagriculture:(.)*chestplate/)
yeet(/mysticalagriculture:(.)*leggings/)
yeet(/mysticalagriculture:(.)*boots/)
yeet(/mysticalagriculture:(.)*dagger/)

ServerEvents.recipes(event => {
    let harvester = (seed, essence, essenceAmount, energyTier) => {
        event.recipes.gtceu.essence_harvester(`kubejs/${seed.split(':')[1]}_harvesting`)
            .notConsumable(seed)
            .itemOutputs(`${essenceAmount}x ${essence}`)
            .duration(20 * 20)
            .EUt(GTValues.VA[energyTier])
    }

    let materializer = (essence, essenceAmount, inputItems, outputItems, energyTier, circuitNumber) => {
        event.recipes.gtceu.essence_materializer(`kubejs/${essence}_materializing`)
            .itemInputs(`${essenceAmount}x ${essence}`, inputItems)
            .circuit(circuitNumber)
            .itemOutputs(outputItems)
            .duration(20 * 20)
            .EUt(GTValues.VA[energyTier])
    }

    let crossbreeder = (seed1, seed2, targetSeed, inputItems, energyTier, chance) => {
        event.recipes.gtceu.essence_crop_crossbreeder(`kubejs/${targetSeed.split(':')[1]}_crossbreeding`)
            .notConsumable(seed1)
            .notConsumable(seed2)
            .itemInputs([inputItems])
            .chancedOutput(targetSeed, chance * 10000, 0)
            .duration(20 * 60)
            .EUt(GTValues.VA[energyTier])
    }

    let oreProcessor = (essence, essenceAmount, inputItems, inputFluid, fluidAmount, outputItems, energyTier) => {
        event.recipes.gtceu.essence_ore_processor(`kubejs/${essence}_ore_processing`)
            .itemInputs(`${essenceAmount}x ${essence}`, inputItems)
            .inputFluids(Fluid.of(inputFluid, fluidAmount))
            .itemOutputs(outputItems)
            .duration(20 * 20)
            .EUt(GTValues.VA[energyTier])
    }

    let essenceToSeed = essence => `mysticalagriculture:${essence.replace('_essence', '_seeds')}`

    // Standard crossbreed
    let cb = (target, p1, p2, item, tier, chance) =>
        crossbreeder(essenceToSeed(p1), essenceToSeed(p2), essenceToSeed(target), item, tier, chance)

    // Animal crossbreed
    let cbAnimal = (target, cropItem, essenceParent, item, tier, chance) =>
        crossbreeder(cropItem, essenceToSeed(essenceParent), essenceToSeed(target), item, tier, chance)

    event.remove({ mod: 'mysticalagriculture' })
    event.remove({ id: /thermal:compat\/mysticalagriculture\/insolator_mysticalag_(.)*_seeds/ })

    // Essence harvester recipes
    tierCropLists.forEach(entry => {
        entry.crops.forEach(essence => {
            let seed = essence.replace('_essence', '_seeds')
            harvester(seed, essence, 1, entry.tier)
        })
    })

    // Crop crossbreeder recipes
    // Crossbreeding is meant to be hard, and gets harder every tier.
    // Balancing expected :(
    //
    // A target's parent seeds must be its own tier or lower, never higher.
    // Two parents of the same tier as the target is fine.

    let evPairs = [
        ['skeleton_essence', 'stone_essence', 'air_essence', 'minecraft:bone'],
        ['zombie_essence', 'earth_essence', 'water_essence', 'minecraft:rotten_flesh'],
        ['prismarine_essence', 'water_essence', 'ice_essence', 'minecraft:prismarine_shard'],
        ['redstone_essence', 'fire_essence', 'stone_essence', 'minecraft:redstone'],
        ['tin_essence', 'earth_essence', 'water_essence', 'gtceu:tin_dust'],
        ['nickel_essence', 'earth_essence', 'fire_essence', 'gtceu:nickel_dust'],
        ['sky_stone_essence', 'stone_essence', 'air_essence', 'ae2:sky_stone_block'],
        ['flint_essence', 'fire_essence', 'stone_essence', 'minecraft:flint'],
        ['ice_essence', 'water_essence', 'air_essence', 'minecraft:ice'],
        ['copper_essence', 'stone_essence', 'water_essence', 'gtceu:copper_dust'],
        ['iron_essence', 'earth_essence', 'stone_essence', 'gtceu:iron_dust'],
        ['mystical_flower_essence', 'earth_essence', 'water_essence', '#botania:petals'],
        ['grains_of_infinity_essence', 'flint_essence', 'fire_essence', 'enderio:grains_of_infinity'],
        ['apatite_essence', 'stone_essence', 'water_essence', 'gtceu:apatite_gem'],
        ['saltpeter_essence', 'stone_essence', 'fire_essence', 'gtceu:saltpeter_dust'],
        ['rubber_essence', 'wood_essence', 'water_essence', 'gtceu:sticky_resin'],
        ['slime_essence', 'earth_essence', 'water_essence', 'minecraft:slime_ball'],
        ['creeper_essence', 'earth_essence', 'fire_essence', 'minecraft:gunpowder'],
        ['spider_essence', 'earth_essence', 'air_essence', 'minecraft:string'],
        ['nature_essence', 'earth_essence', 'wood_essence', 'minecraft:oak_sapling'],
        ['dye_essence', 'water_essence', 'wood_essence', '#forge:dyes'],
        ['nether_essence', 'fire_essence', 'earth_essence', 'minecraft:netherrack'],
        ['coral_essence', 'water_essence', 'fire_essence', '#forge:coral_blocks'],
        ['honey_essence', 'wood_essence', 'water_essence', 'minecraft:honey_bottle']
    ]
    evPairs.forEach(([t, p1, p2, item]) => cb(t, p1, p2, item, GTValues.EV, 0.075))
    console.log("CROPS --- EV non-animal done")

    let evAnimalPairs = [
        ['sheep_essence', 'minecraft:wheat', 'earth_essence', 'minecraft:white_wool'],
        ['cow_essence', 'minecraft:wheat', 'water_essence', 'minecraft:leather'],
        ['pig_essence', 'minecraft:carrot', 'earth_essence', 'minecraft:porkchop'],
        ['chicken_essence', 'minecraft:wheat_seeds', 'air_essence', 'minecraft:feather'],
        ['rabbit_essence', 'minecraft:carrot', 'wood_essence', 'minecraft:rabbit_hide'],
        ['turtle_essence', 'minecraft:seagrass', 'water_essence', 'minecraft:scute'],
        ['fish_essence', 'minecraft:kelp', 'water_essence', 'minecraft:cod'],
        ['squid_essence', 'minecraft:kelp', 'water_essence', 'minecraft:ink_sac']
    ]
    evAnimalPairs.forEach(([t, crop, essenceParent, item]) => cbAnimal(t, crop, essenceParent, item, GTValues.EV, 0.075))
    console.log("CROPS --- EV animal done")

    let ivPairs = [
        ['sapphire_essence', 'iron_essence', 'water_essence', 'gtceu:sapphire_gem'],
        ['lapis_lazuli_essence', 'stone_essence', 'dye_essence', 'minecraft:lapis_lazuli'],
        ['certus_quartz_essence', 'stone_essence', 'ice_essence', 'gtceu:certus_quartz_gem'],
        ['ruby_essence', 'fire_essence', 'copper_essence', 'gtceu:ruby_gem'],
        ['amethyst_essence', 'air_essence', 'ice_essence', 'minecraft:amethyst_shard'],
        ['ghast_essence', 'nether_essence', 'fire_essence', 'minecraft:ghast_tear'],
        ['obsidian_essence', 'fire_essence', 'water_essence', 'minecraft:obsidian'],
        ['blaze_essence', 'fire_essence', 'nether_essence', 'minecraft:blaze_rod'],
        ['glass_essence', 'stone_essence', 'fire_essence', 'minecraft:glass'],
        ['coal_essence', 'earth_essence', 'fire_essence', 'minecraft:coal'],
        ['wax_essence', 'honey_essence', 'nature_essence', 'minecraft:honeycomb'],
        ['emerald_essence', 'stone_essence', 'nature_essence', 'minecraft:emerald'],
        ['opal_essence', 'coal_essence', 'iron_essence', 'gtceu:opal_gem'],
        ['charcoal_essence', 'wood_essence', 'fire_essence', 'minecraft:charcoal'],
        ['enderman_essence', 'stone_essence', 'air_essence', 'minecraft:ender_pearl'],
        ['diamond_essence', 'coal_essence', 'stone_essence', 'minecraft:diamond'],
        ['experience_essence', 'nature_essence', 'air_essence', 'minecraft:glass_bottle']
    ]
    ivPairs.forEach(([t, p1, p2, item]) => cb(t, p1, p2, item, GTValues.IV, 0.05))
    console.log("CROPS --- IV done")

    let luvPairs = [
        ['silver_essence', 'diamond_essence', 'ice_essence', 'gtceu:silver_dust'],
        ['nether_quartz_essence', 'nether_essence', 'obsidian_essence', 'minecraft:quartz'],
        ['blitz_essence', 'air_essence', 'ghast_essence', 'thermal:blitz_powder'],
        ['cobalt_essence', 'iron_essence', 'coal_essence', 'gtceu:cobalt_dust'],
        ['prosperity_shard_essence', 'stone_essence', 'diamond_essence', 'mysticalagriculture:prosperity_shard'],
        ['zanite_essence', 'emerald_essence', 'diamond_essence', 'gtceu:zanite_gem'],
        ['ambrosium_essence', 'glowstone_essence', 'experience_essence', 'gtceu:ambrosium_gem'],
        ['molybdenum_essence', 'iron_essence', 'coal_essence', 'gtceu:molybdenum_dust'],
        ['blizz_essence', 'ice_essence', 'blitz_essence', 'thermal:blizz_powder'],
        ['glowstone_essence', 'fire_essence', 'nether_essence', 'minecraft:glowstone_dust'],
        ['lead_essence', 'iron_essence', 'stone_essence', 'gtceu:lead_dust'],
        ['zinc_essence', 'copper_essence', 'stone_essence', 'gtceu:zinc_dust'],
        ['aluminium_essence', 'stone_essence', 'ice_essence', 'gtceu:aluminium_dust'],
        ['basalz_essence', 'fire_essence', 'blizz_essence', 'thermal:basalz_powder'],
        ['graphene_essence', 'coal_essence', 'diamond_essence', 'gtceu:graphene_dust'],
        ['silicon_essence', 'stone_essence', 'glass_essence', 'gtceu:silicon_dust'],
        ['utherium_essence', 'diamond_essence', 'emerald_essence', 'gtceu:utherium_gem'],
        ['gold_essence', 'stone_essence', 'fire_essence', 'gtceu:gold_dust'],
        ['manganese_essence', 'iron_essence', 'coal_essence', 'gtceu:manganese_dust'],
        ['sulfur_essence', 'fire_essence', 'stone_essence', 'gtceu:sulfur_dust'],
        ['antimony_essence', 'lead_essence', 'iron_essence', 'gtceu:antimony_dust']
    ]
    luvPairs.forEach(([t, p1, p2, item]) => cb(t, p1, p2, item, GTValues.LuV, 0.035))
    console.log("CROPS --- LuV done")

    let zpmPairs = [
        ['gallium_essence', 'aluminium_essence', 'zinc_essence', 'gtceu:gallium_dust'],
        ['chromium_essence', 'cobalt_essence', 'iron_essence', 'gtceu:chromium_dust'],
        ['beryllium_essence', 'emerald_essence', 'aluminium_essence', 'gtceu:beryllium_dust'],
        ['vanadium_essence', 'silicon_essence', 'iron_essence', 'gtceu:vanadium_dust']
    ]
    zpmPairs.forEach(([t, p1, p2, item]) => cb(t, p1, p2, item, GTValues.ZPM, 0.0225))
    console.log("CROPS --- ZPM done")

    let uvPairs = [
        ['wither_skeleton_essence', 'skeleton_essence', 'chromium_essence', 'minecraft:coal'],
        ['platinum_essence', 'gold_essence', 'vanadium_essence', 'gtceu:platinum_dust'],
        ['titanium_essence', 'iron_essence', 'beryllium_essence', 'gtceu:titanium_dust'],
        ['tantalum_essence', 'niobium_essence', 'platinum_essence', 'gtceu:tantalum_dust'],
        ['thorium_essence', 'uranium_essence', 'vanadium_essence', 'gtceu:thorium_dust'],
        ['samarium_essence', 'neodymium_essence', 'gallium_essence', 'gtceu:samarium_dust'],
        ['zirconium_essence', 'titanium_essence', 'vanadium_essence', 'gtceu:zirconium_dust'],
        ['palladium_essence', 'platinum_essence', 'chromium_essence', 'gtceu:palladium_dust'],
        ['neodymium_essence', 'iron_essence', 'beryllium_essence', 'gtceu:neodymium_dust'],
        ['bismuth_essence', 'lead_essence', 'tin_essence', 'gtceu:bismuth_dust'],
        ['plutonium_essence', 'uranium_essence', 'thorium_essence', 'gtceu:plutonium_dust'],
        ['strontium_essence', 'zirconium_essence', 'vanadium_essence', 'gtceu:strontium_dust'],
        ['niobium_essence', 'zirconium_essence', 'vanadium_essence', 'gtceu:niobium_dust'],
        ['uranium_essence', 'stone_essence', 'vanadium_essence', 'gtceu:uranium_dust']
    ]
    uvPairs.forEach(([t, p1, p2, item]) => cb(t, p1, p2, item, GTValues.UV, 0.015))
    console.log("CROPS --- UV done")

    let uhvPairs = [
        ['ruthenium_essence', 'platinum_essence', 'palladium_essence', 'gtceu:ruthenium_dust'],
        ['netherite_essence', 'diamond_essence', 'uranium_essence', 'gtceu:netherite_dust'],
        ['nether_star_essence', 'wither_skeleton_essence', 'netherite_essence', 'gtceu:nether_star_dust'],
        ['rhodium_essence', 'platinum_essence', 'ruthenium_essence', 'gtceu:rhodium_dust'],
        ['tungsten_essence', 'titanium_essence', 'tantalum_essence', 'gtceu:tungsten_dust'],
        ['naquadah_essence', 'uranium_essence', 'tungsten_essence', 'gtceu:naquadah_dust']
    ]
    uhvPairs.forEach(([t, p1, p2, item]) => cb(t, p1, p2, item, GTValues.UHV, 0.01))
    console.log("CROPS --- UHV done")

    // Essence materializer recipes

    // Essence ore processor recipes
})