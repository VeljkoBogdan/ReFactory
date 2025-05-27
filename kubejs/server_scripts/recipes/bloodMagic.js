ServerEvents.recipes(event => {

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
})