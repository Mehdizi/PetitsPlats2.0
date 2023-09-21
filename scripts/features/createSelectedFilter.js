const createSelectedFilter = (option) => {
  const selectedFilterWrapper = document.querySelector(
    ".selected-filter-wrapper"
  );
  const selectedFilter = createDomElement("div", { class: "selected-filter" });
  selectedFilter.innerText = option;
  const buttonClosefilter = createDomElement("button");
  buttonClosefilter.addEventListener("click", () => {
    closeSelectedFilter();
  });
  buttonClosefilter.innerText = "X";
  selectedFilter.append(buttonClosefilter);
  selectedFilterWrapper.append(selectedFilter);
};
