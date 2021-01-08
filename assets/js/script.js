// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for each option user can choos for thier password
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numeric = ["0123456789"];
var specialChar = ["~!@#$%^&*()_+-={}|[];<>?/"];
var userInput = [""];
var userPassword = "";

function generatePassword() {

  // Asks what length user wants the passwords and adds to userInput
  var userLength = prompt("Please choose desired length of your password (must be between 8 and 128)");

  // Validates user response is less than more than 8 and less than 128
  while (userLength < 8 || userLength > 128) {
    var userLength = prompt("Please choose a number between 8 and 128");
  }

  // Validates user response is a number
  while (isNaN(userLength)) {
    var userLength = prompt("Please choose a number between 8 and 128");
  }

  // Following block of codes confirms what characters user wants to include in password
  var userInputUpper = confirm("Would you like your password to contain upper case letter?");
  if (userInputUpper) {
    userInput += upperCase;
  }

  var userInputLower = confirm("Would you like your password to contain lower case letters?");
  if (userInputLower) {
    userInput += lowerCase;
  }

  var userInputNum = confirm("Would you like your password to contain numbers?");
  if (userInputNum) {
    userInput += numeric;
  }

  var userInputSpec = confirm("Would you like your password to contain special characters?");
  if (userInputSpec) {
    userInput += specialChar;
  }

  // Validates that user chose at least one character type
  if (userInputUpper === false && userInputLower === false && userInputNum === false && userInputSpec === false) {
    alert("must choose at least one character type")
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


