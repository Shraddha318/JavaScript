/*
// The Document Object Model (DOM) represents the structure of an HTML document and allows JavaScript to interact with it

// 1. Selecting Elements: Methods to select and access elements in the DOM
// Select element by ID
let heading = document.getElementById('main-heading');
console.log(heading); // Logs the element with ID 'main-heading'

// Select elements by class name
let items = document.getElementsByClassName('list-item');
console.log(items); // Logs an HTMLCollection of elements with class 'list-item'

// Select elements by tag name
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // Logs an HTMLCollection of all paragraph elements

// Select element using query selector
let firstItem = document.querySelector('.list-item');
console.log(firstItem); // Logs the first element with class 'list-item'

// Select all elements using query selector
let allItems = document.querySelectorAll('.list-item');
console.log(allItems); // Logs a NodeList of all elements with class 'list-item'

// 2. Manipulating Elements: Methods to change the content and attributes of elements
// Change the text content of an element
heading.textContent = 'Updated Heading';

// Change the HTML content of an element
heading.innerHTML = '<span>Updated Heading with HTML</span>';

// Change an attribute of an element
heading.setAttribute('style', 'color: blue;');

// 3. Adding and Removing Elements: Methods to dynamically add and remove elements from the DOM
// Create a new element
let newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div';

// Append the new element to the body
document.body.appendChild(newDiv);

// Remove an element
let oldDiv = document.getElementById('old-div');
document.body.removeChild(oldDiv);

// 4. Event Handling: Methods to handle events and user interactions
// Add an event listener to an element
heading.addEventListener('click', function() {
    alert('Heading was clicked!');
});

// 5. Traversing the DOM: Methods to navigate through the DOM tree
// Access parent element
let parent = heading.parentElement;
console.log(parent); // Logs the parent element of the heading

// Access child elements
let children = heading.children;
console.log(children); // Logs an HTMLCollection of child elements

// Access sibling elements
let nextSibling = heading.nextElementSibling;
console.log(nextSibling); // Logs the next sibling element
*/

// Example 1: Accessing DOM Elements
let hold = document.getElementById('changeTextButton');
hold.addEventListener('click', function () {
    let para = document.getElementById('myParagraph');
    para.textContent = 'Changed';
    console.log(para);
});

// Example 2: Traversing the DOM
document.getElementById('highlight')
    .addEventListener('click', function () {
        let city = document.getElementById('citiesList');
        city.firstElementChild.classList.add('highlight');
    });

// Example 3: Manipulating Elements
document.getElementById('click').addEventListener('click', function () {
    let coffee = document.getElementById('coffee');
    coffee.textContent = 'Espresso';
});

// Example 4: Adding and Removing Elements
document.getElementById('addNewItem').addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.textContent = 'Sauces';
    document.getElementById('shoppingList').appendChild(newItem);
});

// Example 5: Removing Elements
document.getElementById('removeLastTask').addEventListener('click', function () {
    let taskList = document.getElementById('taskList');
    if (taskList.lastElementChild) {
        taskList.removeChild(taskList.lastElementChild);
    }
});

//Example 6:Event handling in dom
document.getElementById('clickme').addEventListener('mouseover',function (){
    alert('code');
});

// Example 7: Event delegation
document.getElementById('teaList').addEventListener('click', function(event) {
    if (event.target && event.target.matches('.teaItem')) {
        alert('You clicked on ' + event.target.textContent);
    }
});

// Example 8: Form Handling
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedbackInput').value;
    document.getElementById('feedbackDisplay').textContent = 'Feedback: ' + feedback;
});

// Example 9: DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('domStatus').textContent = 'DOM is fully loaded!';
});

// Example 10: CSS Classes Manipulation
document.getElementById('toggleHighlight').addEventListener('click', function() {
    document.getElementById('descriptionText').classList.toggle('highlight');
});





