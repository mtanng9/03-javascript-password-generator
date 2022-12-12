// Assignment code here
function generatePassword() {
  var passwordLength = window.prompt("How long would you like the password to be? (8-128 characters)").trim();
  if (passwordLength === "") {
    return "No inputs were entered for the password length";
  } 

  if (isNaN(passwordLength)) {
    return "You did not input a number";
  }

  if (passwordLength < 8 || passwordLength > 128) {
    return "You entered a value that is either less than 8 or greater than 128";
  }

  var lowercase = window.prompt("Do you want lowercase letters? (yes/no)").trim();
  var uppercase = window.prompt("Do you want uppercase letters? (yes/no)").trim();
  var numeric = window.prompt("Do you want numbers? (yes/no)").trim();
  var specialCharacters = window.prompt("Do you want special characters? (yes/no)").trim();
  
  if (lowercase != "yes" && uppercase != "yes" && numeric != "yes" && specialCharacters!= "yes") { 
    return "Nothing has been entered for the character types";
  }
   
  return "test";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);