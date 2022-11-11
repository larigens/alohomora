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
  var criteria = [];

  // A prompt box is used so that the user can input a value. The parseInt() is a function that can help to convert the values into integers.
  // Prompt for the length of the password.
  inputLength = parseInt(prompt("Enter the desired length of your password - from 8 to 128"));
  // If the user clicks cancel.
  if (!inputLength) {
    // Displays an alert box with a message.
    alert("Please insert a value");
  }
  // If the user enters an invalid value
  else if (inputLength < 8 || inputLength > 128) {
    alert("Please enter a valid value");
  }
  // Need a loop to repeat this question until value is 8 < x < 128


  
  // If the user enters a valid value, several prompts appear to select the types of characters he/she want in his/her password.
  else {
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
  if (!inputLowLetters && !inputUpLetters && !inputNumbers && !inputSpecialChar) {
    alert("You MUST select at least one criteria!")
  }

  // If all criteria are chosen.
  else if (inputLowLetters && inputUpLetters && inputNumbers && inputSpecialChar) {
    criteria = lowLetters.concat(upLetters, numbers, specialChar);
  }

  // If only one criteria is chosen.
  // If only lowercase letters criteria is chosen.
  else if (inputLowLetters && !inputUpLetters && !inputNumbers && !inputSpecialChar) {
    criteria = lowLetters;
  }
  // If only uppercase letters criteria is chosen.
  else if (!inputLowLetters && inputUpLetters && !inputNumbers && !inputSpecialChar) {
    criteria = upLetters;
  }
  // If only numeric characters criteria is chosen.
  else if (!inputLowLetters && !inputUpLetters && inputNumbers && !inputSpecialChar) {
    criteria = numbers;
  }
  // If only special characters criteria is chosen.
  else if (!inputLowLetters && !inputUpLetters && !inputNumbers && inputSpecialChar) {
    criteria = specialChar;
  }

  // If two criteria are chosen.
  // If only lowercase letters and uppercase letters criteria are chosen.
  else if (inputLowLetters && inputUpLetters && !inputNumbers && !inputSpecialChar) {
    criteria = lowLetters.concat(upLetters);
  }
  // If only lowercase letters and numeric characters criteria are chosen.
  else if (inputLowLetters && !inputUpLetters && inputNumbers && !inputSpecialChar) {
    criteria = lowLetters.concat(numbers);
  }
  // If only lowercase letters and special characters criteria are chosen.
  else if (inputLowLetters && !inputUpLetters && !inputNumbers && inputSpecialChar) {
    criteria = lowLetters.concat(specialChar);
  }
  // If only uppercase letters and numeric characters criteria are chosen.
  else if (!inputLowLetters && inputUpLetters && inputNumbers && !inputSpecialChar) {
    criteria = upLetters.concat(numbers);
  }
  // If only uppercase letters and special characters criteria are chosen.
  else if (!inputLowLetters && inputUpLetters && !inputNumbers && inputSpecialChar) {
    criteria = upLetters.concat(specialChar);
  }
  // If only numeric characters and special characters criteria are chosen.
  else if (!inputLowLetters && !inputUpLetters && inputNumbers && inputSpecialChar) {
    criteria = numbers.concat(specialChar);
  }

  // If three criteria are chosen.
  // If only lowercase letters, uppercase letters and numeric characters criteria are chosen.
  else if (inputLowLetters && inputUpLetters && inputNumbers && !inputSpecialChar) {
    criteria = lowLetters.concat(upLetters, numbers);
  }
  // If only lowercase letters, uppercase letters and special characters criteria are chosen.
  else if (inputLowLetters && inputUpLetters && !inputNumbers && inputSpecialChar) {
    criteria = lowLetters.concat(upLetters, specialChar);
  }
  // If only lowercase letters, numeric characters and special characters criteria are chosen.
  else if (inputLowLetters && !inputUpLetters && inputNumbers && inputSpecialChar) {
    criteria = lowLetters.concat(numbers, specialChar);
  }
  // If only uppercase letters, numeric characters and special characters criteria are chosen.
  else if (!inputLowLetters && inputUpLetters && inputNumbers && inputSpecialChar) {
    criteria = upLetters.concat(numbers, specialChar);
  }

  // Generate random password.

  // Should I use random values crypto (?)
  // 'i' needs to be less than the inputLength value because the index starts at 0.
  for (var i = 0; i < inputLength; i++) {
    // Generates random password according to tha chosen criteria.
    var randomPassword = criteria[Math.floor(Math.random() * criteria.lenght)];
    return randomPassword;
  }

  // Need to get this random password and transform into a string 
  randomPassword.join("")

  // randomPassword.join(newPassword)
  // or 
  // randomPassword.toString()
  // Need to get this random password and transform into a string - try criteriachosen(join)

}

// Displays the result in the text area.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}
