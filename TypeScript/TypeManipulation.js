"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Type Manipulation
//1.Generic Types:- Generics act like placeholders for types. They allow us to define a function or class that can work with any type without losing track of what type it’s working with.
function identity(arg) {
    return arg;
}
var myIdentity = identity;
console.log(myIdentity(10));
console.log(myIdentity("Hello"));
function identity1(arg) {
    return arg;
}
var myIdentity1 = identity1;
console.log(myIdentity1(1000));
//3. Generic Classes:- We can also create generic classes. The syntax is similar to that of generic functions.  
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(10, 20));
