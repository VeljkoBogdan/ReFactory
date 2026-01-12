GTCEuStartupEvents.registry('gtceu:material', event => {

    // Add Blast property to Platinum
    GTMaterials.Platinum.setProperty(PropertyKey.BLAST, new $BlastProperty(3500, 'higher', GTValues.VA[GTValues.EV], 20*50, -1, -1));

    // Add copper, iron, silver and gold frame
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_FRAME)
    GTMaterials.Iron.addFlags(GTMaterialFlags.GENERATE_FRAME)
    GTMaterials.Gold.addFlags(GTMaterialFlags.GENERATE_FRAME)
    GTMaterials.Silver.addFlags(GTMaterialFlags.GENERATE_FRAME)
})