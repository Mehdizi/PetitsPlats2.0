const allOptionsAreEnabled = (options) => {
  return (
    options.ingredients.length > 0 &&
    options.appliance &&
    options.ustensils.length > 0
  );
};

const onlyIngredientOptionEnabled = (options) => {
  return (
    options.ingredients.length > 0 &&
    !options.appliance &&
    options.ustensils.length == 0
  );
};

const onlyUstensilOptionEnabled = (options) => {
  return (
    options.ingredients.length == 0 &&
    !options.appliance &&
    options.ustensils.length > 0
  );
};

const onlyApplianceOptionEnabled = (options) => {
  return (
    options.ingredients.length == 0 &&
    options.appliance &&
    options.ustensils.length == 0
  );
};

const onlyApplianceOptionDisable = (options) => {
  return (
    options.ingredients.length > 0 &&
    options.ustensils.length > 0 &&
    !options.appliance
  );
};

const onlyUstensilOptionDisable = (options) => {
  return (
    options.ingredients.length > 0 &&
    options.appliance &&
    options.ustensils.length == 0
  );
};

const onlyIngredientOptionDisable = (options) => {
  return (
    options.ingredients.length == 0 &&
    options.appliance &&
    options.ustensils.length > 0
  );
};

const searchByOptions = ({ recipes, options }) => {
  return recipes.filter((r) => {
    if (allOptionsAreEnabled(options)) {
      return (
        isInIngredient({
          currentRecipeIngredients: r.ingredients,
          userIngredientsOptions: options.ingredients,
        }) &&
        isInAppliance(r.appliance, options.appliance) &&
        isInUstensils(r.ustensils, options.ustensils)
      );
    }
    if (onlyIngredientOptionEnabled(options)) {
      return isInIngredient({
        currentRecipeIngredients: r.ingredients,
        userIngredientsOptions: options.ingredients,
      });
    }
    if (onlyApplianceOptionEnabled(options)) {
      return isInAppliance(r.appliance, options.appliance);
    }
    if (onlyUstensilOptionEnabled(options)) {
      return isInUstensils(r.ustensils, options.ustensils);
    }
    if (onlyUstensilOptionDisable(options)) {
      return (
        isInIngredient({
          currentRecipeIngredients: r.ingredients,
          userIngredientsOptions: options.ingredients,
        }) && isInAppliance(r.appliance, options.appliance)
      );
    }
    if (onlyApplianceOptionDisable(options)) {
      return (
        isInIngredient({
          currentRecipeIngredients: r.ingredients,
          userIngredientsOptions: options.ingredients,
        }) && isInUstensils(r.ustensils, options.ustensils)
      );
    }
    if (onlyIngredientOptionDisable(options)) {
      return (
        isInAppliance(r.appliance, options.appliance) &&
        isInUstensils(r.ustensils, options.ustensils)
      );
    }
  });
};

const filterRecipesBySearchTextAndOptions = ({ recipes, input, options }) => {
  return searchByOptions({
    recipes: filterRecipesBySearchText({ recipes, input }),
    options,
  });
};

const searchRecipes = ({
  recipes,
  input = "",
  options = { ingredients: [], appliance: "", ustensils: [] },
}) => {
  if (input.length >= 3 && areOptionsEnabled(options)) {
    return filterRecipesBySearchTextAndOptions({ recipes, input, options });
  }
  if (areOptionsEnabled(options)) {
    return searchByOptions({ recipes, options });
  }
  if (input.length < 3) {
    return recipes;
  }
  return filterRecipesBySearchText({ recipes, input });
};
