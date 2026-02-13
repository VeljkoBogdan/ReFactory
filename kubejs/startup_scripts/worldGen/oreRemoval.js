WorldgenEvents.remove((event) => {

    // remove ore generation
    event.removeFeatureById('underground_ores', [
        'aether:ambrosium_ore',
        'aether:zanite_ore',
        'thermal:niter_ore',
        'thermal:deepslate_niter_ore'
    ])

    // Ad Astra
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:venus_calorite_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_gold_ore",
            'undergarden:depthrock_coal_ore',
            'undergarden:shiverstone_coal_ore',
            'undergarden:depthrock_iron_ore',
            'undergarden:shiverstone_iron_ore',
            'undergarden:depthrock_gold_ore',
            'undergarden:depthrock_diamond_ore',
            'undergarden:shiverstone_diamond_ore',
            'undergarden:depthrock_cloggrum_ore',
            'undergarden:shiverstone_cloggrum_ore',
            'undergarden:shiverstone_froststeel_ore',
            'undergarden:depthrock_utherium_ore',
            'undergarden:shiverstone_utherium_ore',
            'undergarden:depthrock_regalium_ore',
            'undergarden:shiverstone_regalium_ore'
        ]
    })

    event.removeFeatureById('raw_generation', [
        'ad_astra:moon_iron_ore',
        'ad_astra:deepslate_desh_ore',
        'ad_astra:moon_desh_ore',
        'ad_astra:moon_cheese_ore',
        'ad_astra:moon_ice_shard_ore',
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        "ad_astra:mercury_iron_ore",
        "ad_astra:venus_calorite_ore",
        "ad_astra:venus_coal_ore",
        "ad_astra:venus_diamond_ore",
        "ad_astra:venus_gold_ore"
    ])
    
    event.removeFeatureById('underground_ores', [
        'ad_astra:moon_iron_ore',
        'ad_astra:deepslate_desh_ore',
        'ad_astra:moon_desh_ore',
        'ad_astra:moon_cheese_ore',
        'ad_astra:moon_ice_shard_ore',
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        "ad_astra:mercury_iron_ore",
        "ad_astra:venus_calorite_ore",
        "ad_astra:venus_coal_ore",
        "ad_astra:venus_diamond_ore",
        "ad_astra:venus_gold_ore",
        'undergarden:depthrock_coal_ore',
        'undergarden:shiverstone_coal_ore',
        'undergarden:depthrock_iron_ore',
        'undergarden:shiverstone_iron_ore',
        'undergarden:depthrock_gold_ore',
        'undergarden:depthrock_diamond_ore',
        'undergarden:shiverstone_diamond_ore',
        'undergarden:depthrock_cloggrum_ore',
        'undergarden:shiverstone_cloggrum_ore',
        'undergarden:shiverstone_froststeel_ore',
        'undergarden:depthrock_utherium_ore',
        'undergarden:shiverstone_utherium_ore',
        'undergarden:depthrock_regalium_ore',
        'undergarden:shiverstone_regalium_ore'
    ])

    event.removeFeatureById('underground_decoration', [
        'minecraft:ore_ancient_debris_large',
        'minecraft:ore_debris_small'
    ])

})