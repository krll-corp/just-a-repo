function setLength(obj) {
  const keys = Object.keys(obj);
  obj.length = keys.length;
  return obj;
}

const myObject = { 
a: 1, 
b: 2, 
c: 3 
};
console.log(setLength(myObject)); 
function getEntries(obj) {
  const entries = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      entries.push([key, obj[key]]);
    }
  }
  return entries;
}
let actor = {
  name: "Tom Hardy",
  age: 44,
  gender: "Male",
  nationality: "British",
  lastFilm: "Venom: Let There Be Carnage"
};

console.log(getEntries(actor));
const actor = {};

Object.defineProperties(actor, {
  name: { value: "Tom Hardy", writable: false, enumerable: true, configurable: false },
  age: { value: 44, writable: true, enumerable: false, configurable: true },
  gender: { value: "Male", writable: true, enumerable: true, configurable: true },
  nationality: { value: "British", writable: false, enumerable: false, configurable: false },
  lastFilm: { value: "Venom: Let There Be Carnage", writable: true, enumerable: true, configurable: true }
});
function Animal(voice) {
  this.voice = voice;
  Object.defineProperty(this, 'say', {
    value: function () {
      return this.voice;
    },
    enumerable: false
  });
}

const dog = new Animal("Гав");
console.log(dog.say()); 
for (let key in dog) {
  console.log(key);
}
let car1 = {
  model: "Mersedes",
  price: 50000,
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.price;
    } else {
      return this.model;
    }
  }
};

let car2 = {
  model: "Audi",
  price: 40000,
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.price;
    } else {
      return this.model;
    }
  }
};

console.log(car1 + car2);
alert(car1);
alert(car2);
function cloneObject(obj, ...keysToExclude) {
  const clonedObject = {};
  for (const key in obj) {
    if (!keysToExclude.includes(key)) {
      clonedObject[key] = obj[key];
    }
  }
  return clonedObject;
}

const clonedActor = cloneObject(actor, "nationality", "age", "phone");
console.log(clonedActor);