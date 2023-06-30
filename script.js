// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//Setting possible characters for password
//They need to be in separate variables so user can choose what they want

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ['"', "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];

//User chooses how long they want their password to be

function passwordLength() {
  var length = window.prompt("Select a number between 8 and 128. This will be the number of characters for your password.")

  //We need an error message if they don't select a number between 8 and 128.
  if (length < 8) {
    window.alert("You did not select a number that fits the criteria. Please reselect.");
    var length = window.prompt("Select a number between 8 and 128. This will be the number of characters for your password.")
  }
  else if (length > 128) {
    window.alert("You did not select a number that fits the criteria. Please reselect.");
    var length = window.prompt("Select a number between 8 and 128. This will be the number of characters for your password.")
  }
  else {
    window.alert("You have chosen a password of " + length + " characters. Good job buddy.");
  }
}
passwordLength()


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
