ServerEvents.tags('item', event => {
    event.removeAll('icarus:diamonds_and_emeralds');
    event.removeAll('c:villager_job_sites');
    event.removeAll('icarus:wing_repair_items');
    event.removeAll('trains_tweaks:villager_wants');
    event.removeAll('minecraft:villager_plantable_seeds');
});

ServerEvents.tags('block', event => {
    event.removeAll('c:villager_job_sites');
});

//villager trades are gone, we don't need this tag
ServerEvents.tags('enchantment', event => {
    event.removeAll('minecraft:tradeable');
});

//lunge is disabled
ServerEvents.tags('enchantment', event => {
  const ids = [
    'minecraft:non_treasure',
    'minecraft:on_mob_spawn_equipment',
    'minecraft:on_traded_equipment',
    'minecraft:on_random_loot',
    'minecraft:in_enchanting_table'
  ]
  ids.forEach(tag => event.remove(tag, 'minecraft:lunge'))
})