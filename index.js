/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

console.log('----------Task-1----------');
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

// Create an eat method
// -We should be able to pass in an arguement of something edible.
//    --That edible thing should be pushed to the stomach array.
// -If the stomach has 10-items, the person can't eat anymore.
Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) this.stomach.push(edible);
};

// Make the person poop
Person.prototype.poop = function () {
  this.stomach = [];
};

// to string
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

console.log('Create 3 people:');
const person_1 = new Person("steve", 53);
const person_2 = new Person("allen", 32);
const person_3 = new Person("jessica", 43);
console.log(person_1);
console.log(person_2);
console.log(person_3);

console.log('Person 3 eats:');
person_3.eat("tacos");
person_3.eat("pizza");
person_3.eat("ramen");
console.log(person_3);

console.log('Person 3 poops:');
person_3.poop();
console.log(person_3);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

console.log('----------Task-2----------');

function Car(model, mpg) {
  this.model = model;
  this.milesPerGallon = mpg;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

// Stretch 2.1:
Car.prototype.drive = function (miles) {
  
  // Stetch 2.2: -Requirement 1: 
  //  -A car which runs out of `fuel` while driving can't drive any more distance.
  //  -The `drive` method should return a string "I ran out of fuel at x miles!".
  if (this.tank <= 0) {
    console.log(`I ran out of fuel at ${this.odometer} miles!`);
  } else {

    // Stretch 2.1 - Requirement 1: The distance driven causes the `odometer` to go up:
    this.odometer += miles;

    // Stretch 2.1 - Requirement 2:
    // -The distance driven causes the the `tank` to go down taking `milesPerGallon` into account.
    //
    // (gallon / mile)  =  (1 / milesPerGallon)
    // miles * ( gallon / mile ) = gallons
    const gallons_per_mile = (1 / this.milesPerGallon);
    const gallons_used = miles * gallons_per_mile;
    this.tank -= gallons_used;

    console.log(`After driving (another) ${miles}-miles the odometer is at: ${this.odometer} and the gas-level is at: ${this.tank}!`);

  }
};

// Test car
const car = new Car('chevy', 10); // Create chevy car with 10-mpg
car.fill(2);  // -fill with 2 gallons
car.drive(10); // -drive 10 miles
car.drive(10); // -drive 10 more miles (at the end of this 10 miles we should be out of gas)
car.drive(10); // -attempt to drive 10 more miles. Shold be out of gas though!!!
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

console.log('----------Task-3----------');

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
function Baby(attr) {
  // Inherit properties
  Person.call(this, attr.name, attr.age);

  this.favoriteToy = attr.favoriteToy;
}

// Inherit methods
Baby.prototype = Object.create(Person.prototype);

// Add new method on Baby
Baby.prototype.play = function () {
  console.log(
    `Name: ${this.name},  Age: ${this.age},  Stomach: ${this.stomach},  Toy: ${this.favoriteToy}`
  );
};

// Create new Baby object
const baby = new Baby({ name: "alison", age: 2, favoriteToy: "ball" });
baby.play();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  -The "this"-keyword allows us to re-use functions in different contexts.
  -Answers the question: "Where is this function invoked?"
    -Does NOT answer the question: "Where was this function defined?"
  -We don't know that the "this"-keyword is until the function is invoked.

  o	Implicit Binding
    •	this refers to the object that called the method.
    •	Look to the left of the dot.


  o	Explicit Binding
    •	Used to bind a function to the context of a specific object.
    •	We explicity state which object the "this"-keyword refers to.
    •	Three ways of performing explicity binding:
      •	.bind
        	Returns a function to be invoked later:
        	Syntax:
          -	function = function.bind(object);  
      •	.call
        	Immediately invoke function
          -	Takes an argument list as individual arguments
        	Syntax:
          -	function.call(object, arg1,...,argN);
      •	.apply 
        	Same as .call but instead of a parameter list as individual parameters it uses an array.
        	Immediately invoke function
          o	Takes an array as argument
        	Syntax:
          -	function.apply(object, [arg1,...,argN]);
  o	new binding
    	The new keyword is used to generate a new object from a constructor function.
      •	When a constructor function is invoked with the new keyword it:
        - 1. Creates a new object (this = {};)
        - 2. Adds the properties onto it
        - 3. Returns the new object (return this;)

  o	window binding
    	When this 


*/

console.log('~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~');

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
