ServerEvents.recipes(event => {
    const id = 'buildinggadgets2'

    event.remove({output: `${id}:gadget_building`})
    event.shaped(
        `${id}:gadget_building`,
        [
            'PEP',
            'PMP',
            'PCP'
        ],
        {
            P: 'gtceu:iron_plate',
            E: 'gtceu:lv_emitter',
            M: 'gtceu:computer_monitor_cover',
            C: '#gtceu:circuits/lv'
        }
    )

    event.remove({output: `${id}:gadget_exchanging`})
    event.shaped(
        `${id}:gadget_exchanging`,
        [
            'EPS',
            'PMP',
            'PCP'
        ],
        {
            P: 'gtceu:iron_plate',
            E: 'gtceu:lv_emitter',
            S: 'gtceu:lv_sensor',
            M: 'gtceu:computer_monitor_cover',
            C: '#gtceu:circuits/lv'
        }
    )

    event.remove({output: `${id}:gadget_copy_paste`})
    event.shaped(
        `${id}:gadget_copy_paste`,
        [
            'SPE',
            'PMP',
            'PCP'
        ],
        {
            P: 'gtceu:iron_plate',
            E: 'gtceu:lv_emitter',
            S: 'gtceu:lv_sensor',
            M: 'gtceu:computer_monitor_cover',
            C: 'gtceu:machine_memory_card'
        }
    )

    event.remove({output: `${id}:gadget_cut_paste`})
    event.shaped(
        `${id}:gadget_cut_paste`,
        [
            'SPE',
            'PMP',
            'PCP'
        ],
        {
            P: 'gtceu:steel_plate',
            E: 'gtceu:lv_emitter',
            S: 'gtceu:lv_sensor',
            M: 'gtceu:computer_monitor_cover',
            C: 'gtceu:machine_memory_card'
        }
    )

    event.remove({output: `${id}:gadget_destruction`})
    event.shaped(
        `${id}:gadget_destruction`,
        [
            'PTP',
            'PMP',
            'PCP'
        ],
        {
            P: 'gtceu:steel_plate',
            T: 'trashcans:ultimate_trash_can',
            M: 'gtceu:computer_monitor_cover',
            C: '#gtceu:circuits/lv'
        }
    )

    event.remove({output: `${id}:template_manager`})
    event.shaped(
        `${id}:template_manager`,
        [
            'PPP',
            'PMP',
            'PpP'
        ],
        {
            P: 'gtceu:iron_plate',
            p: 'minecraft:paper',
            M: 'gtceu:computer_monitor_cover',
        }
    )
})