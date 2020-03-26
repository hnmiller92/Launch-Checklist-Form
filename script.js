// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   let form = document.getElementById("form");
   form.addEventListener("submit", function() {
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
         alert("All fields are required!");
         event.preventDefault();
         } if (isNaN(pilotName)) {
            pilotName = pilotName.toString();
         } else {
            alert("Please enter a valid name for Pilot Name.");
            event.preventDefault();
         } if (isNaN(copilotName)) {
            copilotName = copilotName.toString();
         } else {
            alert("Please enter a valid name for Co-pilot Name.");
            event.preventDefault();
         } if (isNaN(fuelLevel)) {
            alert("Please enter a valid number for Fuel Level.")
            event.preventDefault();
         } if (isNaN(cargoMass)) {
            alert("Please enter a valid number for Cargo Mass.")
            event.preventDefault();
         }

         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         pilotStatus.innerHTML = `Pilot ${pilotName} is ready for takeoff`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for takeoff`;

         if (fuelLevel < 10000) {
            let faultyItems = document.getElementById("faultyItems");
            let launchStatus = document.getElementById("launchStatus");
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "There is not enough fuel for the journey.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            event.preventDefault();
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch.";
         }

         if (cargoMass > 10000) {
            let faultyItems = document.getElementById("faultyItems");
            let cargoStatus = document.getElementById("cargoStatus");
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            event.preventDefault();
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch.";
         }

         if (fuelLevel >= 10000 && cargoMass <= 10000) {
            let faultyItems = document.getElementById("faultyItems");
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch.";
            launchStatus.style.color = "green";
            event.preventDefault();
         }
      })
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            const target = document.getElementById("missionTarget");
            let index = 3;   
            target.innerHTML += `
               <h2>Mission Destination</h2>
               <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
               </ol>
               <img src="${json[index].image}"></img>
               `
         })

      })



      
   })

// <h2>Mission Destination</h2>
// <ol>
// <li>Name: ${}</li>
{/* <li>Diameter: ${}</li>
<li>Star: ${}</li>
<li>Distance from Earth: ${}</li>
<li>Number of Moons: ${}</li>
</ol> */}
// <img src="${}"></img>

