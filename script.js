// As soon as the user clicks the button, a series of prompts will appear
document.getElementById("generate").addEventListener("click", writePassword)

// Arrays with all possible characters.
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['"', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"'];

// Series of prompts for password criteria.
function generatePassword() {

  // The values of the variables have not yet been assigned because they will be user-defined. However, it needs to be declared before so that it can be called in the function.
  var inputLength;
  var inputLowLetters;
  var inputUpLetters;
  var inputNumbers;
  var inputSpecialChar;
  var criteria;

  // A prompt box is used so that the user can input a value. The parseInt() is a function that can help to convert the values into integers.
  // Prompt for the length of the password.
  inputLength = parseInt(prompt("Enter the desired length of your password - from 8 to 128"));
  // Need a loop to repeat this question until the value is 8 < x < 128.
  while (inputLength < 8 || inputLength > 128 || !inputLength) {
    // Displays an alert box with a message.
    alert("Please enter a valid value");
    // Repeat
    inputLength = parseInt(prompt("Enter the desired length of your password - from 8 to 128"));
  }

  // If the user enters a valid value, several prompts appear to select the types of characters he/she want in his/her password.
  if (inputLength > 8 && inputLength < 128) {
    alert("Please select at least one of the following options");
    // The confirm() method returns true if the user clicked "OK", otherwise false.
    // Prompt for lowercase letters.
    inputLowLetters = confirm("Would you like to include lowercase letters?");
    // Prompt for uppercase letters.
    inputUpLetters = confirm("Would you like to include uppercase letters?");
    // Prompt for numeric characters.
    inputNumbers = confirm("Would you like to include numeric characters?");
    // Prompt for special characters.
    inputSpecialChar = confirm("Would you like to include special characters?");
  }

  // Validates inputs to confirm that at least one character type has been selected.
  // If none of the criteria is chosen.
  // Need a loop to repeat this question until at least one criteria is chosen.
  while (!inputLowLetters && !inputUpLetters && !inputNumbers && !inputSpecialChar) {
    alert("You MUST select at least one criteria!")
    // Repeat
    // Prompt for lowercase letters.
    inputLowLetters = confirm("Would you like to include lowercase letters?");
    // Prompt for uppercase letters.
    inputUpLetters = confirm("Would you like to include uppercase letters?");
    // Prompt for numeric characters.
    inputNumbers = confirm("Would you like to include numeric characters?");
    // Prompt for special characters.
    inputSpecialChar = confirm("Would you like to include special characters?");
  }

  // Empty array that will be populated according to the chosen criteria.
  var criteria = [];

  // If all criteria are chosen.
  if (inputLowLetters && inputUpLetters && inputNumbers && inputSpecialChar) {
    criteria = criteria.concat(lowLetters, upLetters, numbers, specialChar);
  }

  // If only one criteria is chosen.
  // If only lowercase letters criteria is chosen.
  else if (inputLowLetters && !inputUpLetters && !inputNumbers && !inputSpecialChar) {
    criteria = criteria.concat(lowLetters);
  }
  // If only uppercase letters criteria is chosen.
  else if (!inputLowLetters && inputUpLetters && !inputNumbers && !inputSpecialChar) {
    criteria = criteria.concat(upLetters);
  }
  // If only numeric characters criteria is chosen.
  else if (!inputLowLetters && !inputUpLetters && inputNumbers && !inputSpecialChar) {
    criteria = criteria.concat(numbers);
  }
  // If only special characters criteria is chosen.
  else if (!inputLowLetters && !inputUpLetters && !inputNumbers && inputSpecialChar) {
    criteria = criteria.concat(specialChar);
  }

  // If two criteria are chosen.
  // If only lowercase letters and uppercase letters criteria are chosen.
  else if (inputLowLetters && inputUpLetters && !inputNumbers && !inputSpecialChar) {
    criteria = criteria.concat(lowLetters, upLetters);
  }
  // If only lowercase letters and numeric characters criteria are chosen.
  else if (inputLowLetters && !inputUpLetters && inputNumbers && !inputSpecialChar) {
    criteria = criteria.concat(lowLetters, numbers);
  }
  // If only lowercase letters and special characters criteria are chosen.
  else if (inputLowLetters && !inputUpLetters && !inputNumbers && inputSpecialChar) {
    criteria = criteria.concat(lowLetters, specialChar);
  }
  // If only uppercase letters and numeric characters criteria are chosen.
  else if (!inputLowLetters && inputUpLetters && inputNumbers && !inputSpecialChar) {
    criteria = criteria.concat(upLetters, numbers);
  }
  // If only uppercase letters and special characters criteria are chosen.
  else if (!inputLowLetters && inputUpLetters && !inputNumbers && inputSpecialChar) {
    criteria = criteria.concat(upLetters, specialChar);
  }
  // If only numeric characters and special characters criteria are chosen.
  else if (!inputLowLetters && !inputUpLetters && inputNumbers && inputSpecialChar) {
    criteria = criteria.concat(numbers, specialChar);
  }

  // If three criteria are chosen.
  // If only lowercase letters, uppercase letters and numeric characters criteria are chosen.
  else if (inputLowLetters && inputUpLetters && inputNumbers && !inputSpecialChar) {
    criteria = criteria.concat(lowLetters, upLetters, numbers);
  }
  // If only lowercase letters, uppercase letters and special characters criteria are chosen.
  else if (inputLowLetters && inputUpLetters && !inputNumbers && inputSpecialChar) {
    criteria = criteria.concat(lowLetters, upLetters, specialChar);
  }
  // If only lowercase letters, numeric characters and special characters criteria are chosen.
  else if (inputLowLetters && !inputUpLetters && inputNumbers && inputSpecialChar) {
    criteria = criteria.concat(lowLetters, numbers, specialChar);
  }
  // If only uppercase letters, numeric characters and special characters criteria are chosen.
  else if (!inputLowLetters && inputUpLetters && inputNumbers && inputSpecialChar) {
    criteria = criteria.concat(upLetters, numbers, specialChar);
  }
  // Add it to view in the console if all the above criteria were working without errors.
  console.log(criteria);

  // Generate random password.

  //  According to the console, I need to assign a value to this variable.  Since I need it to be a string, I just inserted an empty "" so that the value of math random is inserted.
  var randomPassword = "";

  // Should I use random values crypto (?)
  // 'i' needs to be less than the inputLength value because the index starts at 0.
  // It will loop until the number of characters is equal to the desired length of the password.
  for (var i = 0; i < inputLength; i++) {
    // Generates random password according to the chosen criteria.
    var randomPassword = randomPassword + criteria[Math.floor(Math.random() * criteria.length)];
    console.log(randomPassword);
  }

  // Need to return the value to execute the next function, as this is the result of the function that will give a value to the variable password.
  return randomPassword;
}

// Displays the result in the textarea.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}
