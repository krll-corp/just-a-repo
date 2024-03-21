let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
console.log(array);
let newArray = array.map(element => element * 5);
function sort(arr) {
    return arr.slice().sort((a, b) => a - b);
}
function sortReverse(arr) {
    return arr.slice().sort((a, b) => b - a);
}
let sum = array.reduce((acc, curr) => acc + curr, 0);
function sortByLength(arr) {
    return arr.slice().sort((a, b) => a.length - b.length);
}
function unique(arr) {
    return [...new Set(arr)];
}
let strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];
function mostFrequentNumber(arr) {
    let frequency = {};
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    let mostFrequent = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
    return parseInt(mostFrequent);
}