ServerEvents.recipes(event => {
    event.remove({id: 'usefulbackpacks:backpack_medium'})
    event.remove({id: 'usefulbackpacks:backpack_large'})
    event.remove({id: 'usefulbackpacks:filter_item'})
    event.remove({id: 'usefulbackpacks:filter_tag'})
    event.remove({id: 'usefulbackpacks:backpack_enderchest'})

    event.shaped(
        'usefulbackpacks:backpack_enderchest',
        [
            'ABA',
            'DCD',
            'ABA'
        ],
        {
            B: 'gtceu:ender_pearl_plate',
            A: 'botania:manaweave_cloth',
            C: 'usefulbackpacks:backpack_small',
            D: 'ender_chest'
        }
    )

    event.shaped(
        'usefulbackpacks:backpack_medium',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'gtceu:steel_plate',
            B: 'gtceu:rubber_plate',
            C: 'usefulbackpacks:backpack_small'
        }
    )

    event.shaped(
        'usefulbackpacks:backpack_large',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:polyethylene_plate',
            C: 'usefulbackpacks:backpack_medium'
        }
    )

    event.shaped(
        'usefulbackpacks:filter_item',
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: 'gtceu:steel_foil',
            B: 'gtceu:lv_item_magnet',
            C: 'gtceu:item_filter'
        }
    )

    event.shaped(
        'usefulbackpacks:filter_tag',
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: 'gtceu:steel_foil',
            B: 'gtceu:lv_item_magnet',
            C: 'gtceu:item_tag_filter'
        }
    )
})