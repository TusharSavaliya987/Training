//Basic Types
//1.Number:-
let first: number = 123; // number
let second: number = 0x37cf; // hexadecimal
let third: number = 0o377; // octal
let fourth: number = 0b111001; // binary

console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57

//2.String:-
let color: string = "blue";
color = "red";

console.log(color); // red

//3.Boolean:-
let isPresent: boolean = true;

//4.Array:-
let fruits: string[] = ["Apple", "Orange", "Banana"];
console.log(fruits);

//for generic array type:-
let fruits1: Array<string> = ["Apple", "Orange", "Banana"];
console.log(fruits1);

//multiple types array:-
let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(values);
// or
let values1: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(values1);

//5.Tuple:-
var employee: [number, string] = [1, "Mukesh"];
var person: [number, string, boolean] = [1, "Mukesh", true];

var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Mukesh", true, 20, "Admin"]; // initialize tuple variable
console.log(user);

//tapal array:-
var employee1: [number, string][];
employee1 = [
  [1, "Mukesh"],
  [2, "Bill"],
  [3, "Jeff"],
];
console.log(employee1);

//6.Enum:-
enum PrintMedia {
  Newspaper,
  Newsletter,
  Magazine,
  Book,
}
console.log(PrintMedia);

//enum with string:-
enum PrintMedia1 {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK",
}
// Access String Enum
//PrintMedia[Newspaper]; //returns NEWSPAPER
PrintMedia["Magazine"]; //returns MAGAZINE

//7.Union:-
let code: string | number;
code = 123; // OK
code = "ABC"; // OK
//code = false; // Compiler Error
console.log(code);

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
//empId = true; // Compiler Error
console.log(empId);

//8.Any:- any type of data type are allowed
let anyValue: any; // `any` allows assigning any type

anyValue = 10; // Assign a number
console.log(anyValue); // Output: 10

anyValue = "Hello"; // Assign a string
console.log(anyValue); // Output: Hello

anyValue = { key: "value" }; // Assign an object
console.log(anyValue.key); // Output: value

//9.Void :-
function sayHi(): void {
  console.log("Hi!");
}

let speech: void = sayHi();
console.log(speech); //Output: undefined

//10.Never:-
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }
// console.log(throwError);

// function keepProcessing(): never {
//   while (true) {
//     console.log("I always does something and never ends.");
//   }
// }
// console.log(keepProcessing);

//11. object:-
interface Person {
  name: string;
  age: number;
}

let person1: Person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
console.log(person1);

//12.Unknown:-
let value: unknown;

value = 42; // Assign a number
value = "Hello"; // Assign a string
value = { key: "value" }; // Assign an object

// Type checking before usage
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Output: HELLO
}

// Type assertion
let obj = value as { key: string };
console.log(obj.key);

//13.Interface:-
// Define an interface
interface Person {
  name: string;
  age: number;
  greet(): string; // Method that returns a string
}

// Create an object that implements the interface
const person2: Person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

// Access properties and methods
console.log(person2.name); // Output: John
console.log(person2.age); // Output: 30
console.log(person2.greet()); // Output: Hello, my name is John and I am 30 years old.

export {};


let myAdd: (x: number, y: number) => number = function (x: number, y: number) { return x + y; };