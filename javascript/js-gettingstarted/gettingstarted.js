// console.log('hello world');

// multiple variables can be declared at once seperated wtih commas.
// let productName = 'hammer', // comma to declare multiple variables.
//     productId = 'h123';

// console.log(productName, productId);

//escaping a character with backslash.
// let productName = 'John\'s Hammer';
// console.log(productName);

// let price = 5.00,
//     price2 = 3.00;

// console.log(price, price2);

// let firstName = 'john',
//     lastName = 'doe';

// console.log(`${firstName} ${lastName}`);
// console.log(firstName + " " + lastName);

// let first = 12,
//     second = 3;

// let answer = first + second;

// console.log(answer);


// 'TYPEOF' GIVES THE TYPE OF THE VALUE ASSIGNED TO THE VARIABLE.

// let value = 'apple';
// console.log( typeof(value) );

// let newValue = 77;
// console.log( typeof(newValue) );

// let thirdValue = "77";
// console.log( typeof(thirdValue) );

// let value = true;
// console.log(value, typeof(value) );

//ARRAYS
// let values = [1, 2, 3];
// console.log(values[0]); // 1
// console.log(values[1]); // 2
// console.log(values[2]); // 3
// console.log(values[3]); // undefined, no item 3 in array.

// let cards = ['Ace', 'King', 'Queen', 'Jack'];
// console.log(cards[0]);
// console.log(cards[1]);
// console.log(cards[2]);
// console.log(cards[3]);

// let cities = ['new york', 'los angeles', 'chicago'];
// console.log( cities[0] ); // new york
// console.log( cities[1] );
// console.log( cities[2] );

// let values = [0, 1, 2];

// values.push(44);
// values.push(33);
// values.push(-100);
// let result = values.pop(); // pops -100 off array and stores it in the results variable.

// // console.log(result);
// console.log( values );
// // check for array length
// console.log( values.length ); // 3


// let values = [0, 1, 2];

// to remove first item 'shift'
// let result = values.shift();
// console.log(result);

// to delete an individual element from array, .splice(index, how many?)
// values.splice(1, 1); // deletes element 1, and only that one.
// values.splice(0, 2); // delete 0 and 1.
// values.splice(2, 1); // only deletes array item 2.

// an optional array argument is .split(index, how many deleted?, 'new items to add to array');
// new items get added from where old item was deleted.
// values.splice(1, 1, 22, 33, 44, 77);
// console.log( values ); // [0, 22, 33, 44, 77, 2]