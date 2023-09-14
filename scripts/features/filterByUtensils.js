const utensilsFilter = () => {
  const filterUtensils = document.querySelector("#utensil");
  const utensilList = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((utensil) => {
      let utensilLowerCase = utensil.toLowerCase();
      //   console.log("ustensils : ", utensilLowerCase);
      if (utensilList.includes(utensilLowerCase)) {
      } else if (utensilLowerCase.endsWith("(6)")) {
        return utensilLowerCase.slice(0, -3);
      } else {
        utensilList.push(utensilLowerCase);
      }
    });
  });
  utensilList.forEach((element) => {
    const utensil = createDomElement("option", { value: element });
    utensil.innerText = element;
    filterUtensils.append(utensil);
  });
};

utensilsFilter();
