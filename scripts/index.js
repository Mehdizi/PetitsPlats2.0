const searchBar = document.querySelector("#search");
const ingredientFilterItems = document.querySelector(
  ".ingredient-filter-items"
);
const applianceFilterItems = document.querySelector(".appliance-filter-items");
const ustentilFilterItems = document.querySelector(".ustensil-filter-items");

let options = {
  ustensils: [],
  ingredients: [],
  appliance: "",
};

let currentQuery = "";

const actualizeRecipes = () => {
  return searchRecipes({ recipes, input: currentQuery, options });
};

const displayActualizedRecipes = () => {
  displayRecipe(actualizeRecipes());
  displayCountRecipeNumber(actualizeRecipes());
};

const sortList = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        const tempIndex = list[j];
        list[j] = list[j + 1];
        list[j + 1] = tempIndex;
      }
    }
  }
  return list;
};

const singularize = (list) => {
  const singularizeList = [];
  for (const elem of list) {
    const singularForm = elem.slice(0, -1);
    if (!list.includes(singularForm)) {
      singularizeList.push(elem);
    }
  }
  return singularizeList;
};

const displayActualizeFilters = () => {
  displayIngredientsList(
    singularize(sortList(filterIngredient(actualizeRecipes())))
  );
  displayAppliancesList(sortList(filterAppliance(actualizeRecipes())));
  displayUstentilsList(sortList(filterUstensil(actualizeRecipes())));
};

searchBar.addEventListener("input", (e) => {
  currentQuery = e.target.value;
  displayActualizedRecipes();
  displayActualizeFilters();
  displaySuggestSearch(actualizeRecipes(), currentQuery);
});

ingredientFilterItems.addEventListener("click", (e) => {
  options.ingredients.push(e.target.textContent);
  displayFiltersTag(e.target.textContent);
  displayActualizedRecipes();
  displayActualizeFilters();
});

applianceFilterItems.addEventListener("click", (e) => {
  options.appliance = e.target.textContent;
  displayFiltersTag(e.target.textContent);
  displayActualizedRecipes();
  displayActualizeFilters();
});

ustentilFilterItems.addEventListener("click", (e) => {
  options.ustensils.push(e.target.textContent);
  displayFiltersTag(e.target.textContent);
  displayActualizedRecipes();
  displayActualizeFilters();
});

const init = () => {
  displayRecipe(recipes);
  displayCountRecipeNumber(recipes);
  displayIngredientsList(singularize(sortList(filterIngredient(recipes))));
  displayAppliancesList(sortList(filterAppliance(recipes)));
  displayUstentilsList(sortList(filterUstensil(recipes)));
};

init();
