const closeSelectedFilter = () => {
  const closeSelectedFilterButton = document.querySelectorAll(
    ".selected-filter button"
  );
  const selectedFilter = document.querySelectorAll(".selected-filter");
  closeSelectedFilterButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      selectedFilter[index].remove();
      const ingredientFilter = document.querySelector("#ingredient");
      ingredientFilter.value = "ingrédients";
    });
  });
};
