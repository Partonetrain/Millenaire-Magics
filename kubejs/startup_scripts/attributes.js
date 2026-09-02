EntityJSEvents.attributes(event => {
    event.modify('minecraft:player', attribute => {
        attribute.add("wayward_attributes:arrow_damage", 1)
    })
})