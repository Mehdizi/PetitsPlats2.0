const ingredientFilter = () => {
  const filterIngredient = document.querySelector("#ingredient");
  const ingredientList = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingr) => {
      let ingredientLowerCase = ingr.ingredient.toLowerCase();
      if (ingredientList.includes(ingredientLowerCase)) {
      } else if (ingredientLowerCase.endsWith("s")) {
        ingredientLowerCase.slice(0, -1);
      }
      ingredientList.push(ingredientLowerCase);
    });
  });
  ingredientList.forEach((element) => {
    const ingredient = createDomElement("option", { value: element });
    ingredient.innerText = element;
    filterIngredient.append(ingredient);
  });
};

ingredientFilter();
