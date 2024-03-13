//https://portiaportia.github.io/json/house-plans.json

const getHouses = async() => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try {
       const response = await fetch(url);
       return response.json();
    } catch (error) {
        console.log(error);
    }
};


const displayHouses = async() => {
    const houses = await getHouses();

  
    houses.forEach(house => {
       
      const mainHouseDiv = document.createElement("div");
      mainHouseDiv.classList.add("main-house");

      


      const mainImage = document.createElement("img");
      mainImage.src = "images/farm.webp";
      mainHouseDiv.append(mainImage);
      
  
      const houseInfoDiv = document.createElement("div");
      houseInfoDiv.classList.add("house-info");
  
      
      const houseName = document.createElement("h2");
      houseName.textContent = house.name;
      houseInfoDiv.append(houseName);
      
  
      const houseSize = document.createElement("p");
      houseSize.textContent = `Size: ${house.size}`;
      houseInfoDiv.append(houseSize);
  
      const houseBedrooms = document.createElement("p");
      houseBedrooms.textContent = `Bedrooms: ${house.bedrooms}`;
      houseInfoDiv.append(houseBedrooms);
  
      const houseFeatures = document.createElement("ul");
      house.features.forEach(feature => {
        const houseFeature = document.createElement("li");
        houseFeature.textContent = feature;
        houseFeatures.append(houseFeature);
      });

      
      houseInfoDiv.append(houseFeatures);
  
      mainHouseDiv.append(houseInfoDiv);
      document.body.append(mainHouseDiv);
  
      const floorPlansSection = document.createElement("section");
      floorPlansSection.classList.add("floor-plans");
      document.body.append(floorPlansSection);
  
      house.floor_plans.forEach(floorPlan => {
        const floorPlanDiv = document.createElement("div");
        floorPlanDiv.classList.add("floor-plan");

        const floorPlanName = document.createElement("h2");
      floorPlanName.textContent = floorPlan.name;
      floorPlanDiv.append(floorPlanName);
  
        const floorPlanImage = document.createElement("img");
        floorPlanImage.src = "images/farm-floor1.webp";
        floorPlanDiv.append(floorPlanImage);
  
        floorPlansSection.append(floorPlanDiv);
      });
      
    });
  };
  
  displayHouses();




     
