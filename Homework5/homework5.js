"use strict"
/*function sum(num1, num2){
    return num1 + num2;
}
*/
/*
function mulBy5(num){
    console.log(`5 * ${num} = ${num * 5}`);
}
*/
/*
function max(num1, num2){
 return(num1 > num2 ?  num1 : num2);
    
}
*/


/*
function pow(a, n) {
    let result = a;
    for (let i = 1; i < n; i++) {
        result *= a;
    }
    return result;
}
*/



/*
function sumOrConcatenation(value1 = 20, value2 = 10){ 
    if (typeof value1 === 'string' || typeof value2 === 'string') {
        console.log(`Результат конкатенації: ${String(value1) + String(value2)}`);
    } else if (typeof value1 === 'number' && typeof value2 === 'number') {
        console.log(`Результат суми: ${value1 + value2}`);
    } else {
        console.log("Некоректні аргументи");
    }
}
*/

function Fb(number){
    let fib = [0, 1];
    for(let i = 2; i <= number; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[number];
}
