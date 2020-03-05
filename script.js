// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterList = "abcdefghijklmnopqrstuvwxyz";
var numberList = "0123456789";
var specialList = "!@#$%^&*()=-+~`?<>";

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


var passwordOptions = "";
var lowerCheck = document.querySelector("#lowerCheck");

lowerCheck.addEventListener('change', function(){
  if(lowerCheck.checked ===true){
    passwordOptions = passwordOptions.concat(letterList.toLowerCase());
    console.log(" Lower ", passwordOptions);
  }
  else{
    console.log("nope ",passwordOptions);
  }
});



function generatePassword(){
  
//logic for concatinating string of possible characters


var lowerTest;
var upperTest = true;
var specTest = true;
var numberTest = true;

//variable for holding all possible character options
//must be "" for concat to work properly
var passwordOptions = "";


var lowerCheck = document.querySelector("#lowerCheck");

lowerCheck.addEventListener('change', function(){
  if(lowerCheck.checked ===true){
    passwordOptions = passwordOptions.concat(letterList.toLowerCase());
    console.log(" Lower ", passwordOptions);
  }
  else{
    console.log("nope ",passwordOptions);
  }
});


var upperCheck = document.querySelector("#upperCheck");
if(upperTest){
  passwordOptions = passwordOptions.concat(letterList.toUpperCase());
  console.log(" Upper ", passwordOptions);
}

var specCheck = document.querySelector("#specCheck");

if(specTest ===true){
  passwordOptions = passwordOptions.concat(specialList);
  console.log(" special " , passwordOptions);
}

var numberCheck = document.querySelector("#numberCheck");
if(numberTest ===true){
  passwordOptions = passwordOptions.concat(numberList);
  console.log(" number " , passwordOptions);
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

//make arrays of characters

//get user input for which types of characters to use
//add desired character arrays to list

//while loop set to user defined length
  //randomly select which array to take character from
  //randomly choose character in array 

//check to see if password fits user specifications
  //if yes return password to user 
  //if no generate new password
