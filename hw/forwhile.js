/*
let a = +prompt('Введіть число');
let b = +prompt('Введіть число');
let message = a > b ? 'Перше число більше' : a === b ? 'Числа рівні' : 'Дргуе число більше';
alert(message);
*/
let a = prompt('Введіть що небуть');
switch(a){
    case null: 
    alert('Відміна вводу');
   break;
    case "":
        alert('Ви нічого не ввели');
        break;
        default:
            alert(a);
        }
