// Assignment code here
function generatePassword() {
  return "test";
}

function recordInput(){
  var passwordLength = document.querySelector("#password-length").value;
  if (passwordLength === "") {
    console.log("No inputs were entered for the password length");
  } 
  if (passwordLength < 8 || passwordLength > 128) {
    console.log("You entered a value that is either less than 8 or greater than 128");
  }

  var characterTypes = document.querySelectorAll('#character-types option:checked');
  var selectedValues = Array.from(characterTypes).map(el => el.value);
  if (selectedValues.length === 0) {
    console.log("Nothing has been checked for the character types");
  }

  console.log(passwordLength);
  console.log(selectedValues);
}

var submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", recordInput);


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