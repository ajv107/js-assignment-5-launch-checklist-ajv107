// Write your JavaScript code here!



window.addEventListener("load", function() {
    const form = document.getElementById("launchForm").getElementsByTagName("form")[0];
    form.addEventListener("submit", function(){
    
        const pilot = document.getElementsByName("pilotName")[0].value;
        const copilot = document.getElementsByName("copilotName")[0].value;
        const fuelLevel = document.getElementsByName("fuelLevel")[0].value;
        const cargoMass = document.getElementsByName("cargoMass")[0].value;
        const list = document.getElementById("faultyItems");

        formSubmission(document,list,pilot,copilot,fuelLevel,cargoMass);
        event.preventDefault();
    });


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   
    let planet = pickPlanet(listedPlanets);
    let name = planet.name;
    let diameter = planet.diameter;
    let star = planet.star;
    let distance = planet.distance;
    let imageUrl = planet.image;
    let moons = planet.moons;
    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
})
});
