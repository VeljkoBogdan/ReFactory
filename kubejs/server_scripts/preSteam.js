let flintCooldowns = new Map();

// Right clicking a dried salt block returns flint at a ~25% chance
BlockEvents.rightClicked('biomesoplenty:dried_salt', e => {
    const { hand, block, player } = e;
    const soundToPlay = 'minecraft:block.gravel.step'
    const particleEffect = 'minecraft:block'
    var itemToPop = 'minecraft:flint'

    const heldItem = player.getMainHandItem();
    const now = Date.now()
    const cooldown = 333
    const playerId = player.id

    if (heldItem === null) {
        const lastUse = flintCooldowns.get(playerId) ?? 0
        if (now - lastUse > cooldown) {
            // /particle minecraft:block biomesoplenty:dried_salt -501 77 -530 0.5 0.5 0.5 0.01 30 normal
            e.server.runCommandSilent(`particle ${particleEffect} biomesoplenty:dried_salt ${block.x} ${block.y} ${block.z} 0.5 0.5 0.5 0.01 30 normal`)
            e.server.runCommandSilent(`playsound ${soundToPlay} ambient @a ${block.x} ${block.y} ${block.z}`)

            itemToPop = Item.of(itemToPop)

            if (Math.random() > 0.75) {
                e.block.popItem(itemToPop)
                e.block.set('minecraft:air')
            }

            flintCooldowns.set(playerId, now)
        }

        player.swing()
    }

    return true
})

