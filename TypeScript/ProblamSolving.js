//1. Write a TypeScript program that declares a variable `name` and assigns it a string value. 
// Also declare a variable `age` and assign it a number value. 
// Finally print the values of name and age.
var name1 = ["Tushar", "meet",];
var age = [22, 23];
console.log(name1);
console.log(age);
//2. Write a TypeScript program that declares variables using let, const, and var. Then, 
// describe how each declaration type behaves with respect to scoping and mutability.  
var letExample = "i am let";
letExample = "Update let";
console.log(letExample);
var consoleExample = "const EX";
// consoleExamples = "Update const EX";   this valude is not changr because of it's immutabil
console.log(consoleExample);
var varExample = "ver example value";
varExample = "update var";
console.log(varExample);
//3. Write a TypeScript program that declares variables of the following data types: 
// number, string, boolean,and undefined. Assign values to them and perform basic operations.
var num = 10;
var str = "Tushar";
var bool = true;
var un = undefined;
var doubled = num * 2;
console.log("The number ".concat(num, " doubled is ").concat(doubled, "."));
var greeting = "Hello, ".concat(str, "!");
console.log(greeting);
if (bool) {
    console.log("this is positive responce");
}
else {
    console.log("this is Negative responce");
}
if (un) {
    console.log("this is undefined responce");
}
else {
    console.log("this is undefined responce");
}
