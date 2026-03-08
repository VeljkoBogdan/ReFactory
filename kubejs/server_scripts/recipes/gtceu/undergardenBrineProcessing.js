ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('undergarden_brine_centrifuging')
        .inputFluids(Fluid.of('gtceu:undergarden_brine', 8000))
        .outputFluids(
            Fluid.of('gtceu:brinal_concentrate', 4000),
            Fluid.of('gtceu:bio_waste', 4000)
        )
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.electrolyzer('brinal_concentrate_electrolyzing')
        .inputFluids(Fluid.of('gtceu:brinal_concentrate', 8000))
        .itemOutputs(
            '2x gtceu:aluminium_dust',
            'gtceu:magnesium_dust',
            'gtceu:sodium_dust',
            'gtceu:sulfur_dust'
        )
        .outputFluids(Fluid.of("water", 6000))
        .duration(20*40)
        .EUt(GTValues.VA[GTValues.LV])

    // TODO: add biowaste electrolyzing or use later on
})