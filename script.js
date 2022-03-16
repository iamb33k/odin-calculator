let displayVar = 0;
let operator = "";
let result;

//basic addition
const add = function(num1, num2) {
    let result = num1+num2;
    displayVar = result;
    document.getElementById("display").innerHTML = displayVar;
    return(result);
  };
//basic subtraction
  const subtract = function(num1, num2) {
    let result = num1-num2;
    displayVar = result;
    document.getElementById("display").innerHTML = displayVar;
    return(result);
  };

//basic multiplication
  const multiply = function(num1, num2) {
    let result = num1 * num2;
    displayVar = result;
    document.getElementById("display").innerHTML = displayVar;
    return(result);
  };

//basic division
  const divide = function(num1, num2) {
    let result = num1 / num2;
    displayVar = result;
    document.getElementById("display").innerHTML = displayVar;
    return(result);
  };

//call one of 4 functions above based on operator value of button
  const operate = function(num1, num2, operator){ 
    if (operator == "+"){
          add(num1,num2);
          console.log(displayVar);
      }
      else if(operator == "-"){
          subtract(num1,num2);
          console.log(result);
          return(result);
      }
      else if(operator == "*"){
          multiply(num1,num2);
          console.log(result);
          return(result);
      }
      else if(operator == "/"){
          divide(num1,num2);
          console.log(result);
          return(result);
      }
  }

//update DisplayVar when buttons are clicked
  const updateDisplayVar = function(e){
    displayVar = displayVar + this.value;
    console.log(displayVar);
    document.getElementById("display").innerHTML = displayVar;
    return(displayVar);
  }

//store Number1 and operator when an operator button is clicked
  const storeNum1 = function(e){
    num1 = parseInt(displayVar);
    console.log(num1);
    operator = this.value;
    console.log(operator);
    document.getElementById("display").innerHTML = displayVar;
    displayVar = 0;
    return(num1, operator);
  }

//store number2 when equal button is clicked
  const storeNum2 = function(e){
   num2 = parseInt(displayVar);
   console.log(num2);
   return(num2);
  }

//run update DisplayVar when number buttons are clicked
  let numberButtons = document.querySelectorAll(".number-button")
  numberButtons.forEach((numberButton) => {numberButton.addEventListener('click', updateDisplayVar)});
//run store number1 when operator button is clicked 
  let operatorButtons = document.querySelectorAll(".operator-button")
  operatorButtons.forEach((operatorButton) => {operatorButton.addEventListener('click', storeNum1)});
//run store number2 and operate when equals button is clicked  
  document.getElementById("equals-button").addEventListener('click', () => {storeNum2(); operate(num1, num2, operator)});
//not sure if this is necessary  
  document.getElementById("display").innerHTML = displayVar;