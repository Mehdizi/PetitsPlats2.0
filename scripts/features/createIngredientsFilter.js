const ingredientFilter = document.querySelector("#ingredient");

const filterIngredient = (recipes) => {
  const ingredientList = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingr) => {
      const ingredientLowerCase = ingr.ingredient.toLowerCase();
      if (!ingredientList.includes(ingredientLowerCase)) {
        ingredientList.push(ingredientLowerCase);
        const ingredientToRemove = options.ingredients;
        ingredientToRemove.forEach((i) => {
          let index = ingredientList.indexOf(i);
          if (index !== -1) {
            ingredientList.splice(index, 1);
          }
        });
      }
    });
  });
  return ingredientList;
};

const displayIngredientsList = (ingredientsList) => {
  const ingredientFilterItems = document.querySelector(
    ".ingredient-filter-items"
  );
  ingredientFilterItems.innerHTML = "";
  ingredientsList.forEach((ingr) => {
    const ingredientItem = createDomElement("li", {
      class: "filter-option-ingredient filter-option",
      value: ingr,
    });
    ingredientItem.innerText = ingr;
    ingredientFilterItems.append(ingredientItem);
  });
};
