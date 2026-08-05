//misc jei entries with components
KubeJEIEvents.subtypes(event => {
    event.hide(Item.of('patchouli:guide_book[patchouli:book="grimoireofgaia:gaiapedia"]'))
    event.hide(Item.of('dmr:dragon_armor[dmr:armor_type="netherite"]'))
    event.hide(Item.of('dmr:dragon_armor[dmr:armor_type="emerald"]'))
    event.hide(Item.of('minecraft:enchanted_book[stored_enchantments={levels:{"notenoughtrials:storm_front_marker":1}}]')) //this enchant is named "for functions do not use"
})

//info tabs
RecipeViewerEvents.addInformation('item', event => {
    

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
                'CANNOT duplicate enchanted books. The ability to copy and merge regular books is still present.'
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
                'End-game gliding accessory. Unlike Elytra, does not have durability, and allows for propelling itself without fireworks by pressing forwards as long as you have flight stamina remaining. However, there are still some physics restraints (you can\'t fly straight up forever).'
            ])
        }else{
            event.add(item, [
                'Unlike other wings, these do not have a limited flight time.\n\n"I am Monado. I was here at the beginning. And I will proclaim the end."'
            ])
        }
    })
    
    Ingredient.of('#miscnetcompat:armor_magic_uncommon').stacks.toArray().forEach(item => {
        event.add(item, [
            'Apply to armor that has thread slots (either mage armor, or any other armor enchanted with Spellweaving) in an Alteration Table.'
        ])
    })

    //items
    event.add('minecraft:painting', [
                'Lots of new, unique paintings are available! If you want to select a painting instead of having it chosen for you when placing, craft an Easel.'
            ])

    //tools
    event.add('minecraft:trident', [
                'CANNOT be obtained from Drowned. Can only be obtained in Trial Chambers, or if you get really lucky with a Treasure Balloon.'
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
    event.add('bibliocraft:plumb_line', [
            'Measures the number of blocks down from the block you clicked.'
        ])
    event.add('ars_nouveau:warp_scroll', [
            'Can only be used once after a location has been set - use with caution.'
        ])
    event.add('ars_nouveau:stable_warp_scroll', [
            'After a location has been set, creates a temporary, one-way portal to that location. Make sure you have a way back!\nCan be tossed into a frame of Sourcestone with Source nearby to create a permanent one-way portal.'
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
            'Can be crafted together with dyed items to remove its dye. This consumes the soap.\n\nYou can also eat it, but you REALLY shouldn\'t.'
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
    event.add('ars_nouveau:ritual_flight', [
            'Flight in the Overworld requires the advancement "Who\'s the Boss (Defeat a Boss Chamber)".\nFlight in the Nether requires the advancement "Withering Heights (Summon the Wither)"\nFlight in The End requires the advancement "Great View From Up Here (Levitate up 50 blocks from the attacks of a Shulker)".'
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
    //blocks
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
    event.add('minecraft:cauldron', [
            'Water can be purified in a cauldron by boiling it (placing a hot block such as a Campfire underneath). Comparator output has been changed to reflect purity instead of fullness, allowing automation of water purification. Also, can be used to mix dyes together.'
        ])
    event.add('brewinandchewin:keg', [
            'Used to brew various drinks, and event ferment certain foods. Some recipes require a certain temperature; placing hot blocks such as a Campfire adjacent to it heats it up, and placing cold blocks such as Ice cools it down.'
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
    event.add('supplementaries:pulley_block', [
            'Once filled with any kind of rope or chain, a Turn Table or Crank can be attached to it to raise or lower the rope/chain. The block at the bottom of the rope/chain will also be moved, and this follows Slime Block rules, but not Chains Connect Blocks rules. Pulleys can only pull up to 12 non-rope/chain attached blocks at a time, but they can be combined to pull more.'
        ])
    event.add('supplementaries:faucet', [
            'Moves fluids between the block it is attached to and the block below it. Useful for things like cauldrons and jars. Can also be used to pour water onto concrete powder, dirt, or any liquid into a sponge (voiding the liquid).\nWater moved this way will retain its purity (this was a pain to get working correctly, believe me).'
        ])
    event.add('supplementaries:jar', [
            'CANNOT hold potions.'
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
                'Differs from Straw Rope in that it must be attached to something, and can be placed on fences.'
            ])
    event.add('the_beyond:guster', [
            'Unlike the Gust Igniter, the Autoguster automatically activates when something steps on it, cannot be placed at an angle, and sends dangerously high without applying any effects for safety. Use with caution.'
            ])
    event.add('morered:hexidecrubrometer', [
            'Displays redstone power level of its back side in hexadecimal (0 through F)'
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
    event.add('grimoireofgaia:creep_spawn_egg', [
            '"But I\'m a creep...\nI\'m a weirdo..."'
        ])
    event.add('the_beyond:bonfire', [
            '"It\'s a bonfire, turn the lights out"'
        ])
    event.add('quark:crab_bucket', [
            'Crab mentality, also known as crab theory, crabs in a bucket mentality, or the crab-bucket effect, describes the mindset of people who try to prevent others from gaining a favorable position, even if attaining such position would not directly impact those trying to stop them. It is usually summarized with the phrase: "If I can\'t have it, neither can you".\n-Wikipedia'
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
        event.add(crop, [
            learnedCrop
        ])
    });
    const learnedDrop = 'Cannot be harvested until you have learned how to do so from a millage leader.'
    const learnedDrops =[
        'millenaire:wolfmeat_raw',
        'millenaire:bearmeat_raw',
        'millenaire:seafood_raw'
    ]
    learnedDrops.forEach((i) => {
        event.add(i, [
            learnedDrop
        ])
    });
    const noCraft = 'Can only be crafted by millagers and bought from millages.'
    const noCrafts = [
        'millenaire:thatch',
        'millenaire:byzantine_tiles'
    ]
    noCrafts.forEach((b) => {
        event.add(b, [
            noCraft
        ])
    });
    const sod = 'Placed with an Ulu while having vanilla planks and coarse dirt in the inventory.'
    const sods = [
        'millenaire:sod_oak',
        'millenaire:sod_spruce',
        'millenaire:sod_birch',
        'millenaire:sod_jungle',
        'millenaire:sod_acacia',
        'millenaire:sod_dark_oak',
    ]
    sods.forEach((b) => {
        event.add(b, [
            sod
        ])
    });

    event.add('millenaire:village_scroll', [
            'Contains information about a particular millage.'
        ])
    event.add('millenaire:wet_brick', [
            'Placed with a Brick Mould while having Sand and Dirt in the inventory.'
        ])
    event.add('millenaire:mud_brick', [
            'Created by a drying a Wet Brick in the sun. Wet Bricks are placed with a Brick Mould.'
        ])
    event.add('millenaire:apple_tree_sapling', [
            'This tree\'s leaves drop Cider Apples.'
        ])
        
    event.add('millenaire:snow_brick', [
            'Uses texture from Block Box'
        ])
    event.add('millenaire:snow_wall', [
            'Uses texture from Block Box'
        ])
        
    // event.add('minecraft:enchanted_book[stored_enchantments={levels:{"notenoughtrials:storm_front_marker":1}}]'  , [
    //         'You should not have this.'
    //     ])
    
})