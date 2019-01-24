// CONSTRUCTOR PATTERN

/*
'new' Keyword:
=> creates a brand new object.
=> Links to an object prototype.
=> Binds 'this' to the new object scope.
=> Implicitly returns 'this'

function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function() {
        return this.param1 + ' ' + this.param2;
    }
}
*/


// MODULE PATTERN

// let Module = {
//     method: function() {...},
//     nextMethod: function() {...}
// }


let Module = function() {
    let privateVar = 'I am private..';
    return {
        method: function() {

        },
        nextMethod: function() {
            
        }
    }
}