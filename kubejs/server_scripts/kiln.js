/*
{
  "type": "minecraft:smelting",
  "category": "blocks",
  "cookingtime": 200,
  "experience": 0.1,
  "ingredient": {
    "item": "minecraft:purple_terracotta"
  },
  "result": {
    "id": "minecraft:purple_glazed_terracotta"
  }
}
  ->
{
  "type": "clayworks:baking",
  "category": "blocks",
  "cookingtime": 100,
  "experience": 0.1,
  "ingredient": {
    "item": "minecraft:purple_terracotta"
  },
  "result": {
    "count": 1,
    "id": "minecraft:purple_glazed_terracotta"
  }
}
*/

ServerEvents.recipes((event) => {

    event.forEachRecipe({ type: 'clayworks:baking' }, (recipe) => {
        recipe.remove();
    });

    event.forEachRecipe({ type: 'minecraft:smelting' }, (recipe) => {

        let outputComp = recipe.outputValues()[0]; //result = 1 minecraft:cooked_porkchop
        let outputId = String(outputComp).replace(/^result = \d+ /, ""); //minecraft:cooked_porkchop
        let hasSmoking = event.containsRecipe({ output: outputId, type: 'minecraft:smoking' });
        let hasBlasting = event.containsRecipe({ output: outputId, type: 'minecraft:blasting' });
        //console.info(`recipe ` + recipe.getId() + ` outputId: ` + outputId + ` hasSmoking: ` + hasSmoking + ` hasBlasting: ` + hasBlasting);

        if(!hasSmoking && !hasBlasting){
            let json = recipe.originalJson;
            
            json.addProperty("type", 'clayworks:baking');
            var originalTime = json.get("cookingtime");
            var newTime = originalTime / 2;
            json.addProperty("cookingtime", newTime);

            event.custom(json)
        }
        
    });
}
)