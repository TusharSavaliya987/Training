// object decralation
/*
let user = {
    name : "John",
    age : 30,
    "like bird" : true ,         // quote the multiword property
};
console.log(user.name);         // to access property value
console.log(user);

user.isAdmin = true             // add property
console.log(user)

delete user.age                 // delete property
console.log(user)

console.log(user["like bird"])  // to access the multiword property use []

let key = "name"                // to access property
console.log(user[key])


// computed properties --      use [] in object literals
let fruit = 'apple';
let bag = {
    [fruit + 'Computer']: 5
};
console.log(bag);

// reserverd keyword used for variable declaration in object
let obj = {
    for : 1,
    let : 2,
    const :7,
};
console.log(obj.for + obj.let + obj.const);

// other data type converted to string automatically
let obj1 = {
    0: "test" // same as "0": "test"
};
  // both alerts access the same property (the number 0 is converted to string "0")
console.log( obj1["0"] ); 
console.log( obj1[0] );


// 'in' operator to test property exist or not
let userInfo = {username : "Alex", age : 18};
console.log("username" in userInfo)
console.log("city" in userInfo)


// for..in loop -- to iterate over object
let users = {
    name : "Shubham",
    age : 18,
    isAdmin: true,
};
for(let key in users){
    console.log(key);       // return keys
    console.log(users[key]);    // return value for key
};


// task
let object = {};
object.name = "John";
object.surname = "Smith";
console.log(object);
object.name = "Pete";
console.log(object);
delete object.name;
console.log(object);


function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}


let saralies = {
    John: 100,
    Ann : 160,
    Pete : 130,
};

console.log(saralies.John + saralies.Ann + saralies.Pete)
let sum = 0;
for (let key in saralies){
    sum +=saralies[key];
};
console.log(sum)

*/


// Object reference and copy
/*
let user = {name : 'john'};
let admin = user;
admin.name = "Alex";
console.log(user)


// comparison by reference
let a = {};                         // here a and b reference same object 
let b = a;                          // copy reference
console.log( a == b);
console.log( a === b);
  
let a1 ={};                         // here a and b reference different object; independent object
let b1 = {};
console.log(a1 == b1)
console.log(a1 === b1)

const users = {                     // users is costant but property free to change
    name: "John"
};  
users.name = "Pete";
console.log(users.name); 


// cloning and merging
let userinfo = {
    name : 'John',
    age: 19,
};
let clone = {}
// let's copy all user properties into it
for (let key in userinfo){
    clone[key] = userinfo[key];
}
// now clone is a fully independent object with the same content
clone.name = "Pete";
console.log( userinfo.name ); // still John in the original object

  

// Object.assign method -- for copy the property
let info = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into info
Object.assign(info, permissions1, permissions2);
console.log(info);


// Nested cloning
let nestingUser = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
};
let clones = Object.assign({}, nestingUser);        // Object.assign method
console.log( nestingUser.sizes === clones.sizes ); // true, same object
  
nestingUser.sizes.width = 60;    // change a property from one place
console.log(clones.sizes.width); // 60, related

let clon = structuredClone(nestingUser);            // structuredClone method
console.log(nestingUser.sizes === clon.sizes)
nestingUser.sizes.width = 60;    // change a property from one place
console.log(clon.sizes.width); // 50, not related
*/


// this keyword

let thisUser = {
    name: "John",
    age: 30,
  
    sayHi() {
        console.log(this.name);                    
        // console.log(thisUser.name);
    }
};
// copying user in another variable 
let admins = thisUser;                              
thisUser = null;
console.log(admins.sayHi()); 


// obj.f() call the this is obj during f
let user1 = { name: "John" };
let admin1 = { name: "Admin" };
function sayHi() {
  console.log( this.name );
}
user1.f = sayHi;
admin1.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user1.f();
admin1['f'](); 



// Constructor function
function User(name) {               // constructor first letter name is capital
    this.name = name;
    this.isAdmin = false;
}
let user = new User("Jack");        // new  is used to call the constructor
console.log(user.name); 
console.log(user.isAdmin);


// task
// constructor function Calculator that creates objects with 3 methods:
// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
// }
  
// let calculator = new Calculator();
// calculator.read();
  
// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );
 


// Optional chaining '?'
let users = {}; // user has no address
console.log( users?.address?.street ); 

  

  