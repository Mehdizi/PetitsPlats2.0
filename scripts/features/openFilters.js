const filterArrowIngredient = document.querySelector(
  ".filter-arrow-ingredient"
);
const filterArrowAppliance = document.querySelector(".filter-arrow-appliance");
const filterArrowUstensil = document.querySelector(".filter-arrow-ustensil");

ingredientFilterName = document.querySelector("#ingredient-name");
ustensilFilterName = document.querySelector("#ustensil-name");
applianceFilterName = document.querySelector("#appliance-name");

let counterIngredient = 0;
let counterAppliance = 0;
let counterUstensil = 0;

ingredientFilterName.addEventListener("click", () => {
  if (counterIngredient === 0) {
    ingredientFilter.classList.add("filter-wrapper-open");
    filterArrowIngredient.classList.add("filter-arrow-open");
    counterIngredient = counterIngredient + 1;
  } else {
    ingredientFilter.classList.remove("filter-wrapper-open");
    filterArrowIngredient.classList.remove("filter-arrow-open");
    counterIngredient = counterIngredient - 1;
  }
});

applianceFilterName.addEventListener("click", () => {
  if (counterAppliance === 0) {
    applianceFilter.classList.add("filter-wrapper-open");
    filterArrowAppliance.classList.add("filter-arrow-open");
    counterAppliance = counterAppliance + 1;
  } else {
    applianceFilter.classList.remove("filter-wrapper-open");
    filterArrowAppliance.classList.remove("filter-arrow-open");
    counterAppliance = counterAppliance - 1;
  }
});

ustensilFilterName.addEventListener("click", () => {
  if (counterUstensil === 0) {
    ustensilFilter.classList.add("filter-wrapper-open");
    filterArrowUstensil.classList.add("filter-arrow-open");
    counterUstensil = counterUstensil + 1;
  } else {
    ustensilFilter.classList.remove("filter-wrapper-open");
    filterArrowUstensil.classList.remove("filter-arrow-open");
    counterUstensil = counterUstensil - 1;
  }
});
