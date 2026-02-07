GTCEuServerEvents.oreVeins(event => {
    event.add('palladium_vein', vein => {
        vein.layer('venus_stone')
        vein.weight(15)
        vein.clusterSize(15)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(15, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Palladium).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 3))
            )
        )
    })

    event.add('calorite_vein', vein => {
        vein.layer('venus_stone')
        vein.weight(20)
        vein.clusterSize(25)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(20, 75)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('calorite')).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get('desh')).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 2))
            )
        )
    })
})