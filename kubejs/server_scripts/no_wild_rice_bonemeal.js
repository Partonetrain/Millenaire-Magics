BlockEvents.rightClicked(event => {
  const player = event.player;
  const item = event.item;
  const block = event.block;

  //player.tell(Text.literal(item.id));
  //player.tell(Text.literal(block.id));

  if(block.id === "farmersdelight:wild_rice" && item.id === "minecraft:bone_meal") {
    player.tell(Text.literal("Try as you might to fertilize wild rice, nothing seems to come of it. You will need to learn how to plant it properly from someone who knows.").italic(true));
    item.shrink(1);
    event.cancel();
  }
});