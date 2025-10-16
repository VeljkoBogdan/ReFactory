// priority: 9999

GTCEuStartupEvents.registry('gtceu:material', event => {

    // Ambrosium and Zanite from Aether
    event.create('ambrosium')
    .gem()
    .ore()
    .element(GTElements.get('ambrosium'))
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS)
    .color(0xf9ff52)
    .iconSet(GTMaterialIconSet.OPAL)

    event.create('zanite')
    .gem()
    .ore()
    .element(GTElements.get('zanite'))
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS)
    .color(0x611791)
    .iconSet(GTMaterialIconSet.DIAMOND)

    // Energetic and Vibrant Alloy from EnderIO
    event.create('energetic_alloy')
    .ingot()
    .liquid()
    .iconSet(GTMaterialIconSet.DULL)
    .color(0xff9021)
    .components(
        '1x gold',
        '1x redstone'
    )
    .flags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_RING,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_ROTOR
    )
    .blastTemp(1500, null, GTValues.VA[GTValues.MV], 20*25)
    // Vibrant
    event.create('vibrant_alloy')
    .ingot()
    .liquid()
    .iconSet(GTMaterialIconSet.DULL)
    .color(0x07e830)
    .components(
        '1x energetic_alloy',
        '1x ender_pearl'
    )
    .flags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_RING,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_ROTOR
    )
    .element(GTElements.get('vibrant_alloy'))
    .blastTemp(1600, null, GTValues.VA[GTValues.MV], 20*30)

    // Zanite Steel
    event.create('zanite_steel')
    .ingot()
    .components(
        '1x zanite',
        '1x steel'
    )
    .color(0x62426e)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW
    )
    .blastTemp(1600, null, GTValues.VA[GTValues.HV], 20*20)

    // Mana
    event.create('mana')
    .dust()
    .color(0x0088ff)
    .element(GTElements.get('mana'))
    .iconSet(GTMaterialIconSet.SHINY)

    // Manasteel
    event.create('manasteel')
    .ingot()
    .color(0x195eff)
    .components(
        '1x mana',
        '1x iron'
    )
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FINE_WIRE
    )

    // Terra
    event.create('terra')
    .dust()
    .color(0x00ff1a)
    .element(GTElements.get('terra'))
    .iconSet(GTMaterialIconSet.SHINY)

    // Terrasteel
    event.create('terrasteel')
    .ingot()
    .color(0x16bf00)
    .components(
        '1x terra',
        '1x manasteel'
    )
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FINE_WIRE
    )

    // Elementium
    event.create('elementium')
    .ingot()
    .color(0xff2be3)
    .element(GTElements.get('elementium'))
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FINE_WIRE
    )

    // Ozone
    event.create('ozone')
    .gas()
    .color(0x9ad6d6)
    .components(
        '3x oxygen',
    )
    .iconSet(GTMaterialIconSet.FLUID)

    // Mistrium
    event.create('mistrium')
    .fluid()
    .color(0xedd242)
    .element(GTElements.get('mistrium'))
    .iconSet(GTMaterialIconSet.FLUID)

    // Aether Air
    event.create('aether_air')
    .gas()
    .color(0xf0e297)
    .components(
        '28x fluorine',
        '24x oxygen',
        '24x ozone',
        '16x helium',
        '8x mistrium'
    )
    .iconSet(GTMaterialIconSet.FLUID)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Liquid Aether Air
    event.create('liquid_aether_air')
    .fluid()
    .color(0xd1bc49)
    .components(
        '28x fluorine',
        '22x oxygen',
        '16x ozone',
        '16x helium',
        '18x mistrium'
    )
    .iconSet(GTMaterialIconSet.FLUID)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('lumium')
    .ingot()
    .color(0xfff9b5)
    .secondaryColor(0xed983e)
    .components(
        '4x glowstone',
        '3x tin_alloy',
        'silver',
        'mistrium'
    )
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.DISABLE_DECOMPOSITION
    )
    .blastTemp(1700, null, GTValues.VA[GTValues.EV], 20*20)

    event.create('signalum')
    .ingot()
    .color(0xeb7628)
    .secondaryColor(0xff0530)
    .components(
        '3x red_alloy',
        '2x red_steel',
        'copper'
    )
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.DISABLE_DECOMPOSITION
    )
    .blastTemp(2600, null, GTValues.VA[GTValues.IV], 20*20)

    event.create('enderium')
    .ingot()
    .color(0x32a9b0)
    .components(
        '2x manasteel',
        '2x blue_alloy',
        'ender_pearl'
    )
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.DISABLE_DECOMPOSITION
    )
    .blastTemp(3500, null, GTValues.VA[GTValues.LuV], 20*20)

    // Silicon Dioxide, Sulfur, Iron
    event.create('basalz')
        .dust()
        .color(0x200f10)
        .components(
            '2x sulfur',
            '2x iron',
            'silicon_dioxide'
        )

    // Water, Ammonia and Silver
    event.create('blizz')
        .dust()
        .color(0x60bfff)
        .components(
            '2x water',
            '2x silver',
            'ammonia'
        )

    // Phosphorus Pentoxide, Zinc, Nitrogen
    event.create('blitz')
        .dust()
        .color(0xd0d0a0)
        .components(
            '2x phosphorus_pentoxide',
            '2x zinc',
            'nitrogen'
        )

    // Mythic Compound
    event.create('mythic_compound')
        .dust()
        .color(0x7e4e65)
        .components(
            'basalz',
            'blitz',
            'blizz'
        )

    // Charged certus quartz
    event.create('charged_certus_quartz')
        .gem()
        .color(0xcce0ff)
        .secondaryColor(0xffffff)
        .iconSet(GTMaterialIconSet.CERTUS)
        .components(
            'silicon',
            '2x oxygen'
        )

    // Fluix Crystal
    event.create('fluix_crystal')
        .gem()
        .dust()
        .color(0xd929a1)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )
        .iconSet(GTMaterialIconSet.CERTUS)

    // Livingrock
    event.create('livingrock')
        .color(0xd7d7cc)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW
        )
        
    // Livingwood
    event.create('livingwood')
        .color(0x4B190A)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD
        )

    // Seared Brick
    event.create('seared_brick')
        .dust()
        .color(0x333131)
        .iconSet(GTMaterialIconSet.ROUGH)

    // Ad Astra
    event.create('desh')
        .ingot()
        .ore()
        .color(0xef8f00)
        .element(GTElements.get('desh'))
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FRAME
        )
        .blastTemp(4000, null, GTValues.VA[GTValues.IV], 20*20)

    event.create('ostrum')
        .ingot()
        .ore()
        .color(0x5f2f60)
        .element(GTElements.get('ostrum'))
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )
        .blastTemp(4000, null, GTValues.VA[GTValues.IV], 20*20)

    event.create('calorite')
        .ingot()
        .ore()
        .color(0x8f1f30)
        .secondaryColor(0xff0000)
        .element(GTElements.get('calorite'))
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )

    event.create('mythril')
        .ingot()
        .fluid()
        .color(0x006a7a)
        .secondaryColor(0x0d1475)
        .element(GTElements.get('mythril'))
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )

    event.create('liquid_soul')
        .fluid()
        .color(0x38342e)
        .secondaryColor(0x7d2847)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('molten_manasteel')
        .fluid()
        .color(0x195eff)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('molten_terrasteel')
        .fluid()
        .color(0x16bf00)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('molten_elementium')
        .fluid()
        .color(0xff2be3)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('copper_alloy')
        .ingot()
        .color(0xb37907)
        .components(
            'copper',
            'silicon'
        )
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )
        
    event.create('dark_steel')
        .ingot()
        .color(0x878787)
        .components(
            'steel',
            'obsidian'
        )
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )
                
    event.create('end_steel')
        .ingot()
        .element('end_steel')
        .color(0xbfb869)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )
    
    event.create('pulsating_alloy')
        .ingot()
        .liquid()
        .color(0x70d486)
        .components(
            'iron',
            'ender_pearl'
        )
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )

    event.create('redstone_alloy')
        .ingot()
        .color(0xfa5c5c)
        .components(
            'copper',
            'redstone',
            'silicon'
        )
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )
        
    event.create('soularium')
        .ingot()
        .element('soularium')
        .color(0x82715b)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )
                
    event.create('conductive_alloy')
        .ingot()
        .color(0xd6a5a3)
        .components(
            'iron',
            '2x redstone'
        )
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD
        )
        

    // Undergarden
    event.create('utherium')
        .gem()
        .ore()
        .color(0xc3434c)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        )

    // Nature's Aura
    event.create('infused_iron')
        .ingot()
        .color(0x36bf3f)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD
        )

    event.create('sky_ingot')
        .ingot()
        .color(0x99e0ff)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD
        )

})

GTCEuStartupEvents.materialModification(event => {
    // Botania
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gaia'), () => Item.getItem('botania:gaia_ingot'))

    // Thermal
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('blitz'), () => Item.getItem('thermal:blitz_powder'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('blizz'), () => Item.getItem('thermal:blizz_powder'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('basalz'), () => Item.getItem('thermal:basalz_powder'))

    // Nature's Aura
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('infused_iron'), () => Item.getItem('naturesaura:infused_iron'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('sky_ingot'), () => Item.getItem('naturesaura:sky_ingot'))


    // Adding desh byproducts
    let deshOreProperty = GTMaterials.get('desh').getProperty(PropertyKey.ORE);
    deshOreProperty.setOreByProducts('mythril', 'iron');
})