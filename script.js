document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");

    // Add event listeners for number buttons
    const numberButtons = document.querySelectorAll(".number");
    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            display.value += button.textContent;
        });
    });

    // Add event listeners for operator buttons
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            display.value += button.textContent;
        });
    });

    // Add event listener for decimal button
    const decimalButton = document.querySelector(".decimal");
    decimalButton.addEventListener("click", function () {
        if (!display.value.includes(".")) {
            display.value += ".";
        }
    });

    // Add event listener for clear button
    clearButton.addEventListener("click", function () {
        display.value = "";
    });

    // Add event listener for calculate button
    calculateButton.addEventListener("click", function () {
        try {
            display.value = eval(display.value);
        } catch (error) {
            alert("Invalid input!");
            display.value = "";
        }
    });

    // Handle keyboard events
    document.addEventListener("keydown", function (event) {
        const key = event.key;
        if (/^[0-9]$/.test(key) || /^[-+*/%]$/.test(key)) {
            display.value += key;
        } else if (key === "Enter") {
            calculateButton.click();
        } else if (key === "Escape") {
            clearButton.click();
        } else if (key === ".") {
            if (!display.value.includes(".")) {
                display.value += ".";
            }
        } else {
            alert("Only numbers and operators (+, -, *, /, %) are allowed.");
        }
    });
});
