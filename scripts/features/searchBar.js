const searchBar = document.querySelector("#search");

searchBar.addEventListener("keyup", (e) => {
  const searchInput = e.target.value;
  const recipe = document.querySelectorAll(".main-article-wrapper");
  searchBarFilter(searchInput, recipe);
});

searchBarFilter = (input, recipe) => {
  if (input.length > 2) {
    recipe.forEach((elem) => {
      if (elem.textContent.toLowerCase().includes(input)) {
        elem.style.display = "flex";
      } else {
        elem.style.display = "none";
      }
    });
  } else {
    recipe.forEach((elem) => {
      elem.style.display = "flex";
    });
  }
};
