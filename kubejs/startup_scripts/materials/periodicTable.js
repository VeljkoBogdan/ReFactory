const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidState = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidState');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const $GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty');
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $MaterialFlags = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')

let addFluid = (mat, key) => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder())
    mat.setProperty(PropertyKey.FLUID, prop)
}

GTCEuStartupEvents.registry('gtceu:material', event => {

    // Periodic table
    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Zirconium, $FluidStorageKeys.LIQUID);

    GTMaterials.Strontium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Strontium, $FluidStorageKeys.LIQUID);
})