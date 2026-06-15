let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

yeet('toms_storage:ts.open_crate')

ServerEvents.recipes(event => {
    const tomsId = 'toms_storage:ts.'

    event.remove({id: /toms_storage:(.*)/})

    event.shaped(
        `${tomsId}inventory_connector`,
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#minecraft:planks',
            B: "gtceu:red_alloy_single_cable",
            C: "gtceu:tin_normal_item_pipe"
        }
    )

    event.shaped(
        `${tomsId}storage_terminal`,
        [
            'ABC',
            'ABC',
            'ABC'
        ],
        {
            A: 'gtceu:red_alloy_single_cable',
            B: 'gtceu:wood_plate',
            C: '#forge:glass_panes'
        }
    )

    event.shaped(
        `2x ${tomsId}trim`,
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#minecraft:planks',
            B: 'gtceu:wood_plate',
            C: 'gtceu:tin_normal_item_pipe'
        }
    )

    event.shaped(
        `6x ${tomsId}inventory_cable`,
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: 'gtceu:wood_plate',
            B: 'gtceu:tin_small_item_pipe'
        }
    )

    event.shapeless(
        `${tomsId}inventory_cable_framed`,
        [
            `${tomsId}inventory_cable`,
            "framedblocks:framed_cube"
        ]
    )

    event.shaped(
        `${tomsId}inventory_cable_connector`,
        [
            ' AB',
            'CDE',
            ' AB'
        ],
        {
            A: 'quartz',
            B: '#minecraft:planks',
            C: `${tomsId}inventory_cable`,
            D: 'gtceu:tin_normal_item_pipe',
            E: 'gtceu:diamond_plate'
        }
    )

    event.shapeless(
        `${tomsId}inventory_cable_connector_filtered`,
        [
            `${tomsId}inventory_cable_connector`,
            'gtceu:item_filter'
        ]
    )

    event.shapeless(
        `${tomsId}inventory_cable_connector_framed`,
        [
            `${tomsId}inventory_cable_connector`,
            'framedblocks:framed_cube'
        ]
    )

    event.shaped(
        `${tomsId}inventory_proxy`,
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#minecraft:planks',
            B: 'gtceu:tin_normal_item_pipe',
            C: 'gtceu:red_alloy_double_cable'
        }
    )

    event.shaped(
        `${tomsId}crafting_terminal`,
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'crafting_table',
            B: 'gtceu:diamond_plate',
            C: `${tomsId}storage_terminal`
        }
    )

    event.shaped(
        `${tomsId}inventory_hopper_basic`,
        [
            'ABA',
            ' C ',
            '   '
        ],
        {
            A: '#minecraft:planks',
            B: `${tomsId}inventory_cable`,
            C: 'hopper'
        }
    )

    event.shaped(
        `${tomsId}level_emitter`,
        [
            ' C ',
            'ABA',
            '   '
        ],
        {
            A: '#minecraft:planks',
            B: `${tomsId}inventory_cable`,
            C: 'redstone_torch'
        }
    )

    event.shapeless(
        `${tomsId}paint_kit`,
        [
            'bucket',
            'brush',
            '#forge:dyes/red',
            '#forge:dyes/green',
            '#forge:dyes/blue'
        ]
    )

    event.shaped(
        `${tomsId}wireless_terminal`,
        [
            'ACA',
            'BDE',
            'ACA'
        ],
        {
            A: 'gtceu:wood_plate',
            B: 'gtceu:lv_emitter',
            C: 'gtceu:glowstone_plate',
            D: `${tomsId}inventory_proxy`,
            E: 'gtceu:lv_sensor'
        }
    )

    event.shaped(
        `${tomsId}adv_wireless_terminal`,
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:ender_pearl_plate',
            C: `${tomsId}wireless_terminal`
        }
    )

    event.shapeless(
        `${tomsId}item_filter`,
        [
            `${tomsId}inventory_cable`,
            'gtceu:item_filter'
        ]
    )

    event.shapeless(
        `${tomsId}polymorphic_item_filter`,
        [
            `${tomsId}inventory_cable`,
            'gtceu:item_filter',
            '#functionalstorage:drawer'
        ]
    )

    event.shapeless(
        `${tomsId}tag_item_filter`,
        [
            `${tomsId}inventory_cable`,
            'gtceu:item_tag_filter'
        ]
    )
})