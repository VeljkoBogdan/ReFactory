GTCEuServerEvents.oreVeins(event => {
    // Moon Sheldonite + Nickel + Magnesite
    event.add('kubejs:sheldonite_vein_moon', vein => {
        vein.layer('moon_stone')
        vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(32, 96)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Cooperite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Magnesite).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cooperite)
            .density(0.2)
            .radius(4)
        )
    })    

    // Moon Neodymium + Monazite + Bastnasite
    event.add('kubejs:neodymium_vein_moon', vein => {
        vein.layer('moon_stone')
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(-50, 64)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Neodymium).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Bastnasite).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Neodymium)
            .density(0.15)
            .radius(4)
        )
    })

    event.add('kubejs:desh_vein_moon', vein => {
        vein.layer('moon_stone')
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(-50, 64)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('desh')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Cobalt).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Tantalite).size(1, 2))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('desh'))
            .density(0.15)
            .radius(4)
        )
    })

})