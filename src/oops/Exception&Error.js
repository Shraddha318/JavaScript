// try {
//     // Code that might throw an exception
// } catch (error) {
//     // Code to handle the exception
// } finally {
//     // Code that will run regardless of whether an exception was thrown or not
// }
//
// function divide(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error('Division by zero is not allowed.');
//         }
//         let result = a / b;
//         console.log(`Result: ${result}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//     } finally {
//         console.log('Execution completed.');
//     }
// }
//
// divide(10, 2); // Output: Result: 5, Execution completed.
// divide(10, 0); // Output: Error: Division by zero is not allowed., Execution completed.
//
//

// function Drink(name){
//     if(!new.target){
//         throw new Error("Drink must be called with new keyword");
//     }
//     this.name=name;
// }
//
// let tea=Drink('Tea')//Error

function calculateSquareRoot(number) {
    if (number < 0) {
        throw new Error('Cannot calculate the square root of a negative number.');
    }
    return Math.sqrt(number);
}

try {
    const result = calculateSquareRoot(-9);
    console.log(result);
} catch (error) {
    console.error(`Error: ${error.message}`);
}
