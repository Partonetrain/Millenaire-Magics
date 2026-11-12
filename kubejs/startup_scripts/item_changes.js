//this script is brought to you by: the school of "load java classes until it works"
const $ItemAttributeModifiers = Java.loadClass('net.minecraft.world.item.component.ItemAttributeModifiers')
const $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
const $Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
const $VanillaAttributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
const $EquipmentSlotGroup = Java.loadClass('net.minecraft.world.entity.EquipmentSlotGroup')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $ParCoolAttributes = Java.loadClass('com.alrex.parcool.api.ParCoolAttributes')

ItemEvents.modification(event => {

  //these two items do not have the attribute modifier component at all, but still give attribute modifiers through NeoForge's IItemExtension::getDefaultAttributeModifiers
  //fortunately, setting attribute modifiers component takes priority, so we completely recreate them here.
  //why does that method even exist still???
  event.modify('parcool:traceur_gloves', item => {
    const id = $ResourceLocation.parse('kubejs:traceur_gloves')
    const builder = $ItemAttributeModifiers.builder()

    builder.add(
      $ParCoolAttributes.SLIDE_DOWN_DECELERATION,
      new $AttributeModifier(id, 0.1, $Operation.ADD_VALUE),
      $EquipmentSlotGroup.CHEST
    )
    builder.add(
      $ParCoolAttributes.MAX_STAMINA,
      new $AttributeModifier(id, 0.2, $Operation.ADD_MULTIPLIED_BASE),
      $EquipmentSlotGroup.CHEST
    )
    builder.add(
      $VanillaAttributes.ATTACK_SPEED,
      new $AttributeModifier(id, 0.1, $Operation.ADD_MULTIPLIED_TOTAL),
      $EquipmentSlotGroup.CHEST
    )

    item.setAttributeModifiersWithTooltip(builder.build().modifiers())
  })

  event.modify('parcool:traceur_boots', item => {
    const id = $ResourceLocation.parse('kubejs:traceur_boots')
    const builder = $ItemAttributeModifiers.builder()

    builder.add(
      $VanillaAttributes.MOVEMENT_SPEED,
      new $AttributeModifier(id, 0.05, $Operation.ADD_MULTIPLIED_BASE),
      $EquipmentSlotGroup.FEET
    )
    builder.add(
      $ParCoolAttributes.MAX_STAMINA,
      new $AttributeModifier(id, 0.2, $Operation.ADD_MULTIPLIED_BASE),
      $EquipmentSlotGroup.FEET
    )
    builder.add(
      $ParCoolAttributes.BREAKFALL_DAMAGE_REDUCTION,
      new $AttributeModifier(id, 0.15, $Operation.ADD_VALUE),
      $EquipmentSlotGroup.FEET
    )
    builder.add(
      $ParCoolAttributes.FAST_RUN_SPEED,
      new $AttributeModifier(id, 0.15, $Operation.ADD_MULTIPLIED_BASE),
      $EquipmentSlotGroup.FEET
    )
    builder.add(
      $ParCoolAttributes.FAST_SWIM_SPEED,
      new $AttributeModifier(id, 0.15, $Operation.ADD_MULTIPLIED_BASE),
      $EquipmentSlotGroup.FEET
    )
    builder.add(
      $VanillaAttributes.STEP_HEIGHT,
      new $AttributeModifier(id, 0.4, $Operation.ADD_VALUE),
      $EquipmentSlotGroup.FEET
    )
    
    item.setAttributeModifiersWithTooltip(builder.build().modifiers())
  })


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
  
  event.modify('minecraft:copper_sword', item => {
    item.setAttackDamage(5)
  })

  event.modify('millenaire:japanese_tachi', item => {
    item.setAttackDamage(6)
  })
  event.modify('millenaire:seljuk_scimitar', item => {
    item.setAttackDamage(6)
  })

})