"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1.Generics :- Generics allow you to write reusable functions, classes, and interfaces by making them work with different types.
function identity(arg) {
    return arg;
}
console.log(identity(10)); // Output: 10 (T inferred as number)
console.log(identity("Hello")); // Output: "Hello" (T inferred as string)
//2 Multiple Type Variables:-You can use multiple type variables in a function or class to handle more complex relationships between types.
function combine(a, b) {
    return "".concat(a, " and ").concat(b);
}
console.log(combine("Hello", 10)); // Output: "Hello and 10"
console.log(combine(true, "World")); // Output: "true and World"
//3 Generic Type Methods and Properties:- Generics can also be used in methods and properties of a class to ensure type consistency.
var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    Box.prototype.setContent = function (content) {
        this.content = content;
    };
    return Box;
}());
var numberBox = new Box(10);
console.log(numberBox.getContent()); // Output: 10
var stringBox = new Box("Hello");
console.log(stringBox.getContent()); // Output: "Hello"
//4 Generic Array Methods:- Generics work well with arrays to ensure type consistency when working with elements in the array.
function reverseArray(arr) {
    return arr.reverse();
}
var numArray = [1, 2, 3, 4];
console.log(reverseArray(numArray)); // Output: [4, 3, 2, 1]
var strArray = ["apple", "banana", "cherry"];
console.log(reverseArray(strArray)); // Output: ["cherry", "banana", "apple"]
//5 Generic Constraints:- Generic constraints restrict the type of values a generic function, class, or interface can accept.
function logLength(arg) {
    console.log("Length: ".concat(arg.length));
}
logLength("Hello"); // Output: Length: 5
logLength([1, 2, 3]); // Output: Length: 3
logLength({ length: 10 }); // Output: Length: 10
var pair = { key: "Age", value: 30 };
console.log(pair); // Output: { key: 'Age', value: 30 }
var anotherPair = { key: 1, value: true };
console.log(anotherPair); // Output: { key: 1, value: true }
//7 Generic Classes :- A generic class allows defining type-safe and reusable classes for handling multiple types.
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.getItems = function () {
        return this.data;
    };
    return DataStore;
}());
var stringStore = new DataStore();
stringStore.addItem("Hello");
stringStore.addItem("World");
console.log(stringStore.getItems()); // Output: ["Hello", "World"]
var numberStore = new DataStore();
numberStore.addItem(10);
numberStore.addItem(20);
console.log(numberStore.getItems()); // Output: [10, 20]
//8 Namespaces :- Namespaces group related code together, providing a way to organize and avoid name conflicts in large codebases.
var StringUtility;
(function (StringUtility) {
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    StringUtility.toUpperCase = toUpperCase;
    function toLowerCase(str) {
        return str.toLowerCase();
    }
    StringUtility.toLowerCase = toLowerCase;
})(StringUtility || (StringUtility = {}));
// Usage:
var upper = StringUtility.toUpperCase("hello");
console.log(upper); // Output: "HELLO"
var lower = StringUtility.toLowerCase("WORLD");
console.log(lower); // Output: "world"
var mixedCase = "TypeScript";
console.log(StringUtility.toUpperCase(mixedCase)); // Output: "TYPESCRIPT"
console.log(StringUtility.toLowerCase(mixedCase)); // Output: "typescript"
