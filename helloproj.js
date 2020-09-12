const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator_keys");
const display = document.querySelector(".calculator_display");

let displayName = "";

keys.addEventListener("click", e => {
    if (e.target.matches("button")){
        let key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent; 
    
        if(!action){
            displayName = keyContent;
            display.textContent = displayName;
        }

        if (action==="hello") { 
            display.textContent = "Hello" + " " + displayName;
        }

        if (action==="goodbye") {
            display.textContent = "Goodbye" + " " + displayName;
        }

        if (action==="clear"){
            display.textContent = "Select a new name";
        }
    }
})