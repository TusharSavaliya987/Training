//Types of Functions
//1.Named Functions:-
// Define a named function
function Sum(x: number, y: number): number {
  return x + y;
}

// Call the named function
const result = Sum(2, 3);
console.log(`the sum of the number is ${result}`); // Output: 5

//2. Anonymous Functions :- Anonymous functions are functions without a name. They are often used in callbacks or assigned to variables.
const multiply = function (x: number, y: number): number {
  return x * y;
};

console.log(multiply(3, 4)); // Output: 12

//3. Arrow Functions:- vary use full for callback functions
const subtract = (x: number, y: number): number => x - y;

console.log(subtract(10, 4)); // Output: 6

//4. Optional Parameters:- Functions can have optional parameters by appending a ? to the parameter name.
function greet(name: string, message?: string): string {
  return message ? `${message}, ${name}!` : `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Alice", "Good morning")); // Output: Good morning, Alice!\

//5. Default Parameters:- Functions can have default parameters by assigning a value to the parameter.
function greet1(name: string, message: string = "Hello"): string {
  return `${message}, ${name}!`;
}

console.log(greet1("Alice")); // Output: Hello, Alice!
console.log(greet1("Alice", "Hi")); // Output: Hi, Alice!

//6. Rest Parameters:- Functions can have rest parameters by appending ... to the parameter name. Rest parameters are used to pass a variable number of arguments to a function.
//Note :- its must be define with ... threepal dot
function multiply1(n: number, ...m: number[]) {
  return m.map((x) => n * x); // Multiply each element of 'm' by 'n'
}

// Example usage
const result1 = multiply1(10, 1, 2, 3, 4);
console.log(result1); // Output: [10, 20, 30, 40]

//7.Rest Arguments:- Rest arguments allow a function to accept any number of arguments as an array.
function mulNumbers(...numbers: number[]): number {
  return numbers.reduce((mul, num) => mul * num, 1);
}

console.log(mulNumbers(1, 2, 3, 4)); // Output: 10
console.log(mulNumbers(5, 10)); // Output: 15

//8.Parameter Destructuring:- Parameter destructuring allows you to unpack object properties directly in the function parameters.
function printUserDetails({ name, age }: { name: string; age: number }): void {
  console.log(`Name: ${name}, Age: ${age}`);
}

const userDetails = { name: "Tushar", age: 25 };
printUserDetails(userDetails);
// Output: Name: Tushar, Age: 25

//9. Arrow Functions:- Arrow functions provide a concise way to write functions.
let sum = (x: number, y: number): number => {
  return x + y;
};

console.log(sum(10, 20)); // Output: 30

//10. Parameterless Arrow Function :- A parameterless arrow function does not take any arguments.
const greet2 = (): string => "Hello, TypeScript!";

console.log(greet2()); // Output: Hello, TypeScript!

//11. Function Overloading:- Function overloading allows you to define multiple function signatures for a single function.
function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String value: ${value}`);
  } else {
    console.log(`Number value: ${value}`);
  }
}

display("Hello"); // Output: String value: Hello
display(123); // Output: Number value: 123

//12.Type Aliases:- Type aliases allow you to define a custom name for a type.
type Point = { x: number; y: number };

function printPoint(point: Point): void {
  console.log(`x: ${point.x}, y: ${point.y}`);
}

printPoint({ x: 5, y: 10 }); // Output: x: 5, y: 10

//13. Interfaces:- An interface can define the structure of an object.
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Tushar", age: 25 };
console.log(user); // Output: { name: 'Tushar', age: 25 }

//13.1 Interface as Type:- Interfaces can describe the shape of a function.
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8

//13.2 Interface as Function Type :- Interfaces can define the type of arrays.
interface StringArray {
  [index: number]: string;
}

const names: StringArray = ["Alice", "Bob", "Tushar"];
console.log(names[1]); // Output: Bob

//13.4 Optional Property:- Properties in an interface can be marked as optional with ?.
interface Car {
  make: string;
  model?: string; // Optional property
}

const car1: Car = { make: "Toyota" };
const car2: Car = { make: "Tesla", model: "Model 3" };

console.log(car1); // Output: { make: 'Toyota' }
console.log(car2); // Output: { make: 'Tesla', model: 'Model 3' }

//13.5 Read only Properties:- The readonly keyword makes a property immutable after initialization.
interface Book {
  readonly title: string;
  author: string;
}

const book: Book = { title: "TypeScript Guide", author: "Tushar" };
// book.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.
console.log(book); // Output: { title: 'TypeScript Guide', author: 'Tushar' }

//13.6 Extending Interfaces: -Interfaces can inherit from other interfaces.
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = { name: "Buddy", breed: "Golden Retriever" };
console.log(myDog); // Output: { name: 'Buddy', breed: 'Golden Retriever' }

//13.7 Implementing Interfaces:- Classes can implement an interface.
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  area(): number {
      return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483


export {};
