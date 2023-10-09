const createRecipeCard = (recipe) => {
  const mainSectionWrapper = document.querySelector(".main-section-wrapper");
  const divPreparationTime = createDomElement("div", {
    class: "div-preparation-time",
  });
  const preparationTime = createDomElement("p");
  preparationTime.innerText = recipe.time + " min";
  divPreparationTime.append(preparationTime);

  const recipeCard = createDomElement("article", {
    class: "main-article-wrapper",
  });

  recipeCard.append(divPreparationTime);
  const recipePicture = createDomElement("img", {
    class: "recipe-img",
    src: `assets/${recipe.image}`,
    alt: `${recipe.name}`,
  });
  const recipeTitle = createDomElement("h2", { class: "recipe-title" });
  recipeTitle.innerText = recipe.name;
  const divRecipeWrapper = createDomElement("div", { class: "recipe-wrapper" });
  const recipes = createDomElement("span", {
    class: "recipe",
  });
  recipes.innerText = "Recette";
  const recipeDescription = createDomElement("p", {
    class: "recipe-description",
  });
  recipeDescription.innerText = recipe.description;
  divRecipeWrapper.append(recipes, recipeDescription);

  const mainIngredientWrapper = createDomElement("div", {
    class: "main-ingredient-wrapper",
  });
  const ingredient = createDomElement("span", {
    class: "ingredient",
  });
  ingredient.innerText = "Ingrédients";
  const ingredientWrapper = createDomElement("div", {
    class: "ingredient-wrapper",
  });
  for (const ingr of recipe.ingredients) {
    if (ingr.unit === undefined) {
      ingr.unit = "";
    }
    if (ingr.quantity === undefined) {
      ingr.quantity = "";
    }
    const ingredientDescriptionWrapper = createDomElement("div", {
      class: "ingredient-description-wrapper",
    });
    const ingredientName = createDomElement("h3", {
      class: "ingredient-name",
    });
    ingredientName.innerText = ingr.ingredient;
    const ingredientQuantity = createDomElement("p", {
      class: "ingredient-quantity",
    });
    ingredientQuantity.innerText = ingr.quantity + " " + ingr.unit;
    ingredientDescriptionWrapper.append(ingredientName, ingredientQuantity);
    ingredientWrapper.append(ingredientDescriptionWrapper);
  }
  mainIngredientWrapper.append(ingredient, ingredientWrapper);
  mainSectionWrapper.append(recipeCard);
  recipeCard.append(
    recipePicture,
    recipeTitle,
    divRecipeWrapper,
    mainIngredientWrapper
  );
};

const displayRecipe = (selectedRecipe) => {
  const mainSectionWrapper = document.querySelector(".main-section-wrapper");
  mainSectionWrapper.innerHTML = "";
  for (const recipe of selectedRecipe) {
    createRecipeCard(recipe);
  }
};
