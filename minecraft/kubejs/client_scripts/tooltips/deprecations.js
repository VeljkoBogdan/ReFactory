ItemEvents.tooltip(event => {
    event.add(/sophisticatedstorage:(.*)/, Text.of('DEPRECATED - Mod will be removed in 0.6').red())
    event.add(/sophisticatedbackpacks:(.*)/, Text.of('DEPRECATED - Mod will be removed in 0.6').red())
    event.add(/storagedrawers:(.*)/, Text.of('DEPRECATED - Mod will be removed in 0.6').red())
})