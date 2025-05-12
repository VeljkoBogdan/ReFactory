ServerEvents.recipes(event => {
        event.recipes.botanypots.crop(
            "endercrop:ender_seeds",                    // seed item
            ["dirt"],                                   // categories that this crop can be planted on
            { block: "endercrop:ender_crop" },          // display block
            [
                Item.of ("minecraft:ender_pearl")       // item
                    .withChance(100)                    // weight of this entry compared to the others
                    .withRolls(1, 2)                    // the times this loot will be chosen (min, max)
            ],
            20*180,                                         // growthTicks
            1,                                       // optional, growthModifier - this can be set to 1 in most cases
        )

        event.remove({type: 'botanypots:crop', input: 'gtceu:rubber_sapling'})

        event.recipes.botanypots.crop(
            "gtceu:rubber_sapling",
            ["dirt"], 
            { block: "gtceu:rubber_sapling" }, 
            [
                Item.of ("gtceu:rubber_log")
                    .withChance(1)
                    .withRolls(2, 4),
                Item.of ("minecraft:stick")
                    .withChance(0.25)
                    .withRolls(1, 2),
                Item.of ("gtceu:sticky_resin")
                    .withChance(0.25)
                    .withRolls(1, 1),
                Item.of ("gtceu:rubber_sapling")
                    .withChance(0.15)
                    .withRolls(1, 1)
            ],
            20*120,
            1,
        )
    
        // For future reference
        
        // event.recipes.botanypots.soil(
        //     "minecraft:oak_leaves", // the item that this soil is attached to
        //     { block: "minecraft:oak_leaves" }, // display block
        //     ["oak_leaves"], // categories that this soil provides
        //     100, // growth ticks that this soil will provide, set to -1 for no modifier
        //     0.5 // optional, growth modifier, example: 0.5 means all crops will take half the time
        // )
    
        // event.recipes.botanypots.fertilizer(
        //     "minecraft:iron_ingot", // fertilizer item
        //     10, // min growth ticks applied
        //     20 // max growth ticks applied
        //     // ex: 10 to 20 ticks will be randomly given to the crop
        // )
})