ServerEvents.recipes(event => {

    let logicChip = 'laserio:logic_chip'
    let servo = 'thermal:redstone_servo'
    let goldBolt = 'gtceu:gold_bolt'
    let tinPipe = 'gtceu:tin_small_item_pipe'
    let potinPipe = 'gtceu:potin_small_fluid_pipe'
    let copperCable = 'gtceu:copper_single_cable'
    let redAlloyCable = 'gtceu:red_alloy_single_cable'

    event.remove({id: 'laserio:logic_chip_raw'})
    event.shaped(
        '4x laserio:logic_chip_raw',
        [
            'RGR',
            'CUC',
            'RGR'
        ],
        {
            R: 'gtceu:red_alloy_plate',
            G: 'gtceu:gold_bolt',
            C: 'clay_ball',
            U: '#gtceu:circuits/ulv'
        }
    )

    event.recipes.gtceu.circuit_assembler('logic_chip_raw')
        .circuit(12)
        .itemInputs(
            '2x gtceu:gold_bolt',
            '#gtceu:circuits/ulv'
        )
        .inputFluids(Fluid.of('gtceu:red_alloy', 144))
        .itemOutputs('4x laserio:logic_chip_raw')
        .duration(20*4)
        .EUt(GTValues.V[GTValues.LV])

    event.remove({id: 'laserio:laser_connector'})
    event.shaped(
        'laserio:laser_connector',
        [
            ' G ',
            'RCR',
            'ISI'
        ],
        {
            R: 'gtceu:red_alloy_plate',
            G: '#forge:glass',
            C: logicChip,
            I: 'gtceu:iron_plate',
            S: servo
        }
    )

    event.remove({id: 'laserio:laser_node'})
    event.shaped(
        'laserio:laser_node',
        [
            'IGI',
            'GCG',
            'IGI'
        ],
        {
            I: 'gtceu:iron_plate',
            G: '#forge:glass',
            C: 'laserio:laser_connector'
        }
    )

    event.remove({id: 'laserio:laser_connector_advanced'})
    event.shaped(
        'laserio:laser_connector_advanced',
        [
            'ESE',
            'RCR',
            'GGG'
        ],
        {
            E: 'gtceu:ender_pearl_plate',
            S: servo,
            R: 'gtceu:red_alloy_plate',
            C: 'laserio:laser_connector',
            G: 'gtceu:gold_plate'
        }
    )

    event.remove({id: 'laserio:laser_wrench'})
    event.shaped(
        'laserio:laser_wrench',
        [
            'I I',
            ' L ',
            ' I '
        ],
        {
            I: 'gtceu:iron_plate',
            L: logicChip
        }
    )

    event.remove({id: 'laserio:card_holder'})
    event.shaped(
        'laserio:card_holder',
        [
            'IGI',
            'ILI',
            'ICI'
        ],
        {
            I: 'gtceu:iron_plate',
            G: '#forge:glass',
            L: logicChip,
            C: 'gtceu:wood_crate'
        }
    )

    event.remove({id: 'laserio:card_cloner'})
    event.shaped(
        'laserio:card_cloner',
        [
            'IGI',
            'PLP',
            'III'
        ],
        {
            I: 'gtceu:iron_plate',
            G: '#forge:glass',
            P: 'paper',
            L: logicChip
        }
    )



    event.remove({id: 'laserio:card_item'})
    event.shaped(
        'laserio:card_item',
        [
            'RTR',
            'QLQ',
            'GGG'
        ],
        {
            R: 'gtceu:red_alloy_plate',
            T: tinPipe,
            Q: 'gtceu:nether_quartz_plate',
            L: logicChip,
            G: goldBolt
        }
    )

    event.remove({id: 'laserio:card_fluid'})
    event.shaped(
        'laserio:card_fluid',
        [
            'RTR',
            'QLQ',
            'GGG'
        ],
        {
            R: 'gtceu:red_alloy_plate',
            T: potinPipe,
            Q: 'gtceu:nether_quartz_plate',
            L: logicChip,
            G: goldBolt
        }
    )

    event.remove({id: 'laserio:card_energy'})
    event.shaped(
        'laserio:card_energy',
        [
            'RTR',
            'QLQ',
            'GGG'
        ],
        {
            R: 'gtceu:red_alloy_plate',
            T: copperCable,
            Q: 'gtceu:nether_quartz_plate',
            L: logicChip,
            G: goldBolt
        }
    )

    event.remove({id: 'laserio:card_redstone'})
    event.shaped(
        'laserio:card_redstone',
        [
            'RTR',
            'QLQ',
            'GGG'
        ],
        {
            R: 'gtceu:red_alloy_plate',
            T: redAlloyCable,
            Q: 'gtceu:nether_quartz_plate',
            L: logicChip,
            G: goldBolt
        }
    )

    event.remove({id: 'laserio:overclocker_card'})
    event.shaped(
        'laserio:overclocker_card',
        [
            ' G ',
            'RLR',
            'GGG'
        ],
        {
            G: 'gtceu:gold_plate',
            R: 'gtceu:red_alloy_plate',
            L: logicChip
        }
    )

    event.remove({id: 'laserio:overclocker_node'})
    event.shaped(
        'laserio:overclocker_node',
        [
            ' G ',
            'RLR',
            'GGG'
        ],
        {
            G: 'gtceu:diamond_plate',
            R: 'gtceu:red_alloy_plate',
            L: logicChip
        }
    )

})