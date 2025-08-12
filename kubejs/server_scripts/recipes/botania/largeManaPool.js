ServerEvents.recipes(event => {
    function ManaPool(id, input, manaAmount, output, duration) {
        event.recipes.gtceu.large_mana_pool(id)
            .itemInputs(input)
            .inputFluids(Fluid.of('blasmatech:mana', manaAmount))
            .itemOutputs(output)
            .duration(duration)
            .EUt(GTValues.VA[GTValues.HV])
    }    

    event.shaped(
        'gtceu:large_mana_pool',
        [
            'CPC',
            'MHM',
            'CPC'
        ],
        {
            P: 'gtceu:hv_electric_pump',
            C: '#gtceu:circuits/hv',
            M: 'kubejs:mana_core',
            H: 'gtceu:hv_machine_hull'
        }
    )

    // Recipes without catalysts
    ManaPool('mana_bottle', 'minecraft:glass_bottle', 250, 'botania:mana_bottle', 20)
    ManaPool('tiny_potato', 'minecraft:potato', 100, 'botania:tiny_potato', 40)
    ManaPool('biscuit_of_totality', 'minecraft:cookie', 2000, 'botania:mana_cookie', 20*4)
    ManaPool('mana_string', 'minecraft:string', 75, 'botania:mana_string', 10)
    ManaPool('mana_quartz', 'minecraft:quartz', 100, 'botania:quartz_mana', 10)
    ManaPool('mana_diamond_block', 'minecraft:diamond_block', 6000, 'botania:mana_diamond_block', 20*4)
    ManaPool('podzol_seeds', 'minecraft:dead_bush', 75, 'botania:podzol_seeds', 10)
    ManaPool('mana_pearl', 'minecraft:ender_pearl', 500, 'botania:mana_pearl', 20)
    ManaPool('manasteel', 'minecraft:iron_ingot', 100, 'botania:manasteel_ingot', 10)
    ManaPool('mana_diamond', 'minecraft:diamond', 750, 'botania:mana_diamond', 20)
    ManaPool('mana_powder_from_redstone', 'redstone', 50, 'botania:mana_powder', 5)
    ManaPool('mana_powder_from_gunpowder', 'gunpowder', 50, 'botania:mana_powder', 5)
    ManaPool('mana_powder_from_glowstone', 'glowstone_dust', 50, 'botania:mana_powder', 5)
    ManaPool('mana_powder_from_sugar', 'sugar', 50, 'botania:mana_powder', 5)
    ManaPool('mana_powder_from_dye', '#forge:dyes', 50, 'botania:mana_powder', 5)
    ManaPool('block_of_manasteel', 'minecraft:iron_block', 900, 'botania:manasteel_block', 20*4)
    ManaPool('mycelium_seeds', '#forge:mushrooms', 250, 'botania:mycelium_seeds', 10)
    ManaPool('mana_core', '#gtceu:circuits/lv', 1000, 'kubejs:mana_core', 20)
    ManaPool('force_relay', '#forge:pistons', 2000, 'botania:piston_relay', 10)
    ManaPool('grass_seeds', 'minecraft:grass', 250, 'botania:grass_seeds', 10)
    ManaPool('mana_infused_board', 'gtceu:resin_circuit_board', 4000, 'gtceu:phenolic_circuit_board', 10)
})