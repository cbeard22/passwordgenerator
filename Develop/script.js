//defines the variables in arrays
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let character = ["\'", "!", "#", "$", "%", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~", "]", "^", "_"];

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let chosen = "";

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let result = "";
  //asks how long password should be
  let length = prompt("How many characters long should I make your password? (must be between 8 and 128)");
  if (isNaN(length)) {
    alert("You need to pick a number!")
    return generatePassword();
  }
  //returns prompt if password is not the correct length
  if (length < 8 || length > 128) {
    alert("The number needs to be between 8 and 128!")
    return generatePassword();
  }
  //confirms what characters, letters, and numbers should be included in the password
  let beUpper = confirm("Should I include uppercase letters?");
  let beLower = confirm("Should I include lowercase letters?");
  let beNumber = confirm("Should I include numbers?");
  let beCharacter = confirm("Should I include special characters?");

  //if none of the types are selected then return to the beginning and start over
  if (!beUpper && !beLower && !beNumber && !beCharacter) {
    alert("You need to choose atleast 1 type to include!");
    return generatePassword();
  }

  //addes the characters that were selected to the blank array that will be chosen for the password
  if (beUpper===true) {
    chosen += upper
  }

  if (beLower===true) {
    chosen += lower
  }
  if (beNumber===true) {
    chosen += numbers
  }

  if (beCharacter===true) {
    chosen += character
  }

  // randomizes the characters chosen and sets it to the length dictated by the user
  for (let i = 0; i < length; i++) {
    result += chosen.charAt(Math.floor(Math.random()*chosen.length));
  }

  return result;
}
