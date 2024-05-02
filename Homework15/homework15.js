
// Завдання 1:
function showDelay(msg) {
    setTimeout(() => {
        console.log(msg);
    }, 2000);
}

function repeat(msg) {
    setInterval(() => {
        console.log(msg);
    }, 2000);
}

function repeatRecursive(msg) {
    setTimeout(() => {
        console.log(msg);
        repeatRecursive(msg);
    }, 2000);
}

function boom(count) {
    let current = count;
    const intervalId = setInterval(() => {
        if (current === 0) {
            console.log("Boom!!");
            clearInterval(intervalId);
        } else {
            console.log(current);
            current--;
        }
    }, 1000);
}

// РІВЕНЬ ІІ:
function delay(fn, sec) {
    return function () {
        setTimeout(fn, sec * 1000);
    };
}

function Timer() {
    let counter = 0;
    let intervalId;

    this.start = function () {
        intervalId = setInterval(() => {
            console.log(counter);
            counter++;
        }, 1000);
    };

    this.stop = function () {
        clearInterval(intervalId);
        counter = 0;
    };

    this.pause = function () {
        clearInterval(intervalId);
    };

    this.show = function () {
        console.log(counter);
    };
}

// РІВЕНЬ ІІІ:
const customers = {
 "Katy Perry": [
  { name: "Borsh", time: 5000 },
  { name: "vareniki", time: 1000 },
  { name: "uzvar", time: 500 },
 ],
 "Cristiano Ronaldo": [
  { name: "Soup", time: 7000 },
  { name: "porridge", time: 1000 },
  { name: "water", time: 100 },
 ],
 "Jason Statham": [
  { name: "fried potatoes", time: 6000 },
  { name: "steak", time: 10000 },
  { name: "juice", time: 100 },
 ],
};
function cook(customers) {
  for (const customer in customers) {
    const orders = customers[customer];
    let lastOrderTime = 0;
    orders.forEach(order => {
      if (order.time > lastOrderTime) {
        lastOrderTime = order.time;
      }
    });
    setTimeout(() => {
      const lastOrder = orders[orders.length - 1];
      console.log(`Шановний ${customer}, ваше замовлення "${lastOrder.name}" готове. Смачного!`);
    }, lastOrderTime);
  }
}

cook(customers);

// Тестування:
console.log("Завдання 1:");
showDelay("Delayed message");
repeat("Repeated message");
repeatRecursive("Recursive message");
boom(5);

console.log("\nРІВЕНЬ ІІ:");
const sayHi = () => console.log("Hi!");
const delayedSayHi = delay(sayHi, 5);
sayHi(); // Hi! (Виконається одразу)
delayedSayHi(); // Hi! (Виконається через 5 секунд);

console.log("\nРІВЕНЬ ІІІ:");
const newTimer = new Timer();
newTimer.start();

setTimeout(() => {
    newTimer.pause();
}, 5000);

setTimeout(() => {
    newTimer.start();
}, 7000);

setTimeout(() => {
    newTimer.stop();
    newTimer.show();
}, 9000);

console.log("\nРІВЕНЬ ІІІ:");
cook(customers);
