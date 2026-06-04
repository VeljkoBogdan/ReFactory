ServerEvents.loaded(event => {
    event.server.runCommand('/mobevent minecraft:wandering_trader_event false')
})