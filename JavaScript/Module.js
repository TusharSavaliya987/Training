// Introduction to JavaScript Modules (Simplified)
// As applications grow bigger, we often need to split the code into smaller, manageable parts called modules. Each module can contain a specific class or a group of functions for a particular purpose.

// Why Modules?
// In the early days of JavaScript, scripts were simple and small, so there was no need for modules. But as applications became more complex, developers created ways to organize code into modules. Some older systems included:

// AMD (Asynchronous Module Definition) – Used in require.js.
// CommonJS – A system designed for Node.js.
// UMD (Universal Module Definition) – A mix of AMD and CommonJS.
// These older systems are now outdated but may still appear in old projects.

// In 2015, JavaScript introduced a built-in module system. It has been improved since then and is now supported by all major browsers and Node.js. This is what we’ll focus on.

// What Is a Module?
// A module is simply a file. Each file is treated as one module. Modules can:

// Share their functions or variables using export.
// Use functions or variables from other modules using import.
// Example: Exporting and Importing

// 1. Export a Function:
// 📁 sayHi.js
export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }

  
//2. Import and Use the Function:
// 📁 main.js
import { sayHi } from './sayHi.js';

sayHi('John'); // Hello, John!

//Running Modules in the Browser
export function sayHi(user) {
    return `Hello, ${user}!`;
  }

//A module code is evaluated only the first time when imported
// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';
alert(admin.name); // Pete

// Both 1.js and 2.js reference the same admin object
// Changes made in 1.js are visible in 2.js

//What is import.meta?
//import.meta is an object that gives information about the current module.
alert(import.meta.url); // Shows the script's URL

// Top-level this in Modules
// In modules, this is undefined.
// In regular scripts, this refers to the global object (window in browsers).


//Export and Import
//Export before declarations
// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}


//Export apart from declarations
// 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye}; // a list of exported variables

//Import *
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

//Import “as” Keyword:-  for remane the curret name fo the file or function, mostly ue for sorting the name of the file/function
// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!

//Export “as” Keyword :- for remane the curret name fo the file or function, mostly ue for sorting the name of the file/function
// 📁 say.js
export {sayHi as hi, sayBye as bye};


//Export default example
// 📁 user.js
export default class User { // just add "default"
    constructor(name) {
      this.name = name;
    }
  }

//Importing a Default Export
// main.js
import User from './user.js'; // No curly braces needed
new User('John');


//Combining Named and Default Exports
// user.js
export default class User {
    constructor(name) {
      this.name = name;
    }
  }
  export function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }

//import both  
  // main.js
import User, { sayHi } from './user.js';


//Dynamic imports
//1.Static Paths Only: You must provide a fixed string for the module path.
import module from './path.js'; // Works
import module from getModuleName(); // Error!

//2. No Conditional Imports: You can't use import inside if statements or other blocks.
if (condition) {
    import './module.js'; // Error!
  }

  
//The import() Function
import(modulePath)
  .then(module => {
    // Use the module here
  })
  .catch(error => {
    console.error('Error loading module:', error);
  });




