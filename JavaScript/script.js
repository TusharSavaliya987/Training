// // let heading = document.getElementById('heading');
// // console.log(heading);

// // let headings = document.getElementsByClassName('heading');

// // Callbak function
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//         console.log('Script loaded: ' + src);
//         callback(src, null);
//     }
//     script.onerror = () => {
//         console.log('Script load error: ' + src );
//         callback(null, new Error('Script load error: ' + src));
//     }
//     document.head.append(script);
// }

// function hello(error, src) {
//     alert('Hello Tushar' + src);
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', hello);

//Callback in callback
// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
//   function (script) {
//     alert(`Cool, the ${script.src} is loaded, let's load one more`);

//     loadScript(
//       "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
//       function (script) {
//         alert(`Cool, the second script is loaded`);
//       }
//     );
//   }
// );

//Promise Syntax:-
// let promise = new Promise(function (resolve, reject) {
//   // This is the producing code (like the singer creating the song)

//   let isTaskSuccessful = true; // Simulating success or failure

//   if (isTaskSuccessful) {
//     resolve("Task completed successfully!"); // Notify success
//   } else {
//     reject("Something went wrong!"); // Notify failure
//   }
// });

// //then method (Promise):-
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Task done!"), 1000); // Simulates a 1-second delay
// });

// promise.then(
//   (result) => console.log(result), // Runs on success: logs "Task done!"
//   (error) => console.log(error) // Doesn't run because there's no error
// );

// //catch method (Promise):-
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Error occurred!"), 1000); // Simulates an error
// });

// promise.catch((error) => console.log(error)); // Logs: "Error occurred!"

// //finally method (Promise):-
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Task complete!"), 1000);
// });

// promise
//   .finally(() => console.log("Cleaning up...")) // Runs first
//   .then((result) => console.log(result)); // Logs: "Task complete!"

// //Fetch Data From GitHub using fatch API:-
// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json()) // Get the user data
//   .then(user => fetch(`https://api.github.com/users/${user.name}`)) // Fetch GitHub data
//   .then(response => response.json()) // Get GitHub data as JSON
//   .then(githubUser => console.log(githubUser.avatar_url)); // Outputs the avatar URL

//Promise API Example 1.[Promise.all]:- Runs multiple promises in parallel and waits for all of them to finish.
Promise.all([fetch("url1"), fetch("url2"), fetch("url3")])
  .then((responses) => {
    // All promises resolved successfully
    responses.forEach((response) => console.log(response.status)); // 200, etc.
  })
  .catch((error) => {
    console.log("One promise failed:", error);
  });

//Promise API Example 2.[Promise.allsettled]:- Runs multiple promises and waits for all to finish, regardless of success or failure.
// Difference from Promise.all:
// It doesn’t stop when one fails; it gives a status report for each promise.
Promise.allSettled([
  fetch("url1"),
  fetch("url2"),
  fetch("bad-url"), // This will fail
]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Failed:", result.reason);
    }
  });
});

//Promise API Example 3.[Promise.race]:- Waits for the first promise to finish, whether it succeeds or fails.
Promise.race([
    new Promise(resolve => setTimeout(() => resolve('Fast!'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('Slow!'), 2000))
  ])
  .then(result => console.log(result)); // "Fast!"
  

//Promise API Example 4.[Promise.any]:- Waits for the first successful promise. Ignores failures unless all promises fail.
Promise.any([
    new Promise((_, reject) => setTimeout(() => reject('Error!'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('Success!'), 2000))
  ])
  .then(result => console.log(result)) // "Success!"
  .catch(error => console.log('All failed:', error.errors));

//Promise API Example 5.[Promise.resolve]:- Creates a resolved promise with the given value.
function getCachedData(url) {
    if (cache.has(url)) {
      return Promise.resolve(cache.get(url)); // Immediately return cached data
    }
  
    // Otherwise, fetch and cache it
    return fetch(url).then(response => response.text());
  }

//Promise API Example 6.[Promise.reject]:- Creates a rejected promise with the given error.
Promise.reject('Something went wrong!')
  .catch(error => console.log(error)); // "Something went wrong!"

