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

    event.add('kubejs:copper_vein', vein => {
        vein.layer('undergarden')
        vein.weight(20)
        vein.clusterSize(35)
        vein.density(0.55)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(5, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Chalcopyrite).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.Chalcopyrite).size(3, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 2))
            )
        )
    })

    event.add('kubejs:gold_vein', vein => {
        vein.layer('undergarden')
        vein.weight(15)
        vein.clusterSize(30)
        vein.density(0.30)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(5, 36)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Gold).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Bornite).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 3))
            )
        )
    })

})