PlayerEvents.loggedIn(event => {
    if (event.player.stages.has('logged_in')) return
    event.player.stages.add('logged_in')
    event.player.give('ftbquests:book')
})