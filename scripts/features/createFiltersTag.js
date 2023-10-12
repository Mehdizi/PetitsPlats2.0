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
  for (const tagToDelete of tagsToDelete) {
    const tagToDeleteLowerCase = tagToDelete.innerText.toLowerCase();
    if (tagToDeleteLowerCase === tag) {
      tagToDelete.remove();
      deleteInOptions(tagToDeleteLowerCase);
    }
  }
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

searchBarIngredient.addEventListener("input", (e) => {
  isItAvailable(e, (element = "ingredient"));
});

searchBarAppliance.addEventListener("input", (e) => {
  isItAvailable(e, (element = "appliance"));
});

searchBarUstensil.addEventListener("input", (e) => {
  isItAvailable(e, (element = "ustensil"));
});

const isItAvailable = (e, element) => {
  let inputSearchBar = e.target.value.toLowerCase();
  const optionAvailable = document.querySelectorAll(
    `.filter-option-${element}`
  );
  for (const opt of optionAvailable) {
    const optionItemText = opt.innerText.toLowerCase();
    if (!optionItemText.includes(inputSearchBar)) {
      opt.style.display = "none";
    } else {
      opt.style.display = "block";
    }
  }
};
