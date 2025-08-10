//Objects are collections of key-value pairs used to represent structured data.

const person={
    "name":"Sai",
    "age":30
};
console.log(person);


//Creation of the objects

//Using new Object()
const car=new Object();
car.model="A";
car.year=2018;

console.log(car);


//Using a Constructor Function
function Per(name,age){
    this.name=name;
    this.age=age
}

const john=new Per("John",25);
console.log(john);


//Using object.create()

const animal={
    eats:true
};

const dog=Object.create(animal);
dog.barks=false;
console.log(dog);
console.log(dog.eats);


//Accessing

//Dot Notation
console.log(person.name);

//Bracket Notation
console.log(person["age"]);


//Add,Update and Delete 
person.gender="male";
console.log(person);

person.age=35;
console.log(person);

delete person.gender;
console.log(person);


//Nested Objects
const user = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001
  }
};

console.log(user.address.city); // "New York"


//Objects with Functions(methods)
const peson = {
  name: "John",
  greet: function() {
    return "Hello, " + this.name;
  }
};

console.log(peson.greet()); // "Hello, John"



//this keyword

const student = {
  name: "Emma",
  age: 20,
  showInfo: function () {
    return `${this.name} is ${this.age} years old.`;
  }
};
console.log(student.showInfo());


Object.keys(person);    
Object.values(person);  
Object.entries(person); 


/*
Object Methods
Object.assign() → Copy properties

Object.keys() → Get all keys

Object.values() → Get all values

Object.entries() → Get all key-value pairs

Object.freeze() → Make object immutable

Object.seal() → Prevent adding/removing properties, but allow modification
*/

//frezze
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; 
console.log(obj);



//Check If Property Exists
"name" in person;           // true
person.hasOwnProperty("age"); // true


//spread operator
const newPerson = { ...person, country: "USA" };
console.log(newPerson);