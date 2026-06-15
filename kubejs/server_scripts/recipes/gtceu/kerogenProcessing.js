ServerEvents.recipes(event => {
    event.recipes.gtceu.pyrolyse_oven('kerogen_dust_pyrolysing')
        .itemInputs('4x gtceu:kerogen_dust')
        .inputFluids(Fluid.of('gtceu:steam', 1000))
        .itemOutputs('2x gtceu:carbon_dust')
        .outputFluids(Fluid.of('gtceu:bitumen', 250))
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV])
})