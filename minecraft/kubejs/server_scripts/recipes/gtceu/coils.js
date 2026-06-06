ServerEvents.recipes(event => {
    // LV
    // Cupronickel
    event.replaceInput({ id: 'gtceu:assembler/coil_cupronickel' }, 'gtceu:bronze_foil', 'gtceu:mana_alloy_foil')
    // MV
    // Kanthal
    event.replaceInput({ id: 'gtceu:assembler/coil_kanthal' }, 'gtceu:aluminium_foil', 'gtceu:terralumina_foil')
    // HV
    // Nichrome
    event.replaceInput({ id: 'gtceu:assembler/coil_nichrome' }, 'gtceu:stainless_steel_foil', 'gtceu:elventium_foil')

})