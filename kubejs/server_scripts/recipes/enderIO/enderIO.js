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
			P: 'gtceu:soularium_pllate',
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
    
    event.remove({id: 'enderio:primitive_alloy_smelter'})
    event.remove({id: 'enderio:stirling_generator'})
})



materials.map(material => {
    yeet(`enderio:${material}_ingot`)    
    yeet(`enderio:${material}_nugget`)    
    yeet(`enderio:${material}_block`)    
})