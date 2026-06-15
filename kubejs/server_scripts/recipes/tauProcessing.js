ServerEvents.recipes(event => {
    // tau fruit replication -> tau fruit -> saturated tau -> tau oil
    const { gtceu } = event.recipes

    event.remove({id: 'bloodmagic:alchemytable/tau_oil'})

    gtceu.chemical_reactor('tau_fruit_replication')
        .itemInputs('thermal:phytogro')
        .inputFluids(Fluid.of('blasmatech:mana', 1000))
        .notConsumable('bloodmagic:weak_tau')
        .itemOutputs('bloodmagic:weak_tau')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.EV])

    gtceu.bloodforge('saturated_tau_production')
        .itemInputs('2x gtceu:meat_dust', 'bloodmagic:weak_tau')
        .input(LPCapability, 5000)
        .itemOutputs('bloodmagic:strong_tau')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtceu.chemical_reactor('tau_oil_from_seed')
        .itemInputs('bloodmagic:strong_tau')
        .inputFluids(Fluid.of('gtceu:seed_oil', 500))
        .itemOutputs('bloodmagic:tauoil')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtceu.chemical_reactor('tau_oil_from_fish')
        .itemInputs('bloodmagic:strong_tau')
        .inputFluids(Fluid.of('gtceu:fish_oil', 500))
        .itemOutputs('bloodmagic:tauoil')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.EV])
})