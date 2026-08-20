//for some unfathomable reason this file makes chest_coating work properly. 
//it seems having functions with the same names ensures the ingredient_count and count fields use the defined values

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
  // event.custom({
  //   type: 'sawmill:woodcutting',
  //   group: 'logs',
  //   ingredient: [
  //     { tag: 'minecraft:logs' }
  //   ],
  //   ingredient_count: 4,
  //   result: { id: 'minecraft:barrier', count: 1 }
  // }).id(`kubejs:sawmill_test_1`);
  
  // event.custom({
  //   type: 'sawmill:woodcutting',
  //   group: 'planks',
  //   ingredient: [
  //     { tag: 'minecraft:planks' }
  //   ],
  //   ingredient_count: 16,
  //   result: { id: 'minecraft:barrier', count: 8 }
  // }).id(`kubejs:sawmill_test_2`);

});