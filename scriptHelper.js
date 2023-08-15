// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML =
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
   if(!(testInput) || testInput ==="")
    return "Empty";

   else if (Number(testInput))
    return "Is a Number";

   else 
    return "Not a Number";
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if(validateInput(pilot) === "Empty" ||validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty"|| validateInput(cargoLevel) === "Empty"){
    alert("Please fill out all fields");
   }
   else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
    alert(`Please only enter numbers for Fuel Level and Cargo Mass`);
} else if (validateInput(pilot)===`Is a Number`||validateInput(copilot)===`Is a Number`) {
    alert('Please do not enter numbers in name slots');
} 
else {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const launchStatus = document.getElementById("launchStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const fuelStatus = document.getElementById("fuelStatus");

pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
list.style.visibility = 'hidden';
}
if (Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = `Not enough fuel for journey`;
    list.style.visibility = 'visible';
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `#C7254E`;
} else if (Number(cargoLevel) > 10000) {
    cargoStatus.innerHTML = `Too much mass for takeoff`;
    list.style.visibility = `visible`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "#C7254E";
} else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
    list.style.visibility = `visible`;
    fuelStatus.innerHTML = `Enough fuel for journey`;
    cargoStatus.innerHTML = `Mass cleared for takeoff`;
    launchStatus.innerHTML = `Shuttle ready for launch`;
    launchStatus.style.color = `#419F6A`;
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetListIndex = Math.floor(Math.random() * planets.length);
    return planets[planetListIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
