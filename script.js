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
//selecting password holder in DOM
var passwordText = document.querySelector("#password");


// variables for user input checkboxes
var lowerCheck = document.querySelector("#lowerCheck");
var upperCheck = document.querySelector("#upperCheck");
var specCheck = document.querySelector("#specCheck");
var numberCheck = document.querySelector("#numberCheck");





//variables for the slider input
var slider = document.querySelector("#lengthSlider");
var sliderOutput = document.querySelector(".sliderOutput");
var sliderValue = 0;
//dynamically sets the text in the sliderOutput p to current value
sliderOutput.textContent = slider.value;


//this function takes the position value of the slider and displays it to the user in the output
slider.oninput = function(){
  sliderOutput.innerHTML = this.value;
}




//event listener for generate button
generateBtn.addEventListener("click", function(){

  


  //These four if statements are used to add a set of characters to the string passwordOptions

  //lower case
  //if lowerCheck checkbox is checked
  if(lowerCheck.checked === true){
    //passwordOptions.concat will add the contents of the letterList to the passwordOptions string 
    //after being converted to lowercase
    passwordOptions = passwordOptions.concat(letterList.toLowerCase());
  }

  //upper case
   if(upperCheck.checked === true){
     //passwordOptions.concat will add the contents of the letterList to the passwordOptions string 
    //after being converted to upper case
    passwordOptions = passwordOptions.concat(letterList.toUpperCase());
  }

  //special characters
   //concatinating specList to string
   if(specCheck.checked === true){
    passwordOptions = passwordOptions.concat(specList);
  }

  //numeric characters
   if(numberCheck.checked === true){
    //concatinating numberList to string
    passwordOptions = passwordOptions.concat(numberList);
  }

  if(lowerCheck !== true && upperCheck !== true && specCheck !== true && numberCheck !== true){
    var passwordText = document.querySelector("#password");
    passwordText.textContent = "Please check at least one box";
  }
  

 
  //converts passwordOptions string into password array
  for(i=0; i < passwordOptions.length; i++){
    passwordArray.push(passwordOptions.charAt(i));
  }
  console.log("password Array ", passwordArray);

  //iterates based on user slider input
  var passLength = slider.value;
  var num;




  for(i=0; i < passLength; i++){
    num = Math.round(Math.random()*(passwordArray.length-1));
    console.log(num);


    password += passwordArray[num]; 
    
    //console.log(password);
  }
  


  
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
