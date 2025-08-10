const CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
Java.loadClass("com.gregtechceu.gtceu.api.GTValues")

GTCEuStartupEvents.registry('gtceu:machine', event => {
    const GCYMRecipeTypes = Java.loadClass("com.gregtechceu.gtceu.common.data.GCYMRecipeTypes") // Have to load it here because ALLOY_BLAST_RECIPES is not defined outside of the event

    event.create('crystal_puller', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .tooltips(Component.translatable('tooltip.gtceu.multiblock.crystal_puller'))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('crystal_puller')
        .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CcC', 'CCC', 'CCC', 'CCC')
            .aisle('ccc', 'C#C', 'C#C', 'CGC')
            .aisle('CcC', 'COC', 'CCC', 'CCC')
            .where('O', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.air())
            .where('C', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setMinGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('c', Predicates.heatingCoils())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_heatproof',
            'gtceu:block/multiblock/large_chemical_reactor',
            false
        )
})