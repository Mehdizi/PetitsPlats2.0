const isValidSearch = ({ searchedByUser, itemToCompare }) => {
  return itemToCompare.toLowerCase() === searchedByUser.toLowerCase();
};

const isInName = (recipeName, input) => {
  return recipeName.toLowerCase().includes(input.toLowerCase());
};

const isInDescription = (recipeDescription, input) => {
  return recipeDescription.toLowerCase().includes(input.toLowerCase());
};

const isInIngredientByText = (recipeIngredients, input) => {
  return recipeIngredients.some((i) => {
    return i.ingredient.toLowerCase().includes(input.toLowerCase());
  });
};

const isInIngredient = ({
  currentRecipeIngredients,
  userIngredientsOptions,
}) => {
  return userIngredientsOptions.every((i) => {
    return currentRecipeIngredients.some((ingr) => {
      return isValidSearch({
        searchedByUser: i,
        itemToCompare: ingr.ingredient,
      });
    });
  });
};

const isInAppliance = (recipeAppliance, input) => {
  return isValidSearch({
    searchedByUser: input,
    itemToCompare: recipeAppliance,
  });
};

const isInUstensils = (recipeUstensils, userUstensilsOptions) => {
  return userUstensilsOptions.every((ustOpt) => {
    return recipeUstensils.some((ustensil) => {
      return isValidSearch({
        searchedByUser: ustOpt,
        itemToCompare: ustensil,
      });
    });
  });
};

const isSearchedByText = (recipe, input) => {
  return (
    isInName(recipe.name, input) ||
    isInDescription(recipe.description, input) ||
    isInIngredientByText(recipe.ingredients, input)
  );
};

const filterRecipesBySearchText = ({ recipes, input }) => {
  return recipes.filter((selectedRecipe) => {
    if (isSearchedByText(selectedRecipe, input)) {
      return selectedRecipe;
    }
  });
};

const areOptionsEnabled = (options) => {
  return (
    options.appliance ||
    options.ingredients.length > 0 ||
    options.ustensils.length > 0
  );
};
