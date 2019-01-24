// CONSTRUCTOR FUNCTIONS

// function Car() {

// }

// let car = new Car();
// console.log(car); // {};


// function Car(id) {
//     this.carId = id;
// }

// let car = new Car(123);
// console.log(car); // Car {carId: 123}
// console.log( car.carId ); // 123


// function Car(id) {
//     this.carId = id;
//     this.start = function() {
//         console.log('start: ' + this.carId);
//     };
// }

// let car = new Car(123);
// car.start(); // start: 123


// function Car() {
//     console.log(this);
// }

// // Car(); // window // wrong way to call a constructor function.
// let vehicle = new Car();
// console.log(vehicle);



// PROTOTYPES:

// function Car(id) {
//     this.carId = id;
// }

// Car.prototype.start = function() {
//     console.log('start: ' + this.carId);
// };

// let car = new Car(123);
// car.start(); // start: 123



// EXPANDING OBJECTS US(ING PROTOTYPES:
// String.prototype.hello = function() {
//     return this.toString() + ' hello';
// };

// console.log('five cats'.hello()); // five cats hello



// JSON - JavaScript Object Notation

// CONVERT TO JSON
// let car = {
//     id: 123,
//     style: 'convertible'
// };

// console.log( JSON.stringify(car) );


// let carIds = [
//     { carId: 123 },
//     { carId: 456 },
//     { carId: 789 }
// ];

// console.log( JSON.stringify(carIds) );


// PARSING JSON, CONVERTING THE JSON STRING TO JAVASCRIPT

// let jsonIn = 
// `
//     [
//         {"carId" : 123},
//         {"carId" : 456},
//         {"carId" : 789}
//     ]
// `;

// let carIds = JSON.parse(jsonIn);
// console.log(carIds);



// ARRAY ITERATION

// let carIds = [
//     { carId: 123, style: 'sedan' },
//     { carId: 456, style: 'convertible' },
//     { carId: 789, style: 'sedan' }
// ];

// carIds.forEach( car => console.log( car ));

// carIds.forEach((car, index) => console.log( car, index ));


// FILTER AN ARRAY TO CREATE A NEW ARRAY

// let carIds = [
//     { carId: 123, style: 'sedan' },
//     { carId: 456, style: 'convertible' },
//     { carId: 789, style: 'sedan' }
// ];

// let convertibles = carIds.filter(
//     car => car.style === 'convertible'
// );

// console.log(convertibles);


// .every() // returns only the boolean values true or false.

// let carIds = [ 
//     { carId: 123, style: 'sedan' },
//     { carId: 456, style: 'convertible' },
//     { carId: 789, style: 'sedan' }
// ];

// let result = carIds.every(
//     car => car.carId > 0
// );

// console.log(result); // true.


// .find() // returns the first result that matches the given conditions.

// let carIds = [ 
//     { carId: 123, style: 'sedan' },
//     { carId: 456, style: 'convertible' },
//     { carId: 789, style: 'sedan' }
// ];

// let car = carIds.find(
//     car => car.carId > 500
// );

// console.log(car); 