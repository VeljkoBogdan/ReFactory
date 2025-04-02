ServerEvents.recipes(event => {
    function ManaGen(id, flower, itemInput, fluidInput, manaOutput) {
        let minTicks = 10;
        let maxTicks = 20*4;
        let minMana = 10;
        let maxMana = 4000;

        let manaWithinLimits = Math.max(minMana, Math.min(maxMana, manaOutput));
        let duration = minTicks + (manaWithinLimits - minMana) * (maxTicks - minTicks) / (maxMana - minMana);
        duration = Math.floor(duration);

        if (fluidInput === null) {
            event.recipes.gtceu.mana_generator(id)
                .notConsumable(InputItem.of(flower))
                .itemInputs(itemInput)
                .outputFluids(Fluid.of('manaliquidizer:mana_fluid', manaOutput))
                .duration(duration)
                .EUt(GTValues.VA[GTValues.HV])
        } else {
            if (itemInput === null) {
                event.recipes.gtceu.mana_generator(id)
                    .notConsumable(InputItem.of(flower))
                    .inputFluids(Fluid.of(fluidInput, 1000))
                    .outputFluids(Fluid.of('manaliquidizer:mana_fluid', manaOutput))
                    .duration(duration)
                    .EUt(GTValues.VA[GTValues.HV])
            } else {
                event.recipes.gtceu.mana_generator(id)
                    .notConsumable(InputItem.of(flower))
                    .itemInputs(itemInput)
                    .inputFluids(Fluid.of(fluidInput, 1000))
                    .outputFluids(Fluid.of('manaliquidizer:mana_fluid', manaOutput))
                    .duration(duration)
                    .EUt(GTValues.VA[GTValues.HV])
            }
        }
    }

    event.shaped(
        'gtceu:mana_generator',
        [
            'CMC',
            'PHP',
            'CMC'
        ],
        {
            P: 'gtceu:hv_electric_pump',
            C: '#gtceu:circuits/hv',
            M: 'kubejs:mana_core',
            H: 'gtceu:hv_machine_hull'
        }
    )

    // Endoflame
    ManaGen('coke_block_to_mana', 'botania:endoflame', 'gtceu:coke_block', null, 21600)
    ManaGen('coal_block_to_mana', 'botania:endoflame', 'minecraft:coal_block', null, 10800)
    ManaGen('charcoal_block_to_mana', 'botania:endoflame', 'gtceu:charcoal_block', null, 10800)
    ManaGen('coke_to_mana', 'botania:endoflame', 'gtceu:coke_gem', null, 3600)
    ManaGen('blaze_rod_to_mana', 'botania:endoflame', 'minecraft:blaze_rod', null, 1800)
    ManaGen('coal_to_mana', 'botania:endoflame', '#minecraft:coals', null, 1200)
    ManaGen('logs_to_mana', 'botania:endoflame', '#minecraft:logs_that_burn', null, 225)
    ManaGen('wood_to_mana', 'botania:endoflame', '#minecraft:planks', null, 225)

    // Entropinnyum
    ManaGen('tnt_to_mana', 'botania:entropinnyum', 'minecraft:tnt', null, 6500)
    ManaGen('industrial_tnt_to_mana', 'botania:entropinnyum', 'gtceu:industrial_tnt', null, 9000)
    ManaGen('powderbarrel_to_mana', 'botania:entropinnyum', 'gtceu:powderbarrel', null, 1000)

    // Hydroangeas
    ManaGen('water_to_mana', 'botania:hydroangeas', null, 'minecraft:water', 500)
    ManaGen('distilled_water_to_mana', 'botania:hydroangeas', null, 'gtceu:distilled_water', 750)
    ManaGen('salt_water_to_mana', 'botania:hydroangeas', null, 'gtceu:salt_water', 750)

    // Kekimurus
    ManaGen('cake_to_mana', 'botania:kekimurus', 'minecraft:cake', null, 12600)
    ManaGen('carrot_cake_to_mana', 'botania:kekimurus', 'thermal:carrot_cake', null, 12600)
    ManaGen('choc_cake_to_mana', 'botania:kekimurus', 'thermal:chocolate_cake', null, 12600)
    ManaGen('spice_cake_to_mana', 'botania:kekimurus', 'thermal:spice_cake', null, 12600)

    // Munchdew
    ManaGen('leaves_to_mana', 'botania:munchdew', '#minecraft:leaves', null, 200)

    // Narslimmus
    ManaGen('slime_to_mana', 'botania:narslimmus', '#forge:slimeballs', null, 750)

    // Rosa Arcana
    ManaGen('exp_to_mana', 'botania:rosa_arcana', null, 'mob_grinding_utils:fluid_xp', 4000)

    // Thermalily
    ManaGen('lava_to_mana', 'botania:thermalily', null, 'minecraft:lava', 18000)
})