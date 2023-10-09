const isValidSearch = ({ searchedByUser, itemToCompare }) => {
  return itemToCompare.toLowerCase().includes(searchedByUser.toLowerCase());
};

const isInName = (recipeName, input) => {
  return recipeName.toLowerCase().includes(input.toLowerCase());
};

const isInDescription = (recipeDescription, input) => {
  return recipeDescription.toLowerCase().includes(input.toLowerCase());
};

const isInIngredientByText = (recipeIngredients, input) => {
  for (let i = 0; i < recipeIngredients.length; i++) {
    if (
      recipeIngredients[i].ingredient
        .toLowerCase()
        .includes(input.toLowerCase())
    ) {
      return true;
    }
  }
};

const isInIngredient = ({
  currentRecipeIngredients,
  userIngredientsOptions,
}) => {
  for (let i = 0; i < userIngredientsOptions.length; i++) {
    const userIngredient = userIngredientsOptions[i];
    let found = false;
    for (let y = 0; y < currentRecipeIngredients.length; y++) {
      const currentIngredient = currentRecipeIngredients[y].ingredient;
      if (
        isValidSearch({
          searchedByUser: userIngredient,
          itemToCompare: currentIngredient,
        })
      ) {
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
};

const isInAppliance = (recipeAppliance, input) => {
  return isValidSearch({
    searchedByUser: input,
    itemToCompare: recipeAppliance,
  });
};

const isInUstensils = (recipeUstensils, userUstensilsOptions) => {
  for (let i = 0; i < userUstensilsOptions.length; i++) {
    const userUstensil = userUstensilsOptions[i];
    let found = false;
    for (let y = 0; y < recipeUstensils.length; y++) {
      const currentUstensil = recipeUstensils[y];
      if (
        isValidSearch({
          searchedByUser: userUstensil,
          itemToCompare: currentUstensil,
        })
      ) {
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
};

const isSearchedByText = (recipe, input) => {
  return (
    isInName(recipe.name, input) ||
    isInDescription(recipe.description, input) ||
    isInIngredientByText(recipe.ingredients, input)
  );
};

const filterRecipesBySearchText = ({ recipes, input }) => {
  const newRecipeArray = [];
  for (const recipe of recipes) {
    if (isSearchedByText(recipe, input)) {
      newRecipeArray.push(recipe);
    }
  }
  return newRecipeArray;
};

const areOptionsEnabled = (options) => {
  return (
    options.appliance ||
    options.ingredients.length > 0 ||
    options.ustensils.length > 0
  );
};
