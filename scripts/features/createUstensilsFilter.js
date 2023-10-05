const ustensilFilter = document.querySelector("#ustensil");

const filterUstensil = (recipes) => {
  const ustensilsList = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      const utensilLowerCase = ustensil.toLowerCase();
      if (!ustensilsList.includes(utensilLowerCase)) {
        ustensilsList.push(utensilLowerCase);
      }
      const ustensilsToRemove = options.ustensils;
      ustensilsToRemove.forEach((i) => {
        let index = ustensilsList.indexOf(i);
        if (index !== -1) {
          ustensilsList.splice(index, 1);
        }
      });
    });
  });
  return ustensilsList;
};

const displayUstentilsList = (ustensilsList) => {
  const ustentilFilterItems = document.querySelector(".ustensil-filter-items");
  ustentilFilterItems.innerHTML = "";
  ustensilsList.forEach((ust) => {
    const ustensilItem = createDomElement("li", {
      value: ust,
      class: "filter-option",
    });
    ustensilItem.innerText = ust;
    ustentilFilterItems.append(ustensilItem);
  });
};
