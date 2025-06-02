// const tiers = ['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro']
// const voltage = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm']

// ServerEvents.recipes(event => {
//     tiers.forEach((tier, index) => {
//         const energyCellId = `powah:energy_cell_${tier}`
//         const batteryId = `powah:battery_${tier}`
//         const enderCellId = `powah:ender_cell_${tier}`
//         const energyCableId = `powah:energy_cable_${tier}`
//         const furnatorId = `powah:furnator_${tier}`
//         const magmatorId = `powah:magmator_${tier}`
//         const thermoGeneratorId = `powah:thermo_generator_${tier}`
//         const solarPanelId = `powah:solar_panel_${tier}`
//         const playerTransmitterId = `powah:player_transmitter_${tier}`
//         const energizingRodId = `powah:energizing_rod_${tier}`
//         const energyHopper = `powah:energy_hopper_${tier}`
//         const energyDischargerId = `powah:energy_discharger_${tier}`

//         const machineHull = `gtceu:${voltage[index]}_machine_hull`
//         const batteryHullId = `gtceu:${voltage[index]}_battery_hull`

//         // replace all cable recipes
//         event.remove({ output: energyCableId })
//         event.recipes.gtceu.assembler(`kubejs_${energyCableId}`)
//             .itemInputs(
//                 '2x powah:dielectric_casing',
//                 `1x gtceu:${
//                     voltage[index] === 'lv' ? 'tin' :
//                     voltage[index] === 'mv' ? 'aluminium' :
//                     voltage[index] === 'hv' ? 'nichrome' :
//                     voltage[index] === 'ev' ? 'platinum' :
//                     voltage[index] === 'iv' ? 'niobium_titanium' :
//                     voltage[index] === 'luv' ? 'naquadah' :
//                     'tritanium'
//                 }_single_cable`
//             )
//             .itemOutputs(`16x ${energyCableId}`)
//             .duration(20*16)
//             .EUt(GTValues.VA[GTValues.LV])
//         // replace generic inputs with gt gated content
//         event.replaceInput({ output: energyCellId }, 'powah:dielectric_casing', machineHull)
//         event.replaceInput({ output: batteryId }, 'minecraft:redstone_block', batteryHullId)
//         event.replaceInput({ output: enderCellId }, 'powah:aerial_pearl', batteryHullId)
//         event.replaceInput({ output: furnatorId }, 'powah:dielectric_casing', machineHull)
//         event.replaceInput({ output: magmatorId }, 'powah:dielectric_casing', machineHull)
//         event.replaceInput({ output: thermoGeneratorId }, 'powah:dielectric_casing', machineHull)
//         event.replaceInput({ output: solarPanelId }, 'powah:dielectric_casing', machineHull)
//         event.replaceInput({ output: playerTransmitterId }, 'powah:dielectric_casing', machineHull)
//         event.replaceInput({ output: energizingRodId }, 'powah:dielectric_casing', machineHull)
//         event.replaceInput({ output: energyHopper }, 'powah:dielectric_casing', machineHull)
//         event.replaceInput({ output: energyDischargerId }, 'powah:dielectric_casing', machineHull)
//     })
// })

// ServerEvents.recipes(event => {
//     // Dielectric paste
//     event.remove({ output: 'powah:dielectric_paste' })
//     event.recipes.gtceu.mixer('kubejs_dielectric_paste')
//         .itemInputs('4x gtceu:silicon_dust')
//         .inputFluids(Fluid.of('gtceu:lubricant 200'))
//         .itemOutputs('4x powah:dielectric_paste')
//         .duration(20*10)
//         .EUt(8)

//     // Dielectric Casing
//     event.remove({ output: 'powah:dielectric_casing' })
//     event.recipes.gtceu.assembler('kubejs_dielectric_casing')
//         .itemInputs(
//             '4x powah:dielectric_paste',
//             '4x gtceu:steel_plate'
//         )
//         .itemOutputs('4x powah:dielectric_casing')
//         .duration(20*10)
//         .EUt(GTValues.VA[GTValues.LV])

//     // Wrench
//     event.remove({ output: 'powah:wrench' })
//     event.shaped(
//         'powah:wrench',
//         [
//             'SDS',
//             'HSF',
//             ' S '
//         ],
//         {
//             D: 'powah:dielectric_paste',
//             S: 'gtceu:steel_plate',
//             H: '#forge:tools/hammers',
//             F: '#forge:tools/files'
//         }
//     )

//     // Aerial Pearl
//     event.remove({ output: 'powah:aerial_pearl' })
//     event.recipes.gtceu.assembler('kubejs_aerial_pearl')
//         .itemInputs(
//             '4x powah:dielectric_paste',
//             'minecraft:ender_pearl',
//             '4x gtceu:steel_plate'
//         )
//         .itemOutputs('powah:aerial_pearl')
//         .duration(20*10)
//         .EUt(GTValues.VA[GTValues.LV])

//     // Player Aerial Pearl
//     event.recipes.gtceu.assembler('kubejs_player_aerial_pearl')
//         .itemInputs(
//             'powah:aerial_pearl',
//             '#forge:heads',
//         )
//         .itemOutputs('powah:player_aerial_pearl')
//         .duration(20*10)
//         .EUt(GTValues.VA[GTValues.LV])

//     // Blank Card
//     event.remove({ output: 'powah:blank_card' })
//     event.recipes.gtceu.bender('kubejs_blank_card')
//         .circuit(1)
//         .itemInputs('4x powah:dielectric_paste')
//         .itemOutputs('powah:blank_card')
//         .duration(20*10)
//         .EUt(GTValues.VA[GTValues.LV])

//     // Photoelectric Pane
//     event.remove({ output: 'powah:photoelectric_pane' })
//     event.recipes.gtceu.assembler('kubejs_photoelectric_pane')
//         .circuit(1)
//         .itemInputs(
//             '4x powah:dielectric_paste',
//             '2x gtceu:glass_plate'
//         )
//         .itemOutputs('powah:photoelectric_pane')
//         .duration(20*10)
//         .EUt(GTValues.VA[GTValues.MV])

//     // Thermoelectric Plate
//     event.remove({ output: 'powah:thermoelectric_plate' })
//     event.recipes.gtceu.assembler('kubejs_thermoelectric_plate')
//         .circuit(1)
//         .itemInputs(
//             '4x powah:dielectric_paste',
//             '2x powah:capacitor_basic_large',
//             'gtceu:mv_voltage_coil'
//         )
//         .itemOutputs('powah:thermoelectric_plate')
//         .duration(20*10)
//         .EUt(GTValues.VA[GTValues.MV])

//     // REACTORS
//     // LV ----------------------------------------------------------------------

//     // Capacitor tiny
//     event.remove({ output: 'powah:capacitor_basic_tiny' })
//     event.recipes.gtceu.assembler('kubejs_capacitor_basic_tiny')
//     .itemInputs(
//         '2x powah:dielectric_paste',
//         'gtceu:aluminium_double_wire'
//     )
//     .itemOutputs('2x powah:capacitor_basic_tiny')
//     .duration(20*3)
//     .EUt(GTValues.VA[GTValues.LV])

//     // Reactor starter
//     event.remove({ output: 'powah:reactor_starter' })
//     event.recipes.gtceu.assembler('kubejs_reactor_starter')
//     .itemInputs(
//         '4x powah:capacitor_basic_tiny',
//         'gtceu:lv_machine_casing',
//         '#gtceu:circuits/lv'
//     )
//     .itemOutputs('4x powah:reactor_starter')
//     .duration(20*20)
//     .EUt(GTValues.VA[GTValues.LV])

//     // MV ----------------------------------------------------------------------

//     // Capacitor Basic
//     event.remove({ output: 'powah:capacitor_basic_large' })
//     event.recipes.gtceu.assembler('kubejs_capacitor_basic_large')
//     .itemInputs(
//         '4x powah:dielectric_paste',
//         'gtceu:kanthal_double_wire'
//     )
//     .itemOutputs('2x powah:capacitor_basic_large')
//     .duration(20*3)
//     .EUt(GTValues.VA[GTValues.MV])

//     // Reactor Basic
//     event.remove({ output: 'powah:reactor_basic' })
//     event.recipes.gtceu.assembler('kubejs_reactor_basic')
//     .itemInputs(
//         '4x powah:capacitor_basic_large',
//         'gtceu:mv_machine_casing',
//         '#gtceu:circuits/mv'
//     )
//     .itemOutputs('4x powah:reactor_basic')
//     .duration(20*20)
//     .EUt(GTValues.VA[GTValues.MV])

//     // HV ----------------------------------------------------------------------

//     // Hardened Capacitor
//     event.remove({ output: 'powah:capacitor_hardened' })
//     event.recipes.gtceu.assembler('kubejs_capacitor_hardened')
//     .itemInputs(
//         '4x powah:dielectric_paste',
//         '4x powah:steel_energized',
//         '2x gtceu:nichrome_double_wire'
//     )
//     .itemOutputs('4x powah:capacitor_hardened')
//     .duration(20*3)
//     .EUt(GTValues.VA[GTValues.HV])

//     // Reactor Hardened
//     event.remove({ output: 'powah:reactor_hardened' })
//     event.recipes.gtceu.assembler('kubejs_reactor_hardened')
//     .itemInputs(
//         '4x powah:capacitor_hardened',
//         'gtceu:hv_machine_casing',
//         '#gtceu:circuits/hv'
//     )
//     .itemOutputs('4x powah:reactor_hardened')
//     .duration(20*24)
//     .EUt(GTValues.VA[GTValues.HV])

//     // EV ----------------------------------------------------------------------

//     // Capacitor Blazing
//     event.remove({ output: 'powah:capacitor_blazing' })
//     event.recipes.gtceu.assembler('kubejs_capacitor_blazing')
//     .itemInputs(
//         '4x powah:dielectric_paste',
//         '4x powah:crystal_blazing',
//         '2x gtceu:platinum_double_wire'
//     )
//     .itemOutputs('4x powah:capacitor_blazing')
//     .duration(20*3)
//     .EUt(GTValues.VA[GTValues.EV])

//     // Reactor Blazing
//     event.remove({ output: 'powah:reactor_blazing' })
//     event.recipes.gtceu.assembler('kubejs_reactor_blazing')
//     .itemInputs(
//         '4x powah:capacitor_blazing',
//         'gtceu:ev_machine_casing',
//         '#gtceu:circuits/ev'
//     )
//     .itemOutputs('4x powah:reactor_blazing')
//     .duration(20*32)
//     .EUt(GTValues.VA[GTValues.EV])

//     // IV ----------------------------------------------------------------------

//     // Capacitor Niotic
//     event.remove({ output: 'powah:capacitor_niotic' })
//     event.recipes.gtceu.assembler('kubejs_capacitor_niotic')
//     .itemInputs(
//         '4x powah:dielectric_paste',
//         '4x powah:crystal_niotic',
//         '2x gtceu:niobium_titanium_double_wire'
//     )
//     .itemOutputs('4x powah:capacitor_niotic')
//     .duration(20*3)
//     .EUt(GTValues.VA[GTValues.IV])

//     // Reactor niotic
//     event.remove({ output: 'powah:reactor_niotic' })
//     event.recipes.gtceu.assembler('kubejs_reactor_niotic')
//     .itemInputs(
//         '4x powah:capacitor_niotic',
//         'gtceu:iv_machine_casing',
//         '#gtceu:circuits/iv'
//     )
//     .itemOutputs('4x powah:reactor_niotic')
//     .duration(20*40)
//     .EUt(GTValues.VA[GTValues.IV])

//     // LuV ---------------------------------------------------------------------

//     // Capacitor Spirited
//     event.remove({ output: 'powah:capacitor_spirited' })
//     event.recipes.gtceu.assembler('kubejs_capacitor_spirited')
//     .itemInputs(
//         '4x powah:dielectric_paste',
//         '4x powah:crystal_spirited',
//         '2x gtceu:naquadah_double_wire'
//     )
//     .itemOutputs('4x powah:capacitor_spirited')
//     .duration(20*3)
//     .EUt(GTValues.VA[GTValues.LuV])

//     // Reactor spirited
//     event.remove({ output: 'powah:reactor_spirited' })
//     event.recipes.gtceu.assembler('kubejs_reactor_spirited')
//     .itemInputs(
//         '4x powah:capacitor_spirited',
//         'gtceu:luv_machine_casing',
//         '#gtceu:circuits/luv'
//     )
//     .itemOutputs('4x powah:reactor_spirited')
//     .duration(20*50)
//     .EUt(GTValues.VA[GTValues.LuV])

//     // ZPM ---------------------------------------------------------------------

//     // Capacitor Nitro
//     event.remove({ output: 'powah:capacitor_nitro' })
//     event.recipes.gtceu.assembler('kubejs_capacitor_nitro')
//     .itemInputs(
//         '4x powah:dielectric_paste',
//         '4x powah:crystal_nitro',
//         '2x gtceu:vanadium_gallium_double_wire'
//     )
//     .itemOutputs('4x powah:capacitor_nitro')
//     .duration(20*3)
//     .EUt(GTValues.VA[GTValues.ZPM])

//     // Reactor nitro
//     event.remove({ output: 'powah:reactor_nitro' })
//     event.recipes.gtceu.assembler('kubejs_reactor_nitro')
//     .itemInputs(
//         '4x powah:capacitor_nitro',
//         'gtceu:zpm_machine_casing',
//         '#gtceu:circuits/zpm'
//     )
//     .itemOutputs('4x powah:reactor_nitro')
//     .duration(20*60)
//     .EUt(GTValues.VA[GTValues.ZPM])

// })