let displayVar = 0;
let operator = "";
let result;


const add = function(num1, num2) {
    let result = num1+num2;
    document.getElementById("display").innerHTML = result;
    return(result);
  };

  const subtract = function(num1, num2) {
    let result = num1-num2;
    document.getElementById("display").innerHTML = result;
    return(result);
      
  };

  const multiply = function(num1, num2) {
    let result = num1 * num2;
    document.getElementById("display").innerHTML = result;
    return(result);
  };

  const divide = function(num1, num2) {
    let result = num1 / num2;
    document.getElementById("display").innerHTML = result;
    return(result);
  };

  const operate = function(num1, num2, operator){ 
    if (operator == "+"){
          add(num1,num2);
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

  const updateDisplayVar = function(e){
    displayVar = displayVar + this.value;
    console.log(displayVar);
    document.getElementById("display").innerHTML = displayVar;
    return(displayVar);
  }

  const storeNum1 = function(e){
    num1 = parseInt(displayVar);
    console.log(num1);
    operator = this.value;
    console.log(operator);
    displayVar = 0;
    document.getElementById("display").innerHTML = displayVar;
    return(num1, operator);
  }

  const storeNum2 = function(e){
   num2 = parseInt(displayVar);
   console.log(num2);
   return(num2);
  }

  let numberButtons = document.querySelectorAll(".number-button")
  numberButtons.forEach((numberButton) => {numberButton.addEventListener('click', updateDisplayVar)});
  let operatorButtons = document.querySelectorAll(".operator-button")
  operatorButtons.forEach((operatorButton) => {operatorButton.addEventListener('click', storeNum1)});
  document.getElementById("equals-button").addEventListener('click', () => {storeNum2(); operate(num1, num2, operator)});
  document.getElementById("display").innerHTML = displayVar;