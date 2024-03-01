/*
let a = +prompt('Введіть число');
let b = +prompt('Введіть число');
let message = a > b ? 'Перше число більше' : a === b ? 'Числа рівні' : 'Дргуе число більше';
alert(message);
*/
let a = prompt('Введіть що небуть');
switch(a){
    case null: 
    console.log('Відміна вводу');
   break;
    case "":
        console.log('Ви нічого не ввели');
        break;
        default:
            console.log(a);
        }
