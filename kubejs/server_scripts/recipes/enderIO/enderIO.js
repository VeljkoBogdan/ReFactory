// they call me the yeeter (a function that hides an element from recipe viewers)
let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
    })
}

let materials = [
    'energetic_alloy',
    'vibrant_alloy',
    'dark_steel',
    'end_steel',
    'copper_alloy',
    'redstone_alloy',
    'conductive_alloy',
    'pulsating_alloy',
    'soularium'
]

ServerEvents.recipes(event => {

    // Converting ingots from enderio to gt
    materials.map(material => {
        event.shapeless(
            `gtceu:${material}_ingot`,
            [`enderio:${material}_ingot`]
        )
    })

    event.recipes.gtceu.alloy_smelter('conductive_alloy')
        .itemInputs(
            'iron_ingot',
            '2x redstone'
        )
        .itemOutputs('gtceu:conductive_alloy_ingot')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('soularium')
        .itemInputs(
            'gold_ingot',
            '2x soul_sand'
        )
        .itemOutputs('gtceu:soularium_ingot')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('redstone_alloy_dust')
        .itemInputs(
            'gtceu:copper_dust',
            'gtceu:silicon_dust',
            'minecraft:redstone'
        )
        .itemOutputs('3x gtceu:redstone_alloy_dust')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('pulsating_alloy')
        .itemInputs(
            'iron_ingot',
            'gtceu:ender_pearl_dust'
        )
        .itemOutputs('gtceu:pulsating_alloy_ingot')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('end_steel')
        .itemInputs(
            'gtceu:dark_steel_ingot',
            '2x minecraft:end_stone'
        )
        .itemOutputs('gtceu:end_steel_ingot')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('dark_steel')
        .itemInputs(
            'gtceu:steel_ingot',
            'minecraft:obsidian'
        )
        .itemOutputs('gtceu:dark_steel_ingot')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('copper_alloy')
        .itemInputs(
            'copper_ingot',
            'gtceu:silicon_dust'
        )
        .itemOutputs('gtceu:copper_alloy_ingot')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV])

    // REMOVE ENDERIO MACHINE CHASSIS RECIPES
	event.remove({ id: 'thermal:machine_frame' })
	event.remove({ id: 'enderio:void_chassis' })
	event.remove({ id: 'enderio:ensouled_chassis' })
	
	// ENDERIO VOID MACHINE CHASSIS
	event.shaped(
		'enderio:void_chassis',
		[
			'PPP',
			'PVP',
			'CPC',
		],
		{
			P: 'gtceu:aluminium_plate',
			V: '#forge:tools/wrenches',
			C: 'gtceu:copper_single_cable'
		}
	)

	// ENDERIO SOUL MACHINE CHASSIS
	event.shaped(
		'enderio:ensouled_chassis',
		[
			'PPP',
			'PVP',
			'CPC',
		],
		{
			P: 'gtceu:soularium_plate',
			V: 'enderio:void_chassis',
			C: 'gtceu:electrum_single_cable'
		}
	)

	// electromagnet
	event.remove({ id: 'enderio:electromagnet' })
	event.shaped(
		'enderio:electromagnet',
		[
			'PPP',
			'P P',
			'C C',
		],
		{
			P: 'gtceu:steel_ingot',
			C: 'gtceu:magnetic_steel_ingot'
		}
	)

	// Replace enderio ingots with gtceu ingots
	event.replaceInput({ input: 'enderio:energetic_alloy_ingot' }, 'enderio:energetic_alloy_ingot', 'gtceu:energetic_alloy_ingot')
	event.replaceInput({ input: 'enderio:vibrant_alloy_ingot' }, 'enderio:vibrant_alloy_ingot', 'gtceu:vibrant_alloy_ingot')

	// energetic alloy dust recipe
	event.recipes.gtceu.mixer('kubejs_enderio_energetic_alloy_dust')
	.circuit(3)
	.itemInputs(
		'gtceu:gold_dust',
		'minecraft:redstone'
	)
	.itemOutputs('gtceu:energetic_alloy_dust')
	.duration(20*10)
	.EUt(GTValues.VA[GTValues.MV])

	// vibrant alloy dust recipe
	event.recipes.gtceu.mixer('kubejs_enderio_vibrant_alloy_dust')
	.circuit(3)
	.itemInputs(
		'gtceu:energetic_alloy_dust',
		'gtceu:ender_pearl_dust'
	)
	.itemOutputs('gtceu:vibrant_alloy_dust')
	.duration(20*10)
	.EUt(GTValues.VA[GTValues.MV])

	// conduit binder composite recipe
	event.remove( {id: 'enderio:conduit_binder_composite'} )
	event.recipes.gtceu.mixer('kubejs_enderio_conduit_binder_composite')
	.circuit(31)
	.itemInputs(
		'minecraft:clay_ball',
		'#forge:sand',
		'2x #forge:gravel'
	)
	.itemOutputs('4x enderio:conduit_binder_composite')
	.duration(20*5)
	.EUt(GTValues.VA[GTValues.ULV])

    // capacitors
    event.remove({id: 'enderio:basic_capacitor'})
    event.remove({id: 'enderio:double_layer_capacitor'})
    event.remove({id: 'enderio:octadic_capacitor'})

    event.shaped(
        "enderio:basic_capacitor",
        [
            'RPR',
            'CIC',
            'BHB'
        ],
        {
            R: 'gtceu:redstone_alloy_foil',
            P: 'gtceu:redstone_alloy_plate',
            C: 'gtceu:conductive_alloy_plate',
            I: 'enderio:grains_of_infinity',
            B: 'gtceu:dark_steel_bolt',
            H: '#forge:tools/hammers'
        }
    )
    
    event.shaped(
        "enderio:double_layer_capacitor",
        [
            'FFF',
            'CIC',
            'BHB'
        ],
        {
            C: 'enderio:basic_capacitor',
            I: 'enderio:grains_of_infinity',
            B: 'gtceu:energetic_alloy_bolt',
            F: 'gtceu:energetic_alloy_foil',
            H: '#forge:tools/hammers'
        }
    )
        
    event.shaped(
        "enderio:octadic_capacitor",
        [
            'FFF',
            'CIC',
            'BHB'
        ],
        {
            C: 'enderio:double_layer_capacitor',
            I: 'enderio:grains_of_infinity',
            B: 'gtceu:vibrant_alloy_bolt',
            F: 'gtceu:vibrant_alloy_foil',
            H: '#forge:tools/hammers'
        }
    )
    
    // capacitor banks
    event.remove({output: 'enderio:basic_capacitor_bank'})
    event.remove({output: 'enderio:advanced_capacitor_bank'})
    event.remove({output: 'enderio:vibrant_capacitor_bank'})

    event.shaped(
        'enderio:basic_capacitor_bank',
        [
            'PCP',
            'CFC',
            'PCP'
        ],
        {
            P: 'gtceu:conductive_alloy_plate',
            C: 'enderio:basic_capacitor',
            F: 'enderio:void_chassis'
        }
    )
    
    event.shaped(
        'enderio:advanced_capacitor_bank',
        [
            'PCP',
            'CFC',
            'PCP'
        ],
        {
            P: 'gtceu:energetic_alloy_plate',
            C: 'enderio:double_layer_capacitor',
            F: 'enderio:void_chassis'
        }
    )
        
    event.shaped(
        'enderio:vibrant_capacitor_bank',
        [
            'PCP',
            'CFC',
            'PCP'
        ],
        {
            P: 'gtceu:vibrant_alloy_plate',
            C: 'enderio:octadic_capacitor',
            F: 'enderio:vibrant_crystal'
        }
    )

    event.remove({output: 'enderio:impulse_hopper'})
    event.shaped(
        'enderio:impulse_hopper',
        [
            'CHC',
            'GMG',
            'CRC'
        ],
        {
            C: "gtceu:copper_alloy_plate",
            H: 'hopper',
            G: 'gtceu:iron_gear',
            M: 'enderio:void_chassis',
            R: 'gtceu:redstone_alloy_plate'
        }
    )
    
    event.remove({output: 'enderio:crafter'})
    event.shaped(
        'enderio:crafter',
        [
            'GGG',
            'RMR',
            'CTC'
        ],
        {
            C: "gtceu:copper_alloy_plate",
            G: 'gtceu:iron_gear',
            M: 'enderio:void_chassis',
            R: 'gtceu:redstone_alloy_plate',
            T: 'crafting_table'
        }
    )
        
    event.remove({output: 'enderio:painting_machine'})
    event.shaped(
        'enderio:painting_machine',
        [
            'DDD',
            'GMG',
            'CRC'
        ],
        {
            C: "gtceu:copper_alloy_plate",
            G: 'gtceu:iron_gear',
            M: 'enderio:void_chassis',
            R: 'gtceu:redstone_alloy_plate',
            D: '#forge:dyes'
        }
    )
            
    event.remove({output: 'enderio:alloy_smelter'})
    event.shaped(
        'enderio:alloy_smelter',
        [
            'DFD',
            'FMF',
            'GFG'
        ],
        {
            G: 'gtceu:iron_gear',
            M: 'enderio:void_chassis',
            D: 'gtceu:dark_steel_plate',
            F: 'furnace'
        }
    )
                
    event.remove({output: 'enderio:sag_mill'})
    event.shaped(
        'enderio:sag_mill',
        [
            'DHD',
            'GMG',
            'CRC'
        ],
        {
            C: "gtceu:copper_alloy_plate",
            G: 'gtceu:iron_gear',
            M: 'enderio:void_chassis',
            R: 'gtceu:redstone_alloy_plate',
            D: 'gtceu:dark_steel_plate',
            H: 'gtceu:diamond_grinding_head'
        }
    )
                    
    event.remove({output: 'enderio:enchanter'})
    event.shaped(
        'enderio:enchanter',
        [
            'PEP',
            ' D ',
            'PPP'
        ],
        {
            P: 'gtceu:dark_steel_plate',
            E: 'enchanting_table',
            D: 'gtceu:dark_steel_block'
        }
    )
                        
    event.remove({output: 'enderio:vacuum_chest'})
    event.shaped(
        'enderio:vacuum_chest',
        [
            'PHP',
            'PCP',
            'PHP'
        ],
        {
            P: 'gtceu:dark_steel_plate',
            C: 'enderio:pulsating_crystal',
            H: 'hopper'
        }
    )
                            
    event.remove({output: 'enderio:xp_vacuum'})
    event.shaped(
        'enderio:xp_vacuum',
        [
            'PHP',
            'PXP',
            'PHP'
        ],
        {
            P: 'gtceu:dark_steel_plate',
            X: 'enderio:experience_rod',
            H: 'hopper'
        }
    )
                                
    event.remove({output: 'enderio:experience_rod'})
    event.shaped(
        'enderio:experience_rod',
        [
            ' ER',
            'EVE',
            'RE '
        ],
        {
            E: 'gtceu:energetic_alloy_foil',
            R: 'gtceu:soularium_rod',
            V: 'enderio:vibrant_crystal'
        }
    )
                                    
    event.remove({output: 'enderio:travel_anchor'})
    event.shaped(
        'enderio:travel_anchor',
        [
            'EPE',
            'PVP',
            'EPE'
        ],
        {
            E: 'gtceu:energetic_alloy_plate',
            P: 'gtceu:vibrant_alloy_plate',
            V: 'enderio:vibrant_crystal'
        }
    )

    event.remove({output: 'enderio:photovoltaic_composite'})
    event.recipes.gtceu.mixer('photovoltaic_composite')
        .itemInputs(
            'gtceu:silicon_dust',
            'gtceu:lapis_dust',
            'gtceu:coal_dust'
        )
        .itemOutputs(
            '3x enderio:photovoltaic_composite'
        )
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.shaped(
        'enderio:photovoltaic_plate',
        [
            'GGG',
            'CCC',
            'PRP'
        ],
        {
            C: 'enderio:photovoltaic_composite',
            P: 'gtceu:dark_steel_plate',
            R: 'gtceu:redstone_alloy_plate',
            G: '#forge:glass_panes'
        }
    )
    
    event.shaped(
        'enderio:energetic_photovoltaic_module',
        [
            'PPP',
            'CLC',
            'EEE'
        ],
        {
            P: 'enderio:photovoltaic_plate',
            C: 'enderio:basic_capacitor',
            L: '#gtceu:circuits/lv',
            E: 'gtceu:energetic_alloy_plate'
        }
    )
        
    event.shaped(
        'enderio:pulsating_photovoltaic_module',
        [
            'PPP',
            'CLC',
            'EEE'
        ],
        {
            P: 'enderio:photovoltaic_plate',
            C: 'enderio:double_layer_capacitor',
            L: 'enderio:energetic_photovoltaic_module',
            E: 'gtceu:pulsating_alloy_plate'
        }
    )
            
    event.shaped(
        'enderio:vibrant_photovoltaic_module',
        [
            'PPP',
            'CLC',
            'EEE'
        ],
        {
            P: 'enderio:photovoltaic_plate',
            C: 'enderio:octadic_capacitor',
            L: 'enderio:pulsating_photovoltaic_module',
            E: 'gtceu:vibrant_alloy_plate'
        }
    )

    event.remove({id: 'enderio:drain'})
    event.shaped(
        'enderio:drain',
        [
            'PGP',
            'PMP',
            'IBI'
        ],
        {
            P: 'gtceu:copper_alloy_plate',
            G: "#forge:glass",
            M: 'enderio:void_chassis',
            I: 'gtceu:iron_gear',
            B: 'bucket'
        }
    )

    event.remove({id: 'enderio:wired_charger'})
    event.shaped(
        'enderio:wired_charger',
        [
            'III',
            'PMP',
            'CBC'
        ],
        {
            I: 'gtceu:conductive_alloy_plate',
            P: 'gtceu:copper_alloy_plate',
            M: 'enderio:void_chassis',
            C: "gtceu:tin_quadruple_cable",
            B: 'gtceu:dark_steel_plate'
        }
    )

    event.remove({id: 'enderio:soul_binder'})
    event.shaped(
        'enderio:soul_binder',
        [
            'SVS',
            'GMG',
            'SZS'
        ],
        {
            M: 'enderio:ensouled_chassis',
            S: 'gtceu:soularium_plate',
            V: 'enderio:empty_soul_vial',
            G: 'gtceu:energetic_alloy_gear',
            Z: 'enderio:z_logic_controller'
        }
    )

    event.remove({id: 'enderio:powered_spawner'})
    event.shaped(
        'enderio:powered_spawner',
        [
            'SBS',
            'CMC',
            'GZG'
        ],
        {
            M: 'enderio:ensouled_chassis',
            S: 'gtceu:soularium_plate',
            G: 'gtceu:energetic_alloy_gear',
            Z: 'enderio:z_logic_controller',
            B: 'enderio:broken_spawner',
            C: 'enderio:vibrant_crystal'
        }
    )

    event.remove({id: 'enderio:slice_and_splice'})
    event.shaped(
        'enderio:slice_and_splice',
        [
            'SHS',
            'GMG',
            'SBS'
        ],
        {
            M: 'enderio:ensouled_chassis',
            S: 'gtceu:soularium_plate',
            G: 'gtceu:energetic_alloy_gear',
            B: "gtceu:cobalt_brass_buzz_saw_blade",
            H: '#forge:heads'
        }
    )

    event.remove({id: 'enderio:soul_engine'})
    event.shaped(
        'enderio:soul_engine',
        [
            'SPS',
            'TMT',
            'SES'
        ],
        {
            M: 'enderio:ensouled_chassis',
            S: 'gtceu:soularium_plate',
            P: 'gtceu:mv_electric_piston',
            T: 'enderio:pressurized_fluid_tank',
            E: "enderio:zombie_electrode"
        }
    )

    event.remove({id: 'enderio:xp_obelisk'})
    event.shaped(
        'enderio:xp_obelisk',
        [
            ' R ',
            ' S ',
            'SMS'
        ],
        {
            M: 'enderio:ensouled_chassis',
            S: 'gtceu:soularium_plate',
            R: "enderio:experience_rod"
        }
    )

    event.remove({id: 'enderio:aversion_obelisk'})
    event.shaped(
        'enderio:aversion_obelisk',
        [
            ' E ',
            'ASA',
            'SMS'
        ],
        {
            M: 'enderio:ensouled_chassis',
            S: 'gtceu:soularium_plate',
            E: "enderio:enderman_head",
            A: 'gtceu:energetic_alloy_foil'
        }
    )

    event.remove({id: 'enderio:vibrant_crystal'})
    event.remove({id: 'enderio:pulsating_crystal'})

    event.recipes.gtceu.autoclave('pulsating_crystal')
        .itemInputs('diamond')
        .inputFluids(Fluid.of("gtceu:flowing_pulsating_alloy", 144))
        .itemOutputs('enderio:pulsating_crystal')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    event.recipes.gtceu.autoclave('vibrant_crystal')
        .itemInputs('enderio:pulsating_crystal')
        .inputFluids(Fluid.of("gtceu:molten_vibrant_alloy", 144))
        .itemOutputs('enderio:vibrant_crystal')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    
    event.remove({id: 'enderio:energetic_photovoltaic_module'})
    event.remove({id: 'enderio:pulsating_photovoltaic_module'})
    event.remove({id: 'enderio:vibrant_photovoltaic_module'})
    event.remove({id: 'enderio:alloy_smelting/photovoltaic_plate'})
    event.remove({id: 'enderio:primitive_alloy_smelter'})
    event.remove({id: 'enderio:stirling_generator'})

    event.remove({id: 'enderio:redstone_filter_base'})
    event.shaped(
        'enderio:redstone_filter_base',
        [
            'RPR',
            'PBP',
            'RPR'
        ],
        {
            R: 'gtceu:redstone_alloy_plate',
            P: 'paper',
            B: 'gtceu:dark_steel_plate'
        }
    )

    materials.map(material => {
        event.remove({output: `enderio:${material}_grinding_ball`})
        event.shaped(
            `enderio:${material}_grinding_ball`,
            [
                'FPF',
                'PHP',
                'FPF'
            ],
            {
                F: `gtceu:${material}_foil`,
                P: `gtceu:${material}_plate`,
                H: '#forge:tools/files'
            }
        )
    })

    event.remove({id: 'enderio:yeta_wrench'})
    event.shaped(
        'enderio:yeta_wrench',
        [
            'PHP',
            'PPP',
            ' P '
        ],
        {
            P: 'gtceu:copper_alloy_plate',
            H: '#forge:tools/hammers'
        }
    )

    event.remove({output: 'enderio:coordinate_selector'})
    event.shaped(
        'enderio:coordinate_selector',
        [
            'PPP',
            'ECP',
            '  P'
        ],
        {
            P: 'gtceu:copper_alloy_plate',
            C: 'compass',
            E: "gtceu:ender_pearl_plate"
        }
    )
    
    event.remove({output: 'enderio:staff_of_travelling'})
    event.shaped(
        'enderio:staff_of_travelling',
        [
            '  E',
            ' R ',
            'R  '
        ],
        {
            R: 'gtceu:dark_steel_rod',
            E: "enderio:ender_crystal"
        }
    )
        
    event.remove({output: 'enderio:fluid_tank'})
    event.shaped(
        'enderio:fluid_tank',
        [
            'PBP',
            'BGB',
            'PBP'
        ],
        {
            P: 'gtceu:iron_plate',
            B: 'iron_bars',
            G: '#forge:glass'
        }
    )
        
    event.remove({output: 'enderio:pressurized_fluid_tank'})
    event.shaped(
        'enderio:pressurized_fluid_tank',
        [
            'PBP',
            'BGB',
            'PBP'
        ],
        {
            P: 'gtceu:double_dark_steel_plate',
            B: 'enderio:dark_steel_bars',
            G: 'enderio:fluid_tank'
        }
    )

    event.remove({id: 'enderio:empty_soul_vial'})
    event.shaped(
        'enderio:empty_soul_vial',
        [
            ' P ',
            'Q Q',
            ' Q '
        ],
        {
            P: 'gtceu:double_soularium_plate',
            Q: '#enderio:fused_quartz'
        }
    )

    event.remove({output: 'enderio:energy_conduit'})
    event.shaped(
        '6x enderio:energy_conduit',
        [
            'BBB',
            'RRR',
            'BBB'
        ],
        {
            B: 'enderio:conduit_binder',
            R: 'gtceu:conductive_alloy_plate'
        }
    )

    event.remove({output: 'enderio:fluid_conduit'})
    event.shaped(
        '6x enderio:fluid_conduit',
        [
            'BBB',
            'RRR',
            'BBB'
        ],
        {
            B: 'enderio:conduit_binder',
            R: '#enderio:clear_glass'
        }
    )

    event.remove({output: 'enderio:pressurized_fluid_conduit'})
    event.shaped(
        '6x enderio:pressurized_fluid_conduit',
        [
            'BBB',
            'RRR',
            'BBB'
        ],
        {
            B: 'enderio:conduit_binder',
            R: '#enderio:fused_quartz'
        }
    )

    event.remove({output: 'enderio:ender_fluid_conduit'})
    event.shaped(
        '6x enderio:ender_fluid_conduit',
        [
            'BBB',
            'RRR',
            'BBB'
        ],
        {
            B: 'enderio:conduit_binder',
            R: 'gtceu:vibrant_alloy_plate'
        }
    )

    event.remove({output: 'enderio:redstone_conduit'})
    event.shaped(
        '6x enderio:redstone_conduit',
        [
            'BBB',
            'RRR',
            'BBB'
        ],
        {
            B: 'enderio:conduit_binder',
            R: 'gtceu:redstone_alloy_plate'
        }
    )

    event.remove({output: 'enderio:item_conduit'})
    event.shaped(
        '6x enderio:item_conduit',
        [
            'BBB',
            'RRR',
            'BBB'
        ],
        {
            B: 'enderio:conduit_binder',
            R: 'gtceu:pulsating_alloy_plate'
        }
    )

    event.remove({output: 'enderio:extraction_speed_upgrade_1'})
    event.shaped(
        '2x enderio:extraction_speed_upgrade_1',
        [
            'RSR',
            'SPS',
            'RSR'
        ],
        {
            R: 'gtceu:redstone_alloy_plate',
            S: 'gtceu:double_steel_plate',
            P: 'piston'
        }
    )

    event.remove({output: 'enderio:extraction_speed_upgrade_2'})
    event.shaped(
        '2x enderio:extraction_speed_upgrade_2',
        [
            'RSR',
            'SPS',
            'RPR'
        ],
        {
            R: 'gtceu:soularium_plate',
            S: 'gtceu:double_aluminium_plate',
            P: 'enderio:extraction_speed_upgrade_1'
        }
    )

    event.remove({output: 'enderio:extraction_speed_upgrade_3'})
    event.shaped(
        '2x enderio:extraction_speed_upgrade_3',
        [
            'RSR',
            'SPS',
            'RPR'
        ],
        {
            R: 'gtceu:energetic_alloy_plate',
            S: 'gtceu:double_aluminium_plate',
            P: 'enderio:extraction_speed_upgrade_2'
        }
    )

    event.remove({output: 'enderio:extraction_speed_upgrade_4'})
    event.shaped(
        '2x enderio:extraction_speed_upgrade_4',
        [
            'RSR',
            'SPS',
            'RPR'
        ],
        {
            R: 'gtceu:vibrant_alloy_plate',
            S: 'gtceu:double_aluminium_plate',
            P: 'enderio:extraction_speed_upgrade_3'
        }
    )

    event.remove({output: 'enderio:dark_steel_bars'})
    event.shaped(
        '3x enderio:dark_steel_bars',
        [
            'RRR',
            'RRR',
            'HSF'
        ],
        {
            R: 'gtceu:dark_steel_rod',
            H: '#forge:tools/hammers',
            S: '#forge:tools/saws',
            F: '#forge:tools/files'
        }
    )
    event.recipes.gtceu.assembler('dark_steel_bars')
        .itemInputs('6x gtceu:dark_steel_rod')
        .itemOutputs('16x enderio:dark_steel_bars')
        .duration(20*12)
        .EUt(GTValues.VA[GTValues.MV] * 0.75)

    event.shaped(
        'enderio:broken_spawner',
        [
            'PMP',
            'BEB',
            'PMP'
        ],
        {
            P: 'gtceu:double_soularium_plate',
            M: 'gtceu:elementium_plate',
            B: 'enderio:dark_steel_bars',
            E: "minecraft:dragon_egg"
        }
    )

    
    
})



materials.map(material => {
    yeet(`enderio:${material}_ingot`)    
    yeet(`enderio:${material}_nugget`)    
    yeet(`enderio:${material}_block`)    
})