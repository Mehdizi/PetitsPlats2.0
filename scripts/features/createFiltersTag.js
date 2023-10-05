const displayFiltersTag = (tag) => {
  const selectedFilterWrapper = document.querySelector(
    ".selected-filter-wrapper"
  );
  const selectedFilter = createDomElement("div", {
    class: `selected-filter`,
  });
  selectedFilter.innerText = tag;
  const buttonClosefilter = createDomElement("i", {
    class: "fa-solid fa-xmark",
  });
  buttonClosefilter.addEventListener("click", () => {
    deleteFiltersTag(`${tag}`);
  });
  selectedFilter.append(buttonClosefilter);
  selectedFilterWrapper.append(selectedFilter);
};

const deleteFiltersTag = (tag) => {
  const tagsToDelete = document.querySelectorAll(".selected-filter");
  tagsToDelete.forEach((tagToDelete) => {
    const tagToDeleteLowerCase = tagToDelete.innerText.toLowerCase();
    if (tagToDeleteLowerCase === tag) {
      tagToDelete.remove();
      deleteInOptions(tagToDeleteLowerCase);
    }
  });
};

const deleteInOptions = (tag) => {
  let indexIngredient = options.ingredients.indexOf(tag);
  let indexUstensil = options.ustensils.indexOf(tag);
  if (indexIngredient !== -1) {
    options.ingredients.splice(indexIngredient, 1);
    displayActualizedRecipes();
    displayActualizeFilters();
  }
  if (indexUstensil !== -1) {
    options.ustensils.splice(indexUstensil, 1);
    displayActualizedRecipes();
    displayActualizeFilters();
  }
  if (options.appliance === tag) {
    options.appliance = "";
    displayActualizedRecipes();
    displayActualizeFilters();
  }
};

const searchBarIngredient = document.querySelector(".filter-ingredient-input");
const searchBarAppliance = document.querySelector(".filter-appliance-input");
const searchBarUstensil = document.querySelector(".filter-ustensil-input");

searchBarIngredient.addEventListener("input", (event) => {
  let inputSearchBar = event.target.value.toLowerCase();
  console.log(inputSearchBar);

  const optionAvailable = document.querySelectorAll(
    ".filter-option-ingredient"
  );
  optionAvailable.forEach((opt) => {
    const optionItemText = opt.innerText.toLowerCase();
    console.log("opt :", opt.innerText);
    if (!optionItemText.includes(inputSearchBar)) {
      opt.style.display === "none";
    } else {
      opt.style.display === "flex";
    }
  });
});
