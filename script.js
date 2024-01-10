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

// Function to prompt user for password options
function getPasswordOptions() {

  
  var lowercaseConfirm = confirm("Include lowercase letters?");
  if (lowercaseConfirm === true) {
    for (var i = 0; i < lowerCasedCharacters.length; i++) {
      inputs.push(lowercases[i]);
    }
    console.log(inputs[i])
  }
  var uppercaseConfirm = confirm("Include uppercase letters?");
  if (uppercaseConfirm === true) {
    for (var i = 0; i < upperCasedCharacters.length; i++) {
      inputs.push(uppercases[i]);
    }
    console.log(inputs[i])
  }

  var numberConfirm = confirm("Include numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < numericCharacters.length; i++) {
      inputs.push(numbers[i]);
    }
    console.log(inputs[i])
  }

  var specialsConfirm = confirm("Include special characters?");
  if (specialsConfirm === true) {
    for (var i = 0; i < specialCharacters.length; i++) {
      inputs.push(specials[i]);
    }
    console.log(inputs[i])
  }
}

// Function for getting a random element from an array
function getRandom(arr) {

   //Changes passLength string to intergers
   const confirmLength = parseInt(passLength)

   //compiles input choices into an array, returning random values through Math input by the length of the input array, returning password to the box
   for (var i = 0; i < confirmLength; i++) {
     inputs[
       Math.floor(Math.random() * inputs.length)];
 
     randPassword += inputs[
       Math.floor(Math.random() * inputs.length)];
   }
   return randPassword;
 }


// Function to generate password with user input
function generatePassword() {
 //Function to request total length
 var passLength = prompt("Enter desired amount of characters:")

 //Checks for valid password length
 if (passLength < 8 || passLength > 128 || (passLength)) {
   alert("Invalid entry - Please enter a number between 8 and 128");
   return
 }

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