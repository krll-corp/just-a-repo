"use strict"
/*let num = +prompt("Введіть число");
if (num >= 10)
 console.log("число більше або дорівнює 10");
*/
/*let pwd = prompt("Який пароль?");
if (pwd == "alala") {
console.log("Ласкаво просимо!");
} else{
    console.log("Пароль не вірний");
}
*/
/*
let a = prompt("Що небуть");
if (a == "" ) {
    console.log("Ви нічого не ввели");
}
else if (a === null) {
    console.log("Відміна вводу")
}
else {
    console.log(a);
}
*/
/*
let a = +prompt("Перше число");
let b = +prompt("Друге число");
if (a > b){
    console.log("Перше число більше");
}
else if (a === b) {
    console.log("Числа рівні");
}
else {
    console.log("Друге число більше");
}
*/
/*
let a = +prompt("Введіть натуральне число");
if (a == NaN) {
    console.log("Це не число");
}
else if (a % 2 === 0) {
console.log("Число парне");
}
else if (a % 2 === 1) {
    console.log("Число непарне");
}
else {
    console.log("число не натуральне");
}
*/

let a = +prompt("Введіть номер місяця");
let isWinter = a == 1|| a == 2 || a == 12;
let isSpring = a == 3|| a == 4 || a == 5;
let isSommer = a == 6|| a == 7 || a == 8;
let isAutumn = a == 9|| a == 10 || a == 11;
if ( a == isWinter || a == isSpring || a == isSommer || a == isAutumn) {
    if (a == isWinter) {
        console.log("Зима");
    }
    else if (isSpring) {
        console.log("Весна");
    }
    else if (isSommer) {
        console.log("Літо");
    }
    else {
        console.log("Осінь");
    }
}
else {
    console.log("Некоректний номер місяця");
}

/*
let a = +prompt("Виберіть число");
if (a  <= 80 && a >= 20 ){
    console.log("Число у діапазоні");
}
*/

/*
let a = +prompt("Виберіть число");
if (!(a < 20 || a > 80)){console.log("Число у діапазоні");} else{console.log("Число не у діапазоні");}
*/



/*
let a = prompt("Who is there?");
if (a == "Admin") {
    let b = prompt("What is the password?");
    if (b === "TheMaster") {
console.log("Welcome!");
    } else if (b === false) {
        console.log("Canceled");
    } else {
console.log("Wrong password");
    }
} else if (a === false) {
    console.log("Canceled");
} else {
    console.log("Wrong password");
}
*/