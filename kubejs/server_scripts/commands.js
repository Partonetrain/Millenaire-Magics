ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  
  event.register(Commands.literal('debugchests')
    .requires(source => source.hasPermission(2))
    .executes(ctx => debugchests(ctx.source.player))
    .then(Commands.argument('target', Arguments.PLAYER.create(event))
      .executes(ctx => debugchests(Arguments.PLAYER.getResult(ctx, 'target')))
    )
  )
  
  event.register(Commands.literal('wip')
    .requires(source => source.hasPermission(0))
    .executes(ctx => wip(ctx.source.player))
    .then(Commands.argument('target', Arguments.PLAYER.create(event))
      .executes(ctx => wip(Arguments.PLAYER.getResult(ctx, 'target')))
    )
  )
  
  const debugchests = (player) => {
    const e1 = 'minecraft:barrel[container=[{item:{count:1,id:"environmental:willow_chest"},slot:0},{item:{count:1,id:"environmental:trapped_willow_chest"},slot:1},{item:{count:1,id:"everycomp:q/environmental/willow_chest"},slot:2},{item:{count:1,id:"everycomp:q/environmental/trapped_willow_chest"},slot:3},{item:{count:1,id:"environmental:trapped_wisteria_chest"},slot:5},{item:{count:1,id:"environmental:wisteria_chest"},slot:6},{item:{count:1,id:"everycomp:q/environmental/wisteria_chest"},slot:7},{item:{count:1,id:"everycomp:q/environmental/trapped_wisteria_chest"},slot:8},{item:{count:1,id:"environmental:pine_chest"},slot:9},{item:{count:1,id:"environmental:trapped_pine_chest"},slot:10},{item:{count:1,id:"everycomp:q/environmental/pine_chest"},slot:11},{item:{count:1,id:"everycomp:q/environmental/trapped_pine_chest"},slot:12},{item:{count:1,id:"environmental:plum_chest"},slot:18},{item:{count:1,id:"environmental:trapped_plum_chest"},slot:19},{item:{count:1,id:"everycomp:q/environmental/plum_chest"},slot:20},{item:{count:1,id:"everycomp:q/environmental/trapped_plum_chest"},slot:21}]]'
    const a1 = 'minecraft:barrel[container=[{item:{count:1,id:"atmospheric:rosewood_chest"},slot:0},{item:{count:1,id:"atmospheric:trapped_rosewood_chest"},slot:1},{item:{count:1,id:"everycomp:q/atmospheric/rosewood_chest"},slot:2},{item:{count:1,id:"everycomp:q/atmospheric/trapped_rosewood_chest"},slot:3},{item:{count:1,id:"atmospheric:laurel_chest"},slot:5},{item:{count:1,id:"atmospheric:trapped_laurel_chest"},slot:6},{item:{count:1,id:"everycomp:q/atmospheric/laurel_chest"},slot:7},{item:{count:1,id:"everycomp:q/atmospheric/trapped_laurel_chest"},slot:8},{item:{count:1,id:"atmospheric:morado_chest"},slot:9},{item:{count:1,id:"atmospheric:trapped_morado_chest"},slot:10},{item:{count:1,id:"everycomp:q/atmospheric/morado_chest"},slot:11},{item:{count:1,id:"everycomp:q/atmospheric/trapped_morado_chest"},slot:12},{item:{count:1,id:"atmospheric:trapped_aspen_chest"},slot:14},{item:{count:1,id:"atmospheric:aspen_chest"},slot:15},{item:{count:1,id:"everycomp:q/atmospheric/aspen_chest"},slot:16},{item:{count:1,id:"everycomp:q/atmospheric/trapped_aspen_chest"},slot:17},{item:{count:1,id:"atmospheric:yucca_chest"},slot:18},{item:{count:1,id:"atmospheric:trapped_yucca_chest"},slot:19},{item:{count:1,id:"everycomp:q/atmospheric/yucca_chest"},slot:20},{item:{count:1,id:"everycomp:q/atmospheric/trapped_yucca_chest"},slot:21},{item:{count:1,id:"atmospheric:kousa_chest"},slot:23},{item:{count:1,id:"atmospheric:trapped_kousa_chest"},slot:24},{item:{count:1,id:"everycomp:q/atmospheric/kousa_chest"},slot:25},{item:{count:1,id:"everycomp:q/atmospheric/trapped_kousa_chest"},slot:26}]]'
    const a2 = 'minecraft:barrel[container=[{item:{count:1,id:"atmospheric:grimwood_chest"},slot:0},{item:{count:1,id:"atmospheric:trapped_grimwood_chest"},slot:1},{item:{count:1,id:"everycomp:q/atmospheric/grimwood_chest"},slot:2},{item:{count:1,id:"everycomp:q/atmospheric/trapped_grimwood_chest"},slot:3}]]'
    
    player.give(e1)
    player.give(a1)
    player.give(a2)
    
    return 1
  }

  const wip = (player) => {
    player.tell('Hi! This is a note from the developer of Millenaire Magics, Partonetrain. Here is a summary of changes to watch out for.')
    player.tell('- Millenaire culture-to-biome distribution is currently the default. This will change in the future to better distribute the cultures. This should only affect new villages.')
    player.tell('- Malum is currently recieving a major rework. I don\'t know the details, but the rework could potentially remove items. Keep this in mind while progressing in it.')
    player.tell('- YAFDA\s cultural knives are currently not buyable, this can be fixed but it depends on Millenaire.')
    player.tell('- Millenaire structures may have disabled blocks in them currently, this is going to be fixed later.')

    return 1
  }
})