"use strict"
for (let i = 0; i < 1000; i++){
const func = () => {

let Usernamevalue = document.getElementById(Username).value;
let Emailvalue = document.getElementById(Email).value;
let Passwodvalue = document.getElementById(Password).value;
let ConfPasswordvalue = document.getElementById(ConfPassword).value;
let Button = document.getElementById(button);
if (Usernamevalue != null) & (Emailvalue != null) & (Passwordvalue != null) & (ConfPasswordvalue != null) & (Passwordvalue === ConfPasswordvalue){
  button.disabled = false;
  
  
} 
else {
  Button.disabled = true
  
};
};
setTimeout(func, 1*1000)
};