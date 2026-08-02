/*
const containsNetherite = new Set();

ServerEvents.recipes(event => {
    console.info(`recipes that contains netherite:`);
    event.forEachRecipe({ input: 'minecraft:netherite_ingot' }, recipe => {
        containsNetherite.add(recipe.originalRecipeResult);
        if(recipe.originalRecipeResult == 'minecraft:air'){
            console.info(`Recipe ${recipe.id} has air as output`);
        }
    });

    let items = '\n';
    for(const item of containsNetherite){
        let s = "\"" + `${item}`.replace("1 ", '') + "\",\n";
        items += s;
    }
    console.info(items);
});
*/
//results manually added to #mm:contains_netherite, because the recipes event always fires after the tag event
//gdi kubejs.