const display = document.querySelector("[data-display]");
const buttons = document.querySelectorAll("[data-button]");
let montos = [];
let operadores = [];

buttons.forEach((item) => {
    item.addEventListener("click", () => {
        switch(item.id){
            case "clear":
                display.innerText = "";
                break;
            case "backspace":
                let string = display.innerText.toString();
                display.innerText = string.substr(0, string.length - 1);
                break;
            case "equal":
                if(display.innerText != "" && (display.innerText != "/" || display.innerText != "*" || display.innerText != "+" || display.innerText != "-")){
                    //eval() realiza una operación aritmetica con un string.
                    // display.innerText = eval(display.innerText);
                    let resultado = 0;
                    let parcial = parseFloat(display.innerText);
                    for(let i = 0; i < operadores.length; i++){
                        switch (operadores[i]){
                            case "/":
                                resultado = montos[i] / parcial;
                                break
                            case "*":
                                resultado = montos[i] * parcial;
                                break;                                
                            case "+":
                                resultado = montos[i] + parcial;
                                break
                            case "-":
                                resultado = montos[i] - parcial;
                                break;                                
                        }
                    }
                    display.innerText = resultado;
                    montos = [];
                    operadores = [];
                }else if(display.innerText == ""){
                    display.innerText = "Null";
                    setTimeout(() => (display.innerText = ""), 2000); 
                }
                break;
            case "division":
                // display.innerText+="/";
                if(display.innerText != "" && (display.innerText != "/" || display.innerText != "*" || display.innerText != "+" || display.innerText != "-")){
                    montos.push(parseFloat(display.innerText));
                    display.innerText = "/";
                    operadores.push("/");
                }else  if(display.innerText == "/" || display.innerText == "*" || display.innerText == "+" || display.innerText == "-"){
                    operadores.pop();
                    operadores.push("/");
                }
                break;
            case "multiplication":
                // display.innerText+="*";
                if(display.innerText != "" && (display.innerText != "/" || display.innerText != "*" || display.innerText != "+" || display.innerText != "-")){
                    montos.push(parseFloat(display.innerText));
                    display.innerText = "*";
                    operadores.push("*");
                }else  if(display.innerText == "/" || display.innerText == "*" || display.innerText == "+" || display.innerText == "-"){
                    operadores.pop();
                    operadores.push("*");
                }
                break;
            case "addition":
                // display.innerText+="+";
                if(display.innerText != "" && (display.innerText != "/" || display.innerText != "*" || display.innerText != "+" || display.innerText != "-")){
                    montos.push(parseFloat(display.innerText));
                    display.innerText = "+";
                    operadores.push("+");
                }else  if(display.innerText == "/" || display.innerText == "*" || display.innerText == "+" || display.innerText == "-"){
                    operadores.pop();
                    operadores.push("+");
                }
                break;
            case "subtraction":
                // display.innerText+="-";
                if(display.innerText != "" && (display.innerText != "/" || display.innerText != "*" || display.innerText != "+" || display.innerText != "-")){
                    montos.push(parseFloat(display.innerText));
                    display.innerText = "-";
                    operadores.push("-")             
                }else if(display.innerText == "/" || display.innerText == "*" || display.innerText == "+" || display.innerText == "-"){
                    operadores.pop();
                    operadores.push("-");
                }
                break;
            case "dot":
                if(display.innerText != "" && (display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-")){
                    display.innerText+=".";
                }else if(display.innerText == ""){
                    
                    display.innerText = "0."
                }
                break;
            case "double-zero":
                if(display.innerText != "" && (display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-")){
                    display.innerText+="00";
                }else{
                    display.innerText = "";
                    display.innerText = "00";
                }
                break;
            case "zero":
                if(display.innerText != "" && (display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-")){
                    display.innerText+="0";
                }else {
                    display.innerText = "";
                    display.innerText = "0";
                }
                break;
            case "one":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="1";
                }else{
                    display.innerText = "";
                    display.innerText = "1";
                }
                break;
            case "two":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="2";
                }else{
                    display.innerText = "";
                    display.innerText = "2";
                }
                break;
            case "three":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="3";
                }else{
                    display.innerText = "";
                    display.innerText = "3";
                }
                break;
            case "four":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="4";
                }else{
                    display.innerText = "";
                    display.innerText = "4";
                }
                break;
            case "five":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="5";
                }else{
                    display.innerText = "";
                    display.innerText = "5";
                }
                break;
            case "six":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="6";
                }else{
                    display.innerText = "";
                    display.innerText = "6";
                }
                break;
            case "seven":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="7";
                }else{
                    display.innerText = "";
                    display.innerText = "7";
                }
                break;
            case "eight":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="8";
                }else{
                    display.innerText = "";
                    display.innerText = "8";
                }
                break;
            case "nine":
                if(display.innerText != "/" && display.innerText != "*" && display.innerText != "+" && display.innerText != "-"){
                    display.innerText+="9";
                }else{
                    display.innerText = "";
                    display.innerText = "9";
                }
                break;
        }
    }) 
})

const themeToggle = document.querySelector("[data-toggler]");
const calculator = document.querySelector("[data-calculator]");
const icon = document.querySelector("[data-icon]");

themeToggle.addEventListener("click", () => {
    calculator.classList.toggle("dark");
    themeToggle.classList.toggle("active");
})