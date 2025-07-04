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
let yeet_f = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: Fluid.of(itemName) })
    })
    ServerEvents.tags('fluid', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}   

  yeet('ad_astra:steel_ingot')
  yeet('ad_astra:steel_nugget')
  yeet('ad_astra:steel_plate')
  yeet(/ad_astra:(.*)_plate/)
  yeet(/ad_astra:(.*)_rod/)
  yeet('ad_astra:steel_cable')
  yeet('ad_astra:wrench')
  yeet('ad_astra:desh_cable')
  yeet('ad_astra:steel_fluid_pipe')
  yeet('ad_astra:desh_fluid_pipe')
  yeet('ad_astra:ostrum_fluid_pipe')
  yeet('ad_astra:fluid_pipe_duct')
  yeet('ad_astra:cable_duct')
  yeet('ad_astra:engine_frame')
  yeet('ad_astra:engine_fan')
  yeet('ad_astra:hammer')
  yeet('ad_astra:solar_panel')
  yeet('ad_astra:fuel_refinery')
  yeet('ad_astra:coal_generator')
  yeet('ad_astra:compressor')
  yeet('ad_astra:water_pump')
  yeet('ad_astra:oxygen_loader')
  yeet('ad_astra:energizer')
  yeet('ad_astra:cryo_freezer')
  yeet('ad_astra:fuel_bucket')
  yeet('ad_astra:cryo_fuel_bucket')
  yeet('ad_astra:etrionic_blast_furnace')
  yeet('ad_astra:etrionic_capacitor')
  yeet('ad_astra:etrionic_core')
  yeet('ad_astra:oxygen_gear')
  yeet('ad_astra:desh_ingot')
  yeet('ad_astra:desh_nugget')
  yeet('ad_astra:raw_desh')
  yeet('ad_astra:raw_desh_block')
  yeet('ad_astra:ostrum_ingot')
  yeet('ad_astra:ostrum_nugget')
  yeet('ad_astra:raw_ostrum')
  yeet('ad_astra:raw_ostrum_block')
  yeet('ad_astra:calorite_ingot')
  yeet('ad_astra:calorite_nugget')
  yeet('ad_astra:raw_calorite')
  yeet('ad_astra:raw_calorite_block')
  
  yeet_f('ad_astra:oxygen')
  yeet_f('ad_astra:fuel')
  yeet_f('ad_astra:cryo_fuel')
  
ServerEvents.tags('item', event => {
    // Removing ingots and plates
    event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
    event.remove('forge:plates/steel', 'ad_astra:steel_plate')
    event.remove('forge:plates/iron', 'ad_astra:iron_plate')

    // Adding Quarktech suit to space suit items (IV)
    event.add('ad_astra:space_suit_items', 'gtceu:advanced_quarktech_chestplate')
    event.add('ad_astra:space_suit_items', 'gtceu:quarktech_leggings')
    event.add('ad_astra:space_suit_items', 'gtceu:quarktech_boots')
    event.add('ad_astra:space_suit_items', 'gtceu:quarktech_helmet')
})
  
ServerEvents.tags('fluid', event => {
    // Rocket Fuel as Rocket Fuel duh
    event.add('ad_astra:fuel', `gtceu:rocket_fuel`)

    event.remove('ad_astra:fuel', `gtceu:diesel`)
    event.remove('ad_astra:fuel', `ad_astra:fuel`)
    event.remove('ad_astra:fuel', `ad_astra:cryo_fuel`)
    event.remove(`forge:oxygen`, 'ad_astra:oxygen')
    event.remove(`forge:hydrogen`, 'ad_astra:hydrogen')
})
  
ServerEvents.recipes(event => {
    event.remove({ output: 'ad_astra:tier_1_rocket' })
    event.remove({ output: 'ad_astra:tier_2_rocket' })
    event.remove({ output: 'ad_astra:tier_3_rocket' })
    event.remove({ output: 'ad_astra:tier_4_rocket' })

    event.remove({ output: 'ad_astra:steel_engine' })
    event.remove({ output: 'ad_astra:launch_pad' })
    event.remove({ output: 'ad_astra:nasa_workbench' })
    //
    event.remove({ output: 'ad_astra:oxygen_distributor' })
    event.remove({ output: 'ad_astra:oxygen_sensor' })
    event.remove({ output: 'ad_astra:gravity_normalizer' })
    event.remove({ output: 'ad_astra:ti_69' })
    event.remove({ output: 'ad_astra:space_helmet' })
    event.remove({ output: 'ad_astra:space_suit' })
    event.remove({ output: 'ad_astra:space_pants' })
    event.remove({ output: 'ad_astra:space_boots' })
    event.remove({ output: 'ad_astra:netherite_space_helmet' })
    event.remove({ output: 'ad_astra:netherite_space_suit' })
    event.remove({ output: 'ad_astra:netherite_space_pants' })
    event.remove({ output: 'ad_astra:netherite_space_boots' })
    event.remove({ output: 'ad_astra:jet_suit_helmet' })
    event.remove({ output: 'ad_astra:jet_suit' })
    event.remove({ output: 'ad_astra:jet_suit_pants' })
    event.remove({ output: 'ad_astra:jet_suit_boots' })
    //
    event.remove({ output: 'ad_astra:wheel' })
    event.remove({ output: 'ad_astra:tier_1_rover' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench' })
    event.remove({ output: 'ad_astra:desh_ingot' })
    event.remove({ id: 'ad_astra:desh_nugget' })
    event.remove({ id: 'ad_astra:desh_block' })
    event.remove({ output: 'ad_astra:ostrum_ingot' })
    event.remove({ id: 'ad_astra:ostrum_nugget' })
    event.remove({ id: 'ad_astra:ostrum_block' })
    event.remove({ output: 'ad_astra:calorite_ingot' })
    event.remove({ id: 'ad_astra:calorite_nugget' })
    event.remove({ id: 'ad_astra:calorite_block' })
    event.remove({ id: 'ad_astra:steel_rod' })
    event.remove({ id: 'ad_astra:steel_block'})

    event.replaceInput({}, 'ad_astra:desh_plate', 'gtceu:desh_plate')
    event.replaceInput({}, 'ad_astra:desh_ingot', 'gtceu:desh_ingot')
    event.replaceInput({}, 'ad_astra:ostrum_plate', 'gtceu:ostrum_plate')
    event.replaceInput({}, 'ad_astra:ostrum_ingot', 'gtceu:ostrum_ingot')
    event.replaceInput({}, 'ad_astra:calorite_plate', 'gtceu:calorite_plate')
    event.replaceInput({}, 'ad_astra:calorite_ingot', 'gtceu:calorite_ingot')
    event.replaceInput({}, '#ad_astra:steel_plates', '#forge:plates/steel')

    
    // TIER 1
    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {"item": "ad_astra:rocket_nose_cone"},
            {"item": "kubejs:t1_rocket_plate"},
            {"item": "kubejs:t1_rocket_plate"},
            {"item": "kubejs:t1_rocket_plate"},
            {"item": "kubejs:t1_rocket_plate"},
            {"item": "kubejs:t1_rocket_plate"},
            {"item": "kubejs:t1_rocket_plate"},
            {"item": "ad_astra:rocket_fin"},
            {"item": 'gtceu:stainless_steel_drum'},
            {"item": 'gtceu:stainless_steel_drum'},
            {"item": "ad_astra:rocket_fin"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "ad_astra:steel_engine"},
            {"item": "ad_astra:rocket_fin"}
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_1_rocket"
        }
    })

    // TIER 2
    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {"item": "kubejs:desh_rocket_nose_cone"},
            {"item": "kubejs:t2_rocket_plate"},
            {"item": "kubejs:t2_rocket_plate"},
            {"item": "kubejs:t2_rocket_plate"},
            {"item": "kubejs:t2_rocket_plate"},
            {"item": "kubejs:t2_rocket_plate"},
            {"item": "kubejs:t2_rocket_plate"},
            {"item": "kubejs:desh_rocket_fin"},
            {"item": 'gtceu:titanium_drum'},
            {"item": 'gtceu:titanium_drum'},
            {"item": "kubejs:desh_rocket_fin"},
            {"item": "kubejs:desh_rocket_fin"},
            {"item": "ad_astra:desh_engine"},
            {"item": "kubejs:desh_rocket_fin"}
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_2_rocket"
        }
    })

    // T1 plates
    event.recipes.gtceu.forming_press("t1_welded_plate")
      .itemInputs(['4x gtceu:zanite_steel_plate', '4x gtceu:black_steel_plate', '4x gtceu:titanium_plate', '4x gtceu:manasteel_plate'])
      .circuit(1)
      .itemOutputs('kubejs:t1_welded_rocket_plate')
      .duration(20*8)
      .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.implosion_compressor("t1_rocket_plate")
      .itemInputs(
        'kubejs:t1_welded_rocket_plate',
        'gtceu:industrial_tnt'
        )
      .circuit(1)
      .itemOutputs('kubejs:t1_rocket_plate')
      .duration(20)
      .EUt(GTValues.VA[GTValues.HV])

    // T2 Plates
    event.recipes.gtceu.forming_press("t2_welded_plate")
      .itemInputs(['8x gtceu:desh_plate', '8x gtceu:lumium_plate', '8x gtceu:tungsten_steel_plate', '8x gtceu:gaia_plate'])
      .circuit(1)
      .itemOutputs('kubejs:t2_welded_rocket_plate')
      .duration(20*8)
      .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.implosion_compressor("t2_rocket_plate")
      .itemInputs(
        'kubejs:t2_welded_rocket_plate',
        '4x gtceu:industrial_tnt'
        )
      .circuit(1)
      .itemOutputs('kubejs:t2_rocket_plate')
      .duration(20)
      .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.canner("ad_astra:gas_tank/filling_t1")
      .itemInputs('ad_astra:gas_tank')
      .inputFluids('gtceu:oxygen 1000')
      .circuit(1)
      .itemOutputs(Item.of('ad_astra:gas_tank', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"gtceu:oxygen"}]}}'))
      .duration(20*10)
      
    event.recipes.gtceu.canner("ad_astra:gas_tank/filling_t2")
      .itemInputs('ad_astra:large_gas_tank')
      .inputFluids('gtceu:oxygen 3000')
      .circuit(1)
      .itemOutputs(Item.of('ad_astra:large_gas_tank', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"gtceu:oxygen"}]}}'))
      .duration(20*10)
      .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.canner("ad_astra:space_suit/filling_t1")
      .itemInputs('ad_astra:space_suit')
      .inputFluids('gtceu:oxygen 1000')
      .circuit(1)
      .itemOutputs(Item.of('ad_astra:space_suit', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"gtceu:oxygen"}]}}'))
      .duration(20*10)

    // TODO: change
    event.recipes.gtceu.assembler("space_suit_t1")
      .itemInputs(['32x gtceu:polytetrafluoroethylene_plate', '4x gtceu:stainless_steel_plate', '4x gtceu:titanium_plate', 'ad_astra:gas_tank'])
      .circuit(1)
      .itemOutputs('ad_astra:space_suit')
      .duration(20*10)
      .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.assembler("space_helmet_t1")
      .itemInputs(['20x gtceu:polytetrafluoroethylene_plate', '3x gtceu:stainless_steel_plate', '3x gtceu:titanium_plate', 'gtceu:glass_plate'])
      .circuit(1)
      .itemOutputs('ad_astra:space_helmet')
      .duration(160)
      .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.assembler("space_pants_t1")
      .itemInputs(['28x gtceu:polytetrafluoroethylene_plate', '4x gtceu:stainless_steel_plate', '4x gtceu:titanium_plate'])
      .circuit(2)
      .itemOutputs('ad_astra:space_pants')
      .duration(160)
      .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.assembler("space_boots_t1")
      .itemInputs(['16x gtceu:polytetrafluoroethylene_plate', '1x gtceu:stainless_steel_plate', '1x gtceu:titanium_plate'])
      .circuit(2)
      .itemOutputs('ad_astra:space_boots')
      .duration(160)
      .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler("launch_pad")
      .itemInputs(['5x gtceu:stainless_steel_plate', '4x gtceu:titanium_plate'])
      .circuit(5)
      .itemOutputs('ad_astra:launch_pad')
      .duration(160)
      .EUt(GTValues.VA[GTValues.HV])
  
    // event.recipes.gtceu.assembler('osmiridium_fin')
    //   .itemInputs(['8x gtceu:osmiridium_plate', '8x gtceu:osmiridium_screw', '4x gtceu:osmiridium_rod', '2x gtceu:ev_electric_motor'])
    //   .circuit(15)
    //   .itemOutputs('kubejs:osmiridium_fin')
    //   .duration(160)
    //   .EUt(GTValues.VA[GTValues.EV])
  
    // event.recipes.gtceu.assembler('osmiridium_nose_cone')
    //   .itemInputs(['8x gtceu:double_osmiridium_plate', '4x gtceu:osmiridium_rod', 'gtceu:nano_processor_mainframe', 'create:rose_quartz_lamp'])
    //   .circuit(15)
    //   .itemOutputs('kubejs:osmiridium_nose_cone')
    //   .duration(160)
    //   .EUt(GTValues.VA[GTValues.EV])
  
    event.shaped('ad_astra:nasa_workbench', [
      'CAC',
      'AMA',
      'CHC'
    ], {
      A: 'gtceu:hv_robot_arm',
      C: '#gtceu:circuits/iv',
      H: 'gtceu:ev_machine_hull',
      M: 'gtceu:computer_monitor_cover',
    })

    event.shaped('ad_astra:wheel', [
      'HBS',
      'BCB',
      'WBA'
    ], {
      A: 'gtceu:stainless_steel_screw',
      B: 'gtceu:styrene_butadiene_rubber_plate',
      C: 'gtceu:stainless_steel_ring',
      H: '#forge:tools/hammers',
      S: '#forge:tools/screwdrivers',
      W: '#forge:tools/wrenches',
    })

    event.shaped('ad_astra:tier_1_rover', [
      'F R',
      'FDE',
      'WFW'
    ], {
      R: 'gtceu:titanium_rod',
      D: 'gtceu:titanium_drum',
      W: 'ad_astra:wheel',
      E: 'ad_astra:steel_engine',
      F: 'gtceu:titanium_frame'
    })

    // TODO: change
    event.shaped('ad_astra:oxygen_distributor', [
      'CBC',
      'AHA',
      'DDD'
    ], {
      A: 'gtceu:stainless_steel_rotor',
      B: 'gtceu:titanium_drum',
      C: '#gtceu:circuits/ev',
      H: 'gtceu:hv_machine_hull',
      D: 'gtceu:desh_plate',
    })

    // TODO: change
    event.shaped('ad_astra:gravity_normalizer', [
      'M M',
      'EHE',
      'DDD'
    ], {
      M: '#gtceu:circuits/hv',
      E: 'gtceu:hv_emitter',
      H: 'gtceu:hv_machine_hull',
      D: 'gtceu:desh_plate',
    })

    event.shaped('ad_astra:steel_engine', [
      'SRS',
      'PMP',
      'DFH'
    ], {
      P: 'gtceu:steel_plate',
      S: 'gtceu:steel_screw',
      M: 'gtceu:hv_machine_hull',
      F: 'gtceu:stainless_steel_rotor',
      H: '#forge:tools/hammers',
      D: '#forge:tools/screwdrivers',
      R: 'gtceu:steel_rod'
    })

    // TODO: change
    // event.shaped('kubejs:osmiridium_engine', [
    //   'SPS',
    //   'PMP',
    //   'DFH'
    // ], {
    //   P: 'gtceu:osmiridium_plate',
    //   S: 'gtceu:osmiridium_screw',
    //   M: 'gtceu:ev_machine_hull',
    //   F: 'gtceu:osmiridium_rotor',
    //   H: '#forge:tools/hammers',
    //   D: '#forge:tools/screwdrivers',
    // })

    // TODO: change
    event.shaped('ad_astra:ti_69', [
      'SGS',
      'PMP',
      'CDC'
    ], {
      P: 'gtceu:steel_plate',
      S: 'gtceu:stainless_steel_screw',
      M: '#gtceu:circuits/hv',
      C: 'gtceu:gold_single_cable',
      D: '#forge:tools/screwdrivers',
      G: 'gtceu:computer_monitor_cover'
    })

    event.replaceOutput(
      { output: 'gtceu:desh_block' },
      'gtceu:desh_block',
      'ad_astra:desh_block'
    )

    event.replaceInput(
      { input: 'ad_astra:iron_rod' },
      'ad_astra:iron_rod',
      'gtceu:iron_rod'
    )

    event.replaceInput(
      { input: 'ad_astra:steel_rod' },
      'ad_astra:steel_rod',
      'gtceu:steel_rod'
    )

    event.replaceInput({id: 'ad_astra:recipes/rocket_nose_cone'},
      '#forge:plates/steel',
      'kubejs:t1_rocket_plate'
    )

    event.replaceInput({id: 'ad_astra:recipes/rocket_fin'},
    '#forge:plates/steel',
    'kubejs:t1_rocket_plate'
    )

    event.remove({output: 'ad_astra:rocket_fin'})
    event.shaped(
        'ad_astra:rocket_fin',
        [
            ' S ',
            'SSS',
            'SHS'
        ],
        {
            S: 'gtceu:steel_plate',
            H: '#forge:tools/hammers'
        }
    )

    event.remove({output: 'ad_astra:rocket_nose_cone'})
    event.shaped(
        'ad_astra:rocket_nose_cone',
        [
            ' C ',
            'HSD',
            'SSS'
        ],
        {
            S: 'gtceu:steel_plate',
            C: 'gtceu:copper_rod',
            H: '#forge:tools/hammers',
            D: '#forge:tools/screwdrivers'
        }
    )

    event.remove({id: 'ad_astra:desh_engine'})
    event.shaped(
        'ad_astra:desh_engine', 
        [
      'SRS',
      'PMP',
      'DFH'
    ], 
    {
      P: 'gtceu:desh_plate',
      S: 'gtceu:desh_screw',
      M: 'gtceu:ev_machine_hull',
      F: 'gtceu:titanium_rotor',
      H: '#forge:tools/hammers',
      D: '#forge:tools/screwdrivers',
      R: 'gtceu:desh_rod'
    })

    event.shaped(
        'kubejs:desh_rocket_nose_cone',
        [
            ' C ',
            'HSD',
            'SSS'
        ],
        {
            S: 'gtceu:desh_plate',
            C: 'gtceu:tungsten_steel_rod',
            H: '#forge:tools/hammers',
            D: '#forge:tools/screwdrivers'
        }
    )

    event.shaped(
        'kubejs:desh_rocket_fin',
        [
            ' S ',
            'SSS',
            'SHS'
        ],
        {
            S: 'gtceu:desh_plate',
            H: '#forge:tools/hammers'
        }
    )

})