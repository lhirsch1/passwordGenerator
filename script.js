// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterList = "abcdefghijklmnopqrstuvwxyz";
var numberList = "0123456789";
var specList = "!@#$%^&*()=-+~`?<>";

//variables holding status of checkboxes
var lowerTest = true;
var upperTest = true;
var specTest = true;
var numberTest = true;

//string variable for holding all possible character options
//must be "" for concat to work properly
var passwordOptions = "";
//array for holding all characters
var passwordArray = [];
//blank variable for final password
var password = "";


var lowerCheck = document.querySelector("#lowerCheck");
var upperCheck = document.querySelector("#upperCheck");
var specCheck = document.querySelector("#specCheck");
var numberCheck = document.querySelector("#numberCheck");


var slider = document.querySelector("#lengthSlider");
var sliderOutput = document.querySelector(".sliderOutput");
var sliderValue = 0;
sliderOutput.textContent = slider.value;
slider.oninput = function(){
  sliderOutput.innerHTML = this.value;
}




//event listener for generate button
generateBtn.addEventListener("click", function(){

  



  //lower case
  if(lowerCheck.checked === true){
    passwordOptions = passwordOptions.concat(letterList.toLowerCase());
    //console.log(" Lower ", passwordOptions);
    
    //add single lower case char to password to ensure at least one is present

  }

  //upper case
   if(upperCheck.checked === true){
    passwordOptions = passwordOptions.concat(letterList.toUpperCase());
    //console.log(" Upper ", passwordOptions);
    
    //add single upper case char to password to ensure at least one
  }

  //special characters
   if(specCheck.checked === true){
    passwordOptions = passwordOptions.concat(specList);
    //console.log(" special ", passwordOptions);
    
    //add single special char to password to ensure at least one
  }

  //numeric characters
   if(numberCheck.checked === true){
    passwordOptions = passwordOptions.concat(numberList);
    //console.log(" number ", passwordOptions);
    
    //add single numeric char to password to ensure at least one
  }

 

  for(i=0; i < passwordOptions.length; i++){
    passwordArray.push(passwordOptions.charAt(i));
  
  }
  console.log("password Array ", passwordArray);

  //iterates based on user slider input
  var passLength = slider.value;
  var num;




  for(i=0; i < passLength; i++){
    num = Math.round(Math.random()*passwordArray.length);
    console.log(num);

    password += passwordArray[num]; 
  }
  

  console.log(password);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  //resets password and password option string
  password = "";
  passwordOptions="";
  passwordArray = [];
  //if no checked, tell user
  


  
});


//reset button

//clear checkboxes






// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", generatePassword());

//make arrays of characters

//get user input for which types of characters to use
//add desired character arrays to list

//while loop set to user defined length
  //randomly select which array to take character from
  //randomly choose character in array 

//check to see if password fits user specifications
  //if yes return password to user 
  //if no generate new password
