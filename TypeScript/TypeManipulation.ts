//Type Manipulation
//1.Generic Types:- Generics act like placeholders for types. They allow us to define a function or class that can work with any type without losing track of what type it’s working with.
function identity<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity: <Type>(arg: Type) => Type = identity;
console.log(myIdentity(10));

console.log(myIdentity("Hello"));

//2. Generic Functions:- We can also define generic functions using the arrow function syntax.

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity1<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity1: GenericIdentityFn = identity1;
console.log(myIdentity1(1000));

//3. Generic Classes:- We can also create generic classes. The syntax is similar to that of generic functions.  
class GenericNumber<NumType, StringType, > {
  zeroValue: NumType;
  add: (x: NumType, y: StringType) => (NumType | StringType);
}
 
let myGenericNumber = new GenericNumber<number , string>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
console.log(myGenericNumber.add(10,"Hello"));

//4. Generic Constraints:- We can also apply constraints to generic types. 
// This allows us to restrict the types that can be passed to a generic function or class.













export {};

