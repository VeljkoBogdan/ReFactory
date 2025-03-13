let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

ServerEvents.recipes(event => {

    // remove default apothecary recipes
	event.remove({ id: 'botania:apothecary_default' })
	event.remove({ id: 'botania:apothecary_forest' })
	event.remove({ id: 'botania:apothecary_plains' })
	event.remove({ id: 'botania:apothecary_mountain' })
	event.remove({ id: 'botania:apothecary_fungal' })
	event.remove({ id: 'botania:apothecary_swamp' })
	event.remove({ id: 'botania:apothecary_desert' })
	event.remove({ id: 'botania:apothecary_taiga' })
	event.remove({ id: 'botania:apothecary_mesa' })
	event.remove({ id: 'botania:apothecary_mossy' })
	event.remove({ id: 'botania:apothecary_deepslate' })
	event.remove({ id: 'botania:apothecary_livingrock' })
    
    // APOTHECARY
    event.shaped(
        'botania:apothecary_default',
        [
            'CPC',
            'SCS',
            'CCC'
        ],
        {
            C: '#minecraft:stone_crafting_materials',
            P: '#botania:petals',
            S: 'gtceu:steel_plate'
        }
    )

    // mystical white flower recipe quality of life
    event.shapeless(
        'botania:white_mystical_flower',
        [
            '#forge:dusts/bone',
            '#botania:mystical_flowers'
        ]
    )

    // rubber tree sapling recipe
    event.recipes.botania.petal_apothecary(
        'gtceu:rubber_sapling', 
        [
            '#botania:petals',
            '#botania:petals',
            '#botania:petals',
            '#botania:petals',
            'botania:livingwood_log',
            'botania:livingwood_log'
        ],
        '#minecraft:saplings'
    )

    // sugar cane recipe
    event.recipes.botania.petal_apothecary(
        'minecraft:sugar_cane', 
        [
            'minecraft:carrot'
        ],
        '#forge:seeds'
    )

    // replace mana pool recipe
    event.remove({ id: 'botania:mana_pool' })
    event.recipes.gtceu.assembler('kubejs_mana_pool')
    .circuit(31)
    .itemInputs(
        '5x botania:livingrock'
    )
    .itemOutputs(
        'botania:mana_pool'
    )
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.LV] / 2)

    // replace botania ingot with gt ingot and in recipes
    // event.replaceInput({ input: 'botania:manasteel_ingot' }, 'botania:manasteel_ingot', 'gtceu:manasteel_ingot')
    // event.replaceOutput({ output: 'botania:manasteel_ingot' }, 'botania:manasteel_ingot', 'gtceu:manasteel_ingot')

    // Terrestrial Agglomeration plate
    event.remove({ id: 'botania:terra_plate' })
    event.recipes.gtceu.assembler('kubejs_terra_plate')
        .circuit(30)
        .itemInputs(
            '3x minecraft:lapis_block',
            'botania:manasteel_block',
            'botania:rune_water',
            'botania:rune_fire',
            'botania:rune_earth',
            'botania:rune_air',
            'botania:rune_mana'
        )
        .itemOutputs(
            'botania:terra_plate'
        )
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.MV])


    // Start of Botania GREGIFICATION(tm)
    // Glimering wood
    event.remove({id: 'botania:glimmering_livingwood_log'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_livingwood_log')
        .itemInputs(
            'botania:livingwood_log'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_livingwood_log'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_livingwood'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_livingwood')
        .itemInputs(
            'botania:livingwood'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_livingwood'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_stripped_livingwood_log'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_stripped_livingwood_log')
        .itemInputs(
            'botania:stripped_livingwood_log'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_stripped_livingwood_log'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_stripped_livingwood'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_stripped_livingwood')
        .itemInputs(
            'botania:stripped_livingwood'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_stripped_livingwood'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_dreamwood_log'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_dreamwood_log')    
        .itemInputs(
            'botania:dreamwood_log'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_dreamwood_log'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_dreamwood'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_dreamwood')    
        .itemInputs(
            'botania:dreamwood'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_dreamwood'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_stripped_dreamwood_log'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_stripped_dreamwood_log')    
        .itemInputs(
            'botania:stripped_dreamwood_log'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_stripped_dreamwood_log'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_stripped_dreamwood'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_stripped_dreamwood')    
        .itemInputs(
            'botania:stripped_dreamwood'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_stripped_dreamwood'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    // Mana spreaders
    event.remove({id: 'botania:mana_spreader'})
    event.recipes.gtceu.assembler('kubejs_mana_spreader')
        .itemInputs(
            '6x #botania:livingwood_logs',
            'gtceu:lv_emitter',
            'gtceu:glass_plate'
        )
        .itemOutputs(
            'botania:mana_spreader'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.remove({id: 'botania:redstone_spreader'})
    event.recipes.gtceu.assembler('kubejs_redstone_spreader')
        .itemInputs(
            'botania:mana_spreader',
            'minecraft:redstone_block'
        )
        .itemOutputs(
            'botania:redstone_spreader'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.remove({id: 'botania:elven_spreader'})
    event.recipes.gtceu.assembler('kubejs_elven_spreader')
        .itemInputs(
            '6x #botania:dreamwood_logs',
            '4x gtceu:elementium_plate',
            'gtceu:hv_emitter',
            '#forge:lenses'
        )
        .itemOutputs(
            'botania:elven_spreader'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    event.remove({id: 'botania:gaia_spreader'})
    event.recipes.gtceu.assembler('kubejs_gaia_spreader')
        .itemInputs(
            'botania:elven_spreader',
            'botania:life_essence',
            'botania:dragonstone'
        )
        .itemOutputs(
            'botania:gaia_spreader'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.HV] / 2)


    // Mana Core
    event.recipes.botania.mana_infusion('kubejs:mana_core', '#gtceu:circuits/lv', 1000)

    // Alchemy Catalyst
    event.remove({id: 'botania:alchemy_catalyst'})
    event.recipes.gtceu.assembler('kubejs_alchemy_catalyst')
        .itemInputs(
            'kubejs:mana_core',
            '4x gtceu:gold_plate',
            '4x botania:livingrock',
            'minecraft:brewing_stand'
        )
        .itemOutputs(
            'botania:alchemy_catalyst'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.LV])

    // Conjuration Catalyst
    event.remove({id: 'botania:conjuration_catalyst'})
    event.recipes.gtceu.assembler('kubejs_conjuration_catalyst')
        .itemInputs(
            'kubejs:mana_core',
            '4x gtceu:elementium_plate',
            '4x botania:livingrock',
            'botania:alchemy_catalyst'
        )
        .itemOutputs(
            'botania:conjuration_catalyst'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.MV])

    // Managlass
    event.remove({id: 'botania:mana_infusion/mana_glass'})
    event.recipes.gtceu.alloy_smelter('kubejs_managlass')
        .itemInputs(
            '#forge:glass',
            'gtceu:small_mana_dust'
        )
        .itemOutputs(
            'botania:mana_glass'
        )
        .duration(20*2)
        .EUt(GTValues.VA[GTValues.LV])

    // Runic Altar
    event.remove({output: 'botania:runic_altar'})
    event.recipes.gtceu.assembler('kubejs_runic_altar')
        .itemInputs(
            'kubejs:mana_core',
            '4x botania:livingrock',
            '4x gtceu:manasteel_plate'
        )
        .itemOutputs(
            'botania:runic_altar'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    // Botanical Brewery
    event.remove({id: 'botania:brewery'})
    event.recipes.gtceu.assembler('kubejs_botanical_brewery')
        .circuit(29)
        .itemInputs(
            'kubejs:mana_core',
            '4x botania:livingrock',
            '4x gtceu:manasteel_plate',
            'minecraft:brewing_stand',
            'botania:rune_mana'
        )
        .itemOutputs(
            'botania:brewery'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    // Elven Gateway Core
    event.remove({id: 'botania:alfheim_portal'})
    event.recipes.gtceu.circuit_assembler('elven_circuit')
        .circuit(16)
        .itemInputs(
            '2x #botania:glimmering_livingwood_logs',
            '2x #gtceu:circuits/hv',
            '8x gtceu:terrasteel_bolt',
            '16x gtceu:fine_zanite_steel_wire',
            '2x gtceu:manasteel_plate'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy 72'))
        .itemOutputs(
            'kubejs:elven_circuit'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('kubejs_elven_gateway_core')
        .circuit(16)
        .itemInputs(
            '2x kubejs:elven_circuit',
            '8x #botania:livingwood_logs',
            '8x gtceu:terrasteel_plate',
            'gtceu:hv_emitter',
            'gtceu:hv_sensor'
        )
        .itemOutputs(
            'botania:alfheim_portal'
        )
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.HV])

    // Mana Pylon
    event.remove({id: 'botania:mana_pylon'})
    event.recipes.gtceu.assembler('kubejs_mana_pylon')
        .circuit(16)
        .itemInputs(
            'botania:mana_diamond',
            '8x gtceu:manasteel_plate',
            '4x gtceu:gold_plate'
        )
        .itemOutputs(
            'botania:mana_pylon'
        )
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV])

    // Natura Pylon
    event.remove({id: 'botania:natura_pylon'})
    event.recipes.gtceu.assembler('kubejs_natura_pylon')
        .circuit(16)
        .itemInputs(
            'botania:mana_pylon',
            '8x gtceu:zanite_steel_plate',
            '4x botania:terrasteel_ingot'
        )
        .itemOutputs(
            'botania:natura_pylon'
        )    
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Gaia Pylon
    event.remove({id: 'botania:gaia_pylon'})
    event.recipes.gtceu.assembler('kubejs_gaia_pylon')
        .circuit(16)
        .itemInputs(
            'botania:mana_pylon',
            '4x botania:elementium_ingot',
            '4x gtceu:titanium_plate',
            '4x botania:pixie_dust'
        )
        .itemOutputs(
            'botania:gaia_pylon'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Mana Distributor
    event.remove({id: 'botania:mana_distributor'})
    event.recipes.gtceu.assembler('kubejs_mana_distributor')
        .circuit(16)
        .itemInputs(
            '4x botania:livingrock',
            'botania:mana_pool',
            'kubejs:mana_core'
        )
        .itemOutputs(
            'botania:mana_distributor'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    // Mana Void
    event.remove({id: 'botania:mana_void'})
    event.recipes.gtceu.assembler('kubejs_mana_void')
        .circuit(16)
        .itemInputs(
            '4x botania:livingrock',
            'trashcans:liquid_trash_can'
        )
        .itemOutputs(
            'botania:mana_void'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    // Mana Detector
    event.remove({id: 'botania:mana_detector'})
    event.recipes.gtceu.assembler('kubejs_mana_detector')
        .circuit(16)
        .itemInputs(
            '4x botania:livingrock',
            '4x minecraft:redstone',
            'minecraft:target'
        )
        .itemOutputs(
            'botania:mana_detector'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    // Spreader Turntable
    event.remove({id: 'botania:turntable'})
    event.recipes.gtceu.assembler('kubejs_spreader_turntable')
        .circuit(16)
        .itemInputs(
            '4x #botania:livingwood_logs',
            'minecraft:sticky_piston'
        )
        .itemOutputs(
            'botania:turntable'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    // Life Imbuer
    event.remove({id: 'botania:spawner_claw'})
    event.recipes.gtceu.assembler('kubejs_life_imbuer')
        .circuit(8)
        .itemInputs(
            '4x gtceu:elementium_plate',
            'enderio:zombie_electrode',
            '4x minecraft:blaze_rod',
            'gtceu:mv_emitter'
        )
        .itemOutputs(
            'botania:spawner_claw'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    // Mana Fluxfield
    event.remove({id: 'botania:mana_fluxfield'})
    event.recipes.gtceu.assembler('kubejs_mana_fluxfield')
        .circuit(8)
        .itemInputs(
            '4x botania:livingrock',
            'kubejs:mana_core',
            'minecraft:redstone_block'
        )
        .itemOutputs(
            'botania:mana_fluxfield'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    // Mana Prism
    event.remove({id: 'botania:prism'})
    event.recipes.gtceu.assembler('kubejs_mana_prism')
        .circuit(8)
        .itemInputs(
            '4x #forge:glass',
            'kubejs:mana_core',
            'botania:spectral_platform'
        )
        .itemOutputs(
            'botania:prism'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)
})

// yeet('botania:manasteel_ingot')