GTCEuStartupEvents.registry('gtceu:element', event => {
    // Element Name, Protons, Neutrons, Half Life Seconds, Decay To, Atomic Symbol, Is Isotope
    // ₂₃₄₅₆₇₈₉₀

    // Aether
    event.create('ambrosium')
        .protons(121)
        .neutrons(302)
        .symbol('A')
        .isIsotope(false)

    event.create('zanite')
        .protons(122)
        .neutrons(308)
        .symbol('Zt')
        .isIsotope(false)

    event.create('mistrium')
        .protons(168)
        .neutrons(348)
        .symbol('Mi')
        .isIsotope(false)

    // event.create('energetic_alloy', 100, 100, -1, null, '(Si(FeS₂)₅(CrAl₂O₃)Hg₃)Au', false)
    // event.create('vibrant_alloy', 100, 100, -1, null, '((Si(FeS₂)₅(CrAl₂O₃)Hg₃)Au)(BeK₄N₅)', false)

    // Botania
    event.create('mana')
        .protons(1)
        .neutrons(1)
        .symbol('Ma')
        .isIsotope(false)

    event.create('terra')
        .protons(1)
        .neutrons(1)
        .symbol('Tr')
        .isIsotope(false)

    event.create('elementium')
        .protons(123)
        .neutrons(318)
        .symbol('E')
        .isIsotope(false)
    
    // Ad Astra
    event.create('desh')
        .protons(135)
        .neutrons(320)
        .symbol('De')
        .isIsotope(false)

    event.create('ostrum')
        .protons(136)
        .neutrons(324)
        .symbol('Ot')
        .isIsotope(false)

    event.create('calorite')
        .protons(137)
        .neutrons(328)
        .symbol('Ct')
        .isIsotope(false)

    event.create('mythril')
        .protons(144)
        .neutrons(340)
        .symbol('Mh')
        .isIsotope(false)

    event.create('end_steel')
        .symbol('Fe(MgFeSi₂O₄)?₂')

    event.create('soularium')
        .symbol('Au?₂')
 })