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
