const suggestSearch = (recipes, currentQuery) => {
  if (recipes.length === 0) {
    return `Aucune recette ne contient ‘${currentQuery}’ vous pouvez chercher «tarte aux pommes », « poisson » etc..`;
  } else {
    return "";
  }
};

const displaySuggestSearch = (recipes, currentQuery) => {
  const sectionRecipes = document.querySelector(".main-section-wrapper");
  const message = createDomElement("span", {
    class: "message-suggested-search",
  });
  message.innerText = suggestSearch(recipes, currentQuery);
  sectionRecipes.append(message);
};
