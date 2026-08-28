function grant(player, id) {
    player.server.runCommandSilent(`/advancement grant ${player.username} only ${id}`);
}

ItemEvents.rightClicked(event => {
  const player = event.player;
  const item = event.item;

  if (!item || item.isEmpty()) return;

  const itemId = item.id;
  var used = false;
  if(itemId === 'grimoireofgaia:weresheep_token'){
    var one = player.isAdvancementDone('mm:um/um_1');
    if (!player.isAdvancementDone('mm:um/um_1')) {
      grant(player, 'mm:um/um_1');
      used = true;
    }
    else if (!player.isAdvancementDone('mm:um/um_2')) {
      grant(player, 'mm:um/um_2');
      used = true;
    }
    else if (!player.isAdvancementDone('mm:um/um_3')) {
      grant(player, 'mm:um/um_3');
      used = true;
    }
    else if (!player.isAdvancementDone('mm:um/um_4')) {
      grant(player, 'mm:um/um_4');
      used = true;
    }
    //the rule of don't repeat yourself died here, RIP.
    
    if(used){
        player.swing();
        item.shrink(1);
        event.cancel();
    }
    else{
        player.server.runCommand(`/tellraw ${player.username} {"text":"You are fully upgraded! You cannot use this anymore.","color":"red"}`);
    }
    
  }
  
});