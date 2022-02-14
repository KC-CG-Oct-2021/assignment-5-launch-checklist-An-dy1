// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
}

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (numberInput === '') {
        return 'empty';
    } else if (isNaN(numberInput)) {
        return 'not a number'
    } else if (isNaN(numberInput) === false) {
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
    let planetsFetched;

    await fetch(`https://handlers.education.launchcode.org/static/planets.json`).then(function(response) {
        if (response.status != 200) {
            throw new Error(`Bad response`)
        } else {
            planetsFetched = response.json();
        }
    });

    return planetsFetched;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * 5)
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;