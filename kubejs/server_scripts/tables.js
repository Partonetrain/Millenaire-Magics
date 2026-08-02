LootJS.lootTables(event => {
    //villages are disabled, so remove every village chest loot table
    event.clearLootTables(/.*village.*/)
    event.clearLootTables(/.*igloo.*/)
    event.clearLootTables(/.*woodland_mansion.*/)
    
    event.clearLootTables(/.*trains_tweaks:demo.*/)
    event.clearLootTables(/.*quark:demo.*/)
    
    //not enough trials has its own reward loot tables, remove vanilla rewards
    event.clearLootTables("minecraft:chests/trial_chambers/reward")
    event.clearLootTables("minecraft:chests/trial_chambers/reward_common")
    event.clearLootTables("minecraft:chests/trial_chambers/reward_rare")
    event.clearLootTables("minecraft:chests/trial_chambers/reward_unique")
    event.clearLootTables("minecraft:chests/trial_chambers/reward_ominous")
    event.clearLootTables("minecraft:chests/trial_chambers/reward_ominous_common")
    event.clearLootTables("minecraft:chests/trial_chambers/reward_ominous_rare")
    event.clearLootTables("minecraft:chests/trial_chambers/reward_ominous_unique")
    event.clearLootTables("minecraft:chests/trial_chambers/intersection")
    event.clearLootTables("minecraft:pots/trial_chambers/corridor")
    
})