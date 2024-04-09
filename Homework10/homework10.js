let employee1 = {
  fullName: "John Malkovich",
  position: "junior front-end developer",
  salary: 300
};

let employee2 = {
  fullName: "Peter Pettigrew",
  position: "senior QA engineer",
  salary: 15000
};

function showInfo(currency) {
  console.log(`${this.fullName} на позиції ${this.position} заробляє ${this.salary}${currency}`);
}

showInfo.apply(employee1, ['$']);
showInfo.apply(employee2, [' грн.']);

let showInfoOfEmployee1 = showInfo.bind(employee1);
let showInfoOfEmployee2 = showInfo.bind(employee2);

showInfoOfEmployee1('$');
showInfoOfEmployee2(' грн.');
let calculator = {
  num1: 0,
  num2: 0,
  read: function(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  sum: function() {
    return this.num1 + this.num2;
  },
  mul: function() {
    return this.num1 * this.num2;
  }
};

calculator.read(2, 3);
console.log(calculator.sum());
console.log(calculator.mul());
let shoppingCart = {
  items: [],
  addItem: function(title, price) {
    this.items.push({title, price});
    return this;
  },
  removeItem: function(title) {
    let index = this.items.findIndex(item => item.title === title);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    return this;
  },
  calculateTotalPrice: function() {
    let totalPrice = this.items.reduce((acc, item) => acc + item.price, 0);
    return totalPrice;
  }
};

shoppingCart.addItem("iPhone", 1500)
            .addItem("Книга", 30)
            .addItem("Чашка", 5)
            .removeItem("Чашка");

console.log(shoppingCart.calculateTotalPrice()); 