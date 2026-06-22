const $MRM = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.IMaterialRegistryManager')

// Mining hammers excluded from ultimine tools
ServerEvents.tags('item', event => {
    if (GTMaterialRegistry.getPhase() === $MRM.Phase.CLOSED || GTMaterialRegistry.getPhase() === $MRM.Phase.FROZEN) {
        GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
            event.add('ftbultimine:excluded_tools', [`gtceu:${id.name}_mining_hammer`])
        })
    }
})

// GT Ores removed from ultimine
ServerEvents.tags('block', event => {
    if (GTMaterialRegistry.getPhase() === $MRM.Phase.CLOSED || GTMaterialRegistry.getPhase() === $MRM.Phase.FROZEN) {
        GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
            event.add('ftbultimine:excluded_blocks', [`gtceu:${id.name}_ore`, `gtceu:granite_${id.name}_ore`, `gtceu:diorite_${id.name}_ore`, `gtceu:andesite_${id.name}_ore`, `gtceu:red_granite_${id.name}_ore`, `gtceu:marble_${id.name}_ore`, `gtceu:deepslate_${id.name}_ore`, `gtceu:tuff_${id.name}_ore`, `gtceu:sand_${id.name}_ore`, `gtceu:red_sand_${id.name}_ore`, `gtceu:gravel_${id.name}_ore`, `gtceu:basalt_${id.name}_ore`, `gtceu:netherrack_${id.name}_ore`, `gtceu:blackstone_${id.name}_ore`, `gtceu:endstone_${id.name}_ore`, `gtceu:depthrock_${id.name}_ore`, `gtceu:shiverstone_${id.name}_ore`, `gtceu:sediment_${id.name}_ore`, `gtceu:holystone_${id.name}_ore`, `gtceu:mossy_holystone_${id.name}_ore`, `gtceu:icestone_${id.name}_ore`, `gtceu:moon_stone_${id.name}_ore`, `gtceu:mars_stone_${id.name}_ore`, `gtceu:venus_stone_${id.name}_ore`, `gtceu:mercury_stone_${id.name}_ore`, `gtceu:glacio_${id.name}_ore`, `gtceu:glacio_stone_${id.name}_ore`])
        })
    }
})

// Hides all but stone ore
ServerEvents.tags('item', event => {
    console.log('[1] - [3] - TAG-WATCHER')
    if (GTMaterialRegistry.getPhase() === $MRM.Phase.CLOSED || GTMaterialRegistry.getPhase() === $MRM.Phase.FROZEN) {
        GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
            event.add('c:hidden_from_recipe_viewers', [`gtceu:granite_${id.name}_ore`, `gtceu:diorite_${id.name}_ore`, `gtceu:andesite_${id.name}_ore`, `gtceu:red_granite_${id.name}_ore`, `gtceu:marble_${id.name}_ore`, `gtceu:deepslate_${id.name}_ore`, `gtceu:tuff_${id.name}_ore`, `gtceu:sand_${id.name}_ore`, `gtceu:red_sand_${id.name}_ore`, `gtceu:gravel_${id.name}_ore`, `gtceu:basalt_${id.name}_ore`, `gtceu:netherrack_${id.name}_ore`, `gtceu:blackstone_${id.name}_ore`, `gtceu:endstone_${id.name}_ore`, `gtceu:depthrock_${id.name}_ore`, `gtceu:shiverstone_${id.name}_ore`, `gtceu:sediment_${id.name}_ore`, `gtceu:holystone_${id.name}_ore`, `gtceu:mossy_holystone_${id.name}_ore`, `gtceu:icestone_${id.name}_ore`, `gtceu:moon_stone_${id.name}_ore`, `gtceu:mars_stone_${id.name}_ore`, `gtceu:venus_stone_${id.name}_ore`, `gtceu:mercury_stone_${id.name}_ore`, `gtceu:glacio_${id.name}_ore`, `gtceu:glacio_stone_${id.name}_ore`])
        })
    }
})