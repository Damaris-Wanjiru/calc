// calculator
//get the box id, give it a name display
const display = document.getElementById("box");

function appendToDisplay(input){  // we are passing in one character
    display.value += input;     //take the display element,access its value, append it to the input using +=
}

function calculate(){ //use try block , catch block to catch any errors in the equation
    try{
        display.value = eval(display.value);  
    }
    catch(error){
        display.value = "error"

    }
   
}

function clearDisplay(){
    display.value =  "";
}



