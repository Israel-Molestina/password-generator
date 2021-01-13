// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Arrays for each option user can choose for their password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "|", "[", "]", ";", "<", ">", "?", "/"];


function generatePassword() {

  // Holds the character types that user chooses to include
  var userInput = [];

  // Variable holding the amount of character types chosen by user
  var charNum = 0;

  // Variable that holds the generated password
  var userPassword = "";
  
  // Asks what length user wants the passwords and adds to userInput
  var userLength = prompt("Please choose desired length of your password (must be between 8 and 128).");

  console.log(userLength);

  // Turns userLength into an integer so we can run a validation check to see if it is a valid number
  var userLePar = parseInt(userLength);

  // validates if user presses cancel will alert a different message then if user inputs invalid number
  if (userLength === null) {

    alert("Must enter valid number and press OK to continue.")
      return userPassword = "";

  }

  // Validates user response is less than more than 8 and less than 128
  else if (Number.isNaN(userLePar) || userLength < 8 || userLength > 128) {

    alert("I said Number between 8 and 128.")
    return userPassword = "";

  }
 
  // Following block of codes confirms what characters user wants to include in password, and if confirms concatenates it to the variable userInput
  else {

    var userInputUpper = confirm("Would you like your password to contain upper case letter?");

    if (userInputUpper) {

      charNum++;
      console.log(charNum);

      userInput = userInput.concat(upperCase);
      console.log(userInputUpper);
      console.log(userInput)

      for (var i = 0; i < 1; i++) {
        var index1 = Math.floor(Math.random() * upperCase.length);
        userPassword += upperCase[index1] + "";
        console.log(userPassword)
      }

    }
  
    var userInputLower = confirm("Would you like your password to contain lower case letters?");

    if (userInputLower) {

      charNum++;
      console.log(charNum);

      userInput = userInput.concat(lowerCase);
      console.log(userInputLower);
      console.log(userInput)

      for (var i = 0; i < 1; i++) {
        var index1 = Math.floor(Math.random() * lowerCase.length);
        userPassword += lowerCase[index1] + "";
        console.log(userPassword)
      }
      
    }
  
    var userInputNum = confirm("Would you like your password to contain numbers?");

    if (userInputNum) {

      charNum++;
      console.log(charNum);

      userInput = userInput.concat(numeric);
      console.log(userInputNum);
      console.log(userInput)

      for (var i = 0; i < 1; i++) {
        var index1 = Math.floor(Math.random() * numeric.length);
        userPassword += numeric[index1] + "";
        console.log(userPassword)
      }
      
    }
  
    var userInputSpec = confirm("Would you like your password to contain special characters?");

    if (userInputSpec) {

      charNum++;
      console.log(charNum);

      userInput = userInput.concat(specialChar);
      console.log(userInputSpec);
      console.log(userInput)

      for (var i = 0; i < 1; i++) {
        var index1 = Math.floor(Math.random() * specialChar.length);
        userPassword += specialChar[index1] + "";
        console.log(userPassword)
      }

    }
  
    // Validates that user chose at least one character type
    if (userInputUpper === false && userInputLower === false && userInputNum === false && userInputSpec === false) {

      alert("must choose at least one character type")
      return userPassword = ""

    }
  } 

  // for loop that chooses random characters in the arrays user chose
  for (var i = 0; i < userLength - charNum; i++) {
    
    var index = Math.floor(Math.random() * userInput.length);
    userPassword += userInput[index] + "";

    console.log(userPassword);
  }

  // Following functions shuffle password
  // Function to turn password into an array so I can shuffle it 
  function passwordArray() {

    var password = userPassword;
    
    var array = password.split("");
    
    console.log(array);

    return array;
    
  }

  // Shuffles password
  function shufflePassword(passwordArr) {

    var passwordArr = passwordArray();

    var currentIndex = passwordArr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = passwordArr[currentIndex];
      passwordArr[currentIndex] = passwordArr[randomIndex];
      passwordArr[randomIndex] = temporaryValue;

    }

    console.log(passwordArr);

    return passwordArr;

  }

  var newPass = shufflePassword(passwordArray);

  // turns password back into a string
  userPassword = newPass.join("");

  console.log(userPassword);

  return userPassword;

}