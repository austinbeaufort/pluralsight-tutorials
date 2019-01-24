// 3 WAYS TO CREATE A NEW OBJECT.

// let obj = {};
// let nextObj = Object.create(Object.prototype);
// let lastObj = new Object();


// ASSIGNING KEYS AND VALUES

// let object = {};
// object.param = 'new value';
// console.log(object.param); // new value

// let object = {};
// object['param'] = 'new value';
// console.log(object['param']); // new value

// let obj = {};
// let val = 'value';
// obj[val] = 'new value'; // give 'val' a new value for being part of the object. original value remains with variable.
// console.log(obj[val]); // new value
// console.log(val); // value


Object.defineProperty(obj, 'name', {
    value: 'my name',
    writeable: true,
    enumerable: true,
    configurable: true
})