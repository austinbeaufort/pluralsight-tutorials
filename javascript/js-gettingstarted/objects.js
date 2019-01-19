// OBJECT BASICS

// let person = {
//     name: 'john',
//     age: 32,
//     partTime: false
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.partTime);


// let card = {
//     suit: 'hearts',
//     value: 'queen'
// };

// console.log(card.suit);
// console.log(card.value);


// PASSING OBJECTS TO FUNCTION

// function changeCard(card) {
//     card.suit = "Clubs";
// }
// let card = {
//     suit: 'hearts',
//     value: 'queen'
// };

// changeCard(card); // changes suit value from heart to clubs.

// console.log( card.suit ); // clubs

// console.log(card); // suit: 'clubs', value: 'queen'


// ARRAYS OF OBJECTS.

// let cards = [
//     {
//         suit: 'hearts',
//         value: 'queen'
//     },

//     {
//         suit: 'clubs',
//         value: 'king'
//     }
// ];

// console.log(cards[0].suit); // hearts
// console.log(cards[0].value); // queen
// console.log(cards[1].suit); // clubs
// console.log(cards[1].value) // king


// BUILT IN OBJECTS in JS

// Math
// Date
// String
// Number


// let result = Math.random() * 52;

// result = Math.trunc( result );

// console.log( result );

// let result = new Date().toDateString();

// console.log( result );

// let result = 'hello world';
// result = result.toUpperCase();
// console.log(result);

// let result = 0 / 0;
// console.log(Number.isNaN( result )); // checks the result to see if it is NaN.