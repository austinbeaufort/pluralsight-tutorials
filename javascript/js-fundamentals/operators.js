// console.log(1 == true); // true
// console.log(1 === true); // false

// let id = 123;
// console.log( id == '123' ); // true // type coercion.
// console.log( id === '123' ); // false. // types do not match.

// let id = 123;
// console.log( id != '123' ); // false, because opposite sign !
// console.log( id !== '123' ); // true, because opposite sign !


// UNARY OPERATORS

/* 

++var1 // incremented first.

var1++ // incremented after.

--var1

var1 --

+var1 ( converts string to number ) similar to parseInt() or Number()

-var1 (converts the number to it's opposite value).
*/

// let year = 1967;

// console.log(++year); // 1968
// console.log(year++); // 1967

// let year = '1967';
// console.log(typeof (+year)); // number // + converts it to a number.

// console.log(-year); // -1967 // - returns the integers opposite.


// LOGICAL, BOOLEAN OPERATORS

// if (5 === 5 && 6 === 7) { // false
//     console.log(true);
// } else {
//     console.log(false);
// }


// let userSettings = null;
// let defaultSettings = { name: 'Default'} ;

// console.log( userSettings || defaultSettings ); // will log the name: 'default' object,
// because userSettings were null or not set up.


// let userSettings = { name: 'Joe' };
// let defaultSettings = { name: 'Default'} ;

// console.log( userSettings && defaultSettings ); // will log defaultSettings
// // if both vars are true in an && statement, it will log the last true var.


// let car = null;
// console.log( !car );


// RELATIONAL OPERATORS.

// comparing strings.

// console.log('Zoo' < 'alphabet');


// let s1 = 'Zoo';
// let s2 = 'alphabet';

// if (s1 < s2) { // true // capital letters have lower ASCII value than lowercase.
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (s1.toUpperCase() < s2.toUpperCase()) { // false // if cases are equal,
//     // then alphabet has values from lowest to highest from A - Z. // ZOO is not less than ALPHABET.
//     console.log(true);
// } else {
//     console.log(false);
// }



// CONDITIONAL OPERATOR, TERNARY OPERATOR.

// console.log( (5 > 4) ? 'yes' : 'no' ); // yes



// ASSIGNMENT OPERATORS.

// BIT OPERATORS
// var1 <<= 1;
// var1 >>= 1;
// var2 >>>= 1;



// OPERATOR PRECEDENCE.