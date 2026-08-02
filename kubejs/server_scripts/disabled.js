//script for disabling items
const DISABLED_ITEMS = [
    'quark:beetroot_crate',
    'quark:potato_crate',
    'quark:carrot_crate',
    'quark:rope',
    'arsdelight:source_berry_crate',
    'ars_additions:golden_lantern',
    'minecraft:emerald_block',
    '#c:ores/emerald',
    'minecraft:emerald',
    'grimoireofgaia:emerald_shard',
    'gag:no_solicitors',
    'cosmeticarmoursmod:emerald_crown_helmet',
    'cosmeticarmoursmod:emerald_adorned_tiara_helmet',
    'ars_nouveau:ritual_challenge',
    'cosmeticarmoursmod:diamond_shard',
    'functionalstorage:water_generator_upgrade',
    'functionalstorage:dripping_upgrade',
    'functionalstorage:obsidian_upgrade',
    'everycomp:fd/ars_nouveau/archwood_cabinet',
    'starbunclemania:star_balloon',
    'starbunclemania:star_battery',

    'blockbox:granite_bricks',
    'blockbox:granite_brick_stairs',
    'blockbox:granite_brick_slab',
    'blockbox:granite_brick_wall',
    'blockbox:diorite_bricks',
    'blockbox:andesite_brick_stairs',
    'blockbox:andesite_brick_slab',
    'blockbox:andesite_brick_wall',
    'blockbox:andesite_bricks',
    'blockbox:andesite_brick_stairs',
    'blockbox:andesite_brick_slab',
    'blockbox:andesite_brick_wall',
    'blockbox:sandstone_bricks',
    'blockbox:sandstone_brick_stairs',
    'blockbox:sandstone_brick_slab',
    'blockbox:red_sandstone_bricks',
    'blockbox:red_sandstone_brick_stairs',
    'blockbox:red_sandstone_brick_slab',
    'blockbox:snow_bricks',
    'blockbox:snow_brick_slab',
    'blockbox:snow_brick_stairs',
    'blockbox:snow_brick_wall',
    'blockbox:golden_bars',

    'cosmeticarmoursmod:potion_1',
    'cosmeticarmoursmod:potion_2',
    'cosmeticarmoursmod:potion_3',
    'cosmeticarmoursmod:potion_4',
    'cosmeticarmoursmod:potion_5',
    'cosmeticarmoursmod:potion_6',
    'cosmeticarmoursmod:potion_7',
    'cosmeticarmoursmod:potion_angelic_precursor',
    'cosmeticarmoursmod:potion_angelic_precursor_1',
    'cosmeticarmoursmod:potion_angelic_precursor_2',
    'cosmeticarmoursmod:potion_angelic_precursor_3',
    'cosmeticarmoursmod:potion_angelic_precursor_4',
    'cosmeticarmoursmod:potion_angelic_precursor_5',
    'cosmeticarmoursmod:potion_angelic_precursor_6',
    'cosmeticarmoursmod:potion_angelic_precursor_7',
    'cosmeticarmoursmod:potion_corrupted_precursor',

    'music_disc_maker:music_disc_maker',
    'music_disc_maker:blank_disc',

    'farmersdelight:rice_bale',
    'farmersdelight:rice',
    'farmersdelight:rice_panicle',

    'bibliocraft:lock_and_key',
    'bibliocraft:stockroom_catalog',
    'bibliocraft:cookie_jar',

    'supplementaries:lapis_bricks',
    'supplementaries:lapis_bricks_stairs',
    'supplementaries:lapis_bricks_slab',
    'supplementaries:lapis_bricks_wall',
    'supplementaries:gold_bars',
    'supplementaries:timber_frame',
    'supplementaries:timber_brace',
    'supplementaries:timber_cross_brace'
    

    
]

const DISABLED_ADVANCEMENTS = [
    'minecraft:adventure/trade',
    'minecraft:adventure/trade_at_world_height',
    'minecraft:adventure/voluntary_exile',
    'minecraft:adventure/hero_of_the_village',
    'minecraft:story/cure_zombie_villager',
    'dmr:find_hybrid'
]

function removeFromCrafting(event, itemId){
    event.remove({ output: itemId })
}

function addToHiddenTag(event, itemId){
    event.add('c:hidden_from_recipe_viewers', itemId)
}

ServerEvents.recipes(event => {
    for (const itemId of DISABLED_ITEMS) {
        removeFromCrafting(event, itemId)
    }
})

ServerEvents.tags('item', event => {
    for (const itemId of DISABLED_ITEMS) {
        addToHiddenTag(event, itemId)
    }
})

ServerEvents.generateData('after_mods', event => {
    const disable = (path, type) => event.json(`${ID.namespace(path)}:${type ? `${type}/` : ''}${ID.path(path)}`, { 'neoforge:conditions': [{ type: 'neoforge:false' }] });

    DISABLED_ADVANCEMENTS.forEach(id => disable(id, 'advancement'));
});
