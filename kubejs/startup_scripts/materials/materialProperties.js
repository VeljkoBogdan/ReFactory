const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {

    // Add Blast property to Platinum
    GTMaterials.Platinum.setProperty(PropertyKey.BLAST, new $BlastProperty(3500, 'higher', GTValues.VA[GTValues.EV], 20*50, -1, -1));

})