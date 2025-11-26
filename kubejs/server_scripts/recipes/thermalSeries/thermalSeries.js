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

let machineFrame = 'thermal:machine_frame'
let fluxCoil = 'thermal:rf_coil'
let servo = 'thermal:redstone_servo'

let hvMotor = 'gtceu:hv_electric_motor'
let hvPiston = 'gtceu:hv_electric_piston'
let hvPump = 'gtceu:hv_electric_pump'

let bronzeGear = 'gtceu:bronze_gear'
let steelGear = 'gtceu:steel_gear'
let aluminiumGear = 'gtceu:aluminium_gear'
let redstoneAlloyGear = 'gtceu:redstone_alloy_gear'
let conductiveIronGear = 'gtceu:conductive_alloy_gear'
let tinPlate = 'gtceu:tin_plate'
let steelPlate = 'gtceu:steel_plate'
let itemFilter = 'gtceu:item_filter'
let fluidFilter = 'gtceu:fluid_filter'
let tank = 'enderio:fluid_tank'
let pressureTank = 'enderio:pressurized_fluid_tank'
let silverPlate = 'gtceu:silver_plate'
let rubberPlate = 'gtceu:rubber_plate'

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

    // augment helper
    let augment = (output, vertical, horizontal, center) => {
        event.shaped(
            output,
            [
                ' V ',
                'HCH',
                ' V '
            ],
            {
                V: vertical,
                H: horizontal,
                C: center
            }
        )
    }

	// THERMAL MACHINE FRAME 
    event.remove({ id: 'thermal:machine_frame' })
	event.shaped(
		'thermal:machine_frame',
		[
			'PCP',
			'CVC',
			'PCP',
		],
		{
			P: 'gtceu:double_stainless_steel_plate',
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
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV] / 2)

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

    // Remove Signalum recipes
    event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
    event.remove({id: 'thermal:storage/signalum_ingot_from_nuggets'})
    event.remove({id: 'thermal:smelting/signalum_ingot_from_dust_smelting'})
    event.remove({id: 'thermal:smelting/signalum_ingot_from_dust_blasting'})
    event.remove({id: 'enderio:smelting/thermal/smelting/signalum_ingot_from_dust_smelting'})
    event.remove({id: 'thermal:furnace_1596781176'})
    event.remove({id: 'thermal:machines/smelter/smelter_alloy_signalum'})
    event.remove({id: 'thermal:machines/smelter/smelter_signalum_dust'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_signalum'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/dust'})

    // Remove thermal glass in workbench crafting
    event.remove({id: 'thermal:fire_charge/obsidian_glass_2'})
    event.remove({id: 'thermal:fire_charge/signalum_glass_2'})
    event.remove({id: 'thermal:fire_charge/lumium_glass_2'})
    event.remove({id: 'thermal:fire_charge/enderium_glass_2'})
    
    // Flux Coil
    event.remove({id: 'thermal:rf_coil'})
    event.shaped(
        'thermal:rf_coil',
        [
            ' RG',
            'RGR',
            'GR '
        ],
        {
            R: 'redstone',
            G: 'gtceu:gold_rod'
        }
    )

    event.recipes.gtceu.assembler('rf_coil_assembler')
        .circuit(20)
        .itemInputs('2x gtceu:gold_rod', '3x redstone')
        .itemOutputs(fluxCoil)
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.MV])

    // Tinker's workbench
    event.remove({id: 'thermal:tinker_bench'})
    event.shaped(
        'thermal:tinker_bench',
        [
            'SSS',
            'GBG',
            'WRW'
        ],
        {
            S: 'gtceu:steel_plate',
            G: 'gtceu:iron_gear',
            B: 'crafting_table',
            W: '#minecraft:planks',
            R: fluxCoil
        }
    )

    // Redstone furnace
    event.remove({id: 'thermal:machine_furnace'})
    event.shaped(
        'thermal:machine_furnace',
        [
            'GRG',
            'FCF',
            'GRG'
        ],
        {
            G: redstoneAlloyGear,
            R: fluxCoil,
            F: 'ironfurnaces:iron_furnace',
            C: machineFrame
        }
    )

    // Sawmill
    event.remove({id: 'thermal:saw_blade'})
    event.remove({id: 'thermal:machine_sawmill'})
    event.shaped(
        'thermal:machine_sawmill',
        [
            'GSG',
            'MCM',
            'GRG'
        ],
        {
            G: redstoneAlloyGear,
            S: 'gtceu:stainless_steel_buzz_saw_blade',
            M: hvMotor,
            C: machineFrame,
            R: fluxCoil
        }
    )

    // Pulverizer
    event.remove({id: 'thermal:machine_pulverizer'})
    event.shaped(
        'thermal:machine_pulverizer',
        [
            'GDG',
            'MCM',
            'GRG'
        ],
        {
            G: redstoneAlloyGear,
            D: 'gtceu:diamond_grinding_head',
            M: hvMotor,
            C: machineFrame,
            R: fluxCoil
        }
    )

    // Induction smelter
    event.remove({id: 'thermal:machine_smelter'})
    event.shaped(
        'thermal:machine_smelter',
        [
            'FFF',
            'GCG',
            'IRI'
        ],
        {
            F: 'ironfurnaces:iron_furnace',
            G: redstoneAlloyGear,
            C: machineFrame,
            I: conductiveIronGear,
            R: fluxCoil
        }
    )

    // Centrifugal separator
    event.remove({id: 'thermal:machine_centrifuge'})
    event.shaped(
        'thermal:machine_centrifuge',
        [
            'MGM',
            'GCG',
            'MRM'
        ],
        {
            M: hvMotor,
            G: redstoneAlloyGear,
            C: machineFrame,
            R: fluxCoil
        }
    )

    // Multiservo Press
    event.remove({id: 'thermal:machine_press'})
    event.shaped(
        'thermal:machine_press',
        [
            'PGP',
            'GCG',
            'ARA'
        ],
        {
            P: hvPiston,
            G: redstoneAlloyGear,
            C: machineFrame,
            A: 'anvil',
            R: fluxCoil
        }
    )

    // Magma crucible
    event.remove({id: 'thermal:machine_crucible'})
    event.shaped(
        'thermal:machine_crucible',
        [
            'GTG',
            'CMC',
            'FFF'
        ],
        {
            G: conductiveIronGear,
            T: 'thermal:fluid_cell',
            C: fluxCoil,
            M: machineFrame,
            F: 'ironfurnaces:iron_furnace'
        }
    )

    // Blast chiller
    event.remove({id: 'thermal:machine_chiller'})
    event.shaped(
        'thermal:machine_chiller',
        [
            'PPP',
            'GMG',
            'FFF'
        ],
        {
            P: hvPump,
            G: redstoneAlloyGear,
            M: machineFrame,
            F: fluxCoil
        }
    )

    // Fractionating still
    event.remove({id: 'thermal:machine_refinery'})
    event.shaped(
        'thermal:machine_refinery',
        [
            'GTG',
            'PMP',
            'GRG'
        ],
        {
            G: redstoneAlloyGear,
            T: 'thermal:fluid_cell',
            P: hvPump,
            M: machineFrame,
            R: fluxCoil
        }
    )

    // Pyrolyzer
    event.remove({id: 'thermal:machine_pyrolyzer'})
    event.shaped(
        'thermal:machine_pyrolyzer',
        [
            'GRG',
            'RMR',
            'FFF'
        ],
        {
            G: conductiveIronGear,
            R: fluxCoil,
            M: machineFrame,
            F: 'ironfurnaces:iron_furnace'
        }
    )

    // Fluid Encapsulator
    event.remove({id: 'thermal:machine_bottler'})
    event.shaped(
        'thermal:machine_bottler',
        [
            'PFP',
            'BMB',
            'GRG'
        ],
        {
            P: hvPump,
            F: 'thermal:fluid_cell',
            B: '#forge:glass',
            M: machineFrame,
            G: redstoneAlloyGear,
            R: fluxCoil
        }
    )

    // Alchemical Imbuer
    event.remove({id: 'thermal:machine_brewer'})
    event.shaped(
        'thermal:machine_brewer',
        [
            'PBP',
            'GMG',
            'GRG'
        ],
        {
            P: hvPump,
            B: 'brewing_stand',
            G: redstoneAlloyGear,
            M: machineFrame,
            R: fluxCoil
        }
    )

    // Crystallizer
    event.remove({id: 'thermal:machine_crystallizer'})
    event.shaped(
        'thermal:machine_crystallizer',
        [
            'GLG',
            'PMP',
            'GRG'
        ],
        {
            G: redstoneAlloyGear,
            L: '#forge:lenses',
            P: hvPiston,
            M: machineFrame,
            R: fluxCoil
        }
    )

    // Sequential Fabricator
    event.remove({id: 'thermal:machine_crafter'})
    event.shaped(
        'thermal:machine_crafter',
        [
            'GCG',
            'MFM',
            'GRG'
        ],
        {
            G: redstoneAlloyGear,
            C: 'enderio:crafter',
            M: hvMotor,
            F: machineFrame,
            R: fluxCoil
        }
    )

    // Thermal generators ---------------------------------------------------------------------------------
    // Styrling dynamo
    event.remove({id: 'thermal:dynamo_stirling'})
    event.shaped(
        'thermal:dynamo_stirling',
        [
            ' R ',
            'SBS',
            'FGF'
        ],
        {
            R: fluxCoil,
            F: 'gtceu:steel_frame',
            S: 'gtceu:steel_plate',
            B: 'ironfurnaces:iron_furnace',
            G: bronzeGear
        }
    )

    // Compression dynamo
    event.remove({id: 'thermal:dynamo_compression'})
    event.shaped(
        'thermal:dynamo_compression',
        [
            ' R ',
            'STS',
            'SFS'
        ],
        {
            R: fluxCoil,
            S: 'gtceu:steel_frame',
            T: 'enderio:fluid_tank',
            F: 'ironfurnaces:iron_furnace'
        }
    )

    // Magmatic dynamo
    event.remove({id: 'thermal:dynamo_magmatic'})
    event.shaped(
        'thermal:dynamo_magmatic',
        [
            ' R ',
            'STS',
            'SGS'
        ],
        {
            R: fluxCoil,
            S: 'gtceu:invar_frame',
            T: 'thermal:fluid_cell',
            G: conductiveIronGear
        }
    )

    // Numismatic dynamo
    event.remove({id: 'thermal:dynamo_numismatic'})

    // Lapidary dynamo
    event.remove({id: 'thermal:dynamo_lapidary'})
    event.shaped(
        'thermal:dynamo_lapidary',
        [
            ' R ',
            'BGB',
            'BOB'
        ],
        {
            R: fluxCoil,
            B: 'gtceu:blue_steel_frame',
            G: redstoneAlloyGear,
            O: 'gold_block'
        }
    )

    // Disenchantment dynamo
    event.remove({id: 'thermal:dynamo_disenchantment'})

    // Gourmand dynamo
    event.remove({id: 'thermal:dynamo_gourmand'})
    event.shaped(
        'thermal:dynamo_gourmand',
        [
            ' R ',
            'SGS',
            'SCS'
        ],
        {
            R: fluxCoil,
            S: 'gtceu:stainless_steel_frame',
            G: aluminiumGear,
            C: 'cake'
        }
    )

    // Redstone flux cell
    event.remove({id: 'thermal:energy_cell'})
    event.shaped(
        'thermal:energy_cell',
        [
            'LEL',
            'RMR',
            'LEL'
        ],
        {
            L: 'gtceu:lead_plate',
            E: 'gtceu:electrum_plate',
            R: fluxCoil,
            M: 'thermal:energy_cell_frame'
        }
    )

    // Redstone flux cell frame
    event.remove({id: 'thermal:energy_cell_frame'})
    event.shaped(
        'thermal:energy_cell_frame',
        [
            'BEB',
            'EHE',
            'BEB'
        ],
        {
            B: 'gtceu:double_battery_alloy_plate',
            E: 'gtceu:electrum_plate',
            H: 'gtceu:mv_battery_hull'
        }
    )

    // Fluid cell
    event.remove({id: 'thermal:fluid_cell'})
    event.shaped(
        'thermal:fluid_cell',
        [
            'RGR',
            'GMG',
            'RGR'
        ],
        {
            R: 'gtceu:rubber_plate',
            G: '#forge:glass',
            M: 'thermal:fluid_cell_frame'
        }
    )

    // Fluid cell frame
    event.remove({id: 'thermal:fluid_cell_frame'})
    event.shaped(
        'thermal:fluid_cell_frame',
        [
            'BGB',
            'GFG',
            'BGB'
        ],
        {
            B: 'gtceu:bronze_plate',
            G: '#forge:glass',
            F: 'enderio:fluid_tank'
        }
    )

    // Servo
    event.remove({id: 'thermal:redstone_servo'})
    event.shaped(
        'thermal:redstone_servo',
        [
            'RIR',
            ' D ',
            'RIR'
        ],
        {
            R: 'gtceu:red_alloy_plate',
            I: 'gtceu:iron_plate',
            D: 'gtceu:double_iron_plate'
        }
    )

    // Hive hopper
    event.remove({id: 'thermal:device_hive_extractor'})
    event.shaped(
        'thermal:device_hive_extractor',
        [
            'SGS',
            'THT',
            'SRS'
        ],
        {
            S: 'gtceu:double_steel_plate',
            G: bronzeGear,
            H: 'shears',
            T: 'gtceu:treated_wood_frame',
            R: servo
        }
    )

    // Arboreal extractor
    event.remove({id: 'thermal:device_tree_extractor'})
    event.shaped(
        'thermal:device_tree_extractor',
        [
            'SGS',
            'THT',
            'SRS'
        ],
        {
            S: 'gtceu:double_steel_plate',
            G: bronzeGear,
            H: 'bucket',
            T: 'gtceu:treated_wood_frame',
            R: servo
        }
    )

    // Aquatic entangler
    event.remove({id: 'thermal:device_fisher'})
    event.shaped(
        'thermal:device_fisher',
        [
            'SGS',
            'THT',
            'SRS'
        ],
        {
            S: 'gtceu:double_steel_plate',
            G: steelGear,
            H: 'fishing_rod',
            T: 'gtceu:treated_wood_frame',
            R: servo
        }
    )

    // Batch composter
    event.remove({id: 'thermal:device_composter'})
    event.shaped(
        'thermal:device_composter',
        [
            'SGS',
            'THT',
            'SRS'
        ],
        {
            S: 'gtceu:double_steel_plate',
            G: steelGear,
            H: 'composter',
            T: 'gtceu:treated_wood_frame',
            R: servo
        }
    )

    // Phyto soil inducer
    event.remove({id: 'thermal:device_soil_infuser'})
    event.shaped(
        'thermal:device_soil_infuser',
        [
            'SGS',
            'THT',
            'SRS'
        ],
        {
            S: 'gtceu:double_steel_plate',
            G: bronzeGear,
            T: 'gtceu:treated_wood_frame',
            R: servo,
            H: 'thermal:phytogro'
        }
    )

    // Vacuumulator
    event.remove({id: 'thermal:device_collector'})
    event.shaped(
        'thermal:device_collector',
        [
            'TET',
            'DHD',
            'TRT'
        ],
        {
            T: 'gtceu:double_steel_plate',
            E: 'gtceu:ender_pearl_plate',
            D: 'gtceu:double_dark_steel_plate',
            H: 'hopper',
            R: servo
        }
    )

    // Insightful Condenser
    event.remove({id: 'thermal:device_xp_condenser'})
    event.shaped(
        'thermal:device_xp_condenser',
        [
            'SHS',
            'GOG',
            'SRS'
        ],
        {
            S: 'gtceu:double_steel_plate',
            H: 'hopper',
            G: aluminiumGear,
            O: 'enderio:experience_rod',
            R: servo
        }
    )

    // Nullifier
    event.remove({id: 'thermal:device_nullifier'})
    event.shaped(
        'thermal:device_nullifier',
        [
            'THT',
            'GLG',
            'TST'
        ],
        {
            T: 'gtceu:tin_plate',
            H: 'hopper',
            G: bronzeGear,
            S: servo,
            L: 'lava_bucket'
        }
    )

    // Decoctive Diffuser
    event.remove({id: 'thermal:device_potion_diffuser'})
    event.shaped(
        'thermal:device_potion_diffuser',
        [
            'SHS',
            'GBG',
            'SRS'
        ],
        {
            S: 'gtceu:silver_plate',
            H: 'hopper',
            G: steelGear,
            B: 'glass_bottle',
            R: servo
        }
    )

    // Jar
    event.remove({id: 'thermal:jar_4'})
    event.shaped(
        '4x thermal:jar',
        [
            'WWW',
            'P P',
            'PPP'
        ],
        {
            W: 'gtceu:wood_plate',
            P: '#forge:glass_panes'
        }
    )

    // integral components
    event.remove({id: 'thermal:augments/upgrade_augment_1'})
    event.shaped(
        'thermal:upgrade_augment_1',
        [
            'IAI',
            'ACA',
            'IAI'
        ],
        {
            I: 'gtceu:invar_block',
            A: 'gtceu:aluminium_block',
            C: '#gtceu:circuits/hv'
        }
    )
    event.remove({id: 'thermal:augments/upgrade_augment_2'})
    event.shaped(
        'thermal:upgrade_augment_2',
        [
            'ESE',
            'SCS',
            'ESE'
        ],
        {
            E: 'gtceu:electrum_block',
            S: 'gtceu:signalum_block',
            C: 'thermal:upgrade_augment_1'
        }
    )
    event.remove({id: 'thermal:augments/upgrade_augment_3'})
    event.shaped(
        'thermal:upgrade_augment_3',
        [
            'ELE',
            'LCL',
            'ELE'
        ],
        {
            E: 'gtceu:enderium_block',
            L: 'gtceu:lumium_block',
            C: 'thermal:upgrade_augment_2'
        }
    )

    // Augments ---------------------------------------------------------------

    let augmentsToRemove = [
        'thermal:augments/xp_storage_augment',
        'thermal:augments/rf_coil_augment',
        'thermal:augments/rf_coil_storage_augment',
        'thermal:augments/rf_coil_xfer_augment',
        'thermal:augments/fluid_tank_augment',
        'thermal:augments/item_filter_augment',
        'thermal:augments/fluid_filter_augment',
        'thermal:augments/machine_speed_augment',
        'thermal:augments/machine_efficiency_augment',
        'thermal:augments/machine_output_augment',
        'thermal:augments/machine_catalyst_augment',
        'thermal:augments/machine_cycle_augment',
        'thermal:augments/machine_null_augment',
        'thermal:augments/dynamo_output_augment',
        'thermal:augments/dynamo_fuel_augment',
        'thermal:augments/dynamo_throttle_augment',
        'thermal:augments/area_radius_augment'
    ]

    augmentsToRemove.forEach(recipeID => event.remove({id: recipeID}))

    augment('thermal:xp_storage_augment', tinPlate, tinPlate, 'enderio:experience_rod')
    augment('thermal:rf_coil_augment', steelPlate, silverPlate, fluxCoil)
    augment('thermal:rf_coil_storage_augment', silverPlate, steelGear, fluxCoil)
    augment('thermal:rf_coil_xfer_augment', silverPlate, silverPlate, fluxCoil)
    augment('thermal:fluid_tank_augment', rubberPlate, silverPlate, pressureTank)
    augment('thermal:item_filter_augment', tinPlate, tinPlate, itemFilter)
    augment('thermal:fluid_filter_augment', tinPlate, tinPlate, fluidFilter)
    augment('thermal:machine_speed_augment', steelPlate, steelGear, fluxCoil)
    augment('thermal:machine_efficiency_augment', steelGear, steelGear, fluxCoil)
    augment('thermal:machine_output_augment', bronzeGear, steelGear, servo)
    augment('thermal:machine_catalyst_augment', aluminiumGear, silverPlate, servo)
    augment('thermal:machine_cycle_augment', tinPlate, aluminiumGear, servo)
    augment('thermal:machine_null_augment', tinPlate, tinPlate, 'cactus')
    augment('thermal:dynamo_output_augment', conductiveIronGear, conductiveIronGear, 'thermal:upgrade_augment_1')
    augment('thermal:dynamo_fuel_augment', redstoneAlloyGear, redstoneAlloyGear, 'thermal:upgrade_augment_1')
    augment('thermal:dynamo_throttle_augment', redstoneAlloyGear, redstoneAlloyGear, fluxCoil)
    augment('thermal:area_radius_augment', redstoneAlloyGear, aluminiumGear, 'gtceu:lv_field_generator')

    // ----------------------------------------------------------------------------------------------------------------------

    event.replaceOutput({output: 'thermal:sawdust'}, 'thermal:sawdust', 'gtceu:wood_dust')

    event.replaceInput({input: 'thermal:chiller_ball_cast'}, 'thermal:chiller_ball_cast', 'gtceu:ball_casting_mold')
    event.replaceInput({input: 'thermal:chiller_ingot_cast'}, 'thermal:chiller_ingot_cast', 'gtceu:ingot_casting_mold')
    event.replaceInput({input: 'thermal:chiller_rod_cast'}, 'thermal:chiller_rod_cast', 'gtceu:rod_extruder_mold')

    event.remove({id: 'thermal:earth_charge_3'})
    event.remove({id: 'thermal:ice_charge_3'})
    event.remove({id: 'thermal:lightning_charge_3'})
    event.remove({id: /thermal:earth_charge\/(.*)/})
    event.remove({id: /thermal:ice_charge\/(.*)/})
    event.remove({id: /thermal:lightning_charge\/(.*)/})

    // Florb recipe
    event.remove({id: 'thermal:florb_8'})
    event.shapeless(
        'thermal:florb',
        [
            'gtceu:fluid_cell',
            '#forge:tools/wire_cutters'
        ]
    )

    event.remove({output: 'thermal:phytogro'})
    event.shapeless(
        '2x thermal:phytogro',
        [
            '#forge:sand',
            'gtceu:saltpeter_dust',
            'gtceu:apatite_dust'
        ]
    )

    event.remove({id: 'thermal:press_coin_die'})
    event.recipes.gtceu.forming_press('thermal:press_coin_die')
        .notConsumable('gtceu:nugget_casting_mold')
        .itemInputs('1x gtceu:invar_plate')
        .itemOutputs('thermal:press_coin_die')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.remove({id: 'thermal:press_gear_die'})
    event.recipes.gtceu.forming_press('thermal:press_gear_die')
        .notConsumable('gtceu:small_gear_casting_mold')
        .itemInputs('1x gtceu:invar_plate')
        .itemOutputs('thermal:press_gear_die')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.remove({id: 'thermal:press_packing_2x2_die'})
    event.recipes.gtceu.forming_press('thermal:press_packing_2x2_die')
        .circuit(2)
        .notConsumable('gtceu:block_casting_mold')
        .itemInputs('1x gtceu:invar_plate')
        .itemOutputs('thermal:press_packing_2x2_die')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.remove({id: 'thermal:press_packing_3x3_die'})
    event.recipes.gtceu.forming_press('thermal:press_packing_3x3_die')
        .circuit(3)
        .notConsumable('gtceu:block_casting_mold')
        .itemInputs('1x gtceu:invar_plate')
        .itemOutputs('thermal:press_packing_3x3_die')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.remove({id: 'thermal:press_unpacking_die'})
    event.recipes.gtceu.forming_press('thermal:press_unpacking_die')
        .circuit(1)
        .notConsumable('gtceu:block_casting_mold')
        .itemInputs('1x gtceu:invar_plate')
        .itemOutputs('thermal:press_unpacking_die')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.thermal.insolator(
        'undergarden:mogmoss',
        'undergarden:mogmoss',
    )

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
yeet('thermal:constantan_ingot')
yeet('thermal:enderium_ingot')
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
yeet('thermal:constantan_plate')
yeet('thermal:enderium_plate')
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
yeet('thermal:constantan_dust')
yeet('thermal:enderium_dust')
yeet('thermal:quartz_dust')
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
yeet('thermal:constantan_gear')
yeet('thermal:enderium_gear')
yeet('thermal:lapis_gear')
yeet('thermal:emerald_gear')
yeet('thermal:quartz_gear')
yeet('thermal:ruby_gear')
yeet('thermal:sapphire_gear')
// rubber
yeet('thermal:cured_rubber')
yeet('thermal:rubber')

// nuggets
yeet('thermal:constantan_nugget')
yeet('thermal:enderium_nugget')

// coins
yeet('thermal:constantan_coin')

// blocks
yeet('thermal:constantan_block')
yeet('thermal:rubber_block')

// others
yeet('thermal:sulfur_dust')
yeet('thermal:sulfur')
yeet('thermal:sulfur_block')
yeet('thermal:sawdust')
yeet('thermal:sawdust_block')
yeet('thermal:bitumen')
yeet('thermal:bitumen_block')
yeet('thermal:tar')
yeet('thermal:tar_block')
yeet('thermal:rose_gold_block')
yeet('thermal:sawdust')
yeet('thermal:coal_coke')
yeet('thermal:coal_coke_block')
yeet('thermal:drill_head')
yeet('thermal:saw_blade')
yeet('thermal:dynamo_numismatic')
yeet('thermal:dynamo_disenchantment')
yeet('thermal:xp_crystal')
yeet('thermal:ender_pearl_dust')
yeet('thermal:niter_ore')
yeet('thermal:deepslate_niter_ore')
yeet('thermal:oil_sand')
yeet('thermal:oil_red_sand')

yeet('thermal:chiller_ball_cast')
yeet('thermal:chiller_ingot_cast')
yeet('thermal:chiller_rod_cast')

yeet('thermal:earth_charge')
yeet('thermal:ice_charge')
yeet('thermal:lightning_charge')

yeet('thermal:niter')
yeet('thermal:niter_dust')
yeet('thermal:niter_block')
