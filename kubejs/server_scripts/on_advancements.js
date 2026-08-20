NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent", event => {
    if (event.getAdvancement().id() == 'mm:root') {
        const player = event.entity;
        const inventory = player.inventory;
        
        player.inventory.clear();
        
        const tome = 'akashictome:tome[akashictome:tool_content=[{components:{"akashictome:defined_mod":"millenaire"},count:1,id:"millenaire:travel_book"},{components:{"akashictome:defined_mod":"ars_nouveau"},count:1,id:"ars_nouveau:worn_notebook"},{components:{"akashictome:defined_mod":"malum"},count:1,id:"malum:encyclopedia_arcana"},{components:{"akashictome:defined_mod":"parcool","patchouli:book":"parcool:parcool_guide"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"solcarrot"},count:1,id:"solcarrot:food_book"},{components:{"akashictome:defined_mod":"cosmeticarmoursmod","patchouli:book":"cosmeticarmoursmod:cosmeticarmours_book"},count:1,id:"patchouli:guide_book"}]]'
        
        //give starting items
        player.give('minecraft:wooden_sword');
        player.give('minecraft:wooden_pickaxe');
        player.give('minecraft:wooden_shovel');
        player.give('minecraft:wooden_axe');
        player.give('minecraft:wooden_hoe');
        player.give(Item.of('minecraft:bread', 4));
        player.give(Item.of('minecraft:potion[potion_contents={potion:"minecraft:water"},thirst:purity=2]', 4));
        player.give(tome);

        //run setup commands from player
        player.server.runCommandSilent('/gamerule disableRaids true');
        player.server.runCommandSilent('/gamerule doPatrolSpawning false');
        player.server.runCommandSilent('/gamerule doTraderSpawning false');

        console.info(`Gave starting items to ${player.name} and set up gamerules`);
    }
    if (event.getAdvancement().id() == 'mm:birthday') {
        const player = event.entity;
        const inventory = player.inventory;
        
        var bonus = `minecraft:light_blue_bundle[custom_name='"Birthday Bundle"',bundle_contents=[{count:1,id:"malum:infernal_spirit"},{count:1,id:"malum:earthen_spirit"},{count:1,id:"malum:aqueous_spirit"},{count:1,id:"malum:aerial_spirit"},{count:1,id:"malum:eldritch_spirit"},{count:1,id:"malum:arcane_spirit"},{count:1,id:"malum:wicked_spirit"},{count:1,id:"malum:sacred_spirit"},{count:1,id:"sauce:anima_essence"},{count:1,id:"ars_nouveau:water_essence"},{count:1,id:"ars_nouveau:manipulation_essence"},{count:1,id:"ars_nouveau:fire_essence"},{count:1,id:"ars_nouveau:earth_essence"},{count:1,id:"ars_nouveau:air_essence"},{count:1,id:"ars_nouveau:conjuration_essence"},{count:1,id:"ars_nouveau:abjuration_essence"}]]`

        player.give(bonus);
    }
    else if (event.getAdvancement().id() == 'supplementaries:husbandry/soap') {
        const player = event.entity;
        player.server.runCommandSilent(`/tellraw @a {"text":"Hey everyone! ${player.username} just ate soap!","color":"red"}`);
        player.server.runCommand(`/tellraw ${player.username} {"text":"Why did you do that? At least you learned your lesson and won't do it again.","italic":true,"color":"gray"}`);
    }
    else if (event.getAdvancement().id() == 'quark:content/pat_potato') {
        const player = event.entity;
        player.server.runCommandSilent(`/tellraw ${player.username} {"text":"[Tiny Potato] I believe in you, ${player.username}!","color":"light_purple"}`);
    }
    else if (event.getAdvancement().id() == 'mm:testing/materials') {
        const player = event.entity;
        
        const one = 'minecraft:brown_bundle[bundle_contents=[{count:8,id:"minecraft:coal"},{count:8,id:"minecraft:quartz"},{count:8,id:"minecraft:redstone"},{count:8,id:"minecraft:diamond"},{count:8,id:"minecraft:lapis_lazuli"},{count:8,id:"minecraft:copper_ingot"},{count:8,id:"minecraft:gold_ingot"},{count:8,id:"minecraft:iron_ingot"}],custom_name=\'"Vanilla Ores"\']';
        const two = 'minecraft:blue_bundle[bundle_contents=[{count:32,id:"ars_nouveau:source_gem"},{count:8,id:"malum:blazing_quartz"},{count:8,id:"malum:cthonic_gold_fragment"},{count:8,id:"malum:refined_soulstone"},{count:8,id:"malum:raw_brilliance"}],custom_name=\'"Magic Materials"\']';
        const three = 'minecraft:gray_bundle[bundle_contents=[{count:24,id:"minecraft:cobblestone"},{count:16,id:"minecraft:obsidian"},{count:8,id:"minecraft:white_wool"},{count:16,id:"minecraft:oak_log"}],custom_name=\'"Building Materials"\']';
        const four = 'minecraft:pink_bundle[bundle_contents=[{count:8,id:"ars_nouveau:conjuration_essence"},{count:8,id:"ars_nouveau:manipulation_essence"},{count:8,id:"ars_nouveau:abjuration_essence"},{count:8,id:"sauce:anima_essence"},{count:8,id:"ars_nouveau:water_essence"},{count:8,id:"ars_nouveau:earth_essence"},{count:8,id:"ars_nouveau:air_essence"},{count:8,id:"ars_nouveau:fire_essence"}],custom_name=\'"Essences"\']';
        const five = 'minecraft:purple_bundle[bundle_contents=[{count:8,id:"malum:aqueous_spirit"},{count:8,id:"malum:earthen_spirit"},{count:8,id:"malum:infernal_spirit"},{count:8,id:"malum:aerial_spirit"},{count:8,id:"malum:arcane_spirit"},{count:8,id:"malum:wicked_spirit"},{count:8,id:"malum:eldritch_spirit"},{count:8,id:"malum:sacred_spirit"}],custom_name=\'"Spirits"\']';

        player.give(one);
        player.give(two);
        player.give(three);
        player.give(four);
        player.give(five);
    }
});