const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator_keys");
const display = document.querySelector(".caculator_display");

keys.addEventListener("click", e => {
if (e.target.matches("button")){
if (action === "hello") {
    display.textContent = "Hello World!";
}
}
})