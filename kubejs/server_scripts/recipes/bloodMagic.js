const LPCapability = ReFactoryCapabilities.LP

let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

let bmOres = ['iron', 'gold', 'copper', 'demonite']
let bloodOrbs = [
    'bloodmagic:weakbloodorb',
    'bloodmagic:apprenticebloodorb',
    'bloodmagic:magicianbloodorb',
    'bloodmagic:masterbloodorb',
    'bloodmagic:archmagebloodorb'
]

let lpHatchVoltages = [
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv',
    'uev',
    'uiv',
    'uxv',
    'opv',
    'max'
]

let lpPlastics = [
    'gtceu:polybenzimidazole',
    'gtceu:polytetrafluoroethylene'
]

ServerEvents.tags('item', event => {
        event.remove('forge:dusts/sulfur', 'bloodmagic:sulfur')
        event.remove('forge:dusts/coal', 'bloodmagic:coalsand')
        event.remove('forge:dusts/iron', 'bloodmagic:ironsand')
        event.remove('forge:dusts/gold', 'bloodmagic:goldsand')
        event.remove('forge:dusts/copper', 'bloodmagic:coppersand')
        event.remove('forge:dusts/saltpeter', 'bloodmagic:saltpeter')

        // TODO: Move to EnderIO
        event.remove('forge:dusts/coal', 'enderio:powdered_coal')
        event.remove('forge:dusts/iron', 'enderio:powdered_iron')
        event.remove('forge:dusts/gold', 'enderio:powdered_gold')
        event.remove('forge:dusts/copper', 'enderio:powdered_copper')

        bloodOrbs.forEach(orb => event.add('bloodmagic:bloodorb', orb))
})

bmOres.forEach(bmOre => {
    yeet(`bloodmagic:${bmOre}fragment`)
    yeet(`bloodmagic:${bmOre}gravel`)
})

yeet('bloodmagic:fragment_netherite_scrap')
yeet('bloodmagic:gravel_netherite_scrap')
yeet('bloodmagic:sand_netherite')
yeet('bloodmagic:corrupted_dust')
yeet('bloodmagic:corrupted_tinydust')
yeet('bloodmagic:sand_hellforged')

ServerEvents.recipes(event => {
    const { bloodmagic, gtceu } = event.recipes

    // Sanguine Scientiem
    event.remove({id: 'bloodmagic:guide'})
    event.shapeless(
        Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'),
        [
            'minecraft:book',
            'gtceu:lumium_ingot'
        ]
    )

    // Blood Altar
    event.remove({id: 'bloodmagic:blood_altar'})
    event.shaped(
        'bloodmagic:altar',
        [
            'N N',
            'NLN',
            'BFB'
        ],
        {
            N: 'minecraft:nether_bricks',
            L: 'gtceu:lumium_plate',
            B: 'gtceu:lumium_block',
            F: 'gtceu:titanium_plate'
        }
    )

    // Sacrificial Dagger
    event.remove({id: 'bloodmagic:sacrificial_dagger'})
    event.shaped(
        'bloodmagic:sacrificialdagger',
        [
            ' FP',
            ' PH',
            'R  '
        ],
        {
            F: '#forge:tools/files',
            H: '#forge:tools/hammers',
            P: 'gtceu:lumium_plate',
            R: 'gtceu:titanium_rod'
        }
    )

    // Soulsnare
    event.remove({output: 'bloodmagic:soulsnare'})
    bloodmagic.altar('bloodmagic:soulsnare', 'botania:dreamwood_twig')
        .upgradeLevel(0)
        .drainRate(50)
        .consumptionRate(25)
        .altarSyphon(1000)
        
    // Blank slate and rune
    event.remove({id: 'bloodmagic:altar/slate'})
    bloodmagic.altar('bloodmagic:blankslate', 'gtceu:carbon_fiber_plate')
        .upgradeLevel(0)
        .drainRate(100)
        .consumptionRate(50)
        .altarSyphon(1000)

    event.remove({id: 'bloodmagic:blood_rune_blank'})
    event.recipes.gtceu.large_mana_pool('bloodmagic:blankrune')
        .itemInputs(
            '4x bloodmagic:blankslate',
            '8x botania:livingrock'
        )
        .circuit(1)
        .inputFluids(Fluid.of('blasmatech:mana', 200))
        .itemOutputs('4x bloodmagic:blankrune')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.HV])

    // Gaia ingots
    event.recipes.gtceu.bloodforge('gaia_ingot')
        .input(LPCapability, 500)
        .itemInputs(
            'botania:terrasteel_ingot',
            '2x botania:life_essence'
        )
        .itemOutputs('botania:gaia_ingot')
        .duration(20*40)
        .EUt(GTValues.VA[GTValues.HV])

    // Liquid soul
    event.recipes.gtceu.bloodforge('liquid_soul')
        .input(LPCapability, 250)
        .itemInputs(
            '4x soul_sand',
            'gtceu:obsidian_dust'
        )
        .inputFluids(Fluid.of('lava', 1000))
        .outputFluids(Fluid.of('gtceu:liquid_soul', 244))
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.HV])

    // LP hatch recipes
    lpHatchVoltages.forEach(voltage => {
        lpPlastics.forEach(plastic => {
            let voltageTier = lpHatchVoltages.indexOf(voltage) + 1
            let plasticAmount = (lpPlastics.indexOf(plastic) + 1) * 72 * voltageTier
            // Input hatch
            event.recipes.gtceu.assembler(`${voltage}_lp_input_hatch_using_${plastic}`)
                .circuit(1)
                .notConsumable('#bloodmagic:bloodorb')
                .itemInputs(`gtceu:${voltage}_machine_hull`)
                .inputFluids(Fluid.of(plastic, plasticAmount))
                .itemOutputs(`refactorycore:${voltage}_lp_input_hatch`)
                .duration(20*15)
                .EUt(GTValues.VA[GTValues.LV])

            // Output hatch
            event.recipes.gtceu.assembler(`${voltage}_lp_output_hatch_using_${plastic}`)
                .circuit(2)
                .notConsumable('#bloodmagic:bloodorb')
                .itemInputs(`gtceu:${voltage}_machine_hull`)
                .inputFluids(Fluid.of(plastic, plasticAmount))
                .itemOutputs(`refactorycore:${voltage}_lp_output_hatch`)
                .duration(20*15)
                .EUt(GTValues.VA[GTValues.LV])
        })

        // Input hatch conversion
        event.shaped(
            `refactorycore:${voltage}_lp_input_hatch`,
            [
                ' S ',
                ' L ',
                '   '
            ],
            {
                S: '#forge:tools/screwdrivers',
                L: `refactorycore:${voltage}_lp_output_hatch`
            }
        )

        // Output hatch conversion
        event.shaped(
            `refactorycore:${voltage}_lp_output_hatch`,
            [
                ' S ',
                ' L ',
                '   '
            ],
            {
                S: '#forge:tools/screwdrivers',
                L: `refactorycore:${voltage}_lp_input_hatch`
            }
        )
    })

    // Blood orbs
    event.remove({id: 'bloodmagic:altar/weakbloodorb'})
    event.remove({id: 'bloodmagic:altar/apprenticebloodorb'})
    event.remove({id: 'bloodmagic:altar/magicianbloodorb'})
    // TODO: replace with a forEach later on

    bloodmagic.altar('bloodmagic:weakbloodorb', 'ender_eye')
        .upgradeLevel(0)
        .consumptionRate(50)
        .drainRate(25)
        .altarSyphon(2000)

    bloodmagic.altar('bloodmagic:apprenticebloodorb', 'gtceu:quantum_eye')
        .upgradeLevel(1)
        .consumptionRate(100)
        .drainRate(25)
        .altarSyphon(5000)

    bloodmagic.altar('bloodmagic:magicianbloodorb', 'gtceu:quantum_star')
        .upgradeLevel(2)
        .consumptionRate(100)
        .drainRate(50)
        .altarSyphon(25000)


    // Arcane ashes
    event.remove({id:'bloodmagic:alchemytable/arcane_ash'})
    bloodmagic.altar('bloodmagic:arcaneashes', 'gtceu:mythic_compound_dust')
        .upgradeLevel(2)
        .consumptionRate(100)
        .drainRate(50)
        .altarSyphon(10000)

    event.recipes.gtceu.bloodforge('arcane_ashes')
        .circuit(1)
        .input(LPCapability, 1000)
        .itemInputs('gtceu:mythic_compound_dust')
        .itemOutputs('bloodmagic:arcaneashes')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.HV])

    // Scribe tools
    event.remove({id: 'bloodmagic:altar/air_tool'})
    event.remove({id: 'bloodmagic:altar/earth_tool'})
    event.remove({id: 'bloodmagic:altar/fire_tool'})
    event.remove({id: 'bloodmagic:altar/water_tool'})
    event.remove({id: 'bloodmagic:altar/dusk_tool'})

    gtceu.bloodforge('air_tool')
        .input(LPCapability, 2500)
        .itemInputs(
            'gtceu:empty_spray_can',
            'botania:rune_air',
            'gtceu:mythic_compound_dust',
        )
        .itemOutputs('bloodmagic:airscribetool')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtceu.bloodforge('fire_tool')
        .input(LPCapability, 2500)
        .itemInputs(
            'gtceu:empty_spray_can',
            'botania:rune_fire',
            'gtceu:mythic_compound_dust',
        )
        .itemOutputs('bloodmagic:firescribetool')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtceu.bloodforge('water_tool')
        .input(LPCapability, 2500)
        .itemInputs(
            'gtceu:empty_spray_can',
            'botania:rune_water',
            'gtceu:mythic_compound_dust',
        )
        .itemOutputs('bloodmagic:waterscribetool')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtceu.bloodforge('earth_tool')
        .input(LPCapability, 2500)
        .itemInputs(
            'gtceu:empty_spray_can',
            'botania:rune_earth',
            'gtceu:mythic_compound_dust',
        )
        .itemOutputs('bloodmagic:earthscribetool')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.EV])

    gtceu.bloodforge('dusk_tool')
        .input(LPCapability, 2500)
        .itemInputs(
            'gtceu:empty_spray_can',
            'botania:rune_wrath',
            'gtceu:mythic_compound_dust',
        )
        .itemOutputs('bloodmagic:duskscribetool')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.EV])

    // Diviner
    event.remove({id: 'bloodmagic:ritual_diviner_0'})
    gtceu.bloodforge('diviner')
        .input(LPCapability, 10000)
        .notConsumable('bloodmagic:airscribetool')
        .notConsumable('bloodmagic:firescribetool')
        .notConsumable('bloodmagic:waterscribetool')
        .notConsumable('bloodmagic:earthscribetool')
        .itemInputs(
            '4x naturesaura:ancient_stick'
        )
        .itemOutputs('bloodmagic:ritualdiviner')
        .duration(20*40)
        .EUt(GTValues.VA[GTValues.EV])

    // Hellforged/Demonite stuff
    event.remove({output: 'bloodmagic:ingot_hellforged', mod: 'thermal'})
    event.remove({output: 'bloodmagic:ingot_hellforged', mod: 'enderio'})
    event.remove({output: 'bloodmagic:ingot_hellforged', mod: 'bloodmagic'})

    
})

yeet('bloodmagic:sand_hellforged')