let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
      event.remove('forge:ingots')
    })
}

// Elite variants (HV) -------------------------------------------------------------------------------------------------------
const stainless = 'gtceu:stainless_steel_plate';

// All elite pot variants
const elitePots = [
    'botanypotstiers:elite_terracotta_botany_pot', 'botanypotstiers:elite_white_terracotta_botany_pot',
    'botanypotstiers:elite_white_concrete_botany_pot', 'botanypotstiers:elite_white_glazed_terracotta_botany_pot',
    'botanypotstiers:elite_orange_terracotta_botany_pot', 'botanypotstiers:elite_orange_concrete_botany_pot',
    'botanypotstiers:elite_orange_glazed_terracotta_botany_pot', 'botanypotstiers:elite_magenta_terracotta_botany_pot',
    'botanypotstiers:elite_magenta_concrete_botany_pot', 'botanypotstiers:elite_magenta_glazed_terracotta_botany_pot',
    'botanypotstiers:elite_light_blue_terracotta_botany_pot', 'botanypotstiers:elite_light_blue_concrete_botany_pot',
    'botanypotstiers:elite_light_blue_glazed_terracotta_botany_pot', 'botanypotstiers:elite_yellow_terracotta_botany_pot',
    'botanypotstiers:elite_yellow_concrete_botany_pot', 'botanypotstiers:elite_yellow_glazed_terracotta_botany_pot',
    'botanypotstiers:elite_lime_terracotta_botany_pot', 'botanypotstiers:elite_lime_concrete_botany_pot',
    'botanypotstiers:elite_lime_glazed_terracotta_botany_pot', 'botanypotstiers:elite_pink_terracotta_botany_pot',
    'botanypotstiers:elite_pink_concrete_botany_pot', 'botanypotstiers:elite_pink_glazed_terracotta_botany_pot',
    'botanypotstiers:elite_gray_terracotta_botany_pot', 'botanypotstiers:elite_gray_concrete_botany_pot',
    'botanypotstiers:elite_gray_glazed_terracotta_botany_pot', 'botanypotstiers:elite_light_gray_terracotta_botany_pot',
    'botanypotstiers:elite_light_gray_concrete_botany_pot', 'botanypotstiers:elite_light_gray_glazed_terracotta_botany_pot',
    'botanypotstiers:elite_cyan_terracotta_botany_pot', 'botanypotstiers:elite_cyan_concrete_botany_pot',
    'botanypotstiers:elite_cyan_glazed_terracotta_botany_pot', 'botanypotstiers:elite_purple_terracotta_botany_pot',
    'botanypotstiers:elite_purple_concrete_botany_pot', 'botanypotstiers:elite_purple_glazed_terracotta_botany_pot',
    'botanypotstiers:elite_blue_terracotta_botany_pot', 'botanypotstiers:elite_blue_concrete_botany_pot',
    'botanypotstiers:elite_blue_glazed_terracotta_botany_pot', 'botanypotstiers:elite_brown_terracotta_botany_pot',
    'botanypotstiers:elite_brown_concrete_botany_pot', 'botanypotstiers:elite_brown_glazed_terracotta_botany_pot',
    'botanypotstiers:elite_green_terracotta_botany_pot', 'botanypotstiers:elite_green_concrete_botany_pot',
    'botanypotstiers:elite_green_glazed_terracotta_botany_pot', 'botanypotstiers:elite_red_terracotta_botany_pot',
    'botanypotstiers:elite_red_concrete_botany_pot', 'botanypotstiers:elite_red_glazed_terracotta_botany_pot',
    'botanypotstiers:elite_black_terracotta_botany_pot', 'botanypotstiers:elite_black_concrete_botany_pot',
    'botanypotstiers:elite_black_glazed_terracotta_botany_pot'
];

const eliteToKeep = [
    'botanypotstiers:elite_terracotta_botany_pot'
]

ServerEvents.recipes(event => {
    const elite = eliteToKeep[0]

    event.remove({output: elite})

    const hopper = elite.replace('_botany_pot', '_hopper_botany_pot');
    event.remove({output: hopper})

    // Elite
    event.shaped(
        elite,
        [
            'PPP',
            'PMP',
            'PPP'
        ],
        {
            P: stainless,
            M: 'botanypots:terracotta_botany_pot'
        }
    )

    // Elite hopper
    event.shapeless(
        hopper,
        [
            elite,
            'minecraft:hopper'
        ]
    )
});

for (const elite of elitePots) {
    if (elite === eliteToKeep[0]) continue
    let hopper = elite.replace('_botany_pot', '_hopper_botany_pot');

    yeet(elite)
    yeet(hopper)
}

// ---------------------------------------------
// Ultra Tier (EV)
const titanium = 'gtceu:titanium_plate';
const ultraPots = elitePots.map(e => e.replace('elite', 'ultra'));
const ultraToKeep = ['botanypotstiers:ultra_terracotta_botany_pot'];

ServerEvents.recipes(event => {
    const ultra = ultraToKeep[0];
    event.remove({output: ultra})

    const hopper = ultra.replace('_botany_pot', '_hopper_botany_pot');
    event.remove({output: hopper})

    event.shaped(
        ultra,
        [
            'PPP',
            'PMP',
            'PPP'
        ],
        {
            P: titanium,
            M: 'botanypotstiers:elite_terracotta_botany_pot'
        }
    )

    event.shapeless(
        hopper,
        [
            ultra,
            'minecraft:hopper'
        ]
    )
});

for (const ultra of ultraPots) {
    if (ultra === ultraToKeep[0]) continue
    let hopper = ultra.replace('_botany_pot', '_hopper_botany_pot');

    yeet(ultra)
    yeet(hopper)
}

// ---------------------------------------------
// Creative Tier (IV)
const tungstenSteel = 'gtceu:tungsten_steel_plate';
const creativePots = elitePots.map(e => e.replace('elite', 'creative'));
const creativeToKeep = ['botanypotstiers:creative_terracotta_botany_pot'];

ServerEvents.recipes(event => {
    const creative = creativeToKeep[0];
    event.remove({output: creative})

    const hopper = creative.replace('_botany_pot', '_hopper_botany_pot');
    event.remove({output: hopper})

    event.shaped(
        creative,
        [
            'PPP',
            'PMP',
            'PPP'
        ],
        {
            P: tungstenSteel,
            M: 'botanypotstiers:ultra_terracotta_botany_pot'
        }
    )

    event.shapeless(
        hopper,
        [
            creative,
            'minecraft:hopper'
        ]
    )
});

for (const creative of creativePots) {
    if (creative === creativeToKeep[0]) continue
    let hopper = creative.replace('_botany_pot', '_hopper_botany_pot');

    yeet(creative)
    yeet(hopper)
}
