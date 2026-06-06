GTCEuServerEvents.oreVeins(event => {
    // Putting the Chrome in the Nether Redstone Vein (do not use Chrome, use Brave/Firefox instead!)
    event.modify("gtceu:redstone_vein", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
            )
        )
    })
})