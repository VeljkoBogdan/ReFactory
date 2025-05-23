GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('large_mana_pool', 'multiblock')
        .tooltips(Component.translatable('tooltip.gtceu.multiblock.large_mana_pool'))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_mana_pool')
        .appearanceBlock(GTBlocks.CASING_ALUMINIUM_FROSTPROOF)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFFFF', 'CRRRC', 'CCCCC')
            .aisle('FRRRF', 'R###R', 'C###C')
            .aisle('FRDRF', 'R###R', 'C###C')
            .aisle('FRRRF', 'R###R', 'C###C')
            .aisle('FFOFF', 'CRRRC', 'CCCCC')
            .where('O', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.air())
            .where('F', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
            .where('R', Predicates.blocks('botania:livingrock'))
            .where('D', Predicates.blocks('botania:dragonstone_block'))
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/distillation_tower',
            false
        )
})