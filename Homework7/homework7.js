let actor = {}; 
actor.name = 'Robert'; 
actor.surname = 'Downey'; 
actor.name = 'John'; 
delete actor.name; 
console.log(actor); 
let person = {
  firstName: 'YourFirstName',
  lastName: 'YourLastName'
};
let phone = prompt('Please enter your phone number:');
let contacts = {
  phone: phone,
  email: 'example@example.com'
};
person.contacts = contacts;
console.log(person);
let topSeries = ['Game of Thrones', 'True Detective', 'Breaking Bad'];
topSeries.unshift('YourFavoriteSeries');
topSeries.push('LastSeries');
console.log(topSeries);
let employee = {
  salary: 2000,
  taxes: 200,
  position: 'front-end developer',
  level: 'middle',
  showInfo: function() {
    console.log(`${this.level} ${this.position} заробляє ${this.salary}`);
  }
};
employee.showInfo();

let employee2 = {
  salary: 3000,
  taxes: 300,
  position: 'back-end developer',
  level: 'senior'
};
employee2.showInfo = employee.showInfo;
employee2.showInfo();
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt('Please enter a number:');
    if (value === '' || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sumInput());


const person = {
  name: 'John',
  age: 30,
  job: 'software engineer',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const { name, age, job: currentJob, address: { city }, address: { country: currentCountry } } = person;
let { countries: [{ authors: [{ books: [firstBook, , thirdBook] }] }] } = books;
let { countries: [{ authors: [{ books: [, { title: secondKidrukBookName }] }] }] } = books;
let { countries: [, { authors: [, { books: [{ year: yearOfPublicationKobzar }] }] }] } = books;

console.log(firstBook);
console.log(thirdBook);
console.log(secondKidrukBookName);
console.log(yearOfPublicationKobzar);