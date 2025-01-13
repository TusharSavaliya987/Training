// Narrowing
/* In TypeScript, narrowing refers to refining a variable's broad type into a more specific one based on runtime checks. 
This process enhances type safety and allows for more precise operations on variables.*/

function typecheck(val: number | string) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val + 3;
}
console.log(typecheck(10));
console.log(typecheck("hello"));

function provideId(id: string | null) {
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
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // TypeScript knows x and y must both be strings here.
    console.log(x.toUpperCase());
    console.log(y.toLowerCase());
  } else {
    // x and y retain their original types (string | number and string | boolean).
    console.log(x);
    console.log(y);
  }
}
example("hello", "world");

//2.In operator:- Checks if a property exists in an object and narrows the type accordingly.
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // TypeScript knows this is a Fish.
  } else {
    animal.fly(); // TypeScript knows this is a Bird.
  }
}
console.log(move({ swim: () => {} }));

//3. instanceof:- Checks if a variable is an instance of a class and narrows the type accordingly.
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString()); // TypeScript knows this is a Date.
  } else {
    console.log(x.toUpperCase()); // TypeScript knows this is a string.
  }
}
console.log(logValue(new Date()));
console.log(logValue("hello"));

//4. Assignments:- TypeScript can infer the type of a variable based on the assignment.
let x: string | number | boolean;

x = Math.random() < 0.5; // x is now a boolean.
console.log(x);

if (Math.random() < 0.5) {
  x = "hello"; // x is now a string.
  console.log(x);
} else {
  x = 100; // x is now a number.
  console.log(x);
}

console.log(x); // x is back to string | number | boolean

//5. Control Flow Analysis:- TypeScript can infer the type of a variable based on the control flow of the code.
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input; // Here, padding is a number.
  }
  return padding + input; // Here, padding is a string.
}
console.log(padLeft(10, "hi User"));

//6. Type Predicates:- You can combine different narrowing techniques to handle complex scenarios.
type Fish1 = { swim: () => void };
type Bird1 = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move1(animal: Fish1 | Bird1 | Human) {
  if ("swim" in animal) {
    // Here, animal is Fish | Human.
    console.log("Swimming!");
  } else {
    // Here, animal is Bird | Human.
    console.log("Flying!");
  }
}
console.log(move1({ swim: () => {} }));

//7.Using type predicates:- A type predicate is a way to create a custom function that tells TypeScript how to narrow down a type.
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

//8.Discriminated Unions:- A discriminated union is a type that has a common property that differentiates between its members.
interface Circle {
    kind: "circle";
    radius: number;
  }
  interface Square {
    kind: "square";
    sideLength: number;
  }
  type Shape = Circle | Square;
  
  function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2; // shape is Circle
    } else {
      return shape.sideLength ** 2; // shape is Square
    }
    }
  console.log(getArea({ kind: "circle", radius: 10 }));
  console.log(getArea({ kind: "square", sideLength: 10 })); 

//9.The never Type:- never is a type that represents something that should not exist.
type Shape1 = Circle | Square;

function getArea1(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; 
  }
}
console.log(getArea1({ kind: "circle", radius: 20 }));
console.log(getArea1({ kind: "square", sideLength: 30 }));


  