"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Types
//1.Number:-
var first = 123; // number
var second = 0x37cf; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary
console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57
//2.String:-
var color = "blue";
color = "red";
console.log(color); // red
//3.Boolean:-
var isPresent = true;
//4.Array:-
var fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);
//for generic array type:-
var fruits1 = ["Apple", "Orange", "Banana"];
console.log(fruits1);
//multiple types array:-
var values = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(values);
// or
var values1 = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(values1);
//5.Tuple:-
var employee = [1, "Mukesh"];
var person = [1, "Mukesh", true];
var user; // declare tuple variable
user = [1, "Mukesh", true, 20, "Admin"]; // initialize tuple variable
console.log(user);
//tapal array:-
var employee1;
employee1 = [
    [1, "Mukesh"],
    [2, "Bill"],
    [3, "Jeff"],
];
console.log(employee1);
//6.Enum:-
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia);
//enum with string:-
var PrintMedia1;
(function (PrintMedia1) {
    PrintMedia1["Newspaper"] = "NEWSPAPER";
    PrintMedia1["Newsletter"] = "NEWSLETTER";
    PrintMedia1["Magazine"] = "MAGAZINE";
    PrintMedia1["Book"] = "BOOK";
})(PrintMedia1 || (PrintMedia1 = {}));
// Access String Enum
//PrintMedia[Newspaper]; //returns NEWSPAPER
PrintMedia["Magazine"]; //returns MAGAZINE
//7.Union:-
var code;
code = 123; // OK
code = "ABC"; // OK
//code = false; // Compiler Error
console.log(code);
var empId;
empId = 111; // OK
empId = "E111"; // OK
//empId = true; // Compiler Error
console.log(empId);
//8.Any:- any type of data type are allowed
var anyValue; // `any` allows assigning any type
anyValue = 10; // Assign a number
console.log(anyValue); // Output: 10
anyValue = "Hello"; // Assign a string
console.log(anyValue); // Output: Hello
anyValue = { key: "value" }; // Assign an object
console.log(anyValue.key); // Output: value
//9.Void :-
function sayHi() {
    console.log("Hi!");
}
var speech = sayHi();
console.log(speech); //Output: undefined
var person1 = {
    name: "John",
    age: 30,
    greet: function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    },
};
console.log(person1);
//12.Unknown:-
var value;
value = 42; // Assign a number
value = "Hello"; // Assign a string
value = { key: "value" }; // Assign an object
// Type checking before usage
if (typeof value === "string") {
    console.log(value.toUpperCase()); // Output: HELLO
}
// Type assertion
var obj = value;
console.log(obj.key);
// Create an object that implements the interface
var person2 = {
    name: "John",
    age: 30,
    greet: function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    },
};
// Access properties and methods
console.log(person2.name); // Output: John
console.log(person2.age); // Output: 30
console.log(person2.greet()); // Output: Hello, my name is John and I am 30 years old.
