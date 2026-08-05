const variantInSawmill2 = true; //set this to true if you want sawmill recipes (for Universal Sawmill by MehVadJukaar) that skip coating
const vanillaInSawmill2 = true; //set this to true if you want all variant woods to also be able to make vanilla ladder in sawmill (requires variantInSawmill = true)

// only Plank is required here.
const VARIANTS = [
  //--- vanilla woods ---
  { plank: 'minecraft:oak_planks', ladder: null, bookshelf: null, log: '#minecraft:oak_logs' },
  { plank: 'minecraft:spruce_planks', ladder: 'quark:spruce_ladder', bookshelf: 'quark:spruce_bookshelf', log: '#minecraft:spruce_logs' },
  { plank: 'minecraft:birch_planks', ladder: 'quark:birch_ladder', bookshelf: 'quark:birch_bookshelf', log: '#minecraft:birch_logs' },
  { plank: 'minecraft:jungle_planks', ladder: 'quark:jungle_ladder', bookshelf: 'quark:jungle_bookshelf', log: '#minecraft:jungle_logs' },
  { plank: 'minecraft:acacia_planks', ladder: 'quark:acacia_ladder', bookshelf: 'quark:acacia_bookshelf', log: '#minecraft:acacia_logs' },
  { plank: 'minecraft:dark_oak_planks', ladder: 'quark:dark_oak_ladder', bookshelf: 'quark:dark_oak_bookshelf', log: '#minecraft:dark_oak_logs' },
  { plank: 'minecraft:mangrove_planks', ladder: 'quark:mangrove_ladder', bookshelf: 'quark:mangrove_bookshelf', log: '#minecraft:mangrove_logs' },
  { plank: 'minecraft:cherry_planks', ladder: 'quark:cherry_ladder', bookshelf: 'quark:cherry_bookshelf', log: '#minecraft:cherry_logs' },
  { plank: 'minecraft:bamboo_planks', ladder: 'quark:bamboo_ladder', bookshelf: 'quark:bamboo_bookshelf', log: null }, //bamboo is weird, doesn't have a true "log"
  { plank: 'minecraft:crimson_planks', ladder: 'quark:crimson_ladder', bookshelf: 'quark:crimson_bookshelf', log: '#minecraft:crimson_stems' },
  { plank: 'minecraft:warped_planks', ladder: 'quark:warped_ladder', bookshelf: 'quark:warped_bookshelf', log: '#minecraft:warped_stems' },
  //--- quark woods ---
  { plank: 'quark:blossom_planks', ladder: 'quark:blossom_ladder', bookshelf: 'quark:blossom_bookshelf', log: '#quark:blossom_logs' },
  { plank: 'quark:ancient_planks', ladder: 'quark:ancient_ladder', bookshelf: 'quark:ancient_bookshelf', log: '#quark:ancient_logs' },
  { plank: 'quark:azalea_planks', ladder: 'quark:azalea_ladder', bookshelf: 'quark:azalea_bookshelf', log: '#quark:azalea_logs' },
  //--- ars nouveau ---
  { plank: 'ars_nouveau:archwood_planks', ladder: 'everycomp:q/ars_nouveau/archwood_ladder', bookshelf: 'everycomp:q/ars_nouveau/archwood_bookshelf', log: '#c:logs/archwood' },
  //--- everycomp ---
  //vanillabackport
  { plank: 'minecraft:pale_oak_planks', ladder: 'everycomp:q/minecraft/pale_oak_ladder', bookshelf: 'everycomp:q/minecraft/pale_oak_bookshelf', log: '#minecraft:pale_oak_logs' },
  //environmental
  { plank: 'environmental:willow_planks', ladder: 'everycomp:q/environmental/willow_ladder', bookshelf: 'everycomp:q/environmental/willow_bookshelf', log: '#environmental:willow_logs' },
  { plank: 'environmental:pine_planks', ladder: 'everycomp:q/environmental/pine_ladder', bookshelf: 'everycomp:q/environmental/pine_bookshelf', log: '#environmental:pine_logs' },
  { plank: 'environmental:plum_planks', ladder: 'everycomp:q/environmental/plum_ladder', bookshelf: 'everycomp:q/environmental/plum_bookshelf',  log: '#environmental:plum_logs' },
  { plank: 'environmental:wisteria_planks', ladder: 'everycomp:q/environmental/wisteria_ladder', bookshelf: 'everycomp:q/environmental/wisteria_bookshelf',  log: '#environmental:wisteria_logs' },
  //malum
  { plank: 'malum:soulwood_planks', ladder: 'everycomp:q/malum/soulwood_ladder', bookshelf: 'everycomp:q/malum/soulwood_bookshelf',  log: '#malum:soulwood_logs' },
  { plank: 'malum:runewood_planks', ladder: 'everycomp:q/malum/runewood_ladder', bookshelf: 'everycomp:q/malum/runewood_bookshelf', log: '#malum:runewood_logs' }
]

function removeOutput(event, output) {
  event.remove({ output: output });
}

function removeVanillaLadderSawmill(event) {
  event.remove({ output: 'minecraft:ladder', type: 'sawmill:woodcutting' });
}

function addLadderConversion(event, plankId, ladderId) {
  const safeId = ladderId.replace(':', '__');
  event.shapeless(
    ladderId,
    ['minecraft:ladder', plankId]
  ).id(`kubejs:convert_plank_to_${safeId}`);
}

function addBookshelfConversion(event, plankId, bookshelfId) {
  const safeId = bookshelfId.replace(':', '__');
  event.shapeless(
    bookshelfId,
    ['minecraft:bookshelf', plankId]
  ).id(`kubejs:convert_plank_to_${safeId}`);
}

function addPlankSawmill(event, plankId, ladderId) {
  const safeId = ladderId.replace(':', '__');
  const safePlank = plankId.replace(':', '__');
  event.custom({
    type: 'sawmill:woodcutting',
    ingredient: [
      { item: plankId }
    ],
    ingredient_count: 1,
    result: { id: ladderId, count: 1 }
  }).id(`kubejs:sawmill_${safePlank}_to_${safeId}`);
}

function addLogSawmill(event, logId, ladderId) {
  const safeId = ladderId.replace(':', '__');
  const logIdWithoutHash = logId.replace('#', '');
  const safeLogId = logIdWithoutHash.replace(':', '__')
  event.custom({
    type: 'sawmill:woodcutting',
    ingredient: [
      { tag: logIdWithoutHash }
    ],
    ingredient_count: 1,
    result: { id: ladderId, count: 4 }
  }).id(`kubejs:sawmill_${safeLogId}_to_${safeId}`);
}

ServerEvents.recipes(event => {
  removeOutput(event, 'minecraft:ladder');
  removeOutput(event, 'minecraft:bookshelf');

  if (variantInSawmill2) {
    removeVanillaLadderSawmill(event);
  }

  //now add conversions for variants
  for (const entry of VARIANTS) {
    if (entry.ladder) { //if ladder is not null
      removeOutput(event, entry.ladder);
      addLadderConversion(event, entry.plank, entry.ladder);
      if (variantInSawmill2) {
        addPlankSawmill(event, entry.plank, entry.ladder);
        if(entry.log){
          addLogSawmill(event, entry.log, entry.ladder);
        }
        if (vanillaInSawmill2) {
          addPlankSawmill(event, entry.plank, 'minecraft:ladder')
          if(entry.log){
            addLogSawmill(event, entry.log, 'minecraft:ladder');
          }
        }
      }
    }
    if (entry.bookshelf) { //if bookshelf is not null
      removeOutput(event, entry.bookshelf);
      addBookshelfConversion(event, entry.plank, entry.bookshelf);
    }

  }

  //add back regular recipes (quark disables them with "quark_vdo" datapacks)
  event.shaped(
    Item.of('minecraft:ladder', 3),
    [
      'P P',
      'PPP',
      'P P'
    ],
    { P: 'minecraft:stick' }
  ).id('kubejs:ladder_from_sticks');

  event.shaped(
    Item.of('minecraft:bookshelf', 1),
    [
      'PPP',
      'BBB',
      'PPP'
    ],
    { P: '#minecraft:planks', B: 'minecraft:book'}
  ).id('kubejs:bookshelf');
})
