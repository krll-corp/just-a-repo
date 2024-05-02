
// РІВЕНЬ І:
// 1
const promise1 = Promise.resolve("Hello world");
promise1.then((result) => {
    console.log(result);
});

// 2
function delayedMsg(msg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg);
        }, 2000);
    });
}

delayedMsg("Delayed message").then((msg) => {
    console.log(msg);
});

// 3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong!"));
    }, 2000);
});

promise3.catch((error) => {
    console.error(error);
});

// 4
function showResults(promise1, promise2, promise3) {
    Promise.all([promise1, promise2, promise3]).then((results) => {
        console.log(results);
    });
}

const promiseA = Promise.resolve("A");
const promiseB = Promise.resolve("B");
const promiseC = Promise.resolve("C");

showResults(promiseA, promiseB, promiseC);

// 5
function showFirst(promise1, promise2, promise3) {
    Promise.race([promise1, promise2, promise3]).then((result) => {
        console.log(result);
    });
}

const promiseX = delayedMsg("X");
const promiseY = delayedMsg("Y");
const promiseZ = delayedMsg("Z");

showFirst(promiseX, promiseY, promiseZ);

// РІВЕНЬ ІІ:
// Задача 2
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => console.log('виконалось через 3 секунди'));

// Задача 3
function promise_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if (result % 2 !== 0) {
                resolve(result);
            } else {
                reject(new Error('Result is not odd!'));
            }
        }, 1000);
    });
}

promise_BasedFunction(2, 3)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// Задача 4
// 1
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

// 2
console.log("start");
new Promise((resolve) => {
    setTimeout(() => {
        const fibNumber = fibonacciRecursive(45); // Обчислення 45-го числа Фібоначчі може зайняти деякий час
        resolve(fibNumber);
    }, 0);
}).then((result) => {
    console.log("end");
    console.log(result);
});
