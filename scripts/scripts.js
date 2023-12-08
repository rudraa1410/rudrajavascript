/*** Vraj Patel */

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ";
let duration = 0; // Initialize duration with a default value, you can change it based on your specific needs

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element.
    - check the value of the modelName variable, and use that to calculate the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = 0;

    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    costLabel.innerHTML = totalCost;
}

/****************** model button logic ******************/
/* 
- first, create a variable to represent the "Switch Model" pseudo-button.
- second, create a function called changeModel() which checks the value of the model name variable.
- then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
let modelButton = document.getElementById("switch-model");

function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
- then, create a function called changeDuration() that will
    - create a variable to represent the duration-text span element
    - prompt() the user for a new duration
    - save the result of the prompt() to the duration variable
    - change the innerHTML of the duration-text span element to this new value
    - recalculate() the total cost/
- finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

let durationButton = document.getElementById("change-duration");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter new duration:");

    // Validate if newDuration is a valid number
    if (!isNaN(newDuration) && newDuration !== null) {
        duration = parseFloat(newDuration);
        durationText.innerHTML = duration;
        recalculate();
    } else {
        alert("Please enter a valid number for duration.");
    }
}

durationButton.addEventListener("click", changeDuration);
