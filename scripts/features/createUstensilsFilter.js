const ustensilFilter = document.querySelector("#ustensil");

const filterUstensil = (recipes) => {
  const ustensilsList = [];
  for (const recipe of recipes) {
    for (const ustensil of recipe.ustensils) {
      const utensilLowerCase = ustensil.toLowerCase();
      if (!ustensilsList.includes(utensilLowerCase)) {
        ustensilsList.push(utensilLowerCase);
      }
      const ustensilsToRemove = options.ustensils;
      for (const i of ustensilsToRemove) {
        let index = ustensilsList.indexOf(i);
        if (index !== -1) {
          ustensilsList.splice(index, 1);
        }
      }
    }
  }
  return ustensilsList;
};

const displayUstentilsList = (ustensilsList) => {
  const ustentilFilterItems = document.querySelector(".ustensil-filter-items");
  ustentilFilterItems.innerHTML = "";
  for (const ust of ustensilsList) {
    const ustensilItem = createDomElement("li", {
      value: ust,
      class: "filter-option filter-option-ustensil",
    });
    ustensilItem.innerText = ust;
    ustentilFilterItems.append(ustensilItem);
  }
};
