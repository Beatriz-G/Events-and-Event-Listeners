// Variables to select the fans, fish, and pets elements in footer
var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

// Mouseover events for fans, fish, and pets to change the text of elements
fans.addEventListener("mouseover", function () {
    fans.innerText = "123k";
});

fish.addEventListener("mouseover", function() {
    fish.innerText = "47k";
});

pets.addEventListener("mouseover", function() {
    pets.innerText = "20k";
});

// Event listener that listens for a click event on the Dark/Light toggle input
themeSwitchInput.addEventListener("click", function() {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        ball.classList.remove("move-right");
        h1.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        h1.innerText = "Party Quincy";
    }
});