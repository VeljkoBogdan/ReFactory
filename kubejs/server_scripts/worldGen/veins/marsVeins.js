GTCEuServerEvents.oreVeins(event => {
    event.add('ostrum_vein', vein => {
        vein.layer('mars_rock')
        vein.weight(15)
        vein.clusterSize(85)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('ostrum')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Lithium).size(1, 3))
            )
        )
    })

    
})