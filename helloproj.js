const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator_keys");
const display = document.querySelector(".calculator_display");
const input = document.querySelector(".name_input");

input.addEventListener("input", d => {
    updateName = d.target.value;
    }
)

keys.addEventListener("click", e => {
if (e.target.matches("button")){
    const key = e.target;
    const action = key.dataset.action;

if (action ==="hello") {
   display.textContent = "Hello" + " " + updateName;
}
}
})