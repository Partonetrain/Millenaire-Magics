//script for disabling items
const DISABLED_ITEMS = [
    'quark:thatch',
    'quark:thatch_stairs',
    'quark:thatch_slab',
    'quark:thatch_vertical_slab',

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
    'constructionstick:template_battery',

    'ars_additions:golden_chain',

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
    'supplementaries:timber_cross_brace',
    
    'quark:dirt_bricks',
    'quark:dirt_bricks_slab',
    'quark:dirt_bricks_stairs',
    'quark:dirt_bricks_vertical_slab',
    'quark:dirt_bricks_wall',

    'abnormals_delight:adzuki_cake_slice',
    'abnormals_delight:vanilla_cake_slice',
    'abnormals_delight:banana_cake_slice',
    'abnormals_delight:cherry_cream_soda',
    'abnormals_delight:banana_cake_slice',
    'abnormals_delight:cooked_perch_slice',
    'abnormals_delight:perch_slice',
    'abnormals_delight:perch_with_mushrooms',
    'abnormals_delight:chocolate_cake_slice',
    'abnormals_delight:strawberry_cake_slice',
    'abnormals_delight:mint_cake_slice',
    'abnormals_delight:escargot',
    'abnormals_delight:maple_cookie',
    'abnormals_delight:maple_glazed_bacon',
    'abnormals_delight:mulberry_cookie',
    'abnormals_delight:pike_with_beetroot',
    'abnormals_delight:cooked_pike_slice',
    'abnormals_delight:pike_slice',
    'abnormals_delight:pickerelweed_juice',
    'abnormals_delight:necromium_knife',
    'abnormals_delight:silver_knife',
    'abnormals_delight:driftwood_cabinet',
    'abnormals_delight:poise_cabinet',
    'abnormals_delight:river_cabinet',

    'pet_vault:keepers_magnifier',
    'pet_vault:golden_bone'
    
]

//use EveryCompat versions, these are not meant to exist unless WoodWorks is installed (which it isn't here).
const REMOVED_CHESTS = [
  'environmental:willow_chest',
  'environmental:pine_chest',
  'environmental:plum_chest',
  'environmental:wisteria_chest',
  'atmospheric:rosewood_chest',
  'atmospheric:morado_chest',
  'atmospheric:yucca_chest',
  'atmospheric:laurel_chest',
  'atmospheric:aspen_chest',
  'atmospheric:kousa_chest',
  'atmospheric:grimwood_chest'
]
const REMOVED_TRAPPED = [
  'environmental:trapped_willow_chest',
  'environmental:trapped_pine_chest',
  'environmental:trapped_plum_chest',
  'environmental:trapped_wisteria_chest',
  'atmospheric:trapped_rosewood_chest',
  'atmospheric:trapped_morado_chest',
  'atmospheric:trapped_yucca_chest',
  'atmospheric:trapped_laurel_chest',
  'atmospheric:trapped_aspen_chest',
  'atmospheric:trapped_kousa_chest',
  'atmospheric:trapped_grimwood_chest'
]
const REMOVED_BOOKSHELVES = [
  'environmental:willow_bookshelf',
  'environmental:pine_bookshelf',
  'environmental:plum_bookshelf',
  'environmental:wisteria_bookshelf',
  'atmospheric:rosewood_bookshelf',
  'atmospheric:morado_bookshelf',
  'atmospheric:yucca_bookshelf',
  'atmospheric:laurel_bookshelf',
  'atmospheric:aspen_bookshelf',
  'atmospheric:kousa_bookshelf',
  'atmospheric:grimwood_bookshelf'
]

const DISABLED_ADVANCEMENTS = [
    'minecraft:adventure/trade',
    'minecraft:adventure/trade_at_world_height',
    'minecraft:adventure/voluntary_exile',
    'minecraft:adventure/hero_of_the_village',
    'minecraft:story/cure_zombie_villager',
    'dmr:find_hybrid' //not getting disabled. this is a weird one.
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

    for (const entry of REMOVED_CHESTS) {
        event.remove('c:chests/wooden', entry)
        event.remove('c:chests', entry)
        event.remove('blueprint:wooden_chests', entry)
        addToHiddenTag(event, entry)
        //console.info("untagged chest" + entry)
    }
    
    for (const entry of REMOVED_TRAPPED) {
        event.remove('c:chests/trapped', entry)
        event.remove('c:chests/wooden', entry)
        event.remove('c:chests', entry)
        event.remove('blueprint:wooden_trapped_chests', entry)
        addToHiddenTag(event, entry)
        //console.info("untagged trapped " + entry)
    }

    for (const entry of REMOVED_BOOKSHELVES) {
        event.remove('c:bookshelves', entry)
        event.remove('blueprint:wooden_bookshelves', entry)
        addToHiddenTag(event, entry)
    }
})

ServerEvents.generateData('after_mods', event => {
    const disable = (path, type) => event.json(`${ID.namespace(path)}:${type ? `${type}/` : ''}${ID.path(path)}`, { 'neoforge:conditions': [{ type: 'neoforge:false' }] });

    DISABLED_ADVANCEMENTS.forEach(id => disable(id, 'advancement'));
});
