GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:utherium_vein', vein => {
        vein.layer('undergarden')
        vein.weight(20)
        vein.clusterSize(25)
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
        vein.clusterSize(30)
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
        vein.weight(10)
        vein.clusterSize(20)
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

    event.add('sapphire_vein_undergarden', vein => {
        vein.layer('undergarden')
        vein.weight(60)
        vein.clusterSize(20)
        vein.density(0.50)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(-40, 0)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Almandine).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrope).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.GreenSapphire).size(1, 3))
            )
        )
    })

    event.add('zircon_vein_undergarden', vein => {
        vein.layer('undergarden')
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(-20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('zircon')).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.GarnetSand).size(1, 3))
            )
        )
    })

})

// In server events
GTCEuServerEvents.fluidVeins(event => {

    event.add('salt_water_deposit', vein => {
        vein.dimensions('undergarden:undergarden')
        vein.fluid(() => Fluid.of("gtceu:salt_water").fluid)
        vein.weight(600)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })

})