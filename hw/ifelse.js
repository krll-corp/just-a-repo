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
else if (a === false) {
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
/*
let a = +prompt("Введіть номер місяця");
if ( a == 1 || a == 2 || a == 3|| a == 4 || a == 5 || a == 6 || a == 7 || a == 8 || a == 9 || a == 10 || a == 11 || a == 12) {
    if (a == 1 || a == 2 || a == 12) {
        console.log("Зима");
    }
    else if (a == 3 || a == 4 || a == 5) {
        console.log("Весна");
    }
    else if (a == 6 || a == 7 || a == 8) {
        console.log("Літо");
    }
    else {
        console.log("Осінь");
    }
}
else {
    console.log("Некоректний номер місяця");
}
*/
/*3
let a = +prompt("Виберіть число");
if (a  <= 80 && a >= 20 ){
    console.log("Число у діапазоні");
}
*/
let a = +prompt("Виберіть число");
if (a > 80 || a < 20 || a != 80 || a != 20) {
    console.log("Число не у дівпвзоні");
}
else {
    console.log("Число у діапазоні");
}