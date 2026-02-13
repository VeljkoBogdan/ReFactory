const AuraCapability = ReFactoryCapabilities.AURA

ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('null_catalyst')
        .itemInputs(
            'gtceu:nether_star_dust',
            '2x enderio:withering_powder',
            'enderio:vibrant_powder',
            'enderio:grains_of_infinity',
            '4x botania:mana_powder'
        )
        .itemOutputs(
            '2x gtceu:null_catalyst_dust'
        )
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.naturesaura.altar(
        'gtceu:nether_star_dust',
        'gtceu:null_catalyst_dust',
        2500, 20*30
    )

    event.recipes.gtceu.aura_altar('nether_star_dust_from_null_catalyst')
        .input(AuraCapability, 2500)
        .itemInputs('gtceu:null_catalyst_dust')
        .itemOutputs('gtceu:nether_star_dust')
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.EV])
})