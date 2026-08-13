const count = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const resetButton = document.getElementById("reset");

let counter = 0;

increaseButton.addEventListener("click", function () {
    counter++;
    count.textContent = counter;
});

resetButton.addEventListener("click", function () {
    counter = 0;
    count.textContent = counter;
});