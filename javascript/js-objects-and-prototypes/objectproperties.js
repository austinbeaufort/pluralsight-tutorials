'use strict';

// let cat = {
//     name: {first: 'Fluffy', last: 'LaBeouf'},
//     color: 'Black'
// }
// Object.defineProperty(cat, 'name', {writable: false});
// Object.freeze(cat.name); // makes name property read only. // freezes the object inside name.

// // cat.name = 'Scratchy'; // throws error even though name is an object, is not writable.
// cat.name.first = 'Scratchy'; // allowed, no error thrown
// display(cat.name);


// bracket notation and dot notation
// display(cat.color);

// cat['Eye Color'] = 'Green';
// display(cat['Eye Color']);

// let cat = {
//     name: {first: 'Misty', last: 'Beaufort'},
//     color: 'Black'
// };

// for...in
// for (let propertyName in cat) {
//     display(propertyName + ': ' + cat[propertyName]);
// }

// if enumerable is set to 'false', cannot loop over the object.

// Object.defineProperty(cat, 'name', {enumerable: true});
// for (let propertyName in cat) {
//     display(propertyName + ': ' + cat[propertyName]);
// } // name property does not appear because it cannot be looped over, enumerable: false.

// display(Object.keys(cat));
// display(JSON.stringify(cat));


// let cat = {
//     name: {first: 'Misty', last: 'Beaufort'},
//     color: 'Black'
// };

// Object.defineProperty(cat, 'name', {configurable: false});
// // Object.defineProperty(cat, 'name', {enumerable: false}); // throws error, cannot redefine property
//                                                         // because configurable is set to false.
// // Object.defineProperty(cat, 'name', {configurable: true}); // throws error, once configurable is set to 
//                                                         // false, it cannot be changed back.
// Object.defineProperty(cat, 'name', {writable: false}); // works fine.

// delete cat.name; // throws error, configurable to false means cannot be deleted.



// GETTERS AND SETTERS
// let cat = {
//     name: {first: 'Misty', last: 'Beaufort'},
//     color: 'Black'
// };

// Object.defineProperty(cat, 'fullName',  // fullName is the property for returning the custom message.
//     {
//         get: function() {
//             return this.name.first + ' ' + this.name.last;
//         },
//         set: function(value) {
//             let nameParts = value.split(' '); // splits the return value from 'get' into an array.
//             this.name.first = nameParts[0]; // first name is now first array word.
//             this.name.last = nameParts[1]; // last name is now next array word.
//         }
//     })

// display(cat.fullName); // Misty Beaufort

// cat.fullName = 'Muffin Top';
// display(cat.fullName); // Muffin Top
// display(cat.name.first) // Muffin
// display(cat.name.last) // Top