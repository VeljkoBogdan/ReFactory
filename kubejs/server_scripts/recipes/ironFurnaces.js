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

ServerEvents.recipes(event => {
    event.remove({ output: 'ironfurnaces:iron_furnace' })
    event.shaped(
        'ironfurnaces:iron_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:iron_plate',
            F: 'minecraft:furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({ output: 'ironfurnaces:gold_furnace' })
    event.shaped(
        'ironfurnaces:gold_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:gold_plate',
            F: 'ironfurnaces:iron_furnace',
            W: '#forge:tools/wrenches'
        }
    )
    event.shaped(
        'ironfurnaces:gold_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:gold_plate',
            F: 'ironfurnaces:silver_furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({ output: 'ironfurnaces:diamond_furnace' })
    event.shaped(
        'ironfurnaces:diamond_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:diamond_plate',
            F: 'ironfurnaces:gold_furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({ output: 'ironfurnaces:emerald_furnace' })
    event.shaped(
        'ironfurnaces:emerald_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:emerald_plate',
            F: 'ironfurnaces:diamond_furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({ output: 'ironfurnaces:obsidian_furnace' })
    event.shaped(
        'ironfurnaces:emerald_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:obsidian_plate',
            F: 'ironfurnaces:diamond_furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({ output: 'ironfurnaces:crystal_furnace' })
    event.shaped(
        'ironfurnaces:crystal_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:certus_quartz_plate',
            F: 'ironfurnaces:emerald_furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({ output: 'ironfurnaces:netherite_furnace' })
    event.shaped(
        'ironfurnaces:netherite_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'minecraft:netherite_ingot',
            F: 'ironfurnaces:obsidian_furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({ output: 'ironfurnaces:copper_furnace' })
    event.shaped(
        'ironfurnaces:copper_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:copper_plate',
            F: 'minecraft:furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.remove({ output: 'ironfurnaces:silver_furnace' })
    event.shaped(
        'ironfurnaces:silver_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:silver_plate',
            F: 'ironfurnaces:copper_furnace',
            W: '#forge:tools/wrenches'
        }
    )

    event.shaped(
        'ironfurnaces:silver_furnace',
        [
            'III',
            'IFI',
            'IWI'
        ],
        {
            I: 'gtceu:silver_plate',
            F: 'ironfurnaces:iron_furnace',
            W: '#forge:tools/wrenches'
        }
    )

    // Upgrades
    const upgrades = [
        { id: 'ironfurnaces:upgrade_iron', plate: 'gtceu:iron_plate', material: '#minecraft:stone_tool_materials' },
        { id: 'ironfurnaces:upgrade_gold', plate: 'gtceu:gold_plate', material: 'gtceu:iron_plate' },
        { id: 'ironfurnaces:upgrade_diamond', plate: 'gtceu:diamond_plate', material: 'gtceu:gold_plate' },
        { id: 'ironfurnaces:upgrade_emerald', plate: 'gtceu:emerald_plate', material: 'gtceu:diamond_plate' },
        { id: 'ironfurnaces:upgrade_obsidian', plate: 'gtceu:obsidian_plate', material: 'gtceu:emerald_plate' },
        { id: 'ironfurnaces:upgrade_crystal', plate: 'gtceu:certus_quartz_plate', material: 'gtceu:diamond_plate' },
        { id: 'ironfurnaces:upgrade_netherite', plate: 'minecraft:netherite_ingot', material: 'gtceu:obsidian_plate' },
        { id: 'ironfurnaces:upgrade_copper', plate: 'gtceu:copper_plate', material: '#minecraft:stone_tool_materials' },
        { id: 'ironfurnaces:upgrade_silver', plate: 'gtceu:silver_plate', material: 'gtceu:copper_plate' },
        { id: 'ironfurnaces:upgrade_obsidian2', plate: 'gtceu:obsidian_plate', material: 'gtceu:certus_quartz_plate' },
        { id: 'ironfurnaces:upgrade_iron2', plate: 'gtceu:iron_plate', material: 'gtceu:copper_plate' },
        { id: 'ironfurnaces:upgrade_gold2', plate: 'gtceu:gold_plate', material: 'gtceu:silver_plate' },
        { id: 'ironfurnaces:upgrade_silver2', plate: 'gtceu:silver_plate', material: 'gtceu:iron_plate' }
    ];

    for (const { id, plate, material } of upgrades) {
        event.remove({ output: id });

        event.shaped(Item.of(id), [
            'PPP',
            'PMP',
            'PPP'
        ], {
            P: plate,
            M: material
        });
    }

    // Removed temporarily
    event.remove({output: 'ironfurnaces:million_furnace'})
})

yeet('ironfurnaces:heater')
yeet('ironfurnaces:item_heater')
yeet('ironfurnaces:augment_factory')
yeet('ironfurnaces:augment_generator')