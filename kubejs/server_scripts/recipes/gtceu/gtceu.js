let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
      event.remove('forge:ingots')
    })
}

let tierCables = {
    ulv: 'red_alloy',
    lv: 'tin',
    mv: 'copper',
    hv: 'gold',
    ev: 'aluminium',
    iv: 'platinum',
    luv: 'niobium_titanium',
    zpm: 'vanadium_gallium',
    uv: 'yttrium_barium_cuprate',
    uhv: 'europium'
}

let tiers = [
    'ulv',
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv'
]

let cableWidths = [
    '1a',
    '4a',
    '8a',
    '16a'
]

let cableWidthsName = {
    '1a': 'single',
    '4a': 'quadruple',
    '8a': 'octal',
    '16a': 'hex'
}

let plastics = [
    'polyethylene',
    'polyvinyl_chloride',
    'polytetrafluoroethylene',
    'polybenzimidazole'
]

ServerEvents.recipes(event => {
    // Removing default mv circuit board recipes
    event.remove({ id: 'gtceu:assembler/phenolic_board' })
	event.remove({ id: 'gtceu:shaped/good_circuit_board' })

    // MV PHENOLIC CIRCUIT BOARD
	// event.recipes.gtceu.assembler('kubejs_phenolic_board')
    //     .circuit(1)
    //     .itemInputs(
    //         'gtceu:wood_dust',
    //         'gtceu:small_glass_dust'
    //     )
    //     .inputFluids(
    //         Fluid.of('gtceu:glue', 50)
    //     )
    //     .itemOutputs(
    //         'gtceu:phenolic_circuit_board'
    //     )
    //     .duration(160)
    //     .EUt(30)
    // DEPRECATED FOLLOWING CIRCUIT REWORK

    // // MV GOOD CIRCUIT BOARD
    event.recipes.gtceu.forming_press('kubejs_good_circuit_board')
        .itemInputs(
            'gtceu:phenolic_circuit_board',
            '8x gtceu:mana_alloy_single_wire'
        )
        .itemOutputs(
            'gtceu:phenolic_printed_circuit_board'
        )
        .circuit(1)
        .duration(160)
        .EUt(16)
    

	// REMOVE STEEL INGOTS AND BLOCKS FROM NON-COKE ITEMS IN PRIMITIVE BLAST FURNACE
	event.remove({ 
            type: 'gtceu:primitive_blast_furnace', 
            output: 'gtceu:steel_ingot', 
            not: [
                { input: 'gtceu:coke_gem' }, 
                {input: 'gtceu:coke_dust'}
            ] 
		}
	)
	event.remove({ 
            type: 'gtceu:primitive_blast_furnace', 
            output: 'gtceu:steel_block', 
            not: { 
                input: 'gtceu:coke_block' 
            } 
		}
	)

    // snad recipe in an assembler
    event.remove('snad:snad')
    event.remove('snad:red_snad')
    event.recipes.gtceu.assembler('kubejs_snad')
        .circuit(1)
        .itemInputs(
            '32x minecraft:sand',
            'minecraft:redstone_block'
        )
        .itemOutputs(
            'snad:snad'
        )
        .duration(20*10)
        .EUt(24)

    // zanite steel
    event.recipes.gtceu.mixer('zanite_steel')
        .circuit(31)
        .itemInputs(
            'gtceu:steel_dust',
            'gtceu:zanite_dust'
        )
        .itemOutputs('gtceu:zanite_steel_dust')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.MV])

    // Silicon Boule line
    event.remove({id: /_boule$/})
    // Crystal Puller Controller Recipe

    // Single Crystal Silicon
    event.recipes.gtceu.alloy_smelter('kubejs_single_crystal_silicon')
        .itemInputs(
            '4x gtceu:silicon_dust', 
            'gtceu:small_gallium_arsenide_dust'
        )
        .itemOutputs('kubejs:single_crystal_silicon')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.LV])
    // Seed Crystal
    event.recipes.gtceu.lathe('kubejs_seed_crystal')
        .itemInputs('kubejs:single_crystal_silicon')
        .itemOutputs('2x kubejs:seed_crystal')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.LV])
    event.remove('gtceu:electric_blast_furnace/silicon_boule')
    // Silicon Boule
    event.recipes.gtceu.crystal_puller('kubejs_silicon_boule')
        .circuit(1)
        .itemInputs(
            'kubejs:seed_crystal',
            '32x gtceu:silicon_dust'
        )
        .itemOutputs('gtceu:silicon_boule')
        .duration(20*300)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1784)
    // Phosporus Doped Boule
    event.recipes.gtceu.crystal_puller('kubejs_phosporus_boule')
        .circuit(2)
        .itemInputs(
            'kubejs:seed_crystal',
            '64x gtceu:silicon_dust',
            '8x gtceu:phosphorus_dust'
        )
        .inputFluids(Fluid.of('gtceu:nitrogen', 8000))
        .itemOutputs('gtceu:phosphorus_boule')
        .duration(20*360)
        .EUt(GTValues.VA[GTValues.HV])
        .blastFurnaceTemp(2484)
    // Naquadah Doped Boule
    event.recipes.gtceu.crystal_puller('kubejs_naquadah_boule')
        .circuit(3)
        .itemInputs(
            'kubejs:seed_crystal', 
            '16x gtceu:silicon_block',
            'gtceu:naquadah_ingot'
        )
        .inputFluids(Fluid.of('gtceu:argon', 8000))
        .itemOutputs('gtceu:naquadah_boule')
        .duration(20*420)
        .EUt(GTValues.VA[GTValues.EV])
        .blastFurnaceTemp(5400)
    // Neutronium Doped Boule
    event.recipes.gtceu.crystal_puller('kubejs_neutronium_boule')
        .circuit(4)
        .itemInputs(
            'kubejs:seed_crystal', 
            '32x gtceu:silicon_block',
            '4x gtceu:neutronium_ingot'
        )
        .inputFluids(Fluid.of('gtceu:xenon', 8000))
        .itemOutputs('gtceu:neutronium_boule')
        .duration(20*420)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(6484)


    // Rubber sheets in Bender QOL
    event.recipes.gtceu.bender('kubejs_rubber_sheet')
        .circuit(1)
        .itemInputs("gtceu:rubber_ingot")
        .itemOutputs("gtceu:rubber_plate")
        .duration(20/4)
        .EUt(GTValues.VA[GTValues.ULV])

    // Rubber sheets in Compressor QOL for Steam age
    event.recipes.gtceu.compressor('rubber_sheet_compressor')
        .itemInputs('gtceu:rubber_ingot')
        .itemOutputs('gtceu:rubber_plate')
        .duration(20/4)
        .EUt(4)

    // Dirt recipes
    event.recipes.gtceu.mixer('kubejs_dirt')
        .itemInputs(
            '4x minecraft:sand',
            '4x minecraft:gravel',
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs('10x minecraft:dirt')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    // Double Fireclay output!
    event.remove({ id: 'gtceu:shapeless/fireclay_dust'})
    event.shapeless(
        '4x gtceu:fireclay_dust',
        [
            'gtceu:clay_dust',
            'gtceu:seared_brick_dust'
        ]
    )

    // Fixing the fireclay dust dupe
    event.remove({ id: 'gtceu:centrifuge/decomposition_centrifuging__fireclay' })
    event.recipes.gtceu.centrifuge('fireclay_dupe_fix')
        .itemInputs('4x gtceu:fireclay_dust')
        .itemOutputs(
            'gtceu:clay_dust',
            'gtceu:seared_brick_dust'
        )
        .duration(20*2.25)
        .EUt(30)

    // Aether Air centrifuging
    event.recipes.gtceu.centrifuge('aether_air_centrifuging')
        .inputFluids(Fluid.of('gtceu:aether_air', 10000))
        .outputFluids(
            Fluid.of('gtceu:fluorine', 4000),
            Fluid.of('gtceu:oxygen', 3500)
        )
        .duration(20*80)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.distillation_tower('liquid_aether_air_centrifuging')
        .inputFluids(Fluid.of('gtceu:liquid_aether_air', 100000))
        .outputFluids(
            Fluid.of('gtceu:fluorine', 28000),
            Fluid.of('gtceu:oxygen', 22000),
            Fluid.of('gtceu:ozone', 16000),
            Fluid.of('gtceu:helium', 16000),
            Fluid.of('gtceu:mistrium', 18000)
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])

    // Aether air to liquid cooling
    event.recipes.gtceu.vacuum_freezer('aether_air_to_liquid')
        .inputFluids(Fluid.of('gtceu:aether_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_aether_air', 4000))
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.HV])

    // Collecting Aether air
    event.recipes.gtceu.gas_collector('aether_air')
        .circuit(5)
        .dimension('aether:the_aether')
        .outputFluids(Fluid.of('gtceu:aether_air', 10000))
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])

    // Proliferation Inducer
    event.recipes.gtceu.assembler('proliferation_inducer')
        .circuit(1)
        .itemInputs(
            '4x gtceu:luv_machine_casing',
            '4x #gtceu:circuits/zpm',
            '32x gtceu:uhpic_chip',
            'gtceu:iv_field_generator',
            '2x gtceu:double_naquadah_plate',
            '16x gtceu:indium_tin_barium_titanium_cuprate_single_wire'
        )
        .inputFluids(Fluid.of('gtceu:niobium_titanium', 1152))
        .itemOutputs('gtceu:proliferation_inducer')
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.IV])

    //// BOTANIA FOR GT CIRCUITS ----------------------------------------------------------------------------------------------

    //// LV - Manasteel / Mana Alloy
    //// MV - Terrasteel / Terralumina
    //// HV - Elementium / Elventium
    //// EV - Gaia

    // LV TIER
    // Good Electronic Circuit
    event.replaceInput({output: 'gtceu:good_electronic_circuit'}, 'gtceu:copper_single_wire', 'gtceu:mana_alloy_single_wire')

    // MV TIER
    // Basic Integrated Circuit
    event.replaceInput({output: 'gtceu:basic_integrated_circuit'}, 'gtceu:tin_bolt', 'gtceu:terrasteel_bolt')
    event.replaceInput({output: 'gtceu:basic_integrated_circuit'}, 'gtceu:fine_copper_wire', 'gtceu:fine_mana_alloy_wire')

    // Good Integrated Circuit
    event.replaceInput({output: 'gtceu:good_integrated_circuit'}, 'gtceu:silver_bolt', 'gtceu:terrasteel_bolt')
    event.replaceInput({output: 'gtceu:good_integrated_circuit'}, 'gtceu:fine_gold_wire', 'gtceu:fine_terralumina_wire')

    // Advanced Integrated Circuit
    event.replaceInput({output: 'gtceu:advanced_integrated_circuit'}, 'gtceu:annealed_copper_bolt', 'gtceu:terrasteel_bolt')
    event.replaceInput({output: 'gtceu:advanced_integrated_circuit'}, 'gtceu:fine_electrum_wire', 'gtceu:fine_terralumina_wire')

    // HV TIER
    // Microchip Processor
    event.replaceInput({output: 'gtceu:microchip_processor'}, 'gtceu:fine_copper_wire', 'gtceu:fine_mana_alloy_wire')

    // Micro Processor
    event.replaceInput({output: 'gtceu:micro_processor'}, 'gtceu:fine_red_alloy_wire', 'gtceu:fine_terralumina_wire')

    // Micro Processor Assembly
    event.replaceInput({output: 'gtceu:micro_processor_assembly'}, 'gtceu:fine_red_alloy_wire', 'gtceu:fine_elventium_wire')

    // Micro Processor Computer
    event.replaceInput({output: 'gtceu:micro_processor_computer'}, 'gtceu:fine_electrum_wire', 'gtceu:fine_elventium_wire')
    event.replaceInput({output: 'gtceu:micro_processor_computer'}, 'gtceu:blue_alloy_bolt', 'gtceu:elementium_bolt')

    // Micro Processor Mainframe
    event.replaceInput({output: 'gtceu:micro_processor_mainframe'}, 'gtceu:annealed_copper_single_wire', 'gtceu:elventium_single_wire')
    event.replaceInput({output: 'gtceu:micro_processor_mainframe'}, 'gtceu:aluminium_frame', 'gtceu:lumium_frame')

    // EV TIER
    // Nanoprocessor
    event.replaceInput({output: 'gtceu:nano_processor'}, 'gtceu:fine_electrum_wire', 'gtceu:fine_gaia_wire')

    // Nanoprocessor Assembly
    event.replaceInput({output: 'gtceu:nano_processor_assembly'}, 'gtceu:fine_electrum_wire', 'gtceu:fine_gaia_wire')

    // Nanoprocessor Computer
    event.replaceInput({output: 'gtceu:nano_processor_computer'}, 'gtceu:fine_electrum_wire', 'gtceu:fine_gaia_wire')    
    
    // Nanoprocessor Mainframe
    event.replaceInput({output: 'gtceu:nano_processor_mainframe'}, 'gtceu:annealed_copper_single_wire', 'gtceu:gaia_single_wire')
    event.replaceInput({output: 'gtceu:nano_processor_mainframe'}, 'gtceu:aluminium_frame', 'gtceu:desh_frame')
    
    //// ---------------------------------------------------------------------------------------------------------------------------

    // Wrought iron made by smelting iron
    event.smelting('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot')

    // Basalz, Blitz and Blizz chem line
    event.recipes.gtceu.chemical_reactor('basalz')
        .itemInputs(
            '2x gtceu:sulfur_dust',
            'gtceu:silicon_dioxide_dust'
        )
        .inputFluids(Fluid.of('gtceu:iron', 288))
        .itemOutputs('thermal:basalz_powder')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('blitz')
        .itemInputs(
            '2x gtceu:phosphorus_pentoxide_dust',
            '2x gtceu:zinc_dust'
        )
        .inputFluids(Fluid.of('gtceu:nitrogen', 1000))
        .itemOutputs('thermal:blitz_powder')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('blizz')
        .itemInputs(
            '2x gtceu:silver_dust'
        )
        .inputFluids(
            Fluid.of('water', 2000),
            Fluid.of('gtceu:ammonia', 500)
        )
        .itemOutputs('thermal:blizz_powder')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('mythic_compound')
        .itemInputs(
            'thermal:blitz_powder',
            'thermal:blizz_powder',
            'thermal:basalz_powder'
        )
        .itemOutputs('gtceu:mythic_compound_dust')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.HV])

    // Lumium recipe
    event.recipes.gtceu.mixer('lumium')
        .itemInputs(
            '3x gtceu:tin_dust',
            'gtceu:silver_dust',
            '4x glowstone_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:mistrium', 1000)
        )
        .itemOutputs('4x gtceu:lumium_dust')
        .duration(20*16)
        .EUt(GTValues.VA[GTValues.HV])

    // Remove default lumium recipes
    event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
    event.remove({id: 'thermal:lumium_dust_4'})
    event.remove({output: 'gtceu:lumium_dust', mod:'thermal'})
    event.remove({output: 'gtceu:lumium_dust', mod:'enderio'})
    event.remove({output: 'gtceu:lumium_ingot', mod:'thermal'})
    event.remove({output: 'gtceu:lumium_ingot', mod:'enderio'})

    // Artificial Cloud recipe
    event.recipes.gtceu.mixer('artificial_cloud')
        .itemInputs(
            'gtceu:mythic_compound_dust',
            '2x gtceu:gold_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:steam', 16000)
        )
        .itemOutputs('kubejs:artificial_cloud_block')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])

    // Platinum processing
    // Remove the old platinum group sludge in centrifuge recipe
    event.remove({id: 'gtceu:centrifuge/pgs_separation'})

    // DOESNT WORK FOR SOME REASON Remove all the other recipes that output pgs dust except sheldonite
    // event.remove({output: 'gtceu:platinum_group_sludge_dust', input: {not: 'gtceu:purified_cooperite_ore'}, type: 'gtceu:chemical_reactor'})
    // event.remove({output: 'gtceu:platinum_group_sludge_dust', input: {not: 'gtceu:purified_cooperite_ore'}, type: 'gtceu:large_chemical_reactor'})

    // Removing pgs output from all recipes except purified sheldonite
    event.remove({id: 'gtceu:chemical_reactor/pgs_from_pentlandite'})
    event.remove({id: 'gtceu:chemical_reactor/pgs_from_bornite'})
    event.remove({id: 'gtceu:chemical_reactor/pgs_from_chalcocite'})
    event.remove({id: 'gtceu:chemical_reactor/pgs_from_chalcopyrite'})
    event.remove({id: 'gtceu:chemical_reactor/pgs_from_tetrahedrite'})
    // LCR
    event.remove({id: 'gtceu:large_chemical_reactor/pgs_from_pentlandite'})
    event.remove({id: 'gtceu:large_chemical_reactor/pgs_from_bornite'})
    event.remove({id: 'gtceu:large_chemical_reactor/pgs_from_chalcocite'})
    event.remove({id: 'gtceu:large_chemical_reactor/pgs_from_chalcopyrite'})
    event.remove({id: 'gtceu:large_chemical_reactor/pgs_from_tetrahedrite'})

    // Add the pgs separation recipe back but now EV
    event.recipes.gtceu.centrifuge('pgs_separation')
        .itemInputs(
            '6x gtceu:platinum_group_sludge_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:aqua_regia', 1200)
        )
        .itemOutputs(
            '3x gtceu:platinum_raw_dust',
            '3x gtceu:palladium_raw_dust',
            '2x gtceu:inert_metal_mixture_dust',
            'gtceu:rarest_metal_mixture_dust',
            '2x gtceu:platinum_sludge_residue_dust'
        )
        .duration(20*25)
        .EUt(GTValues.VA[GTValues.EV])

    // Replacing steel for utherium plate in MV shaped recipe
    event.replaceInput({output: 'gtceu:good_electronic_circuit'}, 'gtceu:steel_plate', 'gtceu:utherium_plate')

    // MV Machine Hull
    event.replaceInput({output: 'gtceu:mv_machine_hull'}, 'gtceu:aluminium_plate', 'gtceu:utherium_plate')    
    
    // MV Piston
    event.replaceInput({output: 'gtceu:mv_electric_piston'}, 'gtceu:aluminium_rod', 'gtceu:utherium_rod')

    // MV Arm
    event.replaceInput({output: 'gtceu:mv_robot_arm'}, 'gtceu:aluminium_rod', 'gtceu:utherium_rod')

    // MV Emitter
    event.replaceInput({output: 'gtceu:mv_emitter'}, 'gtceu:flawless_emerald_gem', 'gtceu:flawless_utherium_gem')

    // MV Sensor
    event.replaceInput({output: 'gtceu:mv_sensor'}, 'gtceu:flawless_emerald_gem', 'gtceu:flawless_utherium_gem')

    // MV casings with manasteel
    event.remove({output: 'gtceu:mv_machine_casing'})
    event.shaped(
        'gtceu:mv_machine_casing',
        [
            'AMA',
            'MWM',
            'AMA'
        ],
        {
            A: 'gtceu:aluminium_plate',
            M: 'gtceu:manasteel_plate',
            W: '#forge:tools/wrenches'
        }
    )
    event.recipes.gtceu.assembler('kubejs:mv_machine_casing')
        .circuit(8)
        .itemInputs(
            '4x gtceu:aluminium_plate',
            '4x gtceu:manasteel_plate'
        )
        .itemOutputs(
            'gtceu:mv_machine_casing'
        )
        .duration(20*2.5)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    // Remove bronze dust recipe
    event.remove({id: 'gtceu:shapeless/dust_bronze'})

    // Large Steam Extractor
    event.shaped(
        'gtceu:steam_large_extractor',
        [
            'CSC',
            'CEC',
            'CFC'
        ],
        {
            C: 'gtceu:steam_machine_casing',
            S: 'gtceu:bronze_screw',
            E: 'gtceu:lp_steam_extractor',
            F: 'gtceu:bronze_rotor'
        }
    )

    //Steam Borer
    event.shaped(
        'gtceu:steam_borer',
        [
            'CCC',
            'RSF',
            'CCC'
        ],
        {
            C: 'gtceu:steam_machine_casing',
            S: 'gtceu:bronze_screw',
            F: 'gtceu:bronze_rotor',
            R: 'gtceu:bronze_ring'
        }
    )

    // Steam Blender
    event.shaped(
        'gtceu:steam_blender',
        [
            'CSC',
            'CRC',
            'CFC'
        ],
        {
            C: 'gtceu:steam_machine_casing',
            S: 'gtceu:bronze_screw',
            F: 'gtceu:bronze_rotor',
            R: 'gtceu:bronze_rod'
        }
    )

    // Bronze mb tank
    event.shaped(
        'gtceu:bronze_multiblock_tank',
        [
            ' R ',
            'HCW',
            ' R '
        ],
        {
            C: 'gtceu:steam_machine_casing',
            R: 'gtceu:bronze_ring',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }
    )
    // Bronze mb valve
    event.shaped(
        'gtceu:bronze_tank_valve',
        [
            ' R ',
            'HCW',
            ' F '
        ],
        {
            C: 'gtceu:steam_machine_casing',
            R: 'gtceu:bronze_ring',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            F: 'gtceu:bronze_rotor'
        }
    )

    // Advanced Blast Furnace
    event.shaped(
        'gtceu:advanced_primitive_blast_furnace',
        [
            'CSC',
            'RPR',
            'FFF'
        ],
        {
            C: 'gtceu:solid_machine_casing',
            R: 'gtceu:steel_ring',
            S: 'gtceu:steel_screw',
            P: 'gtceu:primitive_blast_furnace',
            F: 'gtceu:steel_firebox_casing'
        }
    )

    // Removing Platinum from furnace, blast and alloy recipes
    event.remove({type: 'smelting', output: 'gtceu:platinum_ingot'})
    event.remove({type: 'blasting', output: 'gtceu:platinum_ingot'})
    event.remove({id: /enderio:smelting\/gtceu\/smelting\/.*_platinum_to_ingot/})
    event.remove({id: /enderio:smelting\/gtceu\/smelting\/.*_platinum_ore_to_ingot/})

    // Removed as the ore property is getting modified in materials.js
    // event.remove({id: 'gtceu:macerator/macerate_raw_desh_ore_to_crushed_ore'})
    // event.recipes.gtceu.macerator('kubejs:desh_maceration')
    //     .itemInputs(
    //         'gtceu:raw_desh'
    //     )
    //     .itemOutputs(
    //         '2x gtceu:crushed_desh_ore',
    //     )
    //     .chancedOutput('gtceu:mythril_dust', 1000, 250)
    //     .duration(20*20)
    //     .EUt(GTValues.VA[GTValues.HV])

    // HV casing requires terrasteel plates
    event.remove({id: 'gtceu:shaped/casing_hv'})
    event.shaped(
        'gtceu:hv_machine_casing',
        [
            'STS',
            'TWT',
            'STS'
        ],
        {
            S: 'gtceu:stainless_steel_plate',
            T: 'gtceu:terrasteel_plate',
            W: '#forge:tools/wrenches'
        }
    )
    event.remove({id: 'gtceu:assembler/casing_hv'})
    event.recipes.gtceu.assembler('kubejs:assembler/hv_machine_casing')
        .circuit(8)
        .itemInputs(
            '4x gtceu:stainless_steel_plate',
            '4x gtceu:terrasteel_plate'
        )
        .itemOutputs(
            'gtceu:hv_machine_casing'
        )
        .duration(20*2.5)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    // EV casing requires elementium
    event.remove({id: 'gtceu:shaped/casing_ev'})
    event.shaped(
        'gtceu:ev_machine_casing',
        [
            'STS',
            'TWT',
            'STS'
        ],
        {
            S: 'gtceu:titanium_plate',
            T: 'gtceu:elementium_plate',
            W: '#forge:tools/wrenches'
        }
    )
    event.remove({id: 'gtceu:assembler/casing_ev'})
    event.recipes.gtceu.assembler('kubejs:assembler/ev_machine_casing')
        .circuit(8)
        .itemInputs(
            '4x gtceu:titanium_plate',
            '4x gtceu:elementium_plate'
        )
        .itemOutputs(
            'gtceu:ev_machine_casing'
        )
        .duration(20*2.5)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    // IV casing requires elementium
    event.remove({id: 'gtceu:shaped/casing_iv'})
    event.shaped(
        'gtceu:iv_machine_casing',
        [
            'STS',
            'TWT',
            'STS'
        ],
        {
            S: 'gtceu:tungsten_steel_plate',
            T: 'gtceu:gaia_plate',
            W: '#forge:tools/wrenches'
        }
    )
    event.remove({id: 'gtceu:assembler/casing_iv'})
    event.recipes.gtceu.assembler('kubejs:assembler/iv_machine_casing')
        .circuit(8)
        .itemInputs(
            '4x gtceu:tungsten_steel_plate',
            '4x gtceu:desh_plate'
        )
        .itemOutputs(
            'gtceu:iv_machine_casing'
        )
        .duration(20*2.5)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.remove({id: 'gtceu:assembler/smd_diode'})
    event.recipes.gtceu.assembler('assembler/smd_diode')
        .itemInputs(
            'gtceu:gallium_arsenide_dust',
            '8x gtceu:fine_platinum_wire',
            '4x gtceu:fine_lumium_wire'
        )
        .inputFluids(Fluid.of('gtceu:flowing_polyethylene', 288))
        .itemOutputs('32x gtceu:smd_diode')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('chemical_reactor/mythril_infused_carbon_fibers')
        .itemInputs(
            '4x gtceu:carbon_fibers',
            'gtceu:mythril_dust'
        )
        .itemOutputs('4x kubejs:mythril_infused_carbon_fibers')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'gtceu:chemical_reactor/nano_cpu_wafer'})
    event.remove({id: 'gtceu:large_chemical_reactor/nano_cpu_wafer'})
    event.recipes.gtceu.chemical_reactor('kubejs_nano_cpu_wafer')
        .itemInputs(
            'gtceu:cpu_wafer',
            '16x kubejs:mythril_infused_carbon_fibers'
        )
        .inputFluids(Fluid.of('gtceu:glowstone', 576))
        .itemOutputs('gtceu:nano_cpu_wafer')
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({id: 'gtceu:assembler/voltage_coil_ev'})
    event.recipes.gtceu.assembler('voltage_coil_ev')
        .itemInputs(
            'gtceu:magnetic_neodymium_rod',
            '16x gtceu:fine_platinum_wire',
            '8x gtceu:fine_lumium_wire'
        )
        .circuit(1)
        .itemOutputs('gtceu:ev_voltage_coil')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({id: 'gtceu:chemical_reactor/epoxy_board'})
    event.remove({id: 'gtceu:large_chemical_reactor/epoxy_board'})
    event.recipes.gtceu.chemical_reactor('epoxy_circuit_board')
        .itemInputs(
            'gtceu:epoxy_plate',
            '8x gtceu:lumium_foil'
        )
        .inputFluids(Fluid.of('gtceu:sulfuric_acid', 500))
        .itemOutputs('gtceu:epoxy_circuit_board')
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.LV])

    event.replaceInput({id: 'gtceu:assembler/coil_rtm_alloy'}, 'gtceu:vanadium_steel_foil', 'gtceu:gaia_foil')

    // Remove Ostrum from smelting and blasting
    event.remove({type: 'smelting', output: 'gtceu:ostrum_ingot'})
    event.remove({type: 'blasting', output: 'gtceu:ostrum_ingot'})
    event.remove({type: 'enderio:alloy_smelting', output: 'gtceu:ostrum_ingot'})
    event.remove({id: 'gtceu:arc_furnace/arc_ostrum_dust'})

    // Energy converters
    tiers.map(tier => {
        cableWidths.map(cableWidth => {
            let material = tierCables[tier]
            let width = cableWidthsName[cableWidth]

            let cable = `gtceu:${material}_${width}_cable`

            event.remove({output: `gtceu:${tier}_${cableWidth}_energy_converter`})
            event.shaped(
                `gtceu:${tier}_${cableWidth}_energy_converter`,
                [
                    'VCC',
                    'RHP',
                    'VCC'
                ],
                {
                    V: `gtceu:${tier}_voltage_coil`,
                    C: cable,
                    R: `gtceu:red_alloy_${width}_cable`,
                    H: `gtceu:${tier}_machine_hull`,
                    P: `#gtceu:circuits/${tier}`,
                }
            )
        })
    })

    event.remove({output: 'gtceu:resin_circuit_board'})
    event.recipes.botania.petal_apothecary(
        '3x gtceu:resin_circuit_board',
        [
            '#botania:livingwood_logs',
            'gtceu:sticky_resin',
            'gtceu:sticky_resin',
            '#botania:livingwood_logs',
            'gtceu:sticky_resin',
            'gtceu:sticky_resin',
            '#botania:livingwood_logs',
            'gtceu:sticky_resin',
            'gtceu:sticky_resin'
        ],
        'flint'
    )
    event.recipes.shaped(
        '3x gtceu:resin_circuit_board',
        [
            'RRR',
            'PPP',
            'RRR'
        ],
        {
            R: 'gtceu:sticky_resin',
            P: 'gtceu:livingwood_plate'
        }
    )
    event.remove({id:'gtceu:shaped/basic_circuit_board'})
    event.recipes.botania.petal_apothecary(
        'gtceu:resin_printed_circuit_board',
        [
            'gtceu:resin_circuit_board',
            'gtceu:copper_single_wire',
            'gtceu:copper_single_wire',
            'gtceu:copper_single_wire',
            'gtceu:copper_single_wire',
            'gtceu:copper_single_wire',
            'gtceu:copper_single_wire',
            'gtceu:copper_single_wire',
            'gtceu:copper_single_wire',
        ],
        'gtceu:gold_single_wire'
    )

    event.replaceInput({id: 'gtceu:assembler/basic_circuit_board'}, 'gtceu:wood_plate', 'gtceu:livingwood_plate')

    event.remove({id: 'gtceu:assembler/kubejs_phenolic_board'})
    event.recipes.botania.mana_infusion(
        'gtceu:phenolic_circuit_board',
        'gtceu:resin_circuit_board',
        5000
    )

    event.replaceInput({output: 'gtceu:phenolic_printed_circuit_board'}, 'gtceu:silver_foil', 'gtceu:mana_alloy_foil')
    event.replaceInput({output: 'gtceu:phenolic_printed_circuit_board'}, 'gtceu:silver_single_wire', 'gtceu:mana_alloy_single_wire')

    event.remove({output: 'gtceu:plastic_circuit_board'})
    plastics.map(plastic => {
        const index = plastics.indexOf(plastic)

        event.recipes.gtceu.chemical_reactor(`glimmering_livingwood_board_with_${plastic}`)
            .itemInputs(
                "4x gtceu:livingwood_plate",
                `8x gtceu:${plastic}_foil`
            )
            .inputFluids(
                Fluid.of("gtceu:glowstone", 144*8),
                Fluid.of("blasmatech:mana", 1000),
                Fluid.of("gtceu:sulfuric_acid", 250)
            )
            .itemOutputs(`${Math.pow(2, index)}x gtceu:plastic_circuit_board`)
            .duration(20*25)
            .EUt(GTValues.VA[GTValues.LV])
    })

    event.remove({output: 'gtceu:plastic_printed_circuit_board'})
    event.recipes.botania.terra_plate(
        'gtceu:plastic_printed_circuit_board',
        [
            'gtceu:plastic_circuit_board',
            'gtceu:small_mythic_compound_dust',
            'botania:mana_diamond',
            'gtceu:terralumina_plate'
        ],
        5000
    )
    
})
    
// Remove vanilla tools
const tools = ["shovel", "pickaxe", "axe", "hoe", "sword"]
const adjectives = ["wooden", "iron", "stone", "golden", "diamond", "netherite"]

tools.forEach(tool => {
    adjectives.forEach(adjective => {
        yeet(`minecraft:${adjective}_${tool}`)
    })
})

// Remove early GT tools (to force tinkers)
const adjectivesGT = ["flint", "cobalt_brass", "wrought_iron", "steel", "invar", "diamond", "bronze", "iron", "aluminium"]
const toolTypes = ["pickaxe", "mining_hammer", "axe", "sword", "shovel", "spade"]

toolTypes.forEach(tool => {
    adjectivesGT.forEach(adjective => {
        yeet(`gtceu:${adjective}_${tool}`)
    })
})