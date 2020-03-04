// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterList = "abcdefghijklmnopqrstuvwxyz";
var numberList = "0123456789";
var specialList = "!@#$%^&*()=-+";

var lowerArray = [];
var upperArray = [];
var specialArray = [];
var numberArray = [];

//for loop adds individual characters from alphabet variable to an array
for(i=0; i < letterList.length; i++){
  lowerArray.push(letterList.charAt(i).toLowerCase());
}

for(i=0; i < letterList.length; i++){
  upperArray.push(letterList.charAt(i).toUpperCase());
}

for(i=0; i < specialList.length; i++){
  specialArray.push(specialList.charAt(i).toUpperCase());
}

for(i=0; i < numberList.length; i++){
  numberArray.push(numberList.charAt(i).toUpperCase());
}


console.log("upper ", upperArray);
console.log("lower ", lowerArray);
console.log("special ", specialArray);
console.log("number ", numberArray);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//make arrays of characters
//get user input for which types of characters
//add desired character arrays to list

//while loop set to user defined length
  //randomly select which array to take character from (if variable is 1 take from array 1)
  //randomly choose character in array 

//check to see if password fits user specifications
  //if yes return password to user 
  //if no generate new password
