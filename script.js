class Gear {
    constructor(name, description, miles) {
        this.name = name;
        this.description = description;
        this.miles = miles;
    }
}

const gearList = [];

function addGear() {
    const name = prompt("Gear name:");
    const description = prompt("Description:");
    const miles = prompt("Miles:");

    const newGear = new Gear(name, description, miles);

    // Add it to the array
    gearList.push(newGear);

    // Display it
    displayGear(newGear);
}

function displayGear(gear) {
    const gearListDiv = document.getElementById("gearList");

    // Create a new HTML element
    const gearDiv = document.createElement("div");

    // Put the gear information inside it
    gearDiv.innerHTML = `
        <h3>${gear.name}</h3>
        <p>${gear.description}</p>
        <p>Miles: ${gear.miles}</p>
    `;

    // Add it to the webpage
    gearListDiv.appendChild(gearDiv);
}