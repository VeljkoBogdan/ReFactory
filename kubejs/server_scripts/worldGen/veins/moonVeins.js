GTCEuServerEvents.oreVeins(event => {
    // Moon Sheldonite + Nickel + Magnesite
    event.add('kubejs:sheldonite_vein_moon', vein => {
        vein.layer('moon_rock')
        vein.weight(20)
        vein.clusterSize(85)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
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

})