EntityEvents.beforeHurt(event => {
    //mounts dont take suffocation damage.
    var counts = event.entity.entityType.is('#mm:mounts');
    if (event.getSource()['is(net.minecraft.tags.TagKey)']('mm:mount_immune') && counts) {
        event.cancel();
    }
})