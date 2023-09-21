const countRecipeNumber = () => {
  const recipeNumber = document.querySelector(".recipe_number");
  const visibleRecipe = document.querySelectorAll(".main-article-wrapper");
  let counter = 0;
  visibleRecipe.forEach((recipe) => {
    if (window.getComputedStyle(recipe).display === "flex") {
      counter += 1;
      if (counter <= 1) {
        recipeNumber.innerText = "0" + counter + " recette";
      }
      if (counter > 1 && counter < 10) {
        recipeNumber.innerText = "0" + counter + " recettes";
      }
      if (counter > 9) {
        recipeNumber.innerText = counter + " recettes";
      }
    }
  });
};
