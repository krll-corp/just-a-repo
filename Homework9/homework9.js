let map1 = new Map();
map1.set('123n', 'Bigint');
map1.set('true', 'boolian');
map1.set('12', 'number'); 
map1.set("Vasya",'string' );
map1.set({}, 'Objekt');
map1.set(undefined, "undefined");
map1.set(null, "null") Array.from(mergedArray);
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
  let bookIndex = 0; 
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
      
      let books = categories[categoryIndex][authors[authorIndex]]; 
      
      if (bookIndex >= books.length) {
        authorIndex++;
        bookIndex = 0; 
        return this.next();
      }
      
      let result = { value: books[bookIndex], done: false };
      bookIndex++; 

      return result;
    }
  };
};