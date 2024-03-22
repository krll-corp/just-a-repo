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
const books = {
 fantastic: {
  "Френк Герберт": [
   {
    title: "Дюна",
    year: 1965,
   },
   {
    title: "Дюна. Месія месіїв",
    year: 1969,
   },
   {
    title: "Діти Дюни",
    year: 1976,
   },
  ],
  "Станіслав Лем": [
   {
    title: "Соляріс",
    year: 1961,
   },
   {
    title: "Соляріс. Зіркові щоденники Ійона Тихого",
    year: 1971,
   },
  ],
 },
 novel: {
  Ремарк: [
   {
    title: "Три товарища",
    year: 1936,
   },
   {
    title: "Триумфальна арка",
    year: 1942,
   },
  ],
  "Джордж Оруелл": [
   {
    title: "1984",
    year: 1949,
   },
   {
    title: "Ферма Господаря Вилки",
    year: 1945,
   },
  ],
 },
 fantasy: {
  "Володар перснів": [
   {
    title: "Братство Кільця",
    year: 1954,
   },
   {
    title: "Дві вежі",
    year: 1954,
   },
   {
    title: "Повернення короля",
    year: 1955,
   },
  ],
  "Гаррі Поттер": [
   {
    title: "Гаррі Поттер і Філософський камінь",
    year: 1997,
   },
   {
    title: "Гаррі Поттер і тайна кімната",
    year: 1998,
   },
  ],
 },
};
books[Symbol.iterator] = function() {
  let categories = Object.values(this);
  let categoryIndex = 0;
  let authorIndex = 0;

  return {
    next() {
      if (categoryIndex >= categories.length) {
        return { done: true };
      }
      
      let authors = Object.keys(categories[categoryIndex]);
      
      if (authorIndex >= authors.length) {
        categoryIndex++;
        authorIndex = 0;
        return this.next();
      }
      
      let books = categories[categoryIndex][authors[authorIndex]].map(book => book.title);
      let result = { value: books[authorIndex], done: false };
      authorIndex++;

      return result;
    }
  };
};

for (const book of books) {
  console.log(book);
}