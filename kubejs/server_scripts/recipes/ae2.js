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
    // Removed after ae2 gregification
    // event.recipes.gtceu.autoclave('kubejs_flawless_budding_quartz')
    //     .itemInputs(
    //         'ae2:flawed_budding_quartz'
    //     )
    //     .inputFluids(Fluid.of('minecraft:water 1000'))
    //     .itemOutputs('ae2:flawless_budding_quartz')
    //     .duration(20*10)
    //     .EUt(GTValues.VA[GTValues.HV])

    // Replace all the charged certus quartz from ae2 to gtceu
    event.replaceInput({}, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
    event.replaceInput({}, 'ae2:certus_quartz_dust', 'gtceu:certus_quartz_dust')
    event.replaceInput({}, 'ae2:fluix_crystal', 'gtceu:fluix_crystal_gem')
    event.replaceInput({}, 'ae2:fluix_dust', 'gtceu:fluix_crystal_dust')
    // output
    event.replaceOutput({}, 'ae2:charged_certus_quartz_crystal', 'gtceu:charged_certus_quartz_gem')
    event.replaceOutput({}, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
    event.replaceOutput({}, 'ae2:certus_quartz_dust', 'gtceu:certus_quartz_dust')
    event.replaceOutput({}, 'ae2:fluix_crystal', 'gtceu:fluix_crystal_gem')
    event.replaceOutput({}, 'ae2:fluix_dust', 'gtceu:fluix_crystal_dust')

    // Quartz Fiber
    event.remove({id: 'ae2:network/parts/quartz_fiber_part'})
    event.recipes.gtceu.alloy_smelter('quartz_fiber')
        .itemInputs(
            '#c:glass_blocks',
            '#ae2:all_certus_quartz'
        )
        .itemOutputs(
            'ae2:quartz_fiber'
        )
        .duration(20*2)
        .EUt(GTValues.VA[GTValues.MV])

    // Blank Pattern
    event.remove({id: 'ae2:network/crafting/patterns_blank'})
    event.shaped('3x ae2:blank_pattern',
        [
            'QSQ',
            'SCS',
            'SSS'
        ],
        {
            Q: 'ae2:quartz_glass',
            S: 'gtceu:stainless_steel_plate',
            C: '#gtceu:circuits/hv'
        }
    )

    // Energy Acceptor
    event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
    event.recipes.gtceu.assembler('energy_acceptor')
        .circuit(8)
        .itemInputs(
            '4x gtceu:stainless_steel_plate',
            '4x ae2:quartz_glass',
            'ae2:energy_cell'
        )
        .itemOutputs(
            'ae2:energy_acceptor'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Energy Cell
    event.remove({id: 'ae2:network/blocks/energy_energy_cell'})
    event.recipes.gtceu.assembler('energy_cell')
        .circuit(8)
        .itemInputs(
            '4x gtceu:certus_quartz_plate',
            '4x gtceu:stainless_steel_plate',
            '#gtceu:batteries/hv'
        )
        .itemOutputs(
            'ae2:energy_cell'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // 1k Me Storage
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
    event.recipes.gtceu.circuit_assembler('me_cell_1k')
        .itemInputs(
            'ae2:logic_processor',
            '#gtceu:circuits/mv',
            '4x gtceu:certus_quartz_gem',
            '4x gtceu:fine_elventium_wire'
        )
        .itemOutputs(
            'ae2:cell_component_1k'
        )
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.MV])

    // 4k Me Storage
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
    event.recipes.gtceu.circuit_assembler('me_cell_4k')
        .itemInputs(
            '3x ae2:cell_component_1k',
            'ae2:calculation_processor',
            '#gtceu:circuits/hv',
            '4x gtceu:fine_platinum_wire'
        )
        .itemOutputs(
            'ae2:cell_component_4k'
        )
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.HV])

    // 16k Me Storage
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_16k_part'})
    event.recipes.gtceu.circuit_assembler('me_cell_16k')
        .itemInputs(
            '3x ae2:cell_component_4k',
            'ae2:calculation_processor',
            '#gtceu:circuits/ev',
            '4x gtceu:fine_tungsten_steel_wire'
        )
        .itemOutputs(
            'ae2:cell_component_16k'
        )
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.EV])

    // 64k Me Storage
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_64k_part'})
    event.recipes.gtceu.circuit_assembler('me_cell_64k')
        .itemInputs(
            '3x ae2:cell_component_16k',
            'ae2:calculation_processor',
            '#gtceu:circuits/iv',
            '4x gtceu:fine_naquadah_wire'
        )
        .itemOutputs(
            'ae2:cell_component_64k'
        )
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.IV])

    // 256k Me Storage
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_256k_part'})
    event.recipes.gtceu.circuit_assembler('me_cell_256k')
        .itemInputs(
            '3x ae2:cell_component_64k',
            'ae2:calculation_processor',
            '#gtceu:circuits/luv',
            '4x gtceu:fine_europium_wire'
        )
        .itemOutputs(
            'ae2:cell_component_256k'
        )
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LuV])

    // ME Controller
    event.remove({output: 'ae2:controller'})
    event.recipes.gtceu.assembler('me_controller')
        .circuit(9)
        .itemInputs(
            'ae2:energy_acceptor',
            'ae2:engineering_processor',
            '4x gtceu:fluix_crystal_plate'
        )
        .itemOutputs(
            'ae2:controller'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // ME Drive
    event.remove({output: 'ae2:drive'})
    event.recipes.gtceu.assembler('me_drive')
        .circuit(10)
        .itemInputs(
            'ae2:energy_acceptor',
            'ae2:chest',
            '2x ae2:engineering_processor',
            '4x gtceu:fluix_crystal_plate'
        )
        .itemOutputs(
            'ae2:drive'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])    
        
    // ME Chest
    event.remove({output: 'ae2:chest'})
    event.recipes.gtceu.assembler('me_chest')
        .circuit(11)
        .itemInputs(
            'ironchest:iron_chest',
            '2x ae2:engineering_processor',
            '4x gtceu:fluix_crystal_plate'
        )
        .itemOutputs(
            'ae2:chest'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // ME Interface
    event.remove({id: "ae2:network/blocks/interfaces_interface"})
    event.recipes.gtceu.assembler('me_interface')
        .circuit(12)
        .itemInputs(
            '2x gtceu:stainless_steel_plate',
            '2x gtceu:fluix_crystal_plate',
            'ae2:annihilation_core',
            'ae2:formation_core'
        )
        .itemOutputs(
            'ae2:interface'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Crafting Unit
    event.remove({output: "ae2:crafting_unit"})
    event.recipes.gtceu.assembler('crafting_unit')
        .circuit(16)
        .itemInputs(
            '2x gtceu:stainless_steel_plate',
            '2x ae2:calculation_processor',
            'ae2:logic_processor'
        )
        .itemOutputs(
            'ae2:crafting_unit'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Pattern Provider
    event.remove({id: "ae2:network/blocks/pattern_providers_interface"})
    event.recipes.gtceu.assembler('pattern_provider')
        .circuit(17)
        .itemInputs(
            '2x gtceu:stainless_steel_plate',
            'ae2:annihilation_core',
            'ae2:formation_core'
        )
        .itemOutputs(
            'ae2:pattern_provider'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Molecular Assembler
    event.remove({output: 'ae2:molecular_assembler'})
    event.recipes.gtceu.assembler('molecular_assembler')
        .circuit(32)
        .itemInputs(
            'gtceu:hv_machine_casing',
            '4x ae2:quartz_glass',
            'ae2:annihilation_core',
            'ae2:formation_core',
            'gtceu:hv_robot_arm'
        )
        .itemOutputs(
            'ae2:molecular_assembler'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Fluix Glass cable
    event.remove({id: 'ae2:network/cables/glass_fluix'})
    event.recipes.gtceu.alloy_smelter('glass_fluix')
        .itemInputs(
            'ae2:quartz_fiber',
            '2x gtceu:fluix_crystal_gem'
        )
        .itemOutputs(
            '4x ae2:fluix_glass_cable'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Illuminated Panel
    event.remove({id: 'ae2:network/parts/panels_semi_dark_monitor'})
    event.recipes.gtceu.assembler('illum_panel')
        .itemInputs(
            '3x ae2:quartz_glass',
            'gtceu:computer_monitor_cover',
            'ae2:logic_processor'
        )
        .itemOutputs(
            'ae2:semi_dark_monitor'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Wireless Receiver
    event.remove({id: 'ae2:network/wireless_part'})
    event.recipes.gtceu.assembler('wireless_receiver')
        .itemInputs(
            'ae2:fluix_pearl',
            'gtceu:hv_sensor',
            'gtceu:hv_emitter'
        )
        .itemOutputs(
            'ae2:wireless_receiver'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // Fluix Pearl
    event.remove({id: 'ae2:misc/fluixpearl'})
    event.recipes.gtceu.alloy_smelter('wireless_receiver')
        .itemInputs(
            'ender_pearl',
            '8x gtceu:fluix_crystal_dust'
        )
        .itemOutputs(
            'ae2:fluix_pearl'
        )
        .duration(20*6)
        .EUt(GTValues.VA[GTValues.MV])

    // Item Cell Housing
    event.remove({id: 'ae2:network/cells/item_cell_housing'})
    event.shaped('ae2:item_cell_housing',
        [
            'QSQ',
            'S S',
            'SSS'
        ],
        {
            Q: 'ae2:quartz_glass',
            S: 'gtceu:polyethylene_plate'
        }
    )

    // Fluid Cell Housing
    event.remove({id: 'ae2:network/cells/fluid_cell_housing'})
    event.shaped('ae2:fluid_cell_housing',
        [
            'QSQ',
            'S S',
            'SSS'
        ],
        {
            Q: 'ae2:quartz_glass',
            S: 'gtceu:polyvinyl_chloride_plate'
        }
    )

    // Silicon
    event.replaceInput({}, 'ae2:silicon', 'gtceu:silicon_dust')
    event.remove({output: 'ae2:silicon'})

    // PRESSES
    
    // Calculation
    event.recipes.gtceu.forming_press('calculation_press')
        .circuit(1)
        .itemInputs('gtceu:stainless_steel_block')
        .itemOutputs('ae2:calculation_processor_press')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.HV])
    // Engineering
    event.recipes.gtceu.forming_press('engineering_press')
        .circuit(2)
        .itemInputs('gtceu:stainless_steel_block')
        .itemOutputs('ae2:engineering_processor_press')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.HV])
    // Logic
    event.recipes.gtceu.forming_press('logic_press')
        .circuit(3)
        .itemInputs('gtceu:stainless_steel_block')
        .itemOutputs('ae2:logic_processor_press')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.HV])
    // Silicon
    event.recipes.gtceu.forming_press('silicon_press')
        .circuit(4)
        .itemInputs('gtceu:stainless_steel_block')
        .itemOutputs('ae2:silicon_press')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.HV])

    // Printed Circuits
    // Calc (short for calculation)
    event.remove({output: 'ae2:printed_calculation_processor'})
    event.recipes.gtceu.forming_press('calculation_circuit')
        .notConsumable(InputItem.of('ae2:calculation_processor_press'))
        .itemInputs('#forge:gems/certus_quartz')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])
    // Engineering
    event.remove({output: 'ae2:printed_engineering_processor'})
    event.recipes.gtceu.forming_press('engineering_circuit')
        .notConsumable(InputItem.of('ae2:engineering_processor_press'))
        .itemInputs('#forge:gems/diamond')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])
    // Logic
    event.remove({output: 'ae2:printed_logic_processor'})
    event.recipes.gtceu.forming_press('logic_circuit')
        .notConsumable(InputItem.of('ae2:logic_processor_press'))
        .itemInputs('minecraft:gold_ingot')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])
    // Silicon
    event.remove({output: 'ae2:printed_silicon'})
    event.recipes.gtceu.forming_press('silicon_circuit')
        .notConsumable(InputItem.of('ae2:silicon_press'))
        .itemInputs('gtceu:silicon_dust')
        .itemOutputs('ae2:printed_silicon')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])

    // PROCESSORS
    // Logic
    event.remove({output: 'ae2:logic_processor'})
    event.recipes.gtceu.assembler('logic_processor')
        .itemInputs(
            'ae2:printed_logic_processor',
            'ae2:printed_silicon',
            'minecraft:redstone'
        )
        .itemOutputs('ae2:logic_processor')
        .duration(20*6)
        .EUt(GTValues.VA[GTValues.MV])
    // Calculation
    event.remove({output: 'ae2:calculation_processor'})
    event.recipes.gtceu.assembler('calculation_processor')
        .itemInputs(
            'ae2:printed_calculation_processor',
            'ae2:printed_silicon',
            'minecraft:redstone'
        )
        .itemOutputs('ae2:calculation_processor')
        .duration(20*6)
        .EUt(GTValues.VA[GTValues.MV])
    // Engineering
    event.remove({output: 'ae2:engineering_processor'})
    event.recipes.gtceu.assembler('engineering_processor')
        .itemInputs(
            'ae2:printed_engineering_processor',
            'ae2:printed_silicon',
            'minecraft:redstone'
        )
        .itemOutputs('ae2:engineering_processor')
        .duration(20*6)
        .EUt(GTValues.VA[GTValues.MV])
})

ServerEvents.tags('item', event => {
    event.add('forge:gems/certus_quartz', 'gtceu:charged_certus_quartz_gem')
    event.add('ae2:all_certus_quartz', 'gtceu:charged_certus_quartz_gem')
    event.add('ae2:all_quartz', 'gtceu:charged_certus_quartz_gem')
})

yeet('ae2:charged_certus_quartz_crystal')
yeet('ae2:certus_quartz_crystal')
yeet('ae2:certus_quartz_dust')
yeet('ae2:fluix_crystal')
yeet('ae2:fluix_dust')