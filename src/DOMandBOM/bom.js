// The Browser Object Model (BOM) allows interaction with the browser outside the scope of a web page's content

// 1. `window` Object: Represents the browser window and provides methods to control it
window.alert('Hello, BOM!'); // Displays an alert box
let userResponse = window.confirm('Do you like JavaScript?'); // Displays a confirm box
console.log(userResponse); // Logs the user's response (true/false)
let userInput = window.prompt('Please enter your name:'); // Displays a prompt box
console.log('User input:', userInput); // Logs the user's input

// 2. `navigator` Object: Provides information about the browser and the operating system
console.log('Browser CodeName:', navigator.appCodeName); // Browser code name
console.log('Browser Name:', navigator.appName); // Browser name
console.log('Browser Version:', navigator.appVersion); // Browser version
console.log('Cookies Enabled:', navigator.cookieEnabled); // Whether cookies are enabled
console.log('Platform:', navigator.platform); // Operating system platform
console.log('User-agent header:', navigator.userAgent); // User agent string

// 3. `screen` Object: Provides information about the user's screen
console.log('Screen Width:', screen.width); // Screen width
console.log('Screen Height:', screen.height); // Screen height
console.log('Available Width:', screen.availWidth); // Available screen width
console.log('Available Height:', screen.availHeight); // Available screen height
console.log('Color Depth:', screen.colorDepth); // Color depth of the screen
console.log('Pixel Depth:', screen.pixelDepth); // Pixel depth of the screen

// 4. `location` Object: Provides information about the current URL and allows navigation
console.log('Current URL:', location.href); // Current URL
console.log('Protocol:', location.protocol); // Protocol of the URL (http, https)
console.log('Host:', location.host); // Hostname and port number
console.log('Pathname:', location.pathname); // Pathname of the URL
console.log('Search Query:', location.search); // Query string of the URL

// Uncomment the following line to redirect to another page
// location.href = 'https://www.example.com';

// 5. `history` Object: Allows interaction with the browser's history
// history.back(); // Go back one page
// history.forward(); // Go forward one page
// history.go(-2); // Go back two pages
