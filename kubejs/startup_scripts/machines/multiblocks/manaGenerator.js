GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_generator', 'multiblock')
        .tooltips(Component.translatable('tooltip.gtceu.multiblock.mana_generator'))
        .rotationState(RotationState.ALL)
        .recipeType('mana_generator')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCC#', '#####', '#####', '#####', '#CCC#')
            .aisle('CCCCC', '#CAC#', '#DAD#', '#CAC#', 'CCCCC')
            .aisle('CCCCC', '#AMA#', '#AFA#', '#A#A#', 'CCMCC')
            .aisle('CCCCC', '#CAC#', '#DAD#', '#CAC#', 'CCCCC')
            .aisle('#COC#', '#####', '#####', '#####', '#CCC#')
            .where('O', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
            )
            .where('A', Predicates.blocks('botania:elf_glass'))
            .where('M', Predicates.blocks('botania:mana_diamond_block'))
            .where('D', Predicates.blocks('botania:dragonstone_block'))
            .where('F', Predicates.blocks('botania:blue_floating_flower'))
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/implosion_compressor',
            false
        )
})