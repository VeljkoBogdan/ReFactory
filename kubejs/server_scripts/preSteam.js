let flintCooldowns = new Map();

// Right clicking a dried salt block returns flint at a ~25% chance
BlockEvents.rightClicked('biomesoplenty:dried_salt', e => {
    const { hand, block, player } = e;
    const soundToPlay = 'minecraft:block.gravel.step'
    const particleEffect = 'minecraft:block'

    const heldItem = player.getMainHandItem()
    const offhandItem = player.getOffHandItem()
    const now = Date.now()
    const cooldown = 333
    const playerId = player.id

    if (heldItem === Item.of('minecraft:stick') && 
        offhandItem === null &&
        !e.player.isCreative()
    ) {
        const lastUse = flintCooldowns.get(playerId) ?? 0
        if (now - lastUse > cooldown) {
            // /particle minecraft:block biomesoplenty:dried_salt -501 77 -530 0.5 0.5 0.5 0.01 30 normal
            e.server.runCommandSilent(`particle ${particleEffect} biomesoplenty:dried_salt ${block.x} ${block.y} ${block.z} 0.5 0.5 0.5 0.01 30 normal`)
            e.server.runCommandSilent(`playsound ${soundToPlay} ambient @a ${block.x} ${block.y} ${block.z}`)

            let rand = Math.random()
            if (rand > 0.75) {
                if (rand < 0.85) e.block.popItem(Item.of('minecraft:flint'))
                if (rand < 0.95 && rand > 0.85) e.block.popItem(Item.of('minecraft:bone_meal'))

                e.block.set('minecraft:air')
            }

            flintCooldowns.set(playerId, now)
        }

        player.swing()
    }

    return true
})

// Dried and Dead Grass rarely drop bone meal and fertilizer
BlockEvents.broken('biomesoplenty:desert_grass', e => {
    if (!e.player.isCreative()) {
        const { block } = e
        let rand = Math.random()

        if (rand < 0.25) {
            e.block.popItem(Item.of('minecraft:bone_meal'))
        } else if (rand > 0.75) {
            e.block.popItem(Item.of('botania:fertilizer'))
        } else if (rand > 0.25 && rand < 0.5) {
            e.block.popItem(Item.of('minecraft:wheat_seeds'))
        }
    }
})

BlockEvents.broken('biomesoplenty:dead_grass', e => {
    if (!e.player.isCreative()) {
        const { block } = e
        let rand = Math.random()

        if (rand < 0.25) {
            e.block.popItem(Item.of('minecraft:bone_meal'))
        } else if (rand > 0.75) {
            e.block.popItem(Item.of('botania:fertilizer'))
        } else if (rand > 0.25 && rand < 0.5) {
            e.block.popItem(Item.of('minecraft:wheat_seeds'))
        }
    }
})

