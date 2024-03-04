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
    if (num1 > num2){
        return num1;
    }
    else if (num1 = num2){
        return "Числа рівні";
    }
    else {
        return num2;
    }
}
*/
/*
function pow(x, n){
    for(i; i<=n; i++){
        x *= x;
    }
    return x;
}
*/
/*
function sumOrConcatenation(value1, value2) {
    if (value1 === undefined || value2 === undefined || value1 === null || value2 === null) {
        console.log("Результат суми: 30");
    } else if (typeof value1 === 'string' || typeof value2 === 'string') {
        console.log(`Результат конкатенації: ${String(value1) + String(value2)}`);
    } else if (typeof value1 === 'number' && typeof value2 === 'number') {
        console.log(`Результат суми: ${value1 + value2}`);
    } else {
        console.log("Некоректні аргументи");
    }
}
*/
function Fb(number){
    let a = 0;
    let b = 1;
    let c = 0
    for(let i = 0; i<number; i++){
    c = a + b;
    a = b;
    b = c;
    }
    return c;
}
