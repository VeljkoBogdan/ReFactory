StartupEvents.registry('item', event => {
    let rf_coil = (tier) => {
        event.create(`${tier}_rf_coil_augment`)
            .texture(`kubejs:item/augments/rf_coil/${tier}_rf_coil_augment`)
            .displayName(global.display_name[tier] + ' RF Coil Aaugment')
    }

    let rf_coil_storage = (tier) => {
        event.create(`${tier}_rf_coil_storage_augment`)
            .texture(`kubejs:item/augments/rf_coil_storage/${tier}_rf_coil_storage_augment`)
            .displayName(global.display_name[tier] + ' RF Coil Storage Augment')
    }

    let rf_coil_xfer = (tier) => {
        event.create(`${tier}_rf_coil_xfer_augment`)
            .texture(`kubejs:item/augments/rf_coil_xfer/${tier}_rf_coil_xfer_augment`)
            .displayName(global.display_name[tier] + ' RF Coil Transfer Augment')
    }

    let fluid_tank = (tier) => {
        event.create(`${tier}_fluid_tank_augment`)
            .texture(`kubejs:item/augments/tank/${tier}_fluid_tank_augment`)
            .displayName(global.display_name[tier] + ' Fluid Tank Augment')
    }

    let dynamo_fuel = (tier) => {
        event.create(`${tier}_dynamo_fuel_augment`)
            .texture(`kubejs:item/augments/dynamo_fuel/${tier}_dynamo_fuel_augment`)
            .displayName(global.display_name[tier] + ' Dynamo Fuel Augment')
    }

    let area_radius = (tier) => {
        event.create(`${tier}_area_radius_augment`)
            .texture(`kubejs:item/augments/area_radius/${tier}_area_radius_augment`)
            .displayName(global.display_name[tier] + ' Area Radius Augment')
    }

    let machine_speed = (tier) => {
        event.create(`${tier}_machine_speed_augment`)
            .texture(`kubejs:item/augments/machine_speed/${tier}_machine_speed_augment`)
            .displayName(global.display_name[tier] + ' Machine Speed Augment')
    }

    let machine_efficiency = (tier) => {
        event.create(`${tier}_machine_efficiency_augment`)
            .texture(`kubejs:item/augments/machine_efficiency/${tier}_machine_efficiency_augment`)
            .displayName(global.display_name[tier] + ' Machine Efficiency Augment')
    }

    let upgrade_kit = (tier) => {
        event.create(`${tier}_upgrade_kit`)
            .texture(`kubejs:item/augments/upgrade_kit/${tier}_upgrade_kit`)
            .displayName(global.display_name[tier] + ' Upgrade Kit')
    }

    let tiers = ['hv', 'ev', 'iv', 'luv']
    tiers.forEach(tier => {
        rf_coil(tier)
        rf_coil_storage(tier)
        rf_coil_xfer(tier)
        fluid_tank(tier)
        dynamo_fuel(tier)
        area_radius(tier)
        machine_speed(tier)
        machine_efficiency(tier)
        upgrade_kit(tier)
    })
})