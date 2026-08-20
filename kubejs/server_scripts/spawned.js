EntityEvents.spawned(event => 
    {
        const entity = event.getEntity();
        const level = event.getLevel();

        if(entity.getType() === 'minecraft:item'){
            var item = entity.getItem();
            //fix bugged Malum drop interaction
            if(item === 'quark:soul_bead' || item === 'quark:diamond_heart'){
                entity.age = -32768;
                entity.pickupDelay = 10;
            }
            
            //these ones are actually intentionally undespawnable
            else if(item === 'minecraft:nether_star' || item === 'minecraft:debug_stick'){
                entity.age = -32768;
                entity.pickupDelay = 10;
            }
        }

        if(entity.getType() === 'minecraft:chicken'){
            const xyz = entity.getBlockX() + " " + entity.getBlockY() + " " + entity.getBlockZ();
            if(entity.hasControllingPassenger()){
                //event.getServer().runCommandSilent('/say A chicken jockey has spawned.');
                event.getServer().runCommandSilent('/playsound oof_button:jackblack_chickenjockey hostile @a ' + xyz + " 1 1 0.1");
            }
        }
        else if(entity.getType() === 'the_beyond:totem_of_respite'){
            const xyz = entity.getBlockX() + " " + entity.getBlockY() + " " + entity.getBlockZ();
            event.cancel();
            console.log("discarded totem of respite at " + xyz)
        }
    }
)