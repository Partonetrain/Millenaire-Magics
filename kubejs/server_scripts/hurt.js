const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance');

EntityEvents.beforeHurt(event => {
    //mounts dont take suffocation damage.
    var counts = event.entity.entityType.is('#mm:mounts');
    if (event.getSource()['is(net.minecraft.tags.TagKey)']('mm:mount_immune') && counts) {
        event.cancel();
    }
    
    event.getEntity().removeEffect('ars_nouveau:bounce'); //does nothing if entity does not have bounce

    //extra difficulty stuff.
    if(event.getSource().getActual().getType() === 'minecraft:bogged'){
        event.getEntity().addEffect(new $MobEffectInstance('minecraft:slowness', 100, 0));
    }
    else if(event.getSource().getActual().getType() === 'variantsandventures:thicket'){
        event.getEntity().addEffect(new $MobEffectInstance('minecraft:poison', 100, 1));
    }
    else if(event.getSource().getActual().getType() === 'variantsandventures:murk'){
        event.getEntity().addEffect(new $MobEffectInstance('thirst:dehydration', 1, 0));
    }

})