const ingredientFilterDisplay = () => {
  const ingredientList = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingr) => {
      let ingredientLowerCase = ingr.ingredient.toLowerCase();
      if (ingredientLowerCase.endsWith("s")) {
        ingredientLowerCase = ingredientLowerCase.slice(0, -1);
      }
      if (!ingredientList.includes(ingredientLowerCase)) {
        ingredientList.push(ingredientLowerCase);
      }
    });
  });
  ingredientList.sort().forEach((element) => {
    const ingredient = createDomElement("option", { value: element });
    ingredient.innerText = element;
    filterIngredient.append(ingredient);
  });
};
ingredientFilterDisplay();
