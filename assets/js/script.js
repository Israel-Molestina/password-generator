// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for possible pasword characthers
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var  lowerCase = upperCase.toLowerCase();
var numeric = "0123456789";
var specialChar = "~!@#$%^&*()_+-={}|[];<>?,./";

// variables for user input 
var length = prompt("Please choose desired length of your password (must be between 8 and 128)");
var userInputUpper = confirm("Would you like your password to contain upper case letter?");
var userInputLower = confirm("Would you like your password to contain lower case letters?");
var userInputNum = confrim("Would you like your password to contain numbers?");
var userInputSpec = confirm("Would you like your password to contain special characters?");
var userInput = "";
var finalPassword = "";

// Test for number between 8 and 128
while (length < 8 || length > 128) {
  var length = prompt("Please choose a number between 8 and 128")
}

// Test for a valid number
while (isNaN(length)) {
  var length = prompt("Please choose a number between 8 and 128")
}

function generatePassword() {
  if (userInputUpper) {
    upperCase = userInput;
  }
  if (userInputLower) {
    lowerCase = userInput;
  }
  if (userInputNum) {
    numeric =  userInput;
  }
  if (userInputSpec) {
    specialChar = userInput;
  }
  for (var i =0; i < length; ++i) {
    finalPassword = userInput[Math.floor(Math.random() * userInput.length)];
  }
  return finalPassword;
}

/*document.getElementById("generate").addEventListener("click", alert("my alert"));*/

/*generateBtn.addEventListener("click", alert("im an alert"));*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


