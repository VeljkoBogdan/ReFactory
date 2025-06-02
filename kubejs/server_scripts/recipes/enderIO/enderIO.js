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

ServerEvents.recipes(event => {
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
			P: 'enderio:soularium_ingot',
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
})

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

materials.map(material => {
    yeet(`enderio:${material}_ingot`)    
    yeet(`enderio:${material}_nugget`)    
    yeet(`enderio:${material}_block`)    
})