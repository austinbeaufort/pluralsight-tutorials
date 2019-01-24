// let car = newCar;

// console.log('continuing...');

// ERROR HANDLING USING TRY AND CATCH

// try {
//     let car = newCar;
// } catch (error) {
//     console.log('error: ', error);
// }

// console.log('continuing...');


// FINALLY, (A FINALLY BLOCK ALWAYS EXECUTES);


// try {
//     let car = newCar;
// } catch (error) {
//     console.log('error: ', error);
// } finally {                          // executes regardless of above.
//     console.log('this always executes');
// }



// DEVELOPER DEFINED ERRORS.

// THROW

// try {
//     // code here...
//     throw new Error('my custom error');
// } catch(error) {                          // caught my custom error.
//     console.log('error: ', error);
// } finally {
//     console.log('this always executes');
// }


// SETTLING A PROMISE

// let promise = new Promise (
//     function(resolve, reject) {
//         setTimeout(resolve, 100, 'someValue');
//     }
// );

// promise.then(
//     value => console.log('fulfilled: ' + value),
//     error => console.log('rejected: ' + error)
// );