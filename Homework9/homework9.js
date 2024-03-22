let map = new Map();
map.set('123n', 'Bigint');
map.set('true', 'boolian');
map.set('12', 'number'); 
map.set("Vasya",'string' );
map.set("NaN", 'number');
map.set("false", "boolian");
map.set("53178319047619n", "bigint");
map.set("q", "");
let NewObject = Object.fromEntries(map);
let map2 = new Map(Object.entries(NewObject));
function mergeArrays(...arrays) {
    let mergedArray = new Set();

    arrays.forEach(array => {
        array.forEach(item => {
            mergedArray.add(item);
        });
    });

    return Array.from(mergedArray);
}
function aclean(array) {
    let map = new Map();

    for (let word of array) {
        let sortedWord = word.toLowerCase().split('').sort().join('');

        if (!map.has(sortedWord)) {
            map.set(sortedWord, word);
        }
    }

    return Array.from(map.values());
}