GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:utherium_vein', vein => {
        vein.layer('undergarden')
        vein.weight(20)
        vein.clusterSize(35)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(5, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('utherium')).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('utherium')).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get('utherium')).size(1, 2))
            )
        )
    })

})