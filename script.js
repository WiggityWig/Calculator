const zero=0;

//addition
const add = (a,b) => {
    return total = a + b;
}
//subtraction
const sub = (a,b) => {
    return a-b;
}
//multiplication
const mult = (a,b) => {
    return total = a * b;
}
//division
const divide = (a,b) => {
    return  total = a / b;
}

 operate = (num1, oper, num2) =>{
   if(oper == "+") {
    return num1 + num2;
}
        else if(oper == "-") {
            return num1 - num2;
        }
        else if (oper == "*") {
            return num1 * num2;
        }
        else if (oper == "/") {
            let result = num1 / num2;
            if (result == "Infinity" || "NaN") {
                return 0;
            }
                else {
                    return result;
                }
        }
}