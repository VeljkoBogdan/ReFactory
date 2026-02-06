ServerEvents.recipes(event => {
    // Nuclear Cladding
    event.recipes.gtceu.assembler('nuclear_cladding')
        .itemInputs('gtceu:zircaloy_frame', '6x gtceu:zircaloy_plate')
        .itemOutputs('2x refactorycore:nuclear_cladding')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    // Control Rod Casing
    event.recipes.gtceu.assembler('control_rod_casing')
        .circuit(1)
        .itemInputs('gtceu:zircaloy_frame', '4x gtceu:boron_carbide_rod')
        .itemOutputs('2x refactorycore:control_rod_casing')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    // Boron Carbide
    event.recipes.gtceu.chemical_reactor('boron_carbide')
        .itemInputs(
            '4x gtceu:boron_dust',
            'gtceu:carbon_dust'
        )
        .itemOutputs('5x gtceu:boron_carbide_dust')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.EV])

    // Zircaloy
    event.recipes.gtceu.mixer('zircaloy_dust')
        .itemInputs(
            '4x gtceu:zirconium_dust',
            'gtceu:niobium_dust',
            'gtceu:iron_dust',
            'gtceu:tin_dust'
        )
        .itemOutputs('7x gtceu:zircaloy_dust')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.HV])

    // // Nuclear waste centrifuging
    // event.recipes.gtceu.centrifuge('nuclear_waste_centrifuging')
    //     .itemInputs('4x gtceu:nuclear_waste_dust')
    //     .itemOutputs(
    //         '2x gtceu:uranium_dust',
    //         '2x gtceu:small_plutonium_dust'
    //     )
    //     .chancedOutput('gtceu:small_caesium_dust', 5000, 500)
    //     .chancedOutput('gtceu:small_strontium_dust', 4500, 400)
    //     .chancedOutput('gtceu:small_iodine_dust', 3000, 300)
    //     .chancedFluidOutput(Fluid.of('gtceu:krypton', 100), 3000, 300)
    //     .duration(20*30)
    //     .EUt(GTValues.VA[GTValues.EV])

    ////// Nuclear fuel rods //////
    event.recipes.gtceu.canner('uranium_fuel_rod')
        .itemInputs('8x gtceu:uranium_dust')
        .itemOutputs('refactorycore:uranium_fuel_rod')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.canner('thorium_fuel_rod')
        .itemInputs('8x gtceu:thorium_dust')
        .itemOutputs('refactorycore:thorium_fuel_rod')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.canner('plutonium_fuel_rod')
        .itemInputs('8x gtceu:plutonium_241_dust')
        .itemOutputs('refactorycore:plutonium_fuel_rod')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])
})