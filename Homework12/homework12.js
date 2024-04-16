class Animal {
  constructor(word) {
    this.word = word;
  }

  say() {
    return this.word;
  }
}

const dog = new Animal("Гав!");
console.log(dog.say());   
class Car {
  constructor(name, speed) {
    this.model = name;
    this.speed = speed;
  }

  ride() {
    console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.model} зупинилась. Швидкість ${this.speed} км/год`);
  }

  gase() {
    this.speed += 10;
    console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
  }
}

const bmw = new Car("BMW", 50);

bmw.ride(); 
bmw.gase(); 
bmw.gase(); 
bmw.brake(); 
bmw.stop(); 
class TodoList {
  constructor() {
    this.todos = [];
  }

  show() {
    this.todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }

  addTask(task) {
    this.todos.push(task);
    this.show();
  }

  removeTask(task) {
    const index = this.todos.indexOf(task);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.show();
    }
  }
}

const todoList = new TodoList();

todoList.addTask("Погуляти з собакою");
todoList.addTask("Зробити ДЗ по JavaScript");
todoList.addTask("Подивитись серіал");
todoList.removeTask("Погуляти з собакою");
class Viacle {
  constructor(speed) {
    this.speed = speed;
  }

  ride() {
    console.log(`Їде зі швидкістю ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`Стоїть. Швидкість ${this.speed}`);
  }
}

class Bicycle extends Viacle {
  constructor(type, speed) {
    super(speed);
    this.type = type;
  }

  ride() {
    super.ride();
    console.log("Крутить педалі");
  }
}

class FireEngine extends Viacle {
  constructor(type, speed) {
    super(speed);
    this.type = type;
  }

  stew() {
    this.stop();
    console.log("Гасить пожар");
  }
}

const bicycle = new Bicycle("Ровер", 20);
bicycle.ride();
const fireEngine = new FireEngine("Пожарна машина", 90);
fireEngine.ride();
fireEngine.stop();
fireEngine.stew();
class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

class DiscountProduct extends Product {
  constructor(title, price, percent) {
    super(title, price);
    this.discountPercent = percent;
  }

  calculateDiscountPrice() {
    return this.price - (this.price * this.discountPercent) / 100;
  }
}

class Customer {
  constructor(name) {
    this.name = name;
    this.shoppingCart = [];
    this.sum = 0;
  }

  addProduct(product) {
    this.shoppingCart.push(product);
    this.sum += product instanceof DiscountProduct ? product.calculateDiscountPrice() : product.price;
  }

  removeProduct(product) {
    const index = this.shoppingCart.indexOf(product);
    if (index !== -1) {
      this.sum -= product instanceof DiscountProduct ? product.calculateDiscountPrice() : product.price;
      this.shoppingCart.splice(index, 1);
    }
  }

  buy() {
    const products = this.shoppingCart.map(product => product.title);
    console.log(`${this.name} купив товари: ${products.join(", ")} на суму ${this.sum} грн.`);
    this.shoppingCart = [];
    this.sum = 0;
  }
}

const eggs = new Product("Яйця", 50);
const porridge = new Product("Гречка", 40);
const sausage = new DiscountProduct("Ковбаса", 120, 5); 
const dumplings = new DiscountProduct("Пельмені", 90, 10); 

const customer = new Customer('Tom Holland');

customer.addProduct(eggs);
customer.addProduct(porridge);
customer.addProduct(sausage);
customer.addProduct(dumplings);
customer.removeProduct(porridge);
customer.buy(); 