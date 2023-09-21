// DOM element of the differents filters
const searchBar = document.querySelector("#search");
const filterIngredient = document.querySelector("#ingredient");
const filterAppliances = document.querySelector("#appliance");
const filterUstensils = document.querySelector("#utensil");

// function to filter the recipe
const filterRecipe = () => {
  // Data recuperation
  const allRecipe = document.querySelectorAll(".main-article-wrapper");
  // setting const to save the differents filters inputs
  const inputSearchBar = searchBar.value.toLowerCase();
  if (!inputSearchBar > 2) {
    inputSearchBar = "";
  }
  const selectedIngredient = filterIngredient.value;
  const selectedAppliance = filterAppliances.value;
  const selectedUstensil = filterUstensils.value;
  // iteration on all recipes
  allRecipe.forEach((recipe) => {
    // For each recipe of all recipe, creation of const to save the global text of the recipe card
    const recipeAllText = recipe.textContent.toLowerCase();
    const recipeIngredient = recipe
      .querySelector(".main-ingredient-wrapper")
      .textContent.toLowerCase();
    const recipeUstensil = recipe
      .querySelector(".ustensils-list")
      .textContent.toLowerCase();
    const recipeAppliance = recipe
      .querySelector(".appliances-list")
      .textContent.toLowerCase();
    if (
      recipeAllText.includes(inputSearchBar) &&
      recipeIngredient.includes(selectedIngredient) &&
      recipeAppliance.includes(selectedAppliance) &&
      recipeUstensil.includes(selectedUstensil)
    ) {
      recipe.style.display = "flex";
    } else {
      recipe.style.display = "none";
    }
    countRecipeNumber();
  });
};

// callback function for the event listener
// const applyFilter = () => {
//   let option = e.currentTarget.value;
//   filterRecipe();
//   createSelectedFilter(option);
// }

// event listener of the differents filter
searchBar.addEventListener("input", filterRecipe);
filterIngredient.addEventListener("change", (e) => {
  filterRecipe();
  console.log(e.currentTarget.value);
  let option = e.currentTarget.value;
  createSelectedFilter(option);
});
filterAppliances.addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
  let option = e.currentTarget.value;
  filterRecipe();

  createSelectedFilter(option);
});
filterUstensils.addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
  let option = e.currentTarget.value;
  filterRecipe();
  createSelectedFilter(option);
});
