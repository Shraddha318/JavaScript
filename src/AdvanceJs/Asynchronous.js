//In synchronous code, tasks are performed one after the other in a sequence.
// Each task must complete before the next task starts. This means that if a
// task takes a long time to complete, it can block the subsequent tasks, making
// the program unresponsive during that time.
console.log('Task 1');
console.log('Task 2');
console.log('Task 3');

//Asynchronous code allows multiple tasks to run independently of each other. Instead
// of waiting for a task to complete before starting the next one, asynchronous code
// allows the next task to begin, freeing up resources to handle other tasks in the meantime.
// This is particularly useful for tasks that involve waiting, such as network requests or file operations.

function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

function Hello(){
    console.log('Hi')
}
setTimeout(()=>{
    Hello();
},4000);

//Async function with multiple delay
function simulateMultipleTasks() {
    setTimeout(() => {
        console.log("Task 1 finished"); // 1 second delay
    }, 1000);

    setTimeout(() => {
        console.log("Task 2 finished"); // 2 seconds delay
    }, 2000);

    setTimeout(() => {
        console.log("Task 3 finished"); // 3 seconds delay
    }, 3000);
}

// Call the function to see the output
simulateMultipleTasks();
