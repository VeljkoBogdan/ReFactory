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

    // remove orechid ancient debris gen
    event.remove({ id: 'botania:orechid_ignem/ancient_debris' })

    // Remove default grass seed recipe
    event.remove({ id: 'botania:mana_infusion/grass_seeds' })
    
    // APOTHECARY
    event.shaped(
        'botania:apothecary_default',
        [
            'SPS',
            ' C ',
            'CCC'
        ],
        {
            C: 'minecraft:stone',
            S: 'minecraft:stone_slab',
            P: 'botania:fertilizer'
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
    // DEPRECATED: Nature's aura recipe
    // event.recipes.botania.petal_apothecary(
    //     'minecraft:sugar_cane', 
    //     [
    //         'minecraft:carrot'
    //     ],
    //     '#forge:seeds'
    // )

    // replace mana pool recipe
    event.remove({ id: 'botania:mana_pool' })
    event.recipes.gtceu.assembler('kubejs_mana_pool')
        .circuit(1)
        .itemInputs(
            '8x gtceu:livingrock_plate'
        )
        .itemOutputs(
            'botania:mana_pool'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.LV])

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
    event.shaped(
        'botania:mana_spreader',
        [
            'LLL',
            'LEP',
            'LLL'
        ],
        {
            L: '#botania:livingwood_logs',
            E: 'gtceu:lv_emitter',
            P: 'gtceu:utherium_plate'
        }
    )

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

    // Livingrock plate
    // Water
    event.recipes.gtceu.cutter('cut_livingrock_block_to_plate_water')
        .itemInputs('botania:livingrock')
        .inputFluids('minecraft:water 17')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20*30)
    // Distilled Water
    event.recipes.gtceu.cutter('cut_livingrock_block_to_plate_distilled_water')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20*25)
    // Lubricant
    event.recipes.gtceu.cutter('cut_livingrock_block_to_plate')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20*20)

    // Livingwood plate
    // Water
    event.recipes.gtceu.cutter('cut_livingwood_block_to_plate_water')
        .itemInputs('#botania:livingwood_logs')
        .inputFluids('minecraft:water 17')
        .itemOutputs('9x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20*30)
    // Distilled Water
    event.recipes.gtceu.cutter('cut_livingwood_block_to_plate_distilled_water')
        .itemInputs('#botania:livingwood_logs')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('9x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20*25)
    // Lubricant
    event.recipes.gtceu.cutter('cut_livingwood_block_to_plate')
        .itemInputs('#botania:livingwood_logs')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('9x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20*20)

    // Dirt from Dried Salt
    event.recipes.botania.petal_apothecary(
        '8x minecraft:dirt', 
        [
            'biomesoplenty:dried_salt',
            'biomesoplenty:dried_salt',
            'biomesoplenty:dried_salt',
            'biomesoplenty:dried_salt',
            'biomesoplenty:dried_salt',
            'biomesoplenty:dried_salt',
            'biomesoplenty:dried_salt',
            'biomesoplenty:dried_salt'
        ],
        'minecraft:bone_meal'
    )

    // Clay from dirt
    event.recipes.botania.petal_apothecary(
        '8x minecraft:clay_ball',
        [
            'minecraft:dirt',
            'minecraft:dirt',
            'minecraft:dirt',
            'minecraft:dirt',
            'minecraft:dirt',
            'minecraft:dirt',
            'minecraft:dirt',
            'minecraft:dirt'
        ],
        '#botania:petals'
    )

    // Feathers from string
    event.recipes.botania.petal_apothecary(
        '4x minecraft:feather',
        [
            'minecraft:string',
            'minecraft:string',
            'minecraft:string',
            'minecraft:string'
        ],
        '#forge:seeds'
    )

    // Terrasteel mana price reduction from 500k to 10k
    event.remove({id: 'botania:terra_plate/terrasteel_ingot'})
    event.recipes.botania.terra_plate(
        'botania:terrasteel_ingot',
        [
            'botania:manasteel_ingot',
            'kubejs:crystalized_primal_sap',
            'botania:mana_pearl'
        ],
        10000
    )

    // Grass for dead grass and desert grass
    event.recipes.botania.petal_apothecary(
        '2x grass',
        [
            'biomesoplenty:desert_grass',
            'naturesaura:gold_powder'
        ],
        'biomesoplenty:desert_grass'
    )
    event.recipes.botania.petal_apothecary(
        '2x grass',
        [
            'biomesoplenty:dead_grass',
            'naturesaura:gold_powder'
        ],
        'biomesoplenty:dead_grass'
    )

    // Oak sapling recipe
    event.recipes.botania.petal_apothecary(
        '2x oak_sapling',
        [
            '#minecraft:saplings',
            'naturesaura:gold_powder'
        ],
        '#minecraft:leaves'
    )

    // Need mana pearl block for this!
    // event.recipes.botania.terra_plate(
    //     'botania:terrasteel_block',
    //     [
    //         'botania:manasteel_block',
    //         'botania:mana_diamond_block',
    //         'botania:mana_pearl'
    //     ],
    //     90000
    // )

    // Gaia ingot
    event.remove({id:'botania:gaia_ingot'})
    // DEPRECATED FOLLOWING BLOOD MAGIC UPDATE
    // event.recipes.gtceu.large_chemical_reactor('large_chemical_reactor/gaia_ingot')
    //     .itemInputs(
    //         "2x botania:terrasteel_ingot",
    //         "2x bloodmagic:reinforcedslate",
    //         '4x botania:life_essence'
    //     )
    //     .itemOutputs('2x botania:gaia_ingot')
    //     .duration(20*8)
    //     .EUt(GTValues.VA[GTValues.HV])

    // Liquid soul
    // event.recipes.gtceu.chemical_reactor('chemical_reactor/liquid_soul')
    //     .itemInputs(
    //         "gtceu:mythril_dust",
    //         '4x minecraft:soul_sand'
    //     )
    //     .inputFluids(Fluid.of('minecraft:lava', 1000))
    //     .outputFluids(Fluid.of('gtceu:liquid_soul', 144*8))
    //     .duration(20*8)
    //     .EUt(GTValues.VA[GTValues.EV])
    
    // Gaia spirits
    event.remove({output: 'botania:life_essence'})
    event.recipes.gtceu.chemical_reactor('chemical_reactor/gaia_spirits')
        .itemInputs('2x botania:pixie_dust')
        .inputFluids(Fluid.of('gtceu:liquid_soul', 144*4))
        .itemOutputs('4x botania:life_essence')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.MV])

    // Primal moss recipes
    event.recipes.botania.mana_infusion(
        'kubejs:primal_moss',
        'undergarden:mogmoss',
        500
    )

    event.recipes.gtceu.large_mana_pool('primal_moss')
        .itemInputs('undergarden:mogmoss')
        .inputFluids(Fluid.of('blasmatech:mana', 500))
        .itemOutputs('kubejs:primal_moss')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.MV])

    // Enriched primal sap
    event.recipes.gtceu.chemical_reactor('enriched_primal_sap')
        .itemInputs(
            '2x kubejs:primal_moss',
            'glowstone_dust'
        )
        .inputFluids(Fluid.of('water', 288))
        .outputFluids(Fluid.of('gtceu:enriched_primal_sap', 288))
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.MV])

    // Crystalized primal sap
    event.recipes.gtceu.fluid_solidifier('crystalized_primal_sap')
        .inputFluids(Fluid.of('gtceu:enriched_primal_sap', 144))
        .itemOutputs('kubejs:crystalized_primal_sap')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV] / 2)
})

yeet('botania:diluted_pool')