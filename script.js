// Assignment Code

// Criterias that can be selected
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upLetters = lowLetters.toUpperCase();
// var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var char = ['"', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"',]


// Button to generate a password
var generateBtn = document.getElementById("generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword())

function writePassword() {
  password = generatePassword()
};


// Series of prompts for password criteria
function generatePassword() {
  // A prompt box is used so that the user can input a value. The parseInt() is a function that can help to convert the values into integers.
  // Prompted for the length of the password.
  inputLength = parseInt(prompt("Enter the desired lenght of your password - from 8 to 128"))
  if (!inputLength) {
    // Displays an alert box with a message.
    alert("Please insert a value");
  }
  else if (inputLength < 8 || inputLength > 128) {
    alert("Please insert a valid value");
  }
  // Prompted for the character types
  else {
    alert("Please select at least one of the following options");
    // The confirm() method returns true if the user clicked "OK", otherwise false.
    // Prompted for lowercase
    inputLowLetters = confirm("Would you like to include lowercase letters?");
    // Prompted for uppercase
    inputUpLetters = confirm("Would you like to include uppercase letters?");
    // Prompted for numbers
    inputNumbers = confirm("Would you like to insert numbers?");
    // Prompted for special characters
    inputChar = confirm("Would you like to insert special characters?");
  }

  var criteria;

  // Validate input to confirm that at least one character type was selected.
  // If none of the criteria is chosen
  if (!inputLowLetters && !inputUpLetters && !inputNumbers && !inputChar) {
    alert("You must select at least one criteria!")
  }
  // If only 1 criteria is chosen
  // If only the lowercase letter criteria is chosen
  else if (inputLowLetters && !inputUpLetters && !inputNumbers && !inputChar) {
    criteria = lowLetters;
  }
  // If only the uppercase letter criteria is chosen
  else if (!inputLowLetters && inputUpLetters && !inputNumbers && !inputChar) {
    criteria = upLetters;
  }
  // If only the numbers criteria is chosen
  else if (!inputLowLetters && !inputUpLetters && inputNumbers && !inputChar) {
    criteria = numbers;
  }
  // If only the special characters criteria is chosen
  else if (!inputLowLetters && !inputUpLetters && !inputNumbers && inputChar) {
    criteria = char;
  }

  // If 2 criterias are chosen
  // If only the lowercase letter and uppercase letter criteria are chosen
  else if (inputLowLetters && inputUpLetters && !inputNumbers && !inputChar) {
    criteria = lowLetters.concat(upLetters);
  }
  // If only the lowercase letter and numbers criteria are chosen
  else if (inputLowLetters && !inputUpLetters && inputNumbers && !inputChar) {
    criteria = lowLetters.concat(numbers);
  }
  // If only the lowercase letter and special characters criteria are chosen
  else if (inputLowLetters && !inputUpLetters && !inputNumbers && inputChar) {
    criteria = lowLetters.concat(char);
  }
  // If only the uppercase letter and numbers criteria are chosen
  else if (!inputLowLetters && inputUpLetters && inputNumbers && !inputChar) {
    criteria = upLetters.concat(numbers);
  }
  // If only the uppercase letter and special characters criteria are chosen
  else if (!inputLowLetters && inputUpLetters && !inputNumbers && inputChar) {
    criteria = upLetters.concat(char);
  }
  // If only the numbers and special characters criteria are chosen
  else if (!inputLowLetters && !inputUpLetters && inputNumbers && inputChar) {
    criteria = numbers.concat(char);
  }

  // If 3 criterias are chosen
  // If only the lowercase letter, uppercase letter and numbers criteria are chosen
  else if (inputLowLetters && inputUpLetters && inputNumbers && !inputChar) {
    criteria = lowLetters.concat(upLetters, numbers);
  }
  // If only the lowercase letter, uppercase letter and special characters criteria are chosen
  else if (inputLowLetters && inputUpLetters && !inputNumbers && inputChar) {
    criteria = lowLetters.concat(upLetters, char);
  }
  // If only the lowercase letter, numbers and special characters criteria are chosen
  else if (inputLowLetters && !inputUpLetters && inputNumbers && inputChar) {
    criteria = lowLetters.concat(numbers, char);
  }
  // If only the uppercase letter, numbers and special characters criteria are chosen
  else if (!inputLowLetters && inputUpLetters && inputNumbers && inputChar) {
    criteria = upLetters.concat(numbers, char);
  }

  // If all criterias are chosen
  else if (inputLowLetters && inputUpLetters && inputNumbers && inputChar) {
    criteria = lowLetters.concat(upLetters, numbers, char);
  }


  // Generate random password that matches the selected criteria(s) 
  // Should I use  random values crypto (?)
  for (var i = 0; i = inputLength; i++) {
    criteriaChoice = criteria[Math.floor(Math.random() * criteria.lenght)];
  }

  }


// Display the result into the text area.
function displayPassword(password) {
  // var password = generatePassword();
  document.getElementById("password").placeholder = password;
}








//   var password = "";
//   for (var i = 0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber + 1);
//   }
//   document.getElementById("password").value = password;
// }


// function generatePassword() {
//   var length = 8,
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }

