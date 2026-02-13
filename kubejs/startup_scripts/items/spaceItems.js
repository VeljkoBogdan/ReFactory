function dimMark(name) {
    StartupEvents.registry('item', event => {
        event.create(`${name}_dim_marker`)
            .displayName(`${name.charAt(0).toUpperCase() + name.slice(1)}`)
            .texture(`kubejs:item/${name}`)
    })
}

['moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'glacio', 'aether', 'undergarden'].forEach(dim => dimMark(dim))

StartupEvents.registry('item', event => {
    // Tier 1
    event.create('t1_welded_rocket_plate')
        .displayName('Tier 1 Welded Rocket Plate')
    
    event.create('t1_rocket_plate')
        .displayName('Tier 1 Rocket Plate')

    // Tier 2
    event.create('t2_welded_rocket_plate')
        .displayName('§3Tier 2 Welded Rocket Plate')

    event.create('t2_rocket_plate')
        .displayName('§3Tier 2 Rocket Plate')

    event.create('desh_rocket_fin')
        .displayName('§3Desh Rocket Fin')

    event.create('desh_rocket_nose_cone')
        .displayName('§3Desh Rocket Nose Cone')

    // Tier 3
    event.create('t3_welded_rocket_plate')
        .displayName('§5Tier 3 Welded Rocket Plate')

    event.create('t3_rocket_plate')
        .displayName('§5Tier 3 Rocket Plate')

    event.create('nestrum_rocket_fin')
        .displayName('§5Nestrum Rocket Fin')

    event.create('nestrum_rocket_nose_cone')
        .displayName('§5Nestrum Rocket Nose Cone')
})