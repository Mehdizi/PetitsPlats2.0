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
  const searchByOptionsArray = [];
  for (let i = 0; i < recipes.length; i++) {
    const r = recipes[i];
    if (allOptionsAreEnabled(options)) {
      if (
        isInIngredient({
          currentRecipeIngredients: r.ingredients,
          userIngredientsOptions: options.ingredients,
        }) &&
        isInAppliance(r.appliance, options.appliance) &&
        isInUstensils(r.ustensils, options.ustensils)
      ) {
        searchByOptionsArray.push(r);
      }
    }
    if (onlyIngredientOptionEnabled(options)) {
      if (
        isInIngredient({
          currentRecipeIngredients: r.ingredients,
          userIngredientsOptions: options.ingredients,
        })
      ) {
        searchByOptionsArray.push(r);
      }
    }
    if (onlyApplianceOptionEnabled(options)) {
      if (isInAppliance(r.appliance, options.appliance)) {
        searchByOptionsArray.push(r);
      }
    }
    if (onlyUstensilOptionEnabled(options)) {
      if (isInUstensils(r.ustensils, options.ustensils)) {
        searchByOptionsArray.push(r);
      }
    }
    if (onlyUstensilOptionDisable(options)) {
      if (
        isInIngredient({
          currentRecipeIngredients: r.ingredients,
          userIngredientsOptions: options.ingredients,
        }) &&
        isInAppliance(r.appliance, options.appliance)
      ) {
        searchByOptionsArray.push(r);
      }
    }
    if (onlyApplianceOptionDisable(options)) {
      if (
        isInIngredient({
          currentRecipeIngredients: r.ingredients,
          userIngredientsOptions: options.ingredients,
        }) &&
        isInUstensils(r.ustensils, options.ustensils)
      ) {
        searchByOptionsArray.push(r);
      }
    }
    if (onlyIngredientOptionDisable(options)) {
      if (
        isInAppliance(r.appliance, options.appliance) &&
        isInUstensils(r.ustensils, options.ustensils)
      ) {
        searchByOptionsArray.push(r);
      }
    }
  }
  return searchByOptionsArray;
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
