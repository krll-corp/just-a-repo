"use strict"
function sum(num1, num2){
    return num1 + num2;
}


function mulBy5(num){
    console.log(`5 * ${num} = ${num * 5}`);
}


function max(num1, num2){
 return(num1 > num2 ?  num1 : num2);
    
}


function pow(x, n) {
    if (x === undefined && n === undefined) {
        return 9;
    } else {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
}


function sumOrConcatenation(value1 = 20, value2 = 10) { 
    if (value1 === 0 && value2 === 0) {
        console.log("30");
    } else {
        if (typeof value1 === 'string' || typeof value2 === 'string') {
            console.log(`Результат конкатенації: ${String(value1) + String(value2)}`);
        } else if (typeof value1 === 'number' && typeof value2 === 'number') {
            console.log(`Результат суми: ${value1 + value2}`);
        } else {
            console.log("Некоректні аргументи");
        }
    }
}



function Fb(number){
    let a = 1;
    let b = 0;
    let c = 0;
    for(let i = 0; i<number; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
