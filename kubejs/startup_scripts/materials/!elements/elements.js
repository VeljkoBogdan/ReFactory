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
    // event.create('desh', 135, 320, -1, null, 'De', false)
    // event.create('ostrum', 136, 324, -1, null, 'Ot', false)
    // event.create('calorite', 137, 328, -1, null, 'Ct', false)
 })