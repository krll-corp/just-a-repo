let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
array.forEach(element => console.log(element));
let newArray = array.map(element => element * 5);
let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
function unique(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}
console.log(sortedCarBrands);
function mostFrequentNumber(arr) {
    let frequency = {};
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    let mostFrequent = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
    return parseInt(mostFrequent);
}