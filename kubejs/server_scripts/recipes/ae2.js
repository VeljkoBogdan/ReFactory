let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
    })
}

ServerEvents.recipes(event => {
    // Removed after ae2 gregification
    // event.recipes.gtceu.autoclave('kubejs_flawless_budding_quartz')
    //     .itemInputs(
    //         'ae2:flawed_budding_quartz'
    //     )
    //     .inputFluids(Fluid.of('minecraft:water 1000'))
    //     .itemOutputs('ae2:flawless_budding_quartz')
    //     .duration(20*10)
    //     .EUt(GTValues.VA[GTValues.HV])

    // Replace all the charged certus quartz from ae2 to gtceu
    event.replaceInput({}, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
    event.replaceInput({}, 'ae2:certus_quartz_dust', 'gtceu:certus_quartz_dust')
    event.replaceInput({}, 'ae2:fluix_crystal', 'gtceu:fluix_crystal_gem')
    event.replaceInput({}, 'ae2:fluix_dust', 'gtceu:fluix_crystal_dust')
    // output
    event.replaceOutput({}, 'ae2:charged_certus_quartz_crystal', 'gtceu:charged_certus_quartz_gem')
    event.replaceOutput({}, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
    event.replaceOutput({}, 'ae2:certus_quartz_dust', 'gtceu:certus_quartz_dust')
    event.replaceOutput({}, 'ae2:fluix_crystal', 'gtceu:fluix_crystal_gem')
    event.replaceOutput({}, 'ae2:fluix_dust', 'gtceu:fluix_crystal_dust')
})

ServerEvents.tags('item', event => {
    event.add('forge:gems/certus_quartz', 'gtceu:charged_certus_quartz_gem')
    event.add('ae2:all_certus_quartz', 'gtceu:charged_certus_quartz_gem')
    event.add('ae2:all_quartz', 'gtceu:charged_certus_quartz_gem')
})

yeet('ae2:charged_certus_quartz_crystal')
yeet('ae2:certus_quartz_crystal')
yeet('ae2:certus_quartz_dust')
yeet('ae2:fluix_crystal')
yeet('ae2:fluix_dust')