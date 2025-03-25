// Step-by-Step Implementation of map()
// Function Definition: We need to define a function that accepts two parameters: the array to map over, and the callback function that will process each element.

// Iterating Over the Array: We'll iterate over the elements in the array using a loop (preferably for...of), as described.

// Calling the Callback: For each element, we'll pass it to the callback function and collect the results into a new array.

// Returning the New Array: At the end of the function, we'll return the new array with the transformed elements.

// Here's the complete code for our custom map() function:

// javascript
// Copy
// function map(array, callback) {
//   // Create a new array to hold the transformed values
//   const newArr = [];
  
//   // Iterate over each element in the input array
//   for (const element of array) {
//     // Apply the callback function and push the result into newArr
//     newArr.push(callback(element));
//   }

//   // Return the new array with transformed values
//   return newArr;
// }
// Testing map()
// Let's now test this custom map() function using a simple array of numbers:

// javascript
// Copy
// const originalNumbers = [1, 2, 3, 4, 5];

// const squaredNumbers = map(originalNumbers, function (num) {
//   return num * num;
// });

// console.log(originalNumbers);  // => [1, 2, 3, 4, 5]
// console.log(squaredNumbers);   // => [1, 4, 9, 16, 25]
// Example with Objects (Engineer Accounts)
// Now let's see how we can use the map() function on more complex data structures. Suppose we have an array of engineer accounts, and we want to change their access level to "admin" without modifying the original data.

// javascript
// Copy
// const oldAccounts = [
//   { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
//   { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
//   { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
//   { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
//   { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
// ];

// const newEngineers = map(oldAccounts, function (account) {
//   return Object.assign({}, account, { accessLevel: "admin" });
// });

// console.log(newEngineers);
// // => [
// //      { userID: 15, title: "Developer Apprentice", accessLevel: "admin" },
// //      { userID: 63, title: "Developer Apprentice", accessLevel: "admin" },
// //      { userID: 97, title: "Developer Apprentice", accessLevel: "admin" },
// //      { userID: 12, title: "Developer Apprentice", accessLevel: "admin" },
// //      { userID: 44, title: "Developer Apprentice", accessLevel: "admin" }
// //    ]
// In the above example, the original oldAccounts array remains unchanged, and we return a new array where each engineer's access level has been updated to "admin".

// Final Thoughts
// The map() function is a powerful tool for transforming data in an array.

// It ensures that the original array remains unchanged, and a new array is returned with the transformed elements.

// It's important to note that the callback can perform any transformation or operation on the array elements, from simple arithmetic to more complex object modifications.

// In production, you'd likely use the native Array.prototype.map() method, but it's helpful to understand how it works internally, as we've just implemented it ourselves.

