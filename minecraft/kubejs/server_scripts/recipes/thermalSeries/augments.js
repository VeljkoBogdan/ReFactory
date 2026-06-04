ServerEvents.recipes(event => {
    let sets = [
        {tier: 'hv', plate: 'gtceu:lumium_plate', glass: "thermal:signalum_glass", gear: 'gtceu:lumium_gear', mod: 8},
        {tier: 'ev', plate: 'gtceu:enderium_plate', glass: "thermal:lumium_glass", gear: 'gtceu:enderium_gear', mod: 16},
        {tier: 'iv', plate: 'gtceu:gaia_plate', glass: "thermal:enderium_glass", gear: 'gtceu:gaia_gear', mod: 32},
        {tier: 'luv', plate: 'gtceu:demonite_plate', glass: "gtceu:laminated_glass", gear: 'gtceu:demonite_gear', mod: 64}
    ]

    sets.forEach(set => {
        // upgrades
        event.recipes.gtceu.assembler(`${set.tier}_upgrade_kit`)
            .itemInputs(
                `8x ${set.plate}`,
                `4x ${set.gear}`,
                `4x ${set.glass}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(16)
            .itemOutputs(Item.of(`kubejs:${set.tier}_upgrade_kit`, `{AugmentData:{BaseMod:${set.mod}f,Type:Upgrade}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])

        // rf coil
        event.recipes.gtceu.assembler(`${set.tier}_rf_coil_augment`)
            .itemInputs(
                `4x ${set.plate}`,
                `1x ${set.gear}`,
                `4x ${set.glass}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(17)
            .itemOutputs(Item.of(`kubejs:${set.tier}_rf_coil_augment`, `{AugmentData:{Type:RF, RFMax:${set.mod}f, RFXfer:${set.mod}f}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])

        // rf coil storage
        event.recipes.gtceu.assembler(`${set.tier}_rf_coil_storage_augment`)
            .itemInputs(
                `6x ${set.plate}`,
                `1x ${set.gear}`,
                `2x ${set.glass}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(18)
            .itemOutputs(Item.of(`kubejs:${set.tier}_rf_coil_storage_augment`, `{AugmentData:{Type:RF, RFMax:${set.mod * 2}f, RFXfer:${set.mod * 0.5}f}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])

        // rf coil xfer
        event.recipes.gtceu.assembler(`${set.tier}_rf_coil_xfer_augment`)
            .itemInputs(
                `2x ${set.plate}`,
                `1x ${set.gear}`,
                `6x ${set.glass}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(19)
            .itemOutputs(Item.of(`kubejs:${set.tier}_rf_coil_xfer_augment`, `{AugmentData:{Type:RF, RFMax:${set.mod * 0.5}f, RFXfer:${set.mod * 2}f}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])

        // fluid tank
        event.recipes.gtceu.assembler(`${set.tier}_fluid_tank_augment`)
            .itemInputs(
                `6x ${set.plate}`,
                `4x ${set.glass}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(20)
            .itemOutputs(Item.of(`kubejs:${set.tier}_fluid_tank_augment`, `{AugmentData:{Type:Fluid, FluidMax:${set.mod}f}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])

        // dynamo fuel
        event.recipes.gtceu.assembler(`${set.tier}_dynamo_fuel_augment`)
            .itemInputs(
                `2x ${set.plate}`,
                `4x ${set.gear}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(21)
            .itemOutputs(Item.of(`kubejs:${set.tier}_dynamo_fuel_augment`, `{AugmentData:{Type:Dynamo, DynamoEnergy:${1 + set.mod * 0.04}f}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])

        // area radius
        event.recipes.gtceu.assembler(`${set.tier}_area_radius_augment`)
            .itemInputs(
                `4x ${set.gear}`,
                `4x ${set.glass}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(22)
            .itemOutputs(Item.of(`kubejs:${set.tier}_area_radius_augment`, `{AugmentData:{Type:Area, Radius:${set.mod/8}f}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])

        // machine speed
        event.recipes.gtceu.assembler(`${set.tier}_machine_speed_augment`)
            .itemInputs(
                `2x ${set.plate}`,
                `4x ${set.gear}`,
                `2x ${set.glass}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(23)
            .itemOutputs(Item.of(`kubejs:${set.tier}_machine_speed_augment`, `{AugmentData:{Type:Machine, MachinePower:${set.mod/8}f, MachineSpeed:${set.mod/4}f}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])

        // machine efficiency
        event.recipes.gtceu.assembler(`${set.tier}_machine_efficiency_augment`)
            .itemInputs(
                `4x ${set.gear}`,
                `2x ${set.glass}`,
                `#gtceu:circuits/${set.tier}`
            )
            .circuit(24)
            .itemOutputs(Item.of(`kubejs:${set.tier}_machine_efficiency_augment`, `{AugmentData:{Type:Machine, MachineSpeed:-${(set.mod / 8) * 0.1}f, MachineEnergy:${1 - ((set.mod/8) * 0.1)}f}}`))
            .duration(20*30)
            .EUt(global.va[set.tier])
    })
})