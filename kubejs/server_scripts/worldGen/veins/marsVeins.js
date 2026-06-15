GTCEuServerEvents.oreVeins(event => {
    event.add('ostrum_vein', vein => {
        vein.layer('mars_stone')
        vein.weight(15)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(15, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('ostrum')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Lithium).size(1, 3))
            )
        )
    })

    event.add('magnetite_vein', vein => {
        vein.layer('mars_stone')
        vein.weight(50)
        vein.clusterSize(40)
        vein.density(0.55)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(64, 100)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 2))
            )
        )
    })

    event.add('lapis_vein', vein => {
        vein.layer('mars_stone')
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

    event.add('manganese_vein', vein => {
        vein.layer('mars_stone')
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 64)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Grossular).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Spessartine).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Tantalite).size(1, 2))
            )
        )
    })

    event.add('molybdenum_vein', vein => {
        vein.layer('mars_stone')
        vein.weight(10)
        vein.clusterSize(20)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 64)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenum).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 2))
            )
        )
    })

    event.add('netherite_vein', vein => {
        vein.layer('mars_stone')
        vein.weight(10)
        vein.clusterSize(16)
        vein.density(0.4)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(0, 24)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Netherite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Sulfur).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 2))
            )
        )
    })

})