const Guest = {
  name: "John",
  isRegistered: false,
};
const User = Object.create(Guest);
User.isRegistered = true;
User.isAdmin = false;
User.email = "email@mail.com";
const Admin = Object.create(User);
Admin.isAdmin = true;
Admin.addProduct = function(product) {
  console.log(`Я адмін, додаю новий продукт - ${product}`);
};
for (let key in Admin) {
  console.log(key);
}
const Vehicle = {
  ride() {
    console.log(`Їду на ${this.name} зі швидкістю ${this.speed}`);
  },
};
const Car = Object.create(Vehicle);
Car.name = "автомобілі";
Car.speed = "великою";
const Bicycle = Object.create(Vehicle);
Bicycle.name = "велосипеді";
Bicycle.speed = "маленькою";

Car.ride();
Bicycle.ride();
const Animal = {
  sleep() {
    console.log("Я сплю");
  },
};
const Dog = Object.create(Animal);
Dog.showVoice = function() {
  console.log("Гав!");
};
const Pug = Object.create(Dog);
Pug.name = "Рекс";
Pug.sayHi = function() {
  console.log(`Доброго вечора! Мене звати ${this.name}!`);
};
Pug.sleep = function() {
  console.log("Я сплю і храплю");
};

Pug.sleep();
Pug.showVoice();
Pug.sayHi();
Pug.sleep(); 
const user = {
  _name: "",
  _age: 0,
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length > 2) {
      this._name = value;
    } else {
      console.log("Ім'я повинно бути більше за 2 символи.");
    }
  },
  get age() {
    return this._age;
  },
  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("Вік повинен бути більше за 0.");
    }
  },
};
user.name = "Jo";
user.age = -5;
user.name = "John";
user.age = 25;
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}
Triangle.prototype.getSquare = function() {
  const p = (this.a + this.b + this.c) / 2;
  const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  console.log(square.toFixed(2));
};
const triangle1 = new Triangle(5, 4, 3);
const triangle2 = new Triangle(5, 5, 2);
const triangle3 = new Triangle(4, 4, 4);

triangle1.getSquare(); 
triangle2.getSquare(); 
triangle3.getSquare(); 