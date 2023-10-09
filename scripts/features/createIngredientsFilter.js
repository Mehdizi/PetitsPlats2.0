const ingredientFilter = document.querySelector("#ingredient");

const filterIngredient = (recipes) => {
  const ingredientList = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let y = 0; y < recipe.ingredients.length; y++) {
      const ingr = recipe.ingredients[y];
      const ingredientLowerCase = ingr.ingredient.toLowerCase();
      if (!ingredientList.includes(ingredientLowerCase)) {
        ingredientList.push(ingredientLowerCase);
        const ingredientToRemove = options.ingredients;
        for (const i of ingredientToRemove) {
          let index = ingredientList.indexOf(i);
          if (index !== -1) {
            ingredientList.splice(index, 1);
          }
        }
      }
    }
  }
  return ingredientList;
};

const displayIngredientsList = (ingredientsList) => {
  const ingredientFilterItems = document.querySelector(
    ".ingredient-filter-items"
  );
  ingredientFilterItems.innerHTML = "";
  for (const ingr of ingredientsList) {
    const ingredientItem = createDomElement("li", {
      class: "filter-option-ingredient filter-option",
      value: ingr,
    });
    ingredientItem.innerText = ingr;
    ingredientFilterItems.append(ingredientItem);
  }
};
