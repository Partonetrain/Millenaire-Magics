ItemEvents.modifyTooltips(event => {
  console.info('tooltips.js running')
  event.add(['#incapacitated:adrenaline_food'], Text.blue('Adrenaline Food'))

  event.add(['icarus:zanzas_wings'], Text.blue('Secret Wings')) 
  event.add(['icarus:zanzas_wings'], Text.gray('Free Gliding'))
  event.add(['minecraft:debug_stick'], Text.blue('Secret Crafting Component'))

  event.add(['ars_artillery:tier_2_upgrade'], Text.blue("Slap into Tier 1 autoturret"))
  event.add(['ars_artillery:tier_3_upgrade'], Text.blue("Slap into Tier 2 autoturret"))

  event.add(['grimoireofgaia:taproot'], Text.blue("Clears Harmful Effects"))
  event.add(['minecraft:honey_bottle'], Text.blue("Cures Poison"))
  event.add(['minecraft:milk_bucket'], Text.blue("Cures Most Effects"))
  event.add(['millenaire:oliveoil'], Text.blue("Cures All Effects"))

  event.add(['ars_nouveau:ritual_flight'], Text.red("Cannot fly in certain dimensions until certain advancements are unlocked"))

  Ingredient.of("#c:hidden_from_recipe_viewers").itemIds.forEach(itemId => {
    if(itemId === 'millenaire:inuittrident' ||
       itemId === 'millenaire:byzantine_mace' ||
       itemId === 'millenaire:mayan_mace'){

      event.add(itemId, Text.red("Millenaire version of item. Will be transformed to Cle version upon putting it in your inventory."))
    }
    else if(itemId !=='malum:geas' && 
      itemId !== 'minecraft:debug_stick' && 
      itemId !== 'icarus:zanzas_wings' && 
      itemId !== 'grimoireofgaia:projectile_random_magic' && 
      itemId !== 'supplementaries:jar_boat' ){
      //geas is only in the tag since it's not meant to be an item, but it does show up in the curios inventory
      event.add(itemId, Text.darkRed("DISABLED ITEM"))
    }
  })

  console.info('tooltips.js finished')
})