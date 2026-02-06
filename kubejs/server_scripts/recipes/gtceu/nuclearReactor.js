// 1mb water = 160mb steam
ServerEvents.recipes(event => {
    event.shaped(
        'refactorycore:nuclear_reactor',
        [
            'AEA',
            'BCB',
            'DBD'
        ],
        {
            A: '#gtceu:circuits/iv',
            B: 'gtceu:zircaloy_frame',
            C: 'gtceu:ev_machine_hull',
            D: 'gtceu:hv_emitter',
            E: 'gtceu:computer_monitor_cover'
        }
    )
})