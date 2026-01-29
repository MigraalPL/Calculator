const display = document.querySelector(".top-calc")
const buttons = document.querySelectorAll("button")

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            expression = "";
            display.textContent = "0";
            return;
        }
        if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.textContent = expression;
            } catch {
                display.textContent = "Error";
                expression = "";
            }
            return;
        }

        if (
            expression === "" && ["+", "*", "/"].includes(value)
        ) {
            return;
        }
        

        expression += value;
        display.textContent = expression;
    })
})
