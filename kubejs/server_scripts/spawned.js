EntityEvents.spawned(event => 
    {
        const entity = event.getEntity();
        const level = event.getLevel();

        if(entity.getType() === 'minecraft:zombie_villager'){
            event.cancel;
        }
        else if(entity.getType() === 'the_beyond:totem_of_respite'){
            event.cancel();
        }
        else if(entity.getType() === 'minecraft:item'){
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

            //these items despawn faster
            else if(item === 'yigd:death_scroll'){
                entity.age = 3000;
            }
        }
        else if(entity.getType() === 'minecraft:chicken'){
            const xyz = entity.getBlockX() + " " + entity.getBlockY() + " " + entity.getBlockZ();
            if(entity.hasControllingPassenger()){
                //event.getServer().runCommandSilent('/say A chicken jockey has spawned.');
                event.getServer().runCommandSilent('/playsound oof_button:jackblack_chickenjockey hostile @a ' + xyz + " 1 1 0.04");
            }
        }
        else if(entity.getType() === 'millenaire:villager'){
            //const clearFire = '/execute as @e[type=millenaire:villager] run fill ~-10 ~-10 ~-10 ~10 ~10 ~10 minecraft:air replace minecraft:fire'
            //event.getServer().runCommandSilent(clearFire);

            if(entity.getRandom().nextDouble() < 0.05){
                const xyz = entity.getBlockX() + " " + entity.getBlockY() + " " + entity.getBlockZ();
                event.getServer().runCommandSilent('/summon minecraft:cat ' + xyz);
            }
        }
    }
)