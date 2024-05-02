// Рівень I

// Завдання 1
function print(start, end) {
    if (start <= end) {
        console.log(start);
        print(start + 1, end);
    }
}

// Завдання 2
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Завдання 3
function createMultBy(num) {
    return function (x) {
        return num * x;
    };
}

// РІВЕНЬ ІІ
function calculateSalesProfit(obj) {
    let sum = obj.profit;
    for (const client of obj.clients) {
        sum += calculateSalesProfit(client);
    }
    return sum;
}

// РІВЕНЬ ІІІ
function memoization(fn) {
    const cache = {};
    return function (...args) {
        const key = args.join(",");
        if (key in cache) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Тестування
console.log("Завдання 1:");
print(1, 5);
console.log("\nЗавдання 2:");
console.log("Факторіал 5:", factorial(5));
console.log("\nЗавдання 3:");
const multBy5 = createMultBy(5);
const multBy2 = createMultBy(2);
console.log("multBy5(4):", multBy5(4));
console.log("multBy5(6):", multBy5(6));
console.log("multBy2(4):", multBy2(4));
console.log("multBy2(6):", multBy2(6));
console.log("\nРІВЕНЬ ІІ:");
console.log("Загальний прибуток:", calculateSalesProfit(sales));
console.log("\nРІВЕНЬ ІІІ:");
function expensiveOperation(n) {
    return n * 2;
}
const memoizedExpensiveOperation = memoization(expensiveOperation);
console.log(memoizedExpensiveOperation(5)); // 5
console.log(memoizedExpensiveOperation(5)); // 5 - повертає його з кеша
