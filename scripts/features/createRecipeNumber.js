const displayCountRecipeNumber = (recipes) => {
  const recipeNumber = document.querySelector(".recipe_number");
  if (recipes.length === 0 || recipes.length === 1) {
    recipeNumber.innerText = "0" + recipes.length + " recette";
  }
  if (recipes.length > 1 && recipes.length < 10) {
    recipeNumber.innerText = "0" + recipes.length + " recettes";
  }
  if (recipes.length >= 10) {
    recipeNumber.innerText = recipes.length + " recettes";
  }
};
