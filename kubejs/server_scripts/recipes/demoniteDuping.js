ServerEvents.recipes(event => {
    // Demonite duping
    // 1 demonite dust in - 2 demonite dust out
    // consumes only lava and oil from tau oil
    event.recipes.gtceu.mixer('infernal_mixture')
        .itemInputs(
            'gtceu:demonite_dust',
            '2x gtceu:sulfur_dust',
            'bloodmagic:tauoil'
        )
        .inputFluids(
            Fluid.of('lava', 2000),
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .outputFluids(Fluid.of('gtceu:infernal_oil', 4000))
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.bloodforge('infernal_mixture_infusing')
        .inputFluids(Fluid.of('gtceu:infernal_oil', 8000))
        .input(LPCapability, 5000)
        .outputFluids(Fluid.of('gtceu:bloodboil', 8000))
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.distillation_tower('infernal_mixture_distilling')
        .inputFluids(Fluid.of('gtceu:bloodboil', 8000))
        .outputFluids(
            Fluid.of('gtceu:diluted_sulfuric_acid', 3000),
            Fluid.of('gtceu:blaze', 288)
        )
        .itemOutputs('8x gtceu:contaminated_demonite_dust')
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace('demonite_blasting')
        .itemInputs('2x gtceu:contaminated_demonite_dust')
        .inputFluids(Fluid.of('gtceu:oxygen', 2000))
        .itemOutputs('bloodmagic:ingot_hellforged')
        .outputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))
        .blastFurnaceTemp(4000)
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.IV])
})