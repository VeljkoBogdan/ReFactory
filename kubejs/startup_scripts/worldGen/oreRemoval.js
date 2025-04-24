WorldgenEvents.remove((event) => {

    // remove ore generation
    event.removeFeatureById('underground_ores', [
        'aether:ambrosium_ore',
        'aether:zanite_ore'
    ])

    // Ad Astra
    event.removeOres(props => {
        props.blocks = [
          "ad_astra:mars_diamond_ore",
          "ad_astra:mars_ice_shard_ore",
          "ad_astra:mars_iron_ore"
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
        "ad_astra:mars_ostrum_ore"
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
        "ad_astra:mars_ostrum_ore"
      ])

})