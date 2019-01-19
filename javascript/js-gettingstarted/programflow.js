// let state = 'FL';
// let taxPercent = 0;

// if ( state === 'FL' ) {
//     taxPercent = 7;  // changes value of taxPercent from 0 to 7.
// }

// console.log(taxPercent); // 7

// let state = 'FL';
// let taxPercent = 7;

// if ( state !== 'FL' ) { // does not execute because state does === 'fl'
//     taxPercent = 0;  
// }

// console.log(taxPercent); // 7  // tax percent unchanged.

/* 
FALSY VALUES IN JAVASCRIPT

FALSE
0
" "
NULL
UNDEFINED
NaN

*/

// TRUTHY, ALL STRINGS ARE TRUTHY, "0" IS A STRING AND IS TRUTHY.

// let score = 1000;

// if(score >= 1000) {  // will execute because score == 1000.
//     score = score + 100; // makes score 1100.  // shorthand score += 100;
// }

// console.log(`Score is: ${score}`); // 1100

// let score = 1000;

// if(score > 1000) {  // this block will NOT execute because score is 1000, not greater than.
//     score = score + 100; 
// }

// console.log(`Score is: ${score}`); // 1000



// let state = 'FL';
// let taxPercent;  // declares variable but does not assign to a value yet.

// if ( state === 'FL' ) {
//     taxPercent = 7;  
// } else {
//     taxPercent = 0;
// }

// console.log(taxPercent); // 7


// let score = 100;

// if(score > 1000) {     // this line will not execute.
//     score = score + 100; 
// } else if (score === 1000) {   
//     console.log('Almost!');
// } else {
//     console.log('nice try!');
// }

// console.log(`Score is: ${score}`); // 1000


// let state = 'TX';

// switch(state) {
//     case 'NY':
//         console.log('new york');
//         break;                   // 'break' means to break out of the current loop and continue code afterwards.
//     case 'TX':
//         console.log('texas'); // logs 'texas'
//         console.log('austin'); // logs 'austin'
//         break;
//     default:
//         console.log('unknown');
//         break;    
// }


// FOR LOOP

// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
// }


// WHILE LOOP
// let count = 1;

// while (count < 5) {
//     console.log(count);
//     count++;
// }

// let count = 1;

// while (count < 3) {
//     console.log(count);
//     count++;
// }