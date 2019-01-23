// constants must be initialized.

// console.log(carId);
// let carId = 100; // throws an error

// console.log(carId);
// var carId = 100; // undefined.

// use 'let' if possible.

// if (true) {
//     let carId = 100;
// }
// console.log(carId); // undefined, let has block scoping.

// if (true) {
//     var carId = 100;
// }
// console.log(carId); // 100, var has global scoping.

// REST PARAMETERS.

// function sendCars(...allCarIds) {
//     allCarIds.forEach( id => console.log(id));
// }

// sendCars(100, 200, 555);

// function sendCars(day, ...allCarIds) {
//     allCarIds.forEach( id => console.log(id));
// }

// sendCars('Monday', 100, 200, 255);


// DESTRUCTURING ARRAYS
// let carIds = [1, 2, 5]; // assigning the array to a variable.
// let [car1, car2, car3] = carIds; // assigning each array item a new variable.

// console.log(car1, car2, car3); // logging the new variables.

// let carIds = [1, 2, 5];
// let car1, remainingCars; // can declare multiple variables on the same line.
// [car1, ...remainingCars] = carIds;

// console.log(car1, remainingCars); // first element will get stored in car1
//                                   // everything else will get stored in the remainingCars array.