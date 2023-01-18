// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Global scope variables declared, to use outside of local functions.
let pwLength;
let pwChar;
let pwLowercase;
let pwUppercase;
let pwNumeric;
let pwSelections = [];
let counter = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  pwLength = prompt("Please pick the desired length of your password: Any number between 10 and 64.");
  pwChar = prompt("Special Characters? y/n");
  pwLowercase = prompt("Lowercase? y/n");
  pwUppercase = prompt("Uppercase? y/n");
  pwNumeric = prompt("Numbers? y/n");
}

// fix prompt to confirm

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  let randomChar = ""
  if (pwChar.toLowerCase() === "y") {
    pwSelections = pwSelections.concat(specialCharacters);
    randomChar += getRandom(specialCharacters);
    counter++;
  }
  if (pwLowercase.toLowerCase() === "y") {
    pwSelections = pwSelections.concat(lowerCasedCharacters);
    randomChar += getRandom(lowerCasedCharacters);
    counter++;
  }
  if (pwUppercase.toLowerCase() === "y") {
    pwSelections = pwSelections.concat(upperCasedCharacters);
    randomChar += getRandom(upperCasedCharacters);
    counter++;
  }
  if (pwNumeric.toLowerCase() === "y") {
    pwSelections = pwSelections.concat(numericCharacters);
    randomChar += getRandom(numericCharacters);
    counter++;
  }

  for (let i = 0; i < pwLength - counter; i++) {
    // if pwLength 10, iterate over 10 times
    // 6 times
    randomChar += getRandom(pwSelections);
  }
  console.log(randomChar);
  console.log(pwSelections);
  return randomChar;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// validator
