var runtimes = 0;
KubeJEIEvents.onRuntimeAvailable(event => { //KubeJEI by ZZZAnk
    runtimes++;
    console.log("onRuntimeAvailable " + runtimes)
})

RecipeViewerEvents.removeEntriesCompletely('item', event => { //native KubeJS event
    //misc jei ingredients that were added from mod code
    event.hide('dmr:dragon_armor[dmr:armor_type="netherite"]')
    event.hide('dmr:dragon_armor[dmr:armor_type="emerald"]')
    //these are added from creative menu
    event.hide('minecraft:enchanted_book[stored_enchantments={levels:{"notenoughtrials:storm_front_marker":1}}]') //this enchant is named "for functions do not use"
    event.hide('patchouli:guide_book[patchouli:book="grimoireofgaia:gaiapedia"]')
})

//info tabs
RecipeViewerEvents.addInformation('item', event => { //native KubeJS event
    Ingredient.of('#incapacitated:adrenaline_food').stacks.toArray().forEach(item => {
        if(item === 'minecraft:golden_carrot' || item === 'farmersdelight:gleaming_salad') {
            event.add(item, [
                'Can save you from being downed, but only 3 times per sleep.\nCan now be always consumed, regardless of hunger.'
            ])
        }
        else if(item === 'grimoireofgaia:golden_apple_pie'){
            event.add(item, [
                'Can save you from being downed, but only 3 times per sleep. However, it\'s probably better to cut it up into slices in a cutting board for this purpose.\n\nIs not edible when placed, unlike other pies.\n\n\n\n\nLiterally unplayable.'
            ])
        }
        else{
            event.add(item, [
                'Can save you from being downed, but only 3 times per sleep.'
            ])
        }
        //console.info('Added adrenaline food tooltip for ' + item)
    })

    //item tags of blocks
    Ingredient.of('#bibliocraft:printing_tables').stacks.toArray().forEach(item => {
        event.add(item, [
                'CANNOT duplicate enchanted books. The ability to copy and merge written books is still present.'
            ])
    })
    Ingredient.of('#morered:red_alloy_wires').stacks.toArray().forEach(item => {
        event.add(item, [
                'Can be placed on any surface, unlike redstone dust. Loses signal strength for every 2 blocks.'
            ])
    })
    Ingredient.of('#morered:colored_network_cables').stacks.toArray().forEach(item => {
        event.add(item, [
                'Only connects to red alloy wire, cables of the same color, and bundled network cables.'
            ])
    })
    Ingredient.of('#morered:bundled_network_cables').stacks.toArray().forEach(item => {
        event.add(item, [
                'Only connects to colored cables and other bundled network cables.'
            ])
    })
    Ingredient.of('#morered:redwire_posts').stacks.toArray().forEach(item => {
        event.add(item, [
                'Attachment point for Redwire Spools.'
            ])
    })
    Ingredient.of('#morered:bundled_cable_posts').stacks.toArray().forEach(item => {
        event.add(item, [
                'Attachment point for Bundled Cable Spools.'
            ])
    })

    //item tags of items
    Ingredient.of('#icarus:wings').stacks.toArray().forEach(item => {
        if(item !== 'icarus:zanzas_wings'){
            event.add(item, [
                'End-game gliding accessory. Crafting recipe must be unlocked from secret knowledge. Unlike Elytra, does not have durability, and allows for propelling itself without fireworks by pressing forwards as long as you have flight stamina remaining. However, there are still some physics restraints (you can\'t fly straight up forever).'
            ])
        }else{
            event.add(item, [
                'Unlike other wings, these do not have a limited flight time.\n\n"I am Monado. I was here at the beginning. And I will proclaim the end."'
            ])
        }
    })

    Ingredient.of('#trains_tweaks:powder_walking_armor').stacks.toArray().forEach(item => {
        event.add(item, [
            'Allows for walking on top of Powder Snow.'
        ])
    })
    
    Ingredient.of('#miscnetcompat:armor_magic_uncommon').stacks.toArray().forEach(item => {
        event.add(item, [
            'Apply to armor that has thread slots (either mage armor, or any other armor enchanted with Spellweaving) in an Alteration Table.'
        ])
    })
    
    Ingredient.of('#hyecunbound:enchantable/animal_armor').stacks.toArray().forEach(item => {
        const ench = 'Accepts enchantments on the anvil or Enchanting Apparatus.'
        if(item === 'minecraft:wolf_armor'){
            event.add(item, [
                'Mechanics have been altered from vanilla; wolf armor does not take durability damage. Instead of preventing all incoming damage, adds 11 armor points. \n'+ ench
            ])
        }
        else{
            event.add(item, [
                ench
            ])
        }
    })

    Ingredient.of('#supplementaries:candle_holders').stacks.toArray().forEach(item => {
        event.add(item, [
            'Candle Holders cannot be used to influence Matrix Enchanting.'
        ])
    })

    //items
    event.add('minecraft:painting', [
                'Lots of new, unique paintings are available! If you want to select a painting instead of having it chosen for you when placing, craft an Easel.'
            ])
    event.add('minecraft:turtle_scute', [
                'Can now be obtained from brushing adult turtles, in the same way that you can obtain Armadillo Scute.'
            ])
    event.add('environmental:truffle', [
                'Obtained by giving a pig a Golden Carrot. It might take a second to find one.'
            ])
    event.add('minecraft:bone_meal', [
                'All plants can be bone mealed, in addition to normal crops.'
            ])

    //tools
    event.add('not_enough_glyphs:spell_binder', [
                'An alternative to a Spell Book. Casts spells from the Spell Parchment and Caster Tomes found as loot. Spell Parchments casted from a Spell Binder are not consumed.'
            ])
    event.add('yigd:death_scroll', [
                'Shows you what items went into your grave and the coordinates you died at.\nThis item despawns quicker that usual if tossed.'
            ])
    event.add('ars_nouveau:potion_flask', [
                'Can be used as a flask. Automatically purifies water.'
            ])
    event.add('sereneseasons:calendar', [
                'Gives detailed information about seasons. The later in a season, the more days will be marked off in the item\'s sprite.'
            ])
    event.add('bibliocraft:clipboard', [
                'Can be attached to a wall with shift-right-click.'
            ])
    event.add('minecraft:trident', [
                'CANNOT be obtained from Drowned. Can only be obtained from boss rooms in Trial Chambers, or if you get really lucky with a Treasure Balloon.'
            ])
    event.add('minecraft:name_tag', [
                'Can be shift-right-clicked in the air to rename without an anvil.'
            ])
    event.add('gag:time_sand_pouch', [
                'Can only be crafted with sand obtained from the Sands of Time dimension. How do you get there? It\'s a secret...'
            ])
    event.add('convenientcurioscontainer:convenient_container', [
                'Stores up to a double-chests\' worth of curios and allows you to easily swap between them. Convenient!'
            ])
    event.add('thirst:terracotta_bowl', [
            'Can only be used for drinking water.'
        ])
    event.add('supplementaries:lunch_basket', [
            'Holds many foods at once. Left-click to toggle open/closed, and right click while open to eat out of. Shift-right-click while closed to place down.'
        ])
    event.add('farmersdelight:milk_bottle', [
            'Can be obtained directly from cows by right-clicking them with a glass bottle. Only stacks up to 16.'
        ])
    event.add('farmersdelight:skillet', [
            'If placed in the main hand with raw food in the off-hand, stand next to a heat source and right-click to cook on the go!'
        ])
    event.add('bibliocraft:plumb_line', [
            'Measures the number of blocks down from the block you clicked.'
        ])
    event.add('ars_nouveau:warp_scroll', [
            'Can only be used once after a location has been set - use with caution.'
        ])
    event.add('ars_nouveau:stable_warp_scroll', [
            'After a location has been set, creates a temporary, one-way portal to that location. Make sure you have a way back!\nCan be tossed into a frame of Sourcestone with Source nearby to create a permanent one-way portal.'
        ])
    event.add('ars_controle:portable_brazier_relay', [
            'Lets you carry the effects of a ritual with you. However, it is very difficult if not borderline impossible to craft, due to requiring Heart of Giga Knight, which does not have a consistent method of obtaining.'
        ])
    event.add('parcool:zipline_rope', [
            'Requires a Zipline Hook to be placed. Can be dyed in a crafting table like leather armor.'
        ])
    event.add('morered:redwire_spool', [
            'Connects to Redwire Posts for long-distance redstone signal transfer.'
        ])
    event.add('morered:bundled_cable_spool', [
            'Connects to Bundled Cable Posts for long-distance networked redstone signal transfer.'
        ])
    event.add('supplementaries:lumisene_bucket', [
            'Does not work like other fluids; spreads out and cannot be picked back up again. Also, very prone to being ignited, so be careful.'
        ])
    event.add('akashictome:tome', [
            'Can be crafted together guide books to add them to the tome. This way you don\'t have to carry around a bunch of guide books. Right-click to select a book, and left-click after to return to the Tome. \nYou should have spawned with one containing every guidebook.'
        ])
    event.add('supplementaries:soap', [
            'Can be crafted together with dyed items (or used on dyed blocks) to remove dye. This consumes the soap.\n\nYou can also eat it, but you REALLY shouldn\'t.'
        ])
    event.add('ars_artillery:tier_2_upgrade', [
            'Can be applied to autoturrets by left-clicking them. Improves autoturret health and firing speed.'
        ])
    event.add('ars_artillery:tier_3_upgrade', [
            'Can be applied to autoturrets by left-clicking them. Improves autoturret health and firing speed.'
        ])
    event.add('minecraft:fire_charge', [
            'Can be thrown, causing a fireball!'
        ])
    event.add('minecraft:snowball', [
            'Can be thrown, inflicting freeze ticks on hit entities.'
        ])
    event.add('minecraft:experience_bottle', [
            'Always gives exactly 10 points of experience.'
        ])
    event.add('atmospheric:passion_vine_coil', [
            'Can be thrown, dropping down a vine that can be climbed where it lands.'
        ])
    event.add('ars_nouveau:ritual_flight', [
            'Flight in the Overworld requires the advancement "Who\'s the Boss (Defeat a Boss Chamber)".\nFlight in the Nether requires the advancement "Withering Heights (Summon the Wither)"\nFlight in The End requires the advancement "Great View From Up Here (Levitate up 50 blocks from the attacks of a Shulker)".'
        ])
    event.add('pet_vault:pet_necklace', [
            'Holds up to 5 tamed mobs/pets. Right-click a tamed mob with it to absorb the mob into the necklace. While the locket is equipped in your Necklace slot, press B (by default) to open the radial menu, and Shift+B (by default) to dismiss all pets. \nAbsorbed mobs are bound to player data rather than the item iteself, so if you lose the locket, you don\'t need to worry.'
        ])
    event.add('pet_vault:soul_crystal', [
            'Rarely found in Valuables vaults in Trial Chambers. Applies to pets inside the Keeper\'s Locket. Once used, revives a pet every 20 minutes real-time.'
        ])
    event.add('pet_vault:life_crystal', [
            'Rarely found in Valuables vaults in Trial Chambers. Applies to pets inside the Keeper\'s Locket. Once used, heals at least 1 health every 6 seconds real-time.'
        ])
    event.add('grimoireofgaia:weresheep_token', [
            'Rarely found in Valuables vaults in Trial Chambers. Once used, adds 2 blocks to maximum Ultimine blocks, up to 16. Texture by malcolmriley, from https://github.com/malcolmriley/unused-textures (CC BY 4.0).'
        ])
    event.add('grimoireofgaia:holstaurus_token', [
            'Only used to upgrade Spawners. Texture by malcolmriley, from https://github.com/malcolmriley/unused-textures (CC BY 4.0).'
        ])
    event.add('minecraft:furnace_minecart', [
            'Now has a GUI. Fuel can be placed into it'
        ])

    
    const unconventionalEgg = ' \nThis is not a conventional spawn egg and cannot be used to change a monster spawner.'
    event.add('grimoireofgaia:spawn_trader', [
            'The Drop Trader trades rare Grimoire of Gaia drops.' + unconventionalEgg
        ])
    event.add('grimoireofgaia:spawn_creeper_girl', [
            'The Creeper Trader trades gunpowder and common mob drops.' + unconventionalEgg
        ])
    event.add('grimoireofgaia:spawn_ender_girl', [
            'The Ender Trader trades ender pearls and common mob drops.' + unconventionalEgg
        ])
    event.add('grimoireofgaia:spawn_slime_girl', [
            'The Slime Trader trades ender pearls and common mob drops.' + unconventionalEgg
        ])
    //equipment        
    event.add('quark:backpack', [
                'Can by dyed like leather armor. \nShulker boxes can now be opened from worn backpacks.'
            ])      
    event.add('grimoireofgaia:quill', [
                'Can be used to repair Slappin\' Books in an anvil.'
            ])
    event.add('ars_nouveau:alchemists_crown'  , [
            'Potions drank this way will restore thirst as usual.'
        ]) 
    event.add('cosmeticarmoursmod:turtle_armour_chestplate'  , [
            'Does not provide Water Breathing, only the helmet does.'
        ]) 
    event.add('cosmeticarmoursmod:turtle_armour_leggings'  , [
            'Does not provide Water Breathing, only the helmet does.'
        ]) 
    event.add('cosmeticarmoursmod:turtle_armour_boots'  , [
            'Does not provide Water Breathing, only the helmet does.'
        ])
    event.add('ars_additions:warp_index' , [
            'Allows you to access a (chunk-loaded) Storage Lectern remotely, as long as it is in the same dimension.'
        ]) 
    event.add('ars_additions:stabilized_warp_index' , [
            'Upgraded from the Warp Index, allows you to access a (chunk-loaded) Storage Lectern remotely, even if it\'s in a different dimension.'
        ]) 
    //blocks
    event.add('minecraft:chain', [
            'Iron chains are durable enough to link minecarts together! Shift-right-click a minecart to start linking, and then shift-right-click another to link them.'
        ])
    event.add('minecraft:sponge', [
            'Absorbs SIGNIFICANTLY more water than in vanilla.'
        ])
    event.add('quark:limestone', [
            'Spawns in large quantities under swampy biomes.'
        ])
    event.add('quark:jasper', [
            'Spawns in large quantities under sandy biomes.'
        ])
    event.add('quark:shale', [
            'Spawns in large quantities under snowy biomes.'
        ])
    event.add('minecraft:calcite', [
            'Spawns in large quantities under mountains.'
        ])
    event.add('quark:myalite', [
            'Spawns in large quantities in End Midlands, Highlands, and Barrens biomes, and also in Spiral Spires.'
        ])
    event.add('the_beyond:auroracite', [
            'Can only be walked on with Pathfinder Boots.'
        ])
    event.add('ars_nouveau:enchanting_apparatus', [
            'Has multiple functions: crafting, creating specific enchantments, and upgrading magic armor. Place it atop an Arance Core, place Arcane Pedestals/Platforms around it, place materials on them, and provide it Source from a Source Jar.'
        ])
    event.add('minecraft:cauldron', [
            'Water can be purified in a cauldron by boiling it (placing a hot block such as a Campfire underneath). Comparator output has been changed to reflect purity instead of fullness, allowing automation of water purification. Also, can be used to mix dyes together.'
        ])
    event.add('clayworks:kiln', [
            'For any item that has a Furnace recipe but not a Smoker or Blast Furnace recipe, the Kiln can be used to bake it faster than a furnace would.'
        ])
    event.add('brewinandchewin:keg', [
            'Used to brew various drinks, and even ferment certain foods. Some recipes require a certain temperature; placing hot blocks such as a Campfire adjacent to it heats it up, and placing cold blocks such as Ice cools it down.'
        ])
    event.add('brewinandchewin:ice_crate', [
            'Can be used to cool down Kegs.'
        ])
    event.add('brewinandchewin:heating_cask', [
            'Can be used to heat up Kegs.'
        ])
    event.add('supplementaries:slidy_block', [
            'Right-click a placed Sliding Block to slide it in the direction you clicked.'
        ])
    event.add('supplementaries:fodder', [
            'When placed nearby farm animals, they may eat this.'
        ])
    event.add('supplementaries:pulley_block', [
            'Once filled with any kind of rope or chain, a Turn Table or Crank can be attached to it to raise or lower the rope/chain. The block at the bottom of the rope/chain will also be moved, and this follows Slime Block rules, but not Chains Connect Blocks rules. Pulleys can only pull up to 12 non-rope/chain attached blocks at a time, but they can be combined to pull more.'
        ])
    event.add('supplementaries:faucet', [
            'Moves fluids between the block it is attached to and the block below it. Useful for things like cauldrons and jars. Can also be used to pour water onto concrete powder, dirt, or any liquid into a sponge (voiding the liquid).\nWater moved this way will retain its purity, and mixing water purities will result in the lower of the two purities.\n(All this purity stuff was a pain to get working correctly, believe me).'
        ])
    event.add('supplementaries:jar', [
            'Can hold certain items (cookies) and liquids. CANNOT hold potions.'
        ])
    event.add('supplementaries:relayer', [
            'Copies redstone signal strength from the block in front of it.'
        ])
    event.add('blockbox:carved_snow', [
            'Use a Stick on a block of Packed Snow to convert it.'
        ])
    event.add('farmersdelight:rope', [
                'Can be placed above Tomato crops to extend their growth height by 1 block.'
            ])
    event.add('supplementaries:rope', [
                'Differs from Straw Rope in that it must be attached to something, connects horizontally, and can be placed on fences.'
            ])
    event.add('the_beyond:guster', [
            'Unlike the Gust Igniter, the Autoguster automatically activates when something steps on it, cannot be placed at an angle, and sends dangerously high without applying any effects for safety. Useful if you have wings, but very dangerous otherwise.'
            ])
    event.add('morered:hexidecrubrometer', [
            'Displays redstone power level of its back side in hexadecimal (0 through F).'
            ])
    event.add('morered:soldering_table', [
            'Can be used to craft redstone gates more cost-effectively.'
            ])
    event.add('malum:weavers_workbench', [
            'Used to apply Weaves to Malum armors.'
            ])
    event.add('quark:obsidian_pressure_plate', [
            'Only activates when stepped on by players.'
            ])
    event.add('minecraft:dragon_egg', [
            'Place and right-click to convert into a hatchable dragon egg.'
            ])
    event.add('ars_nouveau:ritual_brazier', [
            'Right-click a Tablet into it to begin a Ritual. These usually require nearby Source Jars. \nCan be lit for cosmetic purposes; shift-right-click with a Touch > Conjure Magelight spell.'
            ])
    event.add('ars_nouveau:scribes_table', [
            'Used to craft spell glyphs. Right-click with a Spell Book to open the crafting GUI.\nNote that it will pull nearby ingredients to itself from certain containers.\n\nTechnical note: the \"EXP factor\" in glyph crafting is renamed from \"level cost\", because it uses the vanilla experience formula rather than the one provided by Train\'s Tweaks. In most cases this can be ignored.'
            ])
    event.add('ars_nouveau:alteration_table', [
            'Used to apply Threads to wizard armor, or to armor that is enchanted with Spellweaving. Also used to apply Book Covers to a Spell Binder in the same way.'
            ])
    event.add('vista:mirror', [
            'Reflects in real-time, but unfortunately doesn\'t work if shaders are on.'
            ])
    event.add('vista:television', [
            'Requires redstone power and a Casette. Loops a short, audio-less video. Can be combined to form larger screens.\n\nDo NOT show this to a millager; their 11th century minds cannot comprehend it and they will run away from it, screaming.'
            ])
    event.add('vista:hollow_cassette', [
            'Link this to a Viewfinder by right-clicking with it, and put the linked casette into a Television to show the Viewfinder\'s perspective on the Television.'
            ])
    event.add('vista:picture_tape', [
            'Can be used to show various images on a Television. Accepts Paintings and Maps.'
            ])
    event.add('bibliocraft:disc_rack', [
            'Stores and displays Music Discs and Cassettes.'
            ])
    event.add('bibliocraft:dinner_plate', [
            'Food can be placed in this block, and once placed, it can be eaten from.'
            ])
    event.add('brewinandchewin:coaster', [
            '4 items can be placed on this for display. Most drink items have 3D models when placed in a Coaster, but some do not.'
            ])
    event.add('easel_does_it:easel', [
            'Used to select paintings.'
            ])
    event.add('transmog:transmogrification_table', [
            'Can be used to change the appearance of items. Requires amethyst as fuel.'
            ])
    event.add('ars_nouveau:mob_jar', [
            'See Tablet of Containment for how to capture mobs inside.'
            ])
    //player shops
    const SHOPS = [
        'spudaciousshops:hook_shop',
        'spudaciousshops:rug_shop',
        'spudaciousshops:rug_shop_white',
        'spudaciousshops:rug_shop_orange',
        'spudaciousshops:rug_shop_magenta',
        'spudaciousshops:rug_shop_light_blue',
        'spudaciousshops:rug_shop_yellow',
        'spudaciousshops:rug_shop_lime',
        'spudaciousshops:rug_shop_pink',
        'spudaciousshops:rug_shop_gray',
        'spudaciousshops:rug_shop_light_gray',
        'spudaciousshops:rug_shop_cyan',
        'spudaciousshops:rug_shop_purple',
        'spudaciousshops:rug_shop_blue',
        'spudaciousshops:rug_shop_brown',
        'spudaciousshops:rug_shop_green',
        'spudaciousshops:rug_shop_black',
        'spudaciousshops:crate_shop'
    ]
    SHOPS.forEach((b) => {
        event.add(b, [
            'A block for trading items between players (not millagers). Only the owner can set the trade. Players can use this block in claimed chunks, even if they are not allied. Cannot interact with hoppers or pipes.'
        ])
    });
    event.add('spudaciousshops:contract_scroll', [
            'Used in player shops to add permissions for other players to manage the shop. Right-click with it to sign your name and give it to the shop owner.'
        ])
    //lootbags
    event.add('grimoireofgaia:box_old', [
        'Contains an item to help you locate biomes or structures. For best results, open while in the Overworld.'
        ])
    event.add('grimoireofgaia:bag_book', [
        'Contains a max-level Enchanted Book 70% of the time, an Ancient Tome 20% of the time, and an otherwise-exclusive Enchanted Book containing a Treasure enchantment 10% of the time.'
        ])
    event.add('grimoireofgaia:box_egg', [
        'Contains one of four trader eggs.'
        ])
        
    //easter eggs
    event.add('minecraft:egg', [
            'There are some easter eggs in this modpack. Consider this one of them.'
        ])
    event.add('minecraft:sea_pickle', [
            'Sea Pickles can be Bone Mealed if they are on top of a living Coral Block.\n\n\"Hi Kevin\"'
        ])
    event.add('opalescence:familiar_tiling', [
            'Just objectively the worst block in the game.'
        ])
    event.add('yafda:marmalade_sandwich', [
            'Paddington likes these.'
        ])
    event.add('brewinandchewin:pizza', [
            'Pizza is awesome.'
        ])
    event.add('minecraft:resin_brick', [
            'Unlike most bricks, this one can\'t be thrown. Were you planning on it? Sorry to disappoint.'
        ])
    event.add('supplementaries:hat_stand', [
            'Helmets can be placed on this.\n\nWhatever you do, do NOT put it in a cauldron and wait.'
        ])
    event.add('supplementaries:flute', [
            'Can be renamed to perform different songs. Valid names include: "Wet Hands", "Sweden", and others which shall not be named.'
        ])
    event.add('minecraft:emerald', [
            'These are not real.'
        ])
    event.add('supplementaries:pancake', [
            'Once placed, can be snacked -- I mean stacked, up to 8.\n\nNo syrup, unfortunately.'
        ])
    event.add('environmental:slabfish_spawn_egg', [
            '"Tell me, are you a slabfish, too?\n(Are you a slabfish, too?)"'
        ])
    event.add('minecraft:cat_spawn_egg', [
            ':3'
        ])
    event.add('minecraft:wolf_spawn_egg', [
            'Bork!'
        ])
    event.add('minecraft:donkey_spawn_egg', [
            '"I like that boulder. That is a nice boulder."'
        ])
    event.add('grimoireofgaia:creep_spawn_egg', [
            '"But I\'m a creep...\nI\'m a weirdo..."'
        ])
    event.add('the_beyond:bonfire', [
            '"It\'s a bonfire, turn the lights out"'
        ])
    event.add('ars_nouveau:glyph_crush', [
            '"Crush, crush, crush, crush, crush\n(Two, three, four)"'
        ])
    event.add('quark:crab_bucket', [
            'Crab mentality, also known as crab theory, crabs in a bucket mentality, or the crab-bucket effect, describes the mindset of people who try to prevent others from gaining a favorable position, even if attaining such position would not directly impact those trying to stop them. It is usually summarized with the phrase: "If I can\'t have it, neither can you".\n-Wikipedia'
        ])
    event.add('grimoireofgaia:giga_gear', [
            'Can only be found very rarely in ??? ????????? or if you get very lucky with a Treasure Balloon.'
        ])
    event.add('atmospheric:passion_fruit_sorbet', [
            'Gives you a brain freeze :('
        ])
    event.add('atmospheric:orange_sorbet', [
            'Gives you a brain freeze :('
        ])
    event.add('farmersdelight:raw_pasta', [
            '\"This 97 year old modding group writes unmaintainable spaghetti code the old fashioned way.\" - quat 7/21/2026'
        ])


    //everything millenaire
    const learnedCrop = 'Cannot be planted until you have learned how to do so from a village leader.'
    const learnedCrops = [
        'millenaire:apple_tree_sapling',
        'millenaire:olive_tree_sapling',
        'millenaire:grapes',
        'millenaire:rice',
        'millenaire:maize',
        'millenaire:turmeric',
        'millenaire:cotton'
    ]
    learnedCrops.forEach((crop) => {
        var s = learnedCrop
        if(crop == 'millenaire:apple_tree_sapling'){
            s = s + '\n\nThis tree\'s leaves drop Cider Apples.'
        }
        event.add(crop, [
            s
        ])
    });
    const learnedDrop = 'Cannot be harvested from mobs until you have learned how to do so from a millage leader.'
    const learnedDrops =[
        'millenaire:wolfmeat_raw',
        'millenaire:seafood_raw'
    ]
    learnedDrops.forEach((i) => {
        event.add(i, [
            learnedDrop
        ])
    });
    event.add('millenaire:bearmeat_raw', ["Drops from polar bears. Does not require learning how to harvest."])
    const noCraft = 'Can only be crafted by millagers and bought from millages.'
    const noCrafts = [
        'millenaire:thatch',
        'millenaire:byzantine_tiles',
        'millenaire:mayan_gold_block',
        'millenaire:obsidian_flake',
        'millenaire:calva',
        'millenaire:boudin',
        'millenaire:tripes',
        'millenaire:yogurt',
        'millenaire:winefancy',
        'millenaire:feta',
        'millenaire:inuitpotatostew',
        'millenaire:inuitmeatystew',
        'millenaire:inuitbearstew',
        'millenaire:wall_indian_statue',
        'millenaire:wall_mayan_statue',
        'millenaire:wall_tapestry',
        'millenaire:wall_byzantine_icon_small',
        'millenaire:wall_byzantine_icon_medium',
        'millenaire:wall_byzantine_icon_large',
        'millenaire:wall_hide_hanging',
        'millenaire:wooden_bars_rosette',
        'millenaire:wooden_bars',
        'millenaire:wooden_bars_indian',
        'millenaire:charpoy',
        'millenaire:straw_bed',
        'millenaire:futon',
        'millenaire:inuit_carving'
    ]
    noCrafts.forEach((b) => {
        event.add(b, [
            noCraft
        ])
    });
    const sod = 'Placed with an Ulu while having the corresponding planks and coarse dirt in the inventory. Used by the Inuit for building.'
    const sods = [
        'millenaire:sod_oak',
        'millenaire:sod_spruce',
        'millenaire:sod_birch',
        'millenaire:sod_jungle',
        'millenaire:sod_acacia',
        'millenaire:sod_dark_oak'
    ]
    sods.forEach((b) => {
        event.add(b, [
            sod
        ])
    });
    const paint = 'Use on Painted Bricks to change the block\'s color. The base White Painted Brick can be obtained by smelting Sun-dried Bricks.'
    const paints = [
        'millenaire:paint_bucket_white',
        'millenaire:paint_bucket_orange',
        'millenaire:paint_bucket_magenta',
        'millenaire:paint_bucket_light_blue',
        'millenaire:paint_bucket_yellow',
        'millenaire:paint_bucket_lime',
        'millenaire:paint_bucket_pink',
        'millenaire:paint_bucket_gray',
        'millenaire:paint_bucket_light_gray',
        'millenaire:paint_bucket_cyan',
        'millenaire:paint_bucket_purple',
        'millenaire:paint_bucket_blue',
        'millenaire:paint_bucket_brown',
        'millenaire:paint_bucket_green',
        'millenaire:paint_bucket_red',
        'millenaire:paint_bucket_black'
    ]
    paints.forEach((b) => {
        event.add(b, [
            paint
        ])
    });
    const noWear = 'Can only be used by Millagers.'
    const noWears = [
        'millenaire:clothes_byz_wool',
        'millenaire:clothes_byz_silk',
        'millenaire:clothes_seljuk_wool',
        'millenaire:clothes_seljuk_cotton'
    ]
    noWears.forEach((b) => {
        event.add(b, [
            noWear
        ])
    });
    const denier = 'Used for trade with Millagers. Can be stored in a Denier Pouch. Right-click to convert between denominations.'
    const deniers = [
        'millenaire:denier',
        'millenaire:denier_argent',
        'millenaire:denier_or'
    ]
    deniers.forEach((b) => {
        event.add(b, [
            denier
        ])
    });


    event.add('millenaire:brick_mould', [
            'Used in Indian and Seljuk cultures make Wet Bricks with dirt and sand, which then dry into Sun-dried Bricks.'
        ])
    event.add('millenaire:ulu', [
            'Used by the Inuit to make Sod while having planks and coarse dirt in the inventory. Only certain plank types can be made into sod: oak, spruce, birch, jungle, acacia, and dark oak. Can also carve snow and ice bricks from snow blocks/snow layers and ice, respectively.'
        ])
    event.add('millenaire:snow_brick', [
            'Made by right-clicking a snow block or snow layer with the Ulu.'
        ])
    event.add('millenaire:ice_brick', [
            'Made by right-clicking an ice block with the Ulu.'
        ])
        
    event.add('millenaire:village_scroll', [
            'Contains information about a particular millage.'
        ])
    event.add('millenaire:wet_brick', [
            'Placed with a Brick Mould while having Sand and Dirt in the inventory. To dry, leave out in the sun.'
        ])
    event.add('millenaire:mud_brick', [
            'Created by a drying a Wet Brick in the sun. Wet Bricks are placed with a Brick Mould.'
        ])
    event.add('millenaire:fire_pit', [
            'Used by the Inuit, this cooks up to 3 foods at once.'
        ])
        

    const BB_RETEX = 'This is a Millenaire item, but has had its model overridden to use textures from a disabled Block Box item.'
    const BB_RETEXS = [
        'millenaire:snow_brick',
        'millenaire:snow_wall'
    ]
    BB_RETEXS.forEach((b) => {
        event.add(b, [
            BB_RETEX
        ])
    });
    
    const QUARK_RETEX = 'This is a Millenaire item, but has had its model overridden to use textures from a disabled Quark item.'
    const QUARK_RETEXS = [
        'millenaire:paper_wall'
    ]
    QUARK_RETEXS.forEach((b) => {
        event.add(b, [
            QUARK_RETEX
        ])
    });

    const SUPPS_RETEX = 'This is a Millenaire item, but has had its model overridden to use textures from a disabled Supplementaries item.'
    const SUPPS_RETEXS = [
        'millenaire:timber_frame_plain',
        'millenaire:timber_frame_cross',
        'millenaire:timber_frame_stairs',
        'millenaire:timber_frame_slab'
    ]
    SUPPS_RETEXS.forEach((b) => {
        event.add(b, [
            SUPPS_RETEX
        ])
    });
        
    // event.add('minecraft:enchanted_book[stored_enchantments={levels:{"notenoughtrials:storm_front_marker":1}}]'  , [
    //         'You should not have this.'
    //     ])

    //flavor text hints for essence trades
    const ESSENCE_BUYS = [
        {item: 'ars_nouveau:fire_essence', desc: "Seljuk individuals seem to revere this particular essence as a symbol of Od Ana, a old folklore spirit of the hearth. Although the tradition is waning in favor of official religion, they are still willing to trade for this essence."},
        {item: 'ars_nouveau:water_essence', desc: "Although millagers are somewhat apprehensive to the forms of magic in this world, the Inuit culture seems to view this kind of essence as represenative of the Sedna, the goddess of the sea and marine life."},
        {item: 'ars_nouveau:earth_essence', desc: "Mayans seem to view this specific essence as an aspect of Juun Ixi'm, a god whose name means 'One Maize'. As a result they are willing to trade for this, although they cannot use it in the same way you can."},
        //{item: 'ars_nouveau:air_essence', desc: "Ghanians revere the sky god Nyame, although the exact nature of this diety differs from region to region. Still, it seems they are willing to trade for this essence."},
        {item: 'ars_nouveau:abjuration_essence', desc: "Normans find this magical essence to be symbolic of their patron saint, Archangel Michael, who casted down Satan from heaven. Perhaps they will trade for it."},
        {item: 'ars_nouveau:conjuration_essence', desc: "Hindus seem to have a different idea of what this essence represents than you do; they see the creator god Brahma as the only 'conjurer'. Even still, they view this essence as a symbol of Brahma's cosmic significance and are willing to trade for it."},
        {item: 'ars_nouveau:manipulation_essence', desc: "Japanese millagers speak of a fox spirit called Kitsune, which is said to be able to manipulate itself into different forms. As such, they consider this essence to be representative of the Kitsune. "},
        {item: 'sauce:anima_essence', desc: "Byzantines worship the risen Christos, and oddly enough, they seem to view this essence as a symbol of his resurrection. In a way, they also see their own culture as a resurrection of the Roman Empire."},
    ]
    ESSENCE_BUYS.forEach((b) => {
        event.add(b.item, [
            b.desc
        ])
    });
})