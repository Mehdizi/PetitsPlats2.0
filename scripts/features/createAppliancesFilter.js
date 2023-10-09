const applianceFilter = document.querySelector("#appliance");

const filterAppliance = (recipes) => {
  const appliancesList = [];
  for (const recipe of recipes) {
    applianceLowerCase = recipe.appliance.toLowerCase();
    if (!appliancesList.includes(applianceLowerCase)) {
      appliancesList.push(applianceLowerCase);
    }
    options.appliance;
    let index = appliancesList.indexOf(options.appliance);
    if (index !== -1) {
      appliancesList.splice(index, 1);
    }
  }
  return appliancesList;
};

const displayAppliancesList = (appliancesList) => {
  const applianceFilterItems = document.querySelector(
    ".appliance-filter-items"
  );
  applianceFilterItems.innerHTML = "";
  for (const appli of appliancesList) {
    const applianceItem = createDomElement("li", {
      value: appli,
      class: "filter-option-appliance filter-option",
    });
    applianceItem.innerText = appli;
    applianceFilterItems.append(applianceItem);
  }
};
