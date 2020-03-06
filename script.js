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
//selecting holder for fail message
var passFail = document.querySelector(".passFail");


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
generateBtn.addEventListener("click", generatePassword);


//generate password function
function generatePassword(){
  //if no boxes are checked, send fail message otherwise generate password based on criteria 
    if(lowerCheck.checked !== true && upperCheck.checked !== true && specCheck.checked !== true && numberCheck.checked !== true){
        
        passFail.textContent = "Please check at least one box";
      }
      else{
          
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
   if(specCheck.checked === true){
    //concatinating specList to string
    passwordOptions = passwordOptions.concat(specList);
  }

  //numeric characters
   if(numberCheck.checked === true){
    //concatinating numberList to string
    passwordOptions = passwordOptions.concat(numberList);
  }

  
  

 
  //converts passwordOptions string into password array
  for(i=0; i < passwordOptions.length; i++){
    passwordArray.push(passwordOptions.charAt(i));
  }
  console.log("password Array ", passwordArray);

  //for loop uses user selected length as passLength iteration parameter
  var passLength = slider.value;
  var charIndex;

  for(i=0; i < passLength; i++){
    charIndex = Math.round(Math.random()*(passwordArray.length-1));
    console.log(charIndex);


    password += passwordArray[charIndex]; 
    
    //console.log(password);
  }
  
  console.log(password);

  
  

 
  
  
  


      }
  //resets password/passwordoption string/ and password array
  passwordText.value = password;

  
  //button uses web api to use navigator object to copy password
  var copyBtn = document.querySelector(".copyBtn");

  copyBtn.disabled = false;

  //adds event listener for button
  //this is an asynchronous 
  copyBtn.addEventListener("click", async event =>{

    copyText = passwordText.value;
    navigator.clipboard.writeText(copyText);
    
  })

  password = "";
  passwordOptions="";
  passwordArray = [];
};







