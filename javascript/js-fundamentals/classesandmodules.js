// class Car {

// }

// let car = new Car();

// console.log(car); // creates a car empty object.


// CONSTRUCTORS AND PROPERTIES

// class Car {
//     constructor(id) {
//         this.id = id;
//     }
// }

// // let car = new Car(123);

// // console.log( car.id ); // 123\

// let car = new Car(123);
// car.id = 456;
// console.log( car.id ); // 456



// METHODS
// class Car {
//     constructor(id) {
//         this.id = id;
//     }
//     identify(suffix) {
//         return `Car Id: ${this.id} ${suffix}`;
//     }
// }

// let car = new Car(123);
// console.log( car.identify('!!!') ); // Car Id: 123



// INHERITANCE

// class Vehicle {
//     constructor() {
//         this.type = 'car'; // this is the default type
//     }
//     start() {
//         return `Starting: ${this.type}`;
//     }
// }

// class Car extends Vehicle { // Car class inherits all things from Vehicle Class by extension.
//     start() {
//         return 'in Car start ' + super.start(); // super.start() accesses the start method from
//                                                 // the vehicle class.
//     }
// }

// let car = new Car();
// console.log( car.start() ); // in Car start
// console.log( car.type );