const ITEM_CONVERSIONS = [
  { inputId: "millenaire:denier", inputCount: 64, outputId: "millenaire:denier_argent", outputCount: 1 },
  { inputId: "millenaire:denier_argent", inputCount: 1, outputId: "millenaire:denier", outputCount: 64 },
  { inputId: "millenaire:denier_argent", inputCount: 64, outputId: "millenaire:denier_or", outputCount: 1 },
  { inputId: "millenaire:denier_or", inputCount: 1, outputId: "millenaire:denier_argent", outputCount: 64 },


  { inputId: "minecraft:copper_spear", inputCount: 1, outputId: "minecraft:copper_ingot", outputCount: 1 }

  
];

//comparators used to determine best conversion
function matchesItem(itemId, count) {
  return e => e.inputId === itemId && e.inputCount <= count;
}

function byHighestCount(a, b) {
  return b.inputCount - a.inputCount;
}

ItemEvents.rightClicked(event => {
  const player = event.player;
  const item = event.item;

  //don't try to convert nothing
  if (!item || item.isEmpty()) return;

  const itemId = item.id;
  const entry = ITEM_CONVERSIONS
  .filter(matchesItem(item.id, item.count))
  //filter all conversions for this item where the player has at least the amount in the inputCount
  .sort(byHighestCount)[0];
  //sort descending by inputCount so the largest input count is at pos 0
  //then use pos 0

  //don't try to convert stacks without an entry
  if (!entry) return;

  if(item === "minecraft:copper_spear"){
    player.tell(Text.literal("You aren't supposed to have the copper spear, it is only obtainable due to a bug in VanillaBackport, so I've replaced it with a copper ingot.").italic(true));
  }

  item.shrink(entry.inputCount);
  const outputStack = Item.of(entry.outputId, entry.outputCount);
  player.swing();
  player.give(outputStack);

  //prevent vanilla logic
  event.cancel();
});