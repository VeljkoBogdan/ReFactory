let seedExtraction = (inputSeed, outputAmount) => {
    ServerEvents.recipes(event => {
        let input = inputSeed.replace(':', '_')

        event.recipes.gtceu.extractor("kubejs:extractor/" + input + "_to_oil")
            .itemInputs(inputSeed)
            .outputFluids(Fluid.of('gtceu:seed_oil', outputAmount))
            .duration(20*1.6)
            .EUt(2)
    })
}

seedExtraction('thermal:peanut', 22)
seedExtraction('thermal:corn', 12)
seedExtraction('thermal:corn_seeds', 14)
seedExtraction('thermal:flax_seeds', 14)