//Conditional Types
/*In TypeScript, conditional types allow us to write logic based on the relationship 
between two types. They work similarly to conditional expressions (condition ? trueExpression : falseExpression) 
in JavaScript but are used at the type level.*/ 

//1. How Conditional Types Work:- The general syntax for conditional types is
//SomeType extends OtherType ? TrueType : FalseType;


//2. Example of Conditional Types:-
interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }
  
  // Example 1
  type Example1 = Dog extends Animal ? number : string;
  // Result: number (because Dog extends Animal)
  
  // Example 2
  type Example2 = RegExp extends Animal ? number : string;
  // Result: string (because RegExp does not extend Animal)

  
//3. Using Conditional Types with Generics:-
/* Conditional types become powerful when used with generics to create flexible and reusable type logic.

Example: Simplifying Function Overloads
Suppose we have a createLabel function that behaves differently based on whether 
the input is a number or a string. Normally, we might write multiple overloads like this:*/
interface IdLabel {
    id: number; // some fields
  }
  interface NameLabel {
    name: string; // other fields 
  }
  
  function create(nameOrId: number): IdLabel;
  function create(nameOrId: string): NameLabel;
  function create(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented";
  }
 
  
//4. Using Conditional Types to Simplify Function Overloads:-
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

  function createLabel1<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
  }
   
  let a = createLabel1("typescript"); //let a: NameLabel
     
  let b1 = createLabel(2.8);//let b1: IdLabel
   
  let c = createLabel(Math.random() ? "hello" : 42); //let c: NameLabel | IdLabel

//5. What Are Conditional Type Constraints? 
/*In TypeScript, conditional types can be used to check if a type meets certain 
conditions. When a condition is true, 
it can give more specific information about the type and constrain it further. */

//type MessageOf<T> = T["message"]; //Type '"message"' cannot be used to index type 'T'.
//Solution: Add a Constraint
type MessageOf1<T extends { message: unknown }> = T["message"];

type MessageOf2<T extends { message: unknown }> = T["message"];
 
interface Email {
  message: string;
}
 
type EmailMessageContents = MessageOf2<Email>; //type EmailMessageContents = string


//Making It Flexible with Conditional Types
type MessageOf3<T> = T extends { message: unknown } ? T["message"] : never;
 
interface Email {
  message: string;
}
 
interface Dog {
  bark(): void;
}
 
type EmailMessageContents1 = MessageOf3<Email>;//type EmailMessageContents = string
 
type DogMessageContents = MessageOf3<Dog>;//type DogMessageContents = never

//6. Using Flattening Array Types:- 
type Flatten<T> = T extends any[] ? T[number] : T;
 
// Extracts out the element type.
type Str = Flatten<string[]>;//type Str = string
 
// Leaves the type alone.
type Num = Flatten<number>;//type Num = number


/*7. Inferring Within Conditional Types :- The infer keyword in TypeScript is used 
within conditional types to "guess" or "extract" a type based on a condition. 
It allows us to introduce a new type variable and figure out a specific 
part of a type in the true branch of a conditional type.*/
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
 
type Num1 = GetReturnType<() => number>;//type Num = number
 
type Str1 = GetReturnType<(x: string) => string>;//type Str = string
 
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;//type Bools = boolean[]

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;
 
type T1 = ReturnType<typeof stringOrNum>;//type T1 = string | number


