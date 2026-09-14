ItemEvents.modification(event => {
  event.modify('minecraft:golden_carrot', item => {
    const foodComponent = item.get('food')
    const originalNutrition = foodComponent.nutrition()
    const originalSaturation = foodComponent.saturation()
    item.setFood ({
      nutrition: originalNutrition,
      saturation: originalSaturation,
      canAlwaysEat: true,
      eatSeconds: 1.6
    })
  })

  event.modify('farmersdelight:gleaming_salad', item => {
    const foodComponent = item.get('food')
    const originalNutrition = foodComponent.nutrition()
    const originalSaturation = foodComponent.saturation()
    item.setFood ({
      nutrition: originalNutrition,
      saturation: originalSaturation,
      canAlwaysEat: true,
      eatSeconds: 1.6
    })
  })

  const sixtyfourEggs = [
    'minecraft:brown_egg',
    'minecraft:blue_egg',
    'environmental:duck_egg',
    'quark:egg_parrot_gray',
    'quark:egg_parrot_yellow_blue',
    'quark:egg_parrot_green',
    'quark:egg_parrot_blue',
    'quark:egg_parrot_red_blue'
  ]

  sixtyfourEggs.forEach(id => event.modify(id, item => {
    item.setMaxStackSize(64)
  }))

  event.modify('gag:hearthstone', item => {
    item.setUnbreakable()
  })
  event.modify('gag:energized_hearthstone', item => {
    item.setUnbreakable()
  })
  event.modify('gag:escape_rope', item => {
    item.setUnbreakable()
  })

  event.modify('grimoireofgaia:withered_brain', item => {
    item.maxStackSize = 16
  })

  event.modify('minecraft:mace', item => {
    item.setAttackDamage(7)
  })
  event.modify('minecraft:trident', item => {
    item.setAttackDamage(10)
  })

  //up vanilla sword damage to account for stronger mobs
  event.modify('minecraft:wooden_sword', item => {
    item.setAttackDamage(4)
  })
  event.modify('minecraft:stone_sword', item => {
    item.setAttackDamage(5)
  })
  event.modify('minecraft:iron_sword', item => {
    item.setAttackDamage(6)
  })
  event.modify('minecraft:diamond_sword', item => {
    item.setAttackDamage(7)
  })
  event.modify('minecraft:netherite_sword', item => {
    item.setAttackDamage(8)
  })

  event.modify('millenaire:japanese_tachi', item => {
    item.setAttackDamage(6)
  })
  event.modify('millenaire:seljuk_scimitar', item => {
    item.setAttackDamage(6)
  })

})