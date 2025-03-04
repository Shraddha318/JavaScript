/*In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation.
It allows you to write asynchronous code in a more manageable and readable way.
Promises have three possible states:

Pending: The initial state. The promise is neither fulfilled nor rejected.

Fulfilled: The promise has been resolved successfully.

Rejected: The promise has been rejected, and there is a reason for the rejection*/

function fetchdata() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve('Data fetched');
            }else{
                reject('Error')
            }
        },3000);
    })
}

fetchdata()
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))


// Definition of a Promise
let myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        const success = true; // Change this to false to see the reject case
        if (success) {
            resolve("Operation succeeded!"); // Resolve the promise
        } else {
            reject("Operation failed."); // Reject the promise
        }
    }, 1000);
});

// Handle the Promise
myPromise
    .then((result) => {
        console.log(result); // Output: "Operation succeeded!"
    })
    .catch((error) => {
        console.log(error); // Output: "Operation failed."
    });

// Modes of a Promise

// 1. Pending
let pendingPromise = new Promise((resolve, reject) => {
    // The promise is in pending state here
});
console.log(pendingPromise); // Output: Promise { <pending> }

// 2. Fulfilled
let fulfilledPromise = new Promise((resolve, reject) => {
    resolve("Success");
});
console.log(fulfilledPromise); // Output: Promise { "Success" }

// 3. Rejected
let rejectedPromise = new Promise((resolve, reject) => {
    reject("Error");
});
console.log(rejectedPromise); // Output: Promise { "Error" }
