GTCEuServerEvents.oreVeins(event => {
    event.add('naquadah_vein', vein => {
        vein.layer('mercury_stone')
        vein.weight(25)
        vein.clusterSize(30)
        vein.density(0.30)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(15, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Naquadah).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Sulfur).size(1, 2))
            )
        )
    })

    event.add('plutonium_vein', vein => {
        vein.layer('mercury_stone')
        vein.weight(20)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(30, 64)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Plutonium239).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Uraninite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Pitchblende).size(1, 2))
            )
        )
    })
})