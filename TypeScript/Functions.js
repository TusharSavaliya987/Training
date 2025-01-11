"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Types of Functions
//1.Named Functions:-
// Define a named function
function Sum(x, y) {
    return x + y;
}
// Call the named function
var result = Sum(2, 3);
console.log("the sum of the number is ".concat(result)); // Output: 5
//2. Anonymous Functions :- Anonymous functions are functions without a name. They are often used in callbacks or assigned to variables.
var multiply = function (x, y) {
    return x * y;
};
console.log(multiply(3, 4)); // Output: 12
//3. Arrow Functions:- vary use full for callback functions
var subtract = function (x, y) { return x - y; };
console.log(subtract(10, 4)); // Output: 6
//4. Optional Parameters:- Functions can have optional parameters by appending a ? to the parameter name.
function greet(name, message) {
    return message ? "".concat(message, ", ").concat(name, "!") : "Hello, ".concat(name, "!");
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Alice", "Good morning")); // Output: Good morning, Alice!\
//5. Default Parameters:- Functions can have default parameters by assigning a value to the parameter.
function greet1(name, message) {
    if (message === void 0) { message = "Hello"; }
    return "".concat(message, ", ").concat(name, "!");
}
console.log(greet1("Alice")); // Output: Hello, Alice!
console.log(greet1("Alice", "Hi")); // Output: Hi, Alice!
//6. Rest Parameters:- Functions can have rest parameters by appending ... to the parameter name. Rest parameters are used to pass a variable number of arguments to a function.
//Note :- its must be define with ... threepal dot
function multiply1(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; }); // Multiply each element of 'm' by 'n'
}
// Example usage
var result1 = multiply1(10, 1, 2, 3, 4);
console.log(result1); // Output: [10, 20, 30, 40]
//7.Rest Arguments:- Rest arguments allow a function to accept any number of arguments as an array.
function mulNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (mul, num) { return mul * num; }, 1);
}
console.log(mulNumbers(1, 2, 3, 4)); // Output: 10
console.log(mulNumbers(5, 10)); // Output: 15
//8.Parameter Destructuring:- Parameter destructuring allows you to unpack object properties directly in the function parameters.
function printUserDetails(_a) {
    var name = _a.name, age = _a.age;
    console.log("Name: ".concat(name, ", Age: ").concat(age));
}
var userDetails = { name: "Tushar", age: 25 };
printUserDetails(userDetails);
// Output: Name: Tushar, Age: 25
//9. Arrow Functions:- Arrow functions provide a concise way to write functions.
var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 20)); // Output: 30
//10. Parameterless Arrow Function :- A parameterless arrow function does not take any arguments.
var greet2 = function () { return "Hello, TypeScript!"; };
console.log(greet2()); // Output: Hello, TypeScript!
function display(value) {
    if (typeof value === "string") {
        console.log("String value: ".concat(value));
    }
    else {
        console.log("Number value: ".concat(value));
    }
}
display("Hello"); // Output: String value: Hello
display(123); // Output: Number value: 123
function printPoint(point) {
    console.log("x: ".concat(point.x, ", y: ").concat(point.y));
}
printPoint({ x: 5, y: 10 }); // Output: x: 5, y: 10
var user = { name: "Tushar", age: 25 };
console.log(user); // Output: { name: 'Tushar', age: 25 }
var add = function (a, b) { return a + b; };
console.log(add(5, 3)); // Output: 8
var names = ["Alice", "Bob", "Tushar"];
console.log(names[1]); // Output: Bob
var car1 = { make: "Toyota" };
var car2 = { make: "Tesla", model: "Model 3" };
console.log(car1); // Output: { make: 'Toyota' }
console.log(car2); // Output: { make: 'Tesla', model: 'Model 3' }
var book = { title: "TypeScript Guide", author: "Tushar" };
// book.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.
console.log(book); // Output: { title: 'TypeScript Guide', author: 'Tushar' }
var myDog = { name: "Buddy", breed: "Golden Retriever" };
console.log(myDog); // Output: { name: 'Buddy', breed: 'Golden Retriever' }
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
