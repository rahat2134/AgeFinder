// Declare array globally
let array;

// Store each input
let dobInput = document.querySelector("#dob");

// Event listener for button click
document.querySelector("#btn").addEventListener("click", ageFinder);


// apply logic for calculating person's age

function ageFinder() {
    // Update array value inside the function
    array = dobInput.value.split("-"); // [dd,mm,yyyy]

    //  Converts the year part of the date (in array[2])
    const birthYear = parseInt(array[2], 10);
    // Converts the month part of the date (in array[1]) into an integer and subtracts 1.
    const birthMonth = parseInt(array[1], 10) - 1; // Months are 0-based
    const birthDay = parseInt(array[0], 10);

    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if birthday has occurred this year
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(isNaN(age) || age<0){
    document.querySelector("#output").textContent=`Please write correct D.O.B ==>          
    Eg.if your d.o.b is 1 FEB 2005 then write it as 01-02-2005`;
    }
    else{
    document.querySelector("#output").textContent=`Age:${age}`;

    }

}

// add dark mode functionality
document.querySelector("#blackTheme").addEventListener("click", darkmode);
let currentMode = "light";

function darkmode() {
    var linkElement = document.querySelector("#css");

    // Check if the current stylesheet URL includes "style.css"
    if (linkElement.href.includes("style.css")) {
        currentMode = "dark";
        // Switch to "style2.css" if the current stylesheet is "style.css"
        linkElement.href = "style2.css";
    } else {
        currentMode = "light";
        // Switch back to "style.css" if the current stylesheet is not "style.css"
        linkElement.href = "style.css";
    }

    // You can use the currentMode variable elsewhere in your code
    console.log("Current mode: " + currentMode);
}
document.querySelector("#btn4").addEventListener("click", clear);
function clear(){
    document.querySelector("#feedback").value="";
    alert("Your feedback has been submitted")
}

