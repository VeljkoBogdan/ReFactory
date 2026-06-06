GTCEuServerEvents.oreVeins(event => {
    // aether aluminium vein
    event.add('kubejs:aluminium', vein => {
        vein.layer('aether_islands')
        vein.weight(30)
        vein.clusterSize(15)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Aluminium).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Aluminium)
            .density(0.2)
            .radius(4)
        )
    })

    // aether ambrosium vein
    event.add('kubejs:ambrosium', vein => {
        vein.layer('aether_islands')
        vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.30)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('ambrosium')).size(2, 5))
                .layer(l => l.weight(1).mat(GTMaterials.Diamond).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Grossular).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Grossular)
            .density(0.2)
            .radius(4)
        )
    })

    // aether zanite vein
    event.add('kubejs:zanite', vein => {
        vein.layer('aether_islands')
        vein.weight(25)
        vein.clusterSize(25)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('zanite')).size(2, 5))
                .layer(l => l.weight(2).mat(GTMaterials.Malachite).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Malachite)
            .density(0.2)
            .radius(4)
        )
    })
})