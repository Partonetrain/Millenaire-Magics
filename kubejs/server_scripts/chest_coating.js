const variantInSawmill = true; //set this to true if you want sawmill recipes (for Universal Sawmill by MehVadJukaar) that skip coating
const vanillaInSawmill = true; //set this to true if you want all variant woods to also be able to make vanilla chest in sawmill (requires variantInSawmill = true)

// ---------------------------------------------------------------------------
// Add an entry for each variant chest you want to be handled by this script.
//   chest (required): variant chest item ID
//   plank (optional): plank item ID, enables the 1 chest + 1 plank -> 1 chest recipe
//   log (optional): log tag ID, enables the 4 chests + 1 log -> 4 chests recipe
// optional ingredient is null = no recipe
//
const VARIANT_CHESTS = [
  //--- vanilla woods ---
  { chest: 'quark:oak_chest', plank: 'minecraft:oak_planks', log: '#minecraft:oak_logs' },
  { chest: 'quark:spruce_chest', plank: 'minecraft:spruce_planks', log: '#minecraft:spruce_logs' },
  { chest: 'quark:birch_chest', plank: 'minecraft:birch_planks', log: '#minecraft:birch_logs' },
  { chest: 'quark:jungle_chest', plank: 'minecraft:jungle_planks', log: '#minecraft:jungle_logs' },
  { chest: 'quark:acacia_chest', plank: 'minecraft:acacia_planks', log: '#minecraft:acacia_logs' },
  { chest: 'quark:dark_oak_chest', plank: 'minecraft:dark_oak_planks', log: '#minecraft:dark_oak_logs' },
  { chest: 'quark:mangrove_chest', plank: 'minecraft:mangrove_planks', log: '#minecraft:mangrove_logs' },
  { chest: 'quark:cherry_chest', plank: 'minecraft:cherry_planks', log: '#minecraft:cherry_logs' },
  { chest: 'quark:bamboo_chest', plank: 'minecraft:bamboo_planks', log: null }, //bamboo is weird, doesn't have a true "log"
  { chest: 'quark:crimson_chest', plank: 'minecraft:crimson_planks', log: '#minecraft:crimson_stems' },
  { chest: 'quark:warped_chest', plank: 'minecraft:warped_planks', log: '#minecraft:warped_stems' },
  //--- quark woods ---
  { chest: 'quark:blossom_chest', plank: 'quark:blossom_planks', log: '#quark:blossom_logs' },
  { chest: 'quark:ancient_chest', plank: 'quark:ancient_planks', log: '#quark:ancient_logs' },
  { chest: 'quark:azalea_chest', plank: 'quark:azalea_planks', log: '#quark:azalea_logs' },
  //--- ars nouveau ---
  { chest: 'ars_nouveau:archwood_chest', plank: 'ars_nouveau:archwood_planks', log: '#c:logs/archwood' },
  //--- everycomp ---
  //vanillabackport
  { chest: 'everycomp:q/minecraft/pale_oak_chest', plank: 'minecraft:pale_oak_planks', log: '#minecraft:pale_oak_logs' },
  //environmental
  { chest: 'everycomp:q/environmental/willow_chest', plank: 'environmental:willow_planks', log: '#environmental:willow_logs' },
  { chest: 'everycomp:q/environmental/pine_chest', plank: 'environmental:pine_planks', log: '#environmental:pine_logs' },
  { chest: 'everycomp:q/environmental/plum_chest', plank: 'environmental:plum_planks', log: '#environmental:plum_logs' },
  { chest: 'everycomp:q/environmental/wisteria_chest', plank: 'environmental:wisteria_planks', log: '#environmental:wisteria_logs' },
  //atmospheric
  { chest: 'everycomp:q/atmospheric/rosewood_chest', plank: 'atmospheric:rosewood_planks', log: '#atmospheric:rosewood_logs' },
  { chest: 'everycomp:q/atmospheric/morado_chest', plank: 'atmospheric:morado_planks', log: '#atmospheric:morado_logs' },
  { chest: 'everycomp:q/atmospheric/yucca_chest', plank: 'atmospheric:yucca_planks', log: '#atmospheric:yucca_logs' },
  { chest: 'everycomp:q/atmospheric/laurel_chest', plank: 'atmospheric:laurel_planks', log: '#atmospheric:laurel_logs' },
  { chest: 'everycomp:q/atmospheric/aspen_chest', plank: 'atmospheric:aspen_planks', log: '#atmospheric:aspen_logs' },
  { chest: 'everycomp:q/atmospheric/kousa_chest', plank: 'atmospheric:kousa_planks', log: '#atmospheric:kousa_logs' },
  { chest: 'everycomp:q/atmospheric/grimwood_chest', plank: 'atmospheric:grimwood_planks', log: '#atmospheric:grimwood_logs' },
  //malum
  { chest: 'everycomp:q/malum/soulwood_chest', plank: 'malum:soulwood_planks', log: '#malum:soulwood_logs' },
  { chest: 'everycomp:q/malum/runewood_chest', plank: 'malum:runewood_planks', log: '#malum:runewood_logs' }
]

function removeVariantChestRecipes(event, chestId) {
  event.remove({ output: chestId });
}

function removeVanillaChestSawmill(event) {
  event.remove({ output: 'minecraft:chest', type: 'sawmill:woodcutting' });
}

function addPlankConversion(event, plankId, chestId) {
  const safeId = chestId.replace(':', '__');
  event.shapeless(
    chestId,
    ['minecraft:chest', plankId]
  ).id(`kubejs:convert_plank_to_${safeId}`);
}

function addLogConversion(event, logId, chestId) {
  const safeId = chestId.replace(':', '__');
  event.shapeless(
    Item.of(chestId, 4),
    [
      'minecraft:chest',
      'minecraft:chest',
      'minecraft:chest',
      'minecraft:chest',
      logId
    ]
  ).id(`kubejs:convert_log_to_${safeId}`);
}

//8 planks->1 chest
function addPlankSawmill(event, plankId, chestId) {
  const safeId = chestId.replace(':', '__');
  const safePlank = plankId.replace(':', '__');
  event.custom({
    type: 'sawmill:woodcutting',
    group: 'planks',
    ingredient: [
      { item: plankId }
    ],
    ingredient_count: 8,
    result: { id: chestId, count: 1 }
  }).id(`kubejs:sawmill_${safePlank}_to_${safeId}`);
}

//2 logs->1 chest
function addLogSawmill(event, logId, chestId) {
  const safeId = chestId.replace(':', '__');
  const logIdWithoutHash = logId.replace('#', '');
  const safeLogId = logIdWithoutHash.replace(':', '__')
  event.custom({
    type: 'sawmill:woodcutting',
    group: 'logs',
    ingredient: [
      { tag: logIdWithoutHash }
    ],
    ingredient_count: 2,
    result: { id: chestId, count: 1 }
  }).id(`kubejs:sawmill_${safeLogId}_to_${safeId}`);
}

ServerEvents.recipes(event => {
  //add back regular chest recipes (quark disables them with "quark_vdo_variant_chests" datapack)
  event.shaped(
    'minecraft:chest',
    [
      'PPP',
      'P P',
      'PPP'
    ],
    { P: '#minecraft:planks' }
  ).id('kubejs:chest_from_planks')
  event.shaped(
    Item.of('minecraft:chest', 4),
    [
      'PPP',
      'P P',
      'PPP'
    ],
    { P: '#minecraft:logs' }
  ).id('kubejs:chest_from_logs');

  if (variantInSawmill) {
    removeVanillaChestSawmill(event);
  }

  //now add conversions for variant chests
  for (const entry of VARIANT_CHESTS) {
    removeVariantChestRecipes(event, entry.chest);
    if (entry.plank) { //if plank is not null
      if (variantInSawmill) {
        addPlankSawmill(event, entry.plank, entry.chest);
        if (vanillaInSawmill) {
          addPlankSawmill(event, entry.plank, 'minecraft:chest')
        }
      }
      addPlankConversion(event, entry.plank, entry.chest);
    }
    if (entry.log) { //if log is not null
      if (variantInSawmill) {
        addLogSawmill(event, entry.log, entry.chest);
        if (vanillaInSawmill) {
          addLogSawmill(event, entry.log, 'minecraft:chest')
        }
      }
      addLogConversion(event, entry.log, entry.chest);
    }

  }
})