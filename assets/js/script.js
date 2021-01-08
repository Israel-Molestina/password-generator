// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for each option user can choos for thier password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "|", "[", "]", ";", "<", ">", "?", "/"];
var userInput = [""];
var userPassword = "";

function generatePassword() {

  // Asks what length user wants the passwords and adds to userInput
  var userLength = prompt("Please choose desired length of your password (must be between 8 and 128)");

  // Validates user response is less than more than 8 and less than 128
  if (userLength < 8 || userLength > 128) {
    var userLength = prompt("Please choose a number between 8 and 128");
  }
  if (userLength > 8 || userLength < 128) {
    userInput += userLength;
  }

  // Follow block of codes confirms what characters user wants to include in password
  var userInputUpper = confirm("Would you like your password to contain upper case letter?");
  if (userInputUpper === true) {
    userInput += upperCase;
  }

  var userInputLower = confirm("Would you like your password to contain lower case letters?");
  if (userInputLower === true) {
    userInput += lowerCase;
  }

  var userInputNum = confirm("Would you like your password to contain numbers?");
  if (userInputNum === true) {
    userInput += numeric;
  }

  var userInputSpec = confirm("Would you like your password to contain special characters?");
  if (userInputSpec === true) {
    userInput += specialChar;
  }

  // for loop that chooses random characters in the arrays user chose
  for (var i =0; i < userLength; ++i) {
    userPassword += userInput.charAt(Math.floor(Math.random() * userInput.length));
  }

  return userPassword

}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


