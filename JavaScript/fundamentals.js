// "use strict";

console.log('I am Javascript');

// Variable
// let message;
// message = "Hello Javascript";
// alert(message);

// variable task
// let name = "John";
// let admin = name;
// alert(admin);


// Datatype
/*
console.log(1/0);     // infinity
console.log('not a number'/2);     // Nan

const BigInt = 1234567890123456789012345678901234567890n;       // Bigint
console.log(typeof BigInt);

let str = "Hello";                              // string
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(phrase);

let isGreater = 4<1  ;                           // Boolean
console.log(isGreater);

let age = null;                                  // null
console.log(age);

let number;                                        // undefined
console.log(number); 

// datatype task
let name = "Ilya";
console.log( `hello ${1}` );
console.log( `hello ${"name"}` );
console.log( `hello ${name}` );
*/



// Type conversion
/*
let value = true;                     // string conversion
console.log(typeof value);

value = String(value);
console.log(typeof value);

let string = "123";                  // number conversion
console.log(typeof string);

let num = Number(string);
console.log(typeof num);

let name 
console.log(Boolean(""));           // Boolean conversion
console.log(Boolean(name));
console.log(Boolean("0"));
*/



// Basics operators, maths
/*
console.log(5 % 3) ;             // Remainder

console.log(6 ** 2);             // exponential

console.log(2 + "1" + 2);        // string concate with +
console.log(2 + 7 + "1");

console.log('8' / '2');

let apple = "2" ;                // Numeric conversion, unary +
let grapes = "50";
console.log(apple + grapes);     // return 250
console.log(+apple + +grapes);    // return 52

let n = 7;
n +=5 ;  // 12
n *=2;
console.log(n);

let counter = 2 ;                // Increment
counter++;
// ++counter;
console.log(counter);

let counter2 = 5;               // decrement
counter2--
console.log(counter2)

// task
let a = 1, b = 1;
let c = ++a; 
let d = b++; 
console.log(a);
console.log(b);
console.log(c);              // prefix form return new values
console.log(d);              // postfix form return old values

let a1 = 2;
let x = 1 + (a1 *= 2);
console.log(x);
console.log(a1);
*/



// Comparison
/*
let result = 56 < 50 ;       // boolean result
console.log(result);

console.log('ghb' > 'gba');  // string comparison done letter-by-letter

console.log('12' > 11);      // different data type comparison

console.log(0 == false);     // here type are converted to number
console.log(0 === false);    // strict equality - does not convert to number

console.log(null == undefined);
console.log(null === undefined);
*/



// Logical Operator

let officeHour = 9;                     // OR operator
if(officeHour <10 || officeHour >15){
    console.log("Office is closed");
}

console.log( null || 8 || null)         // return 1st truthy value

let hour = 12;                          // AND operator
let minute = 30;
if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

console.log(null && 9 && null)          // return  1st falsy value

console.log(!true)                      // not operator


// nullish coalescing operator ??  -- return 1st argument is defined otherwise 2nd one
let user
console.log(user ?? "anonymus")

let user2 = "Aman"
console.log(user2 ?? "anonymus")

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";
// shows the first truthy value:
console.log(firstName1 || lastName1 || nickName1 || "Anonymous"); // Supercoder




// Loops
/*
let i = 0;              // while loop
while(i<2){
    console.log(i);
    i++;
}

// let a = 0
// do{
//     console.log(a)
//     a++
// }while(i<3)

for(let b =0; b<=2; b++){           // for loop
    console.log(b);
}

for(let c = 0; c<6; c++){           // continue
    if(c % 2 ==0)continue;
        console.log(c);
}
*/



// switch statement
let a =  2 + 1;
switch(a){
    case 1:
        console.log("Too small");
        break;
    case 2:
        console.log("Exactly");
        break;
    case 3:
        console.log("Too big");
        break;
    default:
        console.log("dont know");    
}



// Functions
let userName = "John";
function showName(){
    userName = "Bob";
    let message = 'Hello,' + userName;
    console.log(message)
}
console.log(userName)
showName()
console.log(userName)

function showMessage(from, text) {          // parameterised function
    console.log( from + ': ' + text );
}
let from = "Ann";
showMessage(from, "Hello"); 
// the value of "from" is the same, the function modified a local copy
console.log( from ); 


function showCount(count) {             // modern js support ??
// if count is undefined or null, show "unknown"
console.log(count ?? "unknown");
}
showCount(0); 
showCount(null); 
showCount(); 


let sayHi = function() {            // function expression
    alert( "Hello" );
};
  
let sum = (a,b) => a+b;               // arrow function
console.log(sum(1,2))




// backtick is used to split the string
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;
console.log(str)

