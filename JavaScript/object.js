// //Objective: Object in JavaScript
// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };

//   alert( user.name ); // John
//   alert( user.age ); // 30

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };
// console.log(user); // John

// //Computed properties example:-
// let fruit1 = prompt("Which fruit to buy?", "apple");

// let bag1 = {
//   [fruit1]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag1.apple ); // 5 if fruit="apple"

// //We can use more complex expressions inside square brackets:
// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };


//Property value shorthand
function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  alert(user.name); // John

let message = "Hello!";
let phrase = message;

console.log(phrase); // Hello!