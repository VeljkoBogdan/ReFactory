ServerEvents.recipes(event => {

    // GLYCERIC ACID
    event.recipes.gtceu.electrolyzer('glyceric_acid')
    .circuit(1)
    .inputFluids(Fluid.of('gtceu:glycerol 1000'))
    .outputFluids(
        Fluid.of('gtceu:glyceric_acid 750'),
        Fluid.of('minecraft:water 250')
    )
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.IV])

    // PYRUVIC ACID
    event.recipes.gtceu.distillery('pyruvic_acid')
    .circuit(1)
    .inputFluids(Fluid.of('gtceu:glyceric_acid 1000'))
    .outputFluids(Fluid.of('gtceu:pyruvic_acid 750'))
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.IV])

    // ANILINE
    event.recipes.gtceu.chemical_reactor('aniline')
    .circuit(2)
    .inputFluids(
        Fluid.of('gtceu:nitrobenzene 1000'),
        Fluid.of('gtceu:hydrogen 3000')
    )
    .itemInputs('gtceu:iron_dust')
    .outputFluids(
        Fluid.of('gtceu:aniline 1000'),
        Fluid.of('minecraft:water 2000')
    )
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.LuV])

    // PHENYLHYDRAZINE
    event.recipes.gtceu.chemical_reactor('phenylhydrazine')
    .circuit(2)
    .inputFluids(
        Fluid.of('gtceu:aniline 1000'),
        Fluid.of('gtceu:hydrochloric_acid 1000')
    )
    .itemInputs('gtceu:sodium_nitrite_dust')
    .outputFluids(
        Fluid.of('gtceu:phenylhydrazine 1000'),
        Fluid.of('gtceu:oxygen 1000')
    )
    .itemOutputs('gtceu:salt')
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.IV])

    // GLYCOLIC ACID
    event.recipes.gtceu.distillery('glycolic_acid')
    .itemInputs('minecraft:sugar_cane')
    .itemOutputs('gtceu:glycolic_acid_dust')
    .duration(20*30)
    .EUt(GTValues.VA[GTValues.IV])

    // INDOLE
    event.recipes.gtceu.chemical_reactor('indole')
    .inputFluids(
        Fluid.of('gtceu:pyruvic_acid 1000'),
        Fluid.of('gtceu:phenylhydrazine 1000')
    )
    .outputFluids(
        Fluid.of('minecraft:water 1000'),
        Fluid.of('gtceu:ammonia 1000'),
        Fluid.of('gtceu:carbon_dioxide 1000')
    )
    .itemOutputs('gtceu:indole_dust')
    .duration(20*20)
    .EUt(GTValues.VA[GTValues.IV])

    // INDOLE-3-ACETIC ACID
    event.recipes.gtceu.chemical_reactor('indole_3_acetic_acid')
    .itemInputs(
        'gtceu:indole_dust',
        'gtceu:glycolic_acid_dust'
    )
    .outputFluids(
        Fluid.of('minecraft:water 1000')
    )
    .itemOutputs('gtceu:indole_3_acetic_acid_dust')
    .duration(20*20)
    .EUt(GTValues.VA[GTValues.LuV])

    // CHLOROPHYTE GROWTH MEDIUM
    event.recipes.gtceu.mixer('chlorophyte_growth_medium')
    .itemInputs('gtceu:magnesium_chloride_dust', 'gtceu:iron_dust')
    .itemOutputs('gtceu:chlorophyte_growth_medium_dust')
    .duration(20*20)
    .EUt(GTValues.VA[GTValues.IV])

    // CHLOROPHYTE
    event.recipes.gtceu.proliferation_inducer('chlorophyte')
    .itemInputs(
        '4x gtceu:chlorophyte_growth_medium_dust',
        'gtceu:indole_3_acetic_acid_dust'
    )
    .inputFluids(
        Fluid.of('gtceu:biomass 8000'),
        Fluid.of('gtceu:sterilized_growth_medium 2000')    
    )
    .itemOutputs('4x gtceu:chlorophyte_dust')
    .duration(20*60)
    .EUt(GTValues.VA[GTValues.IV])

})