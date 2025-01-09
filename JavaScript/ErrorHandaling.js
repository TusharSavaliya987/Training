//start with
try {
  alert("Start of try runs"); // (1) <--

  // ...no errors here

  alert("End of try runs"); // (2) <--
} catch (err) {
  alert("Catch is ignored, because there are no errors"); // (3)
}

// With Error:-
try {
  alert("Start of try runs"); // (1) <--

  lalala; // error, variable is not defined!

  alert("End of try (never reached)"); // (2)
} catch (err) {
  alert(`Error has occurred!`); // (3) <--
}

//with setTimeout
setTimeout(function () {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert("error is caught here!");
  }
}, 1000);

//Throwing our own errors
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  alert(user.name); // no name!
} catch (err) {
  alert("doesn't execute");
}

//Custom errors, extending Error
// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error"; // (different names for different built-in error classes)
        this.stack = <call stack ></call>; // non-standard, but most environments support it
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch (err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // a list of nested calls with line numbers for each
}
