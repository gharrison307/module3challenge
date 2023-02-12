// Assignment code here

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// variable declarations
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lchar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uchars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var schars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  ",",
  "(",
  ")",
  "*",
  "+",
  "'",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "'",
  "{",
  "}",
  "|",
  "~",
];

function writePassword() {
  var randomArray = [];
  var newPassword = " ";

  // Intial prompt
  var characterLength = prompt(
    "How many characters would you like your password to be? (min: 8 max: 128)"
  );

  if (parseFloat(characterLength) < 8 || parseFloat(characterLength) > 128) {
    alert("Error : Please use a number between 8 and 128");
    return writePassword();
  }

  // uppercase confirm
  var upper = confirm(
    "Would you like to include upper case letters? (ok: yes | cancel: no)"
  );
  if (upper === true) randomArray = randomArray.concat(uchars);

  // console.log(randomArray);   -randomArray check

  // lowercase confirm
  var lower = confirm(
    "Would you like to include lower case letters? (ok: yes | cancel: no)"
  );
  if (lower === true) randomArray = randomArray.concat(lchar);

  // console.log(randomArray);    -randomArray check

  // special character confirm
  var special = confirm(
    " Would you like to inlcude special characters? (ok: yes | cancel: no)"
  );
  if (special === true) randomArray = randomArray.concat(schars);

  // console.log(randomArray);     -randomArray check

  // numeric confirm
  var numbers = confirm(
    "Would you like to include numbers? (ok: yes | cancel: no)"
  );
  if (numbers === true) randomArray = randomArray.concat(numeric);

  // console.log(randomArray);      -randomArray check

  for (var i = 0; i < parseFloat(characterLength); i++) {
    var randomNumber = Math.floor(Math.random() * randomArray.length);

    newPassword += randomArray[randomNumber];

    var passwordText = document.querySelector("#password");

    passwordText.value = newPassword;
  }
}
generateBtn.addEventListener("click", writePassword);
