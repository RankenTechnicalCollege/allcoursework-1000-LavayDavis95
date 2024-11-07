"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles)) {
        alert ("Miles driven must be a numeric value.");
        focusAndSelect("#miles");
    } else if (miles <= 0) {
        alert ("Miles driven must be greater than zero.");
        focusAndSelect ("#miles");
    } else if (isNaN(gallons)) {
        alert ("Gallons of gas used must be a numeric value.");
        focusAndSelect("#gallons");
    } else if (gallons <= 0) {
        alert("Gallons of gas used must be greater than zero.");
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

"use strict";
const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = ""
    $("#mpg").value = ""
    focusAndSelect("#miles");
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").addEventListener("dblclick",clearEntries);
    $("#miles").focus();
});