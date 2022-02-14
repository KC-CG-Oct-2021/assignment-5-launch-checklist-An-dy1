// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === '') {
        return 'empty';
    } else if (isNan(testInput)) {
        return 'not a number'
    } else if (isNan(testInput) === false) {
        return 'is a number'
    } else {
        return 'invalid input'
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");


    if (validateInput(pilot) === 'empty' || validateInput(copilot) === 'empty' || validateInput(fuelLevel) === 'empty' || validateInput(cargoLevel) === 'empty') {
        alert(`Every field is required`);
    } else if (validateInput(pilot) === 'is a number' || validateInput(copilot) === 'is a number') {
        alert(`Names can't be numbers`)
    } else if (validateInput(fuelLevel) === 'not a number' || validateInput(cargoLevel) === 'not a number') {
        alert(`Numbers can't be names`)
    } else {
        list.style.visibility = "visible";

        pilotStatus.innerHtml = `Pilot ${pilot} ready to go to the moon`
        copilotStatus.innerHtml = `Copilot ${copilot} ready to go to the moon`

        if (fuelLevel < 10000) {
            fuel.innerHtml = `fuel level is too low to launch!`
            launchStatus.innerHtml = `Shuttle not ready for launch`
            launchStatus.style.color = `red`
        } else if (cargoLevel > 10000) {
            cargo.innerHtml = `cargo weight too high to launch!`
            launchStatus.innerHtml = `Shuttle not ready for launch`
            launchStatus.style.color = `red`
        } else {
            launchStatus.innerHtml = `Shuttle ready for launch`
            launchStatus.style.color = `green`
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function(response) {});

    return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;