// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//Setting possible characters for password
//They need to be in separate variables so user can choose what they want

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ['"', "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];

var addLength = "";
var confirmUpper;
var confirmLower; 
var confirmNumbers; 
var confirmSpecial; 

//User chooses how long they want their password to be

function generatePassword() {
  var addLength = prompt("Select a number between 8 and 128. This will be the number of characters for your password.")

  //We need an error message if they don't select a number between 8 and 128.
  if (addLength < 8) {
    alert("You did not select a number that fits the criteria. Please reselect.");
    var addLength = prompt("Select a number between 8 and 128. This will be the number of characters for your password.")
  }
  else if (addLength > 128) {
    alert("You did not select a number that fits the criteria. Please reselect.");
    var addLength = prompt("Select a number between 8 and 128. This will be the number of characters for your password.")
  }
  else {
    alert("You have chosen a password of " + addLength + " characters.");
  }

//creating variables to hold value of confirm ok/cancel
var confirmUpper = confirm("Would you like uppercase letters to be included in your password?"); 
var confirmLower = confirm("Would you like lowercase letters to be included in your password?"); 
var confirmNumbers = confirm("Would you like numbers to be included in your password?"); 
var confirmSpecial = confirm("Would you like special characters to be included in your password?");

//if upper/lower/number/special selected, we concat it to the empty firstPassword array
var firstPassword = []
  if (confirmUpper) {firstPassword = firstPassword.concat(upper)}
  if (confirmLower) {firstPassword = firstPassword.concat(lower)}
  if (confirmNumbers) {firstPassword = firstPassword.concat(numbers)}
  if (confirmSpecial) {firstPassword = firstPassword.concat(special)}

var randomPass = ""

  for (var i=0; i < addLength; i++) {
    randomPass = randomPass + firstPassword[Math.floor(Math.random() * firstPassword.length)]; 
  }

  return randomPass; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
