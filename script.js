// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lchars = "abcdefghijklmnopqrstuvwxyz";
var uchars = "ABCEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var schars = "!@#$%^&*()_+~{}|[]?";

function generatePassword() {
  var length = prompt(
    "how many Characters Would you like your password to be? (min: 8 max: 128"
  );
  var upper = confirm("Would you like to include upper case letters?");
  // var special = confirm(" Would you like to inlcude special characters?");
  // var numbers = confrim("Would you like to include numbers?");
  console.log(upper);
  if (upper === true) {
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
