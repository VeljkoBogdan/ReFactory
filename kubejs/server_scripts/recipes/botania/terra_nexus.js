ServerEvents.recipes(event => {

    event.shaped(
        'gtceu:terra_nexus',
        [
            'CSC',
            'FTF',
            'LDL'
        ],
        {
            C: 'kubejs:mana_inert_casing',
            S: 'botania:spark',
            F: 'gtceu:mv_field_generator',
            T: 'botania:terra_plate',
            L: 'kubejs:livingrock_casing',
            D: 'botania:dragonstone_block'
        }
    )

    event.recipes.gtceu.terra_nexus('terrasteel')
        .circuit(1)
        .itemInputs(
            'botania:mana_pearl',
            'botania:manasteel_ingot'
        )
        .inputFluids(
            Fluid.of('blasmatech:mana', 1000),
            Fluid.of('gtceu:enriched_primal_sap', 144)
        )
        .itemOutputs('botania:terrasteel_ingot')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.terra_nexus('enchanted_printed_board')
        .circuit(8)
        .itemInputs(
            'gtceu:terralumina_plate',
            'gtceu:tiny_mythic_compound_dust',
            'gtceu:plastic_circuit_board',
            'botania:mana_diamond'
        )
        .inputFluids(Fluid.of('blasmatech:mana', 1000))
        .itemOutputs('gtceu:plastic_printed_circuit_board')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])

})