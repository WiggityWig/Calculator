let initialArray = [];
let newArray = [];
const displayValue = 0;
const display = document.getElementById("display");
const clear = document.getElementById('clear');
const del = document.getElementById('del');
const percentage = document.getElementById('#percentage');
const div = document.getElementById('#divide');
const seven = document.getElementById('#7');
const eight = document.getElementById('#8');
const nine = document.getElementById('#9');
const multiply = document.getElementById('#mult');
const four = document.getElementById('#4');
const five = document.getElementById('#5');
const six = document.getElementById('#6');
const subtract = document.getElementById('#sub');
const one = document.getElementById('#1');
const two = document.getElementById('#2');
const three = document.getElementById('#3');
const addition = document.getElementById('#add');
const zero = document.getElementById('#zero');
const decimal = document.getElementById("#decimal");
const equals = document.getElementById('equals');


//function that populates the display with text when a number is pressed
const buttons = document.querySelectorAll('.btn');

let currentNumber = '';
let combine = function(array) {
    if ((array[0] == '-')) {
        array.shift();
        array[0]= -(array[0]);
    }
        else if (array[0] == '+') {
            array.shift();
        }
    for (let i = 0; i <array.length; i++ ) {
        let char = array[i];
        if ((char !== '+') && (char !== '-') && (char !== '*') && (char !== '/')) {
            currentNumber += char;
        }
            else {
                newArray.push(currentNumber);
                currentNumber = '';
                newArray.push(char);
            }
    }
    newArray.push(currentNumber);
    return newArray;
}

clear.addEventListener('click', () => {
    initialArray = [];
    newArray = [];
    currentNumber = '';
    display.textContent = '0';
});

del.addEventListener('click', () => {
    initialArray.pop();
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});



equals.addEventListener('click', () =>{
    display.textContent = calculate(newArray);
}); 

buttons.forEach(button => {
        if(button.id === "equals"){
            return;
        }
       button.addEventListener('click', () => {
        if(display.textContent == '0'){
            display.textContent = button.textContent;
            initialArray.push(button.textContent);
        }
            else{
       display.textContent += button.textContent;
       initialArray.push(button.textContent);
            }
        
    });
});

const calculate = (array) => {
    let processedArray = combine(initialArray);
    let total = parseFloat(processedArray[0]);
    let operator = null;
  
    for (let i = 1; i < array.length; i++) {
      const element = processedArray[i];
  
      if (isNaN(element)) {
        operator = element;
      } else {
        total = operate(total, operator, parseFloat(element));
      }
    }
    newArray=[];
    initialArray=[String(total)];
    currentNumber='';

    if (total === Infinity || isNaN(total)) {
        return 'Not a Number';
      } else if (Number.isInteger(total)) {
        return (total === 0 && display.textContent === '0') ? 0 : total;
      } else {
        return Number(total.toFixed(3));
      }
    }

    const operate = (num1, oper, num2) => {
        if (oper == "+") {
          return num1 + num2;
        } else if (oper == "-") {
          return num1 - num2;
        } else if (oper == "*") {
          return num1 * num2;
        } else if (oper == "/") {
          if (num2 === 0) {
            return NaN;
          } else {
            let result = num1 / num2;
            if (result === Infinity || isNaN(result)) {
              return 0;
            } else {
              return result;
            }
          }
        }
      };
      