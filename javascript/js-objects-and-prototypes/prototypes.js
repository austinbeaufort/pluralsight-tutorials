'use strict';

// let arr = ['red', 'blue', 'green'];


// // Object.defineProperty(arr, 'last', {get: function() {
// //     return this[this.length - 1];
// // }})

// // let last = arr.last // undefined, no such property exists. (but we created one above, so now it exists!)

// // display(last);

// Object.defineProperty(Array.prototype, 'last', {get: function() { // now all arrays have the 'last' property.
//     return this[this.length - 1];
// }})

// let last = arr.last // undefined, no such property exists. (but we created one above, so now it exists!)

// let arr2 = ['one', 'two', 'three'];
// display(arr.last);
// display(arr2.last); // undefined. .last only works with 'arr' array.


// let myFunc = function() {};

// display(myFunc.prototype);

// let cat = { name: 'fluffy' };
// // console.log(cat.prototype); // undefined.
// // object prototypes look like this: obj.__proto__
// display(cat.__proto__);


// function Cat(name, color) {
//     this.name = name,
//     this.color = color
// }

// Cat.prototype.age = 4; // the Cat function and fluffy Obj. will have age: 3 in their prototype object.
//                        // their prototype object is the same object.

// let fluffy = new Cat('fluffy', 'white');
// let muffin = new Cat('muffin', 'brown');

// Cat.prototype = {age: 5}; // did not change displays below. age still 4.

// let snowbell = new Cat('snowbell', 'white');

// display(fluffy.age); // 4
// display(muffin.age); // 4
// display(snowbell.age); // 5
// display(Cat.prototype.age); // 5



// fluffy.age = 5; // fluffy.age is now 5. // we added a new property to the fluffy object.

// display(fluffy.age); // 5
// display(fluffy.__proto__.age); // 4
// display(fluffy.hasOwnProperty('age')); // fluffy does not have age property, prototype does.
// display(muffin.age);


// display(Cat.prototype); // the Cat func's prototype is an empty object that was created along with the function.
// display(fluffy.__proto__); // also an empty object.
// display(Cat.prototype === fluffy.__proto__); // true


// display(muffin.__proto__); // has the same proto object as Cat and fluffy.

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }
    speak() {
        display(this.voice);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('Meow')
        this.name = name
        this.color = color
    }
}
let fluffy = new Cat('Fluffy', 'White');
fluffy.speak()
display(fluffy);
display(Object.keys(fluffy.__proto__.__proto__));



// function Animal(voice) {
//     this.voice = voice || 'grunt';
// }

// Animal.prototype.speak = function() {
//     display(this.voice);
// }

// function Cat(name, color) {
//     Animal.call(this, 'Meow'),
//     this.name = name,
//     this.color = color
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// let fluffy = new Cat('fluffy', 'white');









// display(fluffy.__proto__); // created from Cat
// display(fluffy.__proto__.__proto__); // created from Object.
// display(fluffy.__proto__.__proto__.__proto__); // null