function addDragonArmorConversion(event, dragonArmor, horseArmor){
    event.remove({ output: dragonArmor})
    const safeHorseArmor = horseArmor.replace(':', '__').replace('[', '_').replace(']', '')
    event.shapeless(
        Item.of(dragonArmor, 1),
        [
            horseArmor
        ]
    ).id(`kubejs:convert_${safeHorseArmor}_to_dragon_armor`)
    event.shapeless(
        Item.of(horseArmor, 1),
        [
            dragonArmor
        ]
    ).id(`kubejs:convert_dragon_armor_to_${safeHorseArmor}`)
}

function addArsSaplingCycle(event, inSapling, outSapling){
    const safeInSapling = inSapling.replace(':', '__')
    const safeOutSapling = outSapling.replace(':', '__')
    event.shapeless(
        Item.of(outSapling, 1),
        [
            inSapling,
            'ars_nouveau:manipulation_essence'
        ]
    ).id(`kubejs:convert_${safeInSapling}_to_${safeOutSapling}`)
}

function replaceVanillaSand(event, id){
    event.replaceInput(
        { input: 'minecraft:sand', id: id },
        'minecraft:sand',
        Ingredient.of('#c:sands/colorless') 
    )
}
    
ServerEvents.recipes(event => {
    //reset bucket
    event.shapeless(
    Item.of('minecraft:bucket', 1),
    [
        'minecraft:bucket'
    ]
    ).id('kubejs:reset_bucket')
    //DMR armor conversions
    addDragonArmorConversion(event, 'dmr:dragon_armor[dmr:armor_type="diamond"]', 'minecraft:diamond_horse_armor')
    addDragonArmorConversion(event, 'dmr:dragon_armor[dmr:armor_type="gold"]', 'minecraft:golden_horse_armor')
    addDragonArmorConversion(event, 'dmr:dragon_armor[dmr:armor_type="iron"]', 'minecraft:iron_horse_armor')

    event.remove({ output: 'minecraft:golden_carrot' })
    event.shaped(
        Item.of('minecraft:golden_carrot', 1),
        [
            'GGG',
            'GCG',
            'GGG'
         ],
         { G: '#c:ingots/gold', C: 'minecraft:carrot' } 
    ).id('kubejs:golden_carrot_from_ingots')

    //redundant recipes
    event.remove({id: 'minecraft:cake'})
    event.remove({id: 'minecraft:pumpkin_pie'})
    event.remove({id: 'farmersdelight:organic_compost_from_tree_bark'})
    event.remove({id: 'ars_nouveau:ritual_flight'}) //ars elemental provides its own recipe

    event.remove({id: 'arsdelight:source_berry_unpack'}) //disabled item

    event.remove({id: 'malum:experience_bottle_from_brilliance'}) //xp bottle gives 10, brilliance does not

    event.remove({id: 'gag:time_sand_pouch'}) //sands_of_time adds a recipe for this

    event.remove('convenientcurioscontainer:convenient_container')
    event.remove({id: 'convenientcurioscontainer:convenient_container_from_chest_stonecutting'})
    event.shapeless(
        Item.of('convenientcurioscontainer:convenient_container', 1),
        [
            '#c:chests/wooden',
            '#c:chests/wooden',
            'ars_nouveau:ring_of_potential'
        ]
    ).id('kubejs:curios_container')

    event.replaceInput(
        { input: 'minecraft:egg' },
        'minecraft:egg',
        Ingredient.of('#c:eggs') 
    )
    
    event.replaceInput(
        { input: 'minecraft:wheat_seeds' },
        'minecraft:wheat_seeds',
        Ingredient.of('#c:seeds') 
    )

    event.replaceInput(
        { type: 'minecraft:crafting_shaped', input: 'minecraft:quartz' },
        'minecraft:quartz',
        Ingredient.of('#c:gems/quartz') 
    )
    event.replaceInput(
        { type: 'minecraft:crafting_shapeless', input: 'minecraft:quartz' },
        'minecraft:quartz',
        Ingredient.of('#c:gems/quartz') 
    )
    
    event.remove({id: 'pet_vault:pet_necklace'})
    event.remove({id: 'pet_vault:soul_crystal'})
    event.remove({id: 'pet_vault:life_crystal'})

    event.remove({id: 'farmersdelight:salvaging/quartz_block'})
    event.remove({id: 'ars_nouveau:quartz_block_to_quartz'})
    event.remove({id: 'functionalstorage:compacting/quartz'})
    event.remove({id: 'gag:time_sand_pouch'})
    event.remove({id: 'grimoireofgaia:gaiapedia'})

    //ars sapling cycling
    event.remove({id: 'ars_nouveau:manipulation_essence_to_cascading_sapling'})
    event.remove({id: 'ars_nouveau:manipulation_essence_to_blazin_sapling'}) //sic
    event.remove({id: 'ars_nouveau:manipulation_essence_to_vexing_sapling'})
    event.remove({id: 'ars_nouveau:manipulation_essence_to_flourishing_sapling'})
    event.remove({id: 'ars_elemental:flashing_sapling'})
    addArsSaplingCycle(event, 'ars_nouveau:red_archwood_sapling', 'ars_nouveau:green_archwood_sapling')
    addArsSaplingCycle(event, 'ars_nouveau:green_archwood_sapling', 'ars_nouveau:blue_archwood_sapling')
    addArsSaplingCycle(event, 'ars_nouveau:blue_archwood_sapling', 'ars_elemental:yellow_archwood_sapling')
    addArsSaplingCycle(event, 'ars_elemental:yellow_archwood_sapling', 'ars_nouveau:red_archwood_sapling')

    addArsSaplingCycle(event, 'quark:lavender_blossom_sapling', 'quark:yellow_blossom_sapling')
    addArsSaplingCycle(event, 'quark:yellow_blossom_sapling', 'quark:red_blossom_sapling')
    addArsSaplingCycle(event, 'quark:red_blossom_sapling', 'quark:blue_blossom_sapling')
    addArsSaplingCycle(event, 'quark:blue_blossom_sapling', 'quark:orange_blossom_sapling')
    addArsSaplingCycle(event, 'quark:orange_blossom_sapling', 'quark:lavender_blossom_sapling')

    addArsSaplingCycle(event, 'environmental:pink_wisteria_sapling', 'environmental:purple_wisteria_sapling')
    addArsSaplingCycle(event, 'environmental:purple_wisteria_sapling', 'environmental:blue_wisteria_sapling')
    addArsSaplingCycle(event, 'environmental:blue_wisteria_sapling', 'environmental:white_wisteria_sapling')
    addArsSaplingCycle(event, 'environmental:white_wisteria_sapling', 'environmental:pink_wisteria_sapling')

    addArsSaplingCycle(event, 'environmental:cheerful_plum_sapling', 'environmental:plum_sapling')
    addArsSaplingCycle(event, 'environmental:plum_sapling', 'environmental:moody_plum_sapling')
    addArsSaplingCycle(event, 'environmental:moody_plum_sapling', 'environmental:cheerful_plum_sapling')

    addArsSaplingCycle(event, 'atmospheric:laurel_sapling', 'atmospheric:dry_laurel_sapling')
    addArsSaplingCycle(event, 'atmospheric:dry_laurel_sapling', 'atmospheric:laurel_sapling')

    addArsSaplingCycle(event, 'atmospheric:aspen_sapling', 'atmospheric:green_aspen_sapling')
    addArsSaplingCycle(event, 'atmospheric:green_aspen_sapling', 'atmospheric:aspen_sapling')

    addArsSaplingCycle(event, 'minecraft:turtle_scute', 'minecraft:armadillo_scute')
    addArsSaplingCycle(event, 'minecraft:armadillo_scute', 'minecraft:turtle_scute')

    replaceVanillaSand(event, 'clayworks:concrete_powder');

    replaceVanillaSand(event, 'minecraft:white_concrete_powder');
    replaceVanillaSand(event, 'minecraft:orange_concrete_powder');
    replaceVanillaSand(event, 'minecraft:magenta_concrete_powder');
    replaceVanillaSand(event, 'minecraft:light_blue_concrete_powder');
    replaceVanillaSand(event, 'minecraft:yellow_concrete_powder');
    replaceVanillaSand(event, 'minecraft:lime_concrete_powder');
    replaceVanillaSand(event, 'minecraft:pink_concrete_powder');
    replaceVanillaSand(event, 'minecraft:gray_concrete_powder');
    replaceVanillaSand(event, 'minecraft:light_gray_concrete_powder');
    replaceVanillaSand(event, 'minecraft:cyan_concrete_powder');
    replaceVanillaSand(event, 'minecraft:purple_concrete_powder');
    replaceVanillaSand(event, 'minecraft:blue_concrete_powder');
    replaceVanillaSand(event, 'minecraft:brown_concrete_powder');
    replaceVanillaSand(event, 'minecraft:green_concrete_powder');
    replaceVanillaSand(event, 'minecraft:red_concrete_powder');
    replaceVanillaSand(event, 'minecraft:black_concrete_powder');

    event.replaceInput(
        { input: '#minecraft:smelts_to_glass', id: 'minecraft:tnt' },
        'minecraft:sand',
        Ingredient.of('#c:sands') 
    )

    }

    
)