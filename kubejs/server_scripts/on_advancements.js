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
});