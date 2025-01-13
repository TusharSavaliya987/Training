// Narrowing
/* In TypeScript, narrowing refers to refining a variable's broad type into a more specific one based on runtime checks.
This process enhances type safety and allows for more precise operations on variables.*/
function typecheck(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 3;
}
console.log(typecheck(10));
console.log(typecheck("hello"));
function provideId(id) {
    if (!id) {
        console.log("Please provide an id");
        return;
    }
    id.toLowerCase();
}
console.log(provideId("123"));
console.log(provideId(null));
/* typeof
 type guards
As we’ve seen, JavaScript supports a typeof operator which can give very basic information about the type of values we have at runtime. TypeScript expects this to return a certain set of strings:

"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"  */
//1.Equality Narrowing:- TypeScript uses equality checks (===, !==, ==, !=) to narrow types.
function example(x, y) {
    if (x === y) {
        // TypeScript knows x and y must both be strings here.
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        // x and y retain their original types (string | number and string | boolean).
        console.log(x);
        console.log(y);
    }
}
example("hello", "world");
function move(animal) {
    if ("swim" in animal) {
        animal.swim(); // TypeScript knows this is a Fish.
    }
    else {
        animal.fly(); // TypeScript knows this is a Bird.
    }
}
console.log(move({ swim: function () { } }));
//3. instanceof:- Checks if a variable is an instance of a class and narrows the type accordingly.
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString()); // TypeScript knows this is a Date.
    }
    else {
        console.log(x.toUpperCase()); // TypeScript knows this is a string.
    }
}
console.log(logValue(new Date()));
console.log(logValue("hello"));
//4. Assignments:- TypeScript can infer the type of a variable based on the assignment.
var x;
x = Math.random() < 0.5; // x is now a boolean.
console.log(x);
if (Math.random() < 0.5) {
    x = "hello"; // x is now a string.
    console.log(x);
}
else {
    x = 100; // x is now a number.
    console.log(x);
}
console.log(x); // x is back to string | number | boolean
//5. Control Flow Analysis:- TypeScript can infer the type of a variable based on the control flow of the code.
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input; // Here, padding is a number.
    }
    return padding + input; // Here, padding is a string.
}
console.log(padLeft(10, "hi User"));
function move1(animal) {
    if ("swim" in animal) {
        // Here, animal is Fish | Human.
        console.log("Swimming!");
    }
    else {
        // Here, animal is Bird | Human.
        console.log("Flying!");
    }
}
console.log(move1({ swim: function () { } }));
//7.Using type predicates:- A type predicate is a way to create a custom function that tells TypeScript how to narrow down a type.
function isFish(pet) {
    return pet.swim !== undefined;
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2); // shape is Circle
    }
    else {
        return Math.pow(shape.sideLength, 2); // shape is Square
    }
}
console.log(getArea({ kind: "circle", radius: 10 }));
console.log(getArea({ kind: "square", sideLength: 10 }));
function getArea1(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck; // Ensures all cases are handled
    }
}
console.log(getArea1({ kind: "circle", radius: 20 }));
console.log(getArea1({ kind: "square", sideLength: 30 }));
