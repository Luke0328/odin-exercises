
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if(b === 0) {
                return "DIVISION BY ZERO"
            }
            return divide(a, b);
    }
}

let display_val = "";
let a = null;
let b = null;
let op = null;
let op_pressed = false;
let equals_pressed = false;
let decimal_exists = false;

function buttonOnClick() {
    let button = this.textContent;

    if(button == "Clear") {
        display_val = "0";
        op_pressed = false;
        a = null;
        b = null;
        op = null;
        equals_pressed = false;
        decimal_exists = false;
    }
    else if(button === "Delete") {
        display_val = display_val.slice(0, -1);
    }
    else if(button === '+' || button === '-' || button === '*' || button === '/') {
        decimal_exists = false;
        if(!op_pressed || equals_pressed) {
            op = button;
            op_pressed = true;
            a = Number(display.textContent);
        }
        else {
            b = Number(display_val);
            console.log(a);
            console.log(b);
            let res = operate(op, a, b);
            console.log(res);
            a = res;
            b = null;
            op = button;
        }
        if(a) {
            display.textContent = a;
        }
        display_val = "";
        equals_pressed = false;
        return;
    }
    else if(button === "=") {
        equals_pressed = true;
        b = Number(display_val);
        console.log(a);
        console.log(b);
        let res = operate(op, a, b);
        console.log("res:" + res);
        a = res;

        if(a) {
            display.textContent = a;
        }
        display_val = "";
        return;
    }
    else { // if number
        if(button === '.') {
            if(decimal_exists === true) {
                return;
            }
            else {
                decimal_exists = true;
            }
        }
        if(display_val === '0') {
            display_val = button;
        }
        else {
            display_val += button;
        }
    }

    if(display_val === "") {
        display.textContent = "0";
    }
    else {
        display.textContent = display_val;
    } 
}

function mousedownAnim() {
    this.classList.add("clicked");
}

function mouseupAnim() {
    this.classList.remove("clicked");
}

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", buttonOnClick);
    button.addEventListener("mousedown", mousedownAnim);
    button.addEventListener("mouseup", mouseupAnim);
});