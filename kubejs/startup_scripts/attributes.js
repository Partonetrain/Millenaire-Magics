EntityJSEvents.attributes(event => {
    //Wayward arrow damage does not seem to work correctly right now
    event.modify('minecraft:player', attribute => {
        attribute.add("wayward_attributes:arrow_damage", 1)
    })
})