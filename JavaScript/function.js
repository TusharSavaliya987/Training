//Recursion and stack
//Two Ways to Think About a Problem: Iterative vs. Recursive
//1. Iterative (using a loop):
function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  alert(pow(2, 3)); // 8
  
//2. Recursive (calling the function within itself):
function pow(x, n) {
  if (n == 1) {
    return x; // Base case: simplest version
  } else {
    return x * pow(x, n - 1); // Recursive step
  }
}

alert(pow(2, 3)); // 8

// Limitations:

// Most JavaScript engines allow around 10,000 recursive calls. Going beyond this might crash the program.
// Some engines optimize recursion (called "tail call optimization"), but it's not always supported.


//The execution context and stack
