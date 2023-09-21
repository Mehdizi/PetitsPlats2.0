const applianceFilter = () => {
  const filterAppliance = document.querySelector("#appliance");
  const applianceList = [];
  recipes.forEach((recipe) => {
    applianceLowerCase = recipe.appliance.toLowerCase();
    if (applianceList.includes(applianceLowerCase)) {
    } else {
      applianceList.push(applianceLowerCase);
    }
  });
  applianceList.forEach((element) => {
    const appliance = createDomElement("option", { value: element });
    appliance.innerText = element;
    filterAppliance.append(appliance);
  });
};

applianceFilter();
