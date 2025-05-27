ServerEvents.recipes(event => {

    // remove default ender storage recipes
	event.remove({ id: 'enderstorage:ender_pouch'})
	event.remove({ id: 'enderstorage:ender_chest'})
	event.remove({ id: 'enderstorage:ender_tank'})

	// ENDER POUCH
	event.shaped(
        "enderstorage:ender_pouch",
        [
            'PCP',
            'CEC',
            'PSP'
        ],
        {
            P: "gtceu:ender_pearl_plate",
            C: "botania:spell_cloth",
            E: "minecraft:ender_chest",
            S: "gtceu:stainless_steel_crate"
        }
    )
	
    // ENDER CHEST
    event.shaped(
        "enderstorage:ender_chest",
        [
            'PFP',
            'PCP',
            'PSP'
        ],
        {
            P: 'gtceu:ender_pearl_plate',
            F: "gtceu:lv_field_generator",
            C: 'minecraft:ender_chest',
            S: "gtceu:stainless_steel_crate"
        }
    )

    // ENDER TANK
    event.shaped(
        "enderstorage:ender_tank",
        [
            'PLP',
            'PHP',
            'PFP'
        ],
        {
            P: 'gtceu:ender_pearl_plate',
            L: "gtceu:ender_fluid_link_cover",
            H: "gtceu:mv_hermetic_casing",
            F: "enderio:pressurized_fluid_tank"
        }
    )
})