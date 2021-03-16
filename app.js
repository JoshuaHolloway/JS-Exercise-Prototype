let a = {};
let b = function() {};
let c = [];

console.log(Object.getPrototypeOf(a));  // a.__proto__ === Object.prototype
console.log(Reflect.getPrototypeOf(a)); // Same thing using Reflect API

console.log('-------------------------------------------');

function Person(first, last) {
  // 'use strict';
  console.log('Enter Person() Constructor:');
  console.log(this); // {}
  this.firstName = first;
  this.lastName = last;

  console.log(this);
  console.log('Exit Person() Constructor.');
  // return this
}

// new operator creates {}, and assigns it to this.
const josh = new Person('josh', 'holloway');
console.log(josh);

const steve = {
  firstName: 'steve',
  lastName: 'jobs'
};
console.log(steve);

// console.log(Reflect.getPrototypeOf(josh));
// console.log(Reflect.getPrototypeOf(steve));

console.log('-------------------------------------------');

// Person used just as a function:
// -No return statement, so nothing is returned.
// -this refers to the window (global context)
const alex = Person('a', 'b'); // window object is used instead of {}, but not returned from constructor
console.log(alex);

console.log('-------------------------------------------');

console.log('Person.prototype:');
console.log(Person.prototype); // {}

Person.prototype.getName = function() {
  console.log('this.firstName: ', this.firstName);
}
josh.getName();

console.log('Person.prototype:');
console.log(Person.prototype); // {}

console.log('-------------------------------------------');

const person = {
  firstName: 'Default',
  lastName: 'Default',
  greet: function() {
    console.log(`Hi ${this.firstName}`);
  }
};

const john = Object.create(person);
john.firstName = 'John'; // overide the inherited property
john.greet();
console.log(john);