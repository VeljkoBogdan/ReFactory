GTCEuServerEvents.oreVeins(event => {
    event.add('adamantite_vein', vein => {
        vein.layer('glacio_stone')
        vein.weight(20)
        vein.clusterSize(35)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(4, 24)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('adamantite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(1, 3))
            )
        )
    })

    event.add('orichalcum_vein', vein => {
        vein.layer('glacio_stone')
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(8, 32)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('arsenorichalcide')).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Realgar).size(1, 2))
            )
        )
    })

    event.add('mica_vein', vein => {
        vein.layer('glacio_stone')
        vein.weight(15)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Mica).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Pollucite).size(1, 2))
            )
        )
    })

    event.add('lapis_vein', vein => {
        vein.layer('glacio_stone')
        vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(32, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Lapis).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Sodalite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Lazurite).size(1, 2))
            )
        )
    })
})