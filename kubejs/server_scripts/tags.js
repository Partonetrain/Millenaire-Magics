ServerEvents.tags('item', event => {
    event.removeAll('icarus:diamonds_and_emeralds');
    event.removeAll('c:villager_job_sites');
    event.removeAll('icarus:wing_repair_items');
});

ServerEvents.tags('block', event => {
    event.removeAll('c:villager_job_sites');
});

//villager trades are gone, we don't need this tag
ServerEvents.tags('enchantment', event => {
    event.removeAll('minecraft:tradeable');
});