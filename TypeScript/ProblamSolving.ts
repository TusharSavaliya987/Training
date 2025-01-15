//1. Write a TypeScript program that declares a variable `name` and assigns it a string value. 
// Also declare a variable `age` and assign it a number value. 
// Finally print the values of name and age.
let name1: string[] = ["Tushar", "meet", ];
let age: number[] = [22, 23];

console.log(name1);
console.log(age);

//2. Write a TypeScript program that declares variables using let, const, and var. Then, 
// describe how each declaration type behaves with respect to scoping and mutability.  
let letExample = "i am let";
letExample = "Update let";
console.log(letExample);

const consoleExample = "const EX";
// consoleExamples = "Update const EX";   this valude is not changr because of it's immutabil
console.log(consoleExample);

var varExample = "ver example value";
varExample = "update var";
console.log(varExample)

//3. Write a TypeScript program that declares variables of the following data types: 
// number, string, boolean,and undefined. Assign values to them and perform basic operations.
let num: number = 10;
let str: string = "Tushar";
let bool: boolean = true; 
let un: undefined = undefined;

let doubled = num * 2;
console.log(`The number ${num} doubled is ${doubled}.`);

let greeting = `Hello, ${str}!`;
console.log(greeting);

if (bool){
    console.log("this is positive responce")
}else{
    console.log("this is Negative responce");
}

if (un){
    console.log("this is undefined responce")
}else{
    console.log("this is undefined responce");
}

//4. Write a TypeScript program that declares a variable as a 
// number and then tries to assign a string to it to see type checking in action.
let value: number = 5000;
//value = "Tushar";  // this is not possible because of type checking

//5. Write a TypeScript program that declares a variable without specifying its 
// type and shows how TypeScript infers the type based on the assigned value.

let value1 = "Tushar", value2 = 5000;
console.log(typeof value1);
console.log(typeof value2);

//6. Write a TypeScript program that converts a variable of one type to another 
// using type assertions and type conversion functions like parseInt().

let strNum: string = "42"; //it's a string 
let mixedValue: unknown = "123"; // A value of type `unknown`

// Type conversion using parseInt()
let convertedNumber: number = parseInt(strNum);
console.log(`Converted string "${strNum}" to number: ${convertedNumber}`);

//7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. 
// Use them to define variables and explain how they improve code readability.  