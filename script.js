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

  var lowercase = window.confirm("Do you want lowercase letters?");
  var uppercase = window.confirm("Do you want uppercase letters?");
  var numeric = window.confirm("Do you want numbers?");
  var specialCharacters = window.confirm("Do you want special characters?");
  
  if (!lowercase && !uppercase && !numeric && !specialCharacters) { 
    return "Nothing has been selected for the character types";
  } 

  var lowerCaseBank = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseBank = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericBank = ["1","2","3","4","5","6","7","8","9","0"];
  var specialBank = ["!","@","#","$","%","^","&","*","(",")"];

  var password = "";
  var characterBank = [];

  if (lowercase) {
    characterBank = characterBank.concat(lowerCaseBank);
  }
  if (uppercase) {
    characterBank = characterBank.concat(upperCaseBank);
  }
  if (numeric) {
    characterBank = characterBank.concat(numericBank);
  }
  if (specialCharacters) {
    characterBank = characterBank.concat(specialBank);
  }

 for (var i = 0; i < passwordLength; i++) {
  password = password + characterBank[Math.round(Math.random() * (characterBank.length - 0) + 0)];
 }

  return password;
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