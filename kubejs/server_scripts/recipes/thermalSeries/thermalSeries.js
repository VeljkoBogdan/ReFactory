// they call me the yeeter (a function that hides an element from recipe viewers)
let yeet = (itemName) => {
	ServerEvents.recipes(event => {
		event.remove({ output: itemName })
	})
	ServerEvents.tags('item', event => {
		event.removeAllTagsFrom(itemName)
		event.add('c:hidden_from_recipe_viewers', itemName)
	})
}

ServerEvents.recipes(event => {
	// frame helper
	let frame = (output, input) => {
		event.shaped(output, [
			'III',
			'IWI',
			'III'
		], {
			W: '#forge:tools/wrenches',
			I: input
		})
	}

	// THERMAL MACHINE FRAME 
	event.shaped(
		'thermal:machine_frame',
		[
			'PPP',
			'PVP',
			'CPC',
		],
		{
			P: 'gtceu:stainless_steel_plate',
			V: '#forge:tools/wrenches',
			C: 'gtceu:electrum_single_cable'
		}
	)

	// Rubber replacement
	event.replaceInput({ input: 'thermal:cured_rubber' }, 'thermal:cured_rubber', 'gtceu:rubber_ingot')

	// Compost
	event.recipes.gtceu.assembler('compost')
		.circuit(8)
		.itemInputs(
			'4x #minecraft:dirt',
			'2x #forge:crops'
		)
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('6x thermal:compost')

	// Aqueous Accumulator
	event.remove({id: 'thermal:device_water_gen'})
	event.shaped(
		'thermal:device_water_gen',
		[
			'PLP',
			'PHP',
			'ISI'
		],
		{
			P: 'gtceu:steel_plate',
			S: 'thermal:redstone_servo',
			H: 'gtceu:lv_machine_hull',
			I: 'gtceu:lv_electric_pump',
			L: '#gtceu:circuits/lv'
		}
	)

	// Igneous Extruder
	event.remove({id: 'thermal:device_rock_gen'})
	event.shaped(
		'thermal:device_rock_gen',
		[
			'PLP',
			'PHP',
			'TST'
		],
		{
			P: 'gtceu:invar_plate',
			L: '#gtceu:circuits/lv',
			H: 'gtceu:lv_machine_hull',
			T: 'gtceu:lv_electric_piston',
			S: 'thermal:redstone_servo'
		}
	)


	// Phytogenic Insolator
	event.replaceInput({ id: 'thermal:machine_insolator' }, 'thermal:lumium_gear', 'gtceu:small_aluminium_gear')
	event.replaceInput({ id: 'thermal:machine_insolator' }, 'thermal:machine_frame', 'gtceu:mv_machine_hull')

	// Lumium and Signalum replacement
	event.replaceInput({ input: 'thermal:lumium_gear' }, 'thermal:lumium_gear', 'gtceu:lumium_gear')
	event.replaceInput({ input: 'thermal:lumium_ingot' }, 'thermal:lumium_ingot', 'gtceu:lumium_ingot')
	event.replaceInput({ input: 'thermal:lumium_plate' }, 'thermal:lumium_plate', 'gtceu:lumium_plate')
	event.replaceInput({ input: 'thermal:lumium_dust' }, 'thermal:lumium_dust', 'gtceu:lumium_dust')
	event.replaceInput({ input: 'thermal:lumium_nugget' }, 'thermal:lumium_nugget', 'gtceu:lumium_nugget')
	event.replaceInput({ input: 'thermal:lumium_block' }, 'thermal:lumium_block', 'gtceu:lumium_block')

	event.replaceInput({ input: 'thermal:signalum_gear' }, 'thermal:signalum_gear', 'gtceu:signalum_gear')
	event.replaceInput({ input: 'thermal:signalum_ingot' }, 'thermal:signalum_ingot', 'gtceu:signalum_ingot')
	event.replaceInput({ input: 'thermal:signalum_plate' }, 'thermal:signalum_plate', 'gtceu:signalum_plate')
	event.replaceInput({ input: 'thermal:signalum_dust' }, 'thermal:signalum_dust', 'gtceu:signalum_dust')
	event.replaceInput({ input: 'thermal:signalum_nugget' }, 'thermal:signalum_nugget', 'gtceu:signalum_nugget')
	event.replaceInput({ input: 'thermal:signalum_block' }, 'thermal:signalum_block', 'gtceu:signalum_block')

})

// hide thermal items
// ingots
yeet('thermal:tin_ingot')
yeet('thermal:lead_ingot')
yeet('thermal:silver_ingot')
yeet('thermal:nickel_ingot')
yeet('thermal:steel_ingot')
yeet('thermal:bronze_ingot')
yeet('thermal:electrum_ingot')
yeet('thermal:invar_ingot')
yeet('thermal:rose_gold_ingot')
//yeet(/thermal:lumium_/)
//yeet(/thermal:signalum_/)
// plates
yeet('thermal:tin_plate')
yeet('thermal:lead_plate')
yeet('thermal:silver_plate')
yeet('thermal:nickel_plate')
yeet('thermal:steel_plate')
yeet('thermal:bronze_plate')
yeet('thermal:electrum_plate')
yeet('thermal:invar_plate')
yeet('thermal:iron_plate')
yeet('thermal:copper_plate')
yeet('thermal:netherite_plate')
yeet('thermal:gold_plate')
yeet('thermal:rose_gold_plate')
// dusts
yeet('thermal:tin_dust')
yeet('thermal:lead_dust')
yeet('thermal:silver_dust')
yeet('thermal:nickel_dust')
yeet('thermal:steel_dust')
yeet('thermal:bronze_dust')
yeet('thermal:electrum_dust')
yeet('thermal:invar_dust')
yeet('thermal:iron_dust')
yeet('thermal:copper_dust')
yeet('thermal:netherite_dust')
yeet('thermal:gold_dust')
yeet('thermal:rose_gold_dust')
yeet('thermal:lumium_dust')
// gears
yeet('thermal:tin_gear')
yeet('thermal:lead_gear')
yeet('thermal:silver_gear')
yeet('thermal:nickel_gear')
yeet('thermal:steel_gear')
yeet('thermal:bronze_gear')
yeet('thermal:electrum_gear')
yeet('thermal:invar_gear')
yeet('thermal:iron_gear')
yeet('thermal:copper_gear')
yeet('thermal:netherite_gear')
yeet('thermal:gold_gear')
yeet('thermal:rose_gold_gear')
// rubber
yeet('thermal:cured_rubber')
yeet('thermal:rubber')

// others
yeet('thermal:sulfur_dust')