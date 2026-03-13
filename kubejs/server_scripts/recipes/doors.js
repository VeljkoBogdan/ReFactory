let door = (wood) => {
    ServerEvents.recipes(event => {
        let trapdoor = wood.replace('_planks', '_trapdoor')
        let door = wood.replace('_planks', '_door')

        event.remove({output: trapdoor})
        event.remove({output: door})

        event.shaped(
            door,
            [
                'ATS',
                'ARD',
                'AAW'
            ],
            {
                A: wood,
                T: trapdoor,
                S: '#forge:tools/screwdrivers',
                R: 'gtceu:iron_ring',
                D: 'gtceu:iron_screw',
                W: '#forge:tools/saws'
            }
        )
        event.recipes.gtceu.assembler('wood_door_from_' + wood.replace(':', '_'))
            .itemInputs(
                trapdoor,
                '4x ' + wood
            )
            .inputFluids(Fluid.of('gtceu:iron', 16))
            .itemOutputs(door)
            .duration(20*20)
            .EUt(4)

        event.shaped(
            trapdoor,
            [
                'SPR',
                'PDP',
                'RPS'
            ],
            {
                S: 'gtceu:iron_bolt',
                P: wood,
                R: '#forge:rods/wooden',
                D: '#forge:tools/screwdrivers'
            }
        )
        event.recipes.gtceu.assembler('wood_trapdoor_from_' + wood.replace(':', '_'))
            .circuit(3)
            .itemInputs('2x ' + wood)
            .inputFluids(Fluid.of('gtceu:iron', 16))
            .itemOutputs(trapdoor)
            .duration(20*10)
            .EUt(4)
    })
}

ServerEvents.recipes(event => {
    // Iron door and trapdoor
    event.remove({id: 'minecraft:iron_door'})
    event.remove({id: 'minecraft:iron_trapdoor'})

    // Enderio dark steel door and trapdoor
    event.remove({id: 'enderio:dark_steel_door'})
    event.recipes.gtceu.assembler('dark_steel_door')
        .circuit(6)
        .itemInputs('6x gtceu:dark_steel_plate')
        .itemOutputs('enderio:dark_steel_door')
        .duration(20*5)
        .EUt(16)
    event.remove({id: 'enderio:dark_steel_trapdoor'})
    event.recipes.gtceu.assembler('dark_steel_trapdoor')
        .circuit(4)
        .itemInputs('4x gtceu:dark_steel_plate')
        .itemOutputs('enderio:dark_steel_trapdoor')
        .duration(20*5)
        .EUt(16)

    // Ad Astra steel door and trapdoor
    event.remove({id: 'ad_astra:steel_door'})
    event.recipes.gtceu.assembler('steel_door')
        .circuit(6)
        .itemInputs('6x gtceu:steel_plate')
        .itemOutputs('ad_astra:steel_door')
        .duration(20*5)
        .EUt(16)
    event.remove({id: 'ad_astra:steel_trapdoor'})
    event.recipes.gtceu.assembler('steel_trapdoor')
        .circuit(4)
        .itemInputs('4x gtceu:steel_plate')
        .itemOutputs('ad_astra:steel_trapdoor')
        .duration(20*5)
        .EUt(16)
})

let woodTypes = [
    'biomesoplenty:fir_planks',
    'biomesoplenty:pine_planks',
    'biomesoplenty:maple_planks',
    'biomesoplenty:redwood_planks',
    'biomesoplenty:mahogany_planks',
    'biomesoplenty:jacaranda_planks',
    'biomesoplenty:palm_planks',
    'biomesoplenty:willow_planks',
    'biomesoplenty:magic_planks',
    'biomesoplenty:dead_planks',
    'biomesoplenty:umbran_planks',
    'biomesoplenty:hellbark_planks',
    'biomesoplenty:empyreal_planks',
    'thermal:rubberwood_planks',
    'ad_astra:aeronos_planks',
    'ad_astra:strophar_planks',
    'ad_astra:glacian_planks',
    'undergarden:smogstem_planks',
    'undergarden:wigglewood_planks',
    'undergarden:grongle_planks',
    'aether:skyroot_planks',
    'tconstruct:greenheart_planks',
    'tconstruct:skyroot_planks',
    'tconstruct:bloodshroom_planks',
    'tconstruct:enderbark_planks'
]

woodTypes.forEach(wood => door(wood))