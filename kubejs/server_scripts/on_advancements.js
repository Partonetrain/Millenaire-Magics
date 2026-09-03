NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent", event => {

    const player = event.entity;
    const id = event.getAdvancement().id();

    //player.server.runCommandSilent(`/tellraw ${player.username} {"text":" ${player.username} obtained advancement ${id}"}`);

    if (id === 'mm:root') {
        const inventory = player.inventory;
        
        player.inventory.clear();
        
        const tome = 'akashictome:tome[akashictome:tool_content=[{components:{"akashictome:defined_mod":"millenaire"},count:1,id:"millenaire:travel_book"},{components:{"akashictome:defined_mod":"ars_nouveau"},count:1,id:"ars_nouveau:worn_notebook"},{components:{"akashictome:defined_mod":"malum"},count:1,id:"malum:encyclopedia_arcana"},{components:{"akashictome:defined_mod":"parcool","patchouli:book":"parcool:parcool_guide"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"solcarrot"},count:1,id:"solcarrot:food_book"},{components:{"akashictome:defined_mod":"cosmeticarmoursmod","patchouli:book":"cosmeticarmoursmod:cosmeticarmours_book"},count:1,id:"patchouli:guide_book"}]]'
        
        //give starting items
        player.give('minecraft:wooden_sword');
        player.give('minecraft:wooden_pickaxe');
        player.give('minecraft:wooden_shovel');
        player.give('minecraft:wooden_axe');
        player.give('minecraft:wooden_hoe');
        player.give('farmersdelight:flint_knife');
        player.give(Item.of('minecraft:bread', 4));
        player.give(Item.of('minecraft:potion[potion_contents={potion:"minecraft:water"},thirst:purity=2]', 4));
        player.give(tome);

        //run setup commands from player
        player.server.runCommandSilent('/gamerule disableRaids true');
        player.server.runCommandSilent('/gamerule doPatrolSpawning false');
        player.server.runCommandSilent('/gamerule doTraderSpawning false');

        console.info(`Gave starting items to ${player.name} and set up gamerules`);
    }
    else if (id === 'mm:firstcontactwarning') {
        player.server.runCommandSilent(`/tellraw ${player.username} {"text":"You've discovered a Millage! Be careful to not build anything within its boundaries; millagers have a tendency to pave through your builds.","color":"red", "italic":true}`);
    }
    else if (id === 'mm:pantheon') {
        var bonus = 'quark:ancient_chest[container_loot={loot_table:"mm:testing/pantheon"},custom_name=\'"M.M. Beta Tester Chest"\',lore=[\'"Place and open for loot"\']]';
        player.give(bonus);
    }
    else if (id === 'mm:birthday') {
        var bonus = `minecraft:light_blue_bundle[custom_name='"Birthday Bundle"',bundle_contents=[{count:1,id:"malum:infernal_spirit"},{count:1,id:"malum:earthen_spirit"},{count:1,id:"malum:aqueous_spirit"},{count:1,id:"malum:aerial_spirit"},{count:1,id:"malum:eldritch_spirit"},{count:1,id:"malum:arcane_spirit"},{count:1,id:"malum:wicked_spirit"},{count:1,id:"malum:sacred_spirit"},{count:1,id:"sauce:anima_essence"},{count:1,id:"ars_nouveau:water_essence"},{count:1,id:"ars_nouveau:manipulation_essence"},{count:1,id:"ars_nouveau:fire_essence"},{count:1,id:"ars_nouveau:earth_essence"},{count:1,id:"ars_nouveau:air_essence"},{count:1,id:"ars_nouveau:conjuration_essence"},{count:1,id:"ars_nouveau:abjuration_essence"}]]`

        player.give(bonus);
    }
    else if (id === 'supplementaries:husbandry/soap') {
        player.server.runCommandSilent(`/tellraw @a {"text":"Hey everyone! ${player.username} just ate soap!","color":"red"}`);
        player.server.runCommand(`/tellraw ${player.username} {"text":"Why did you do that? At least you learned your lesson and won't do it again.","italic":true,"color":"gray"}`);
    }
    else if (id === 'quark:content/pat_potato') {
        player.server.runCommandSilent(`/tellraw ${player.username} {"text":"[Tiny Potato] I believe in you, ${player.username}!","color":"light_purple"}`);
    }
    else if (id === 'ars_nouveau:eat_bombegranate') {
        player.server.runCommandSilent(`/tellraw ${player.username} {"text":"What's gonna happen, am I gonna blow up?","italic":true,"color":"gray"}`);
        player.server.runCommandSilent(`/tellraw ${player.username} {"text":"No, worse! It'll go right to your thighs...","italic":true,"color":"yellow"}`);
        player.server.runCommandSilent(`/tellraw ${player.username} {"text":"And then you'll blow up.","italic":true,"color":"yellow"}`);
    }
    else if (id === 'mm:testing/materials') {
        
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