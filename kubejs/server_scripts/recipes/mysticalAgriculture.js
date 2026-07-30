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
    'mysticalagriculture:mining_aoe_iv_augment', 'mysticalagriculture:attack_aoe_iii_augment', 'mysticalagriculture:tilling_aoe_iv_augment'
]
toRemove.forEach(e => yeet(e));

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