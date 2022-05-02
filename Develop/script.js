// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandom(max){
  var random = Math.random()*max;
  return Math.floor(random)+1;
}

//generatePassword function - get user input for password criteria, then create password
function generatePassword(){
  var pwlength = window.prompt("Choose a number of characters between 8 and 128 characters");
  if (pwlength === null) {
    return;
  }
  do{
    if (pwlength > 128 || pwlength <8){
      var pwlength = window.prompt("ERROR, please enter a number between 8 and 128 characters");
      if (pwlength === null) {
        return;
      }
    }
  }
  while (pwlength > 128 || pwlength <8);

//GATHERING AND CONFIRMATION OF PASSWORD CRITERIA
  var alphabetlower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var alphabetupper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = [0,1,2,3,4,5,6,7,8,9]
  var specialchar = ['!','@','#','$','%',"^","&","*","(",")",'-','_','+','=','[',']','{','}',';',':','"',"'",',','.','/','<','>','?','`','~','|']
  
  var dataset = [];
  var lower = [];
  var upper = [];
  var num = [];
  var spec = [];

  var lowercase = window.confirm("Would you like the password to contain lowercase letters?");
  if (lowercase == true){
    var confirmlow = "Lowercase letters";

    dataset.push(alphabetlower);
    
    var lower = getRandom(alphabetlower.length);
    console.log(dataset[lower]);
  }
  else{
    var confirmlow = "NO lowercase letters";
  }

  var uppercase = window.confirm ("Your password will contain: "+ confirmlow + "\nWould you like the password to contain uppercase letters?");
  if (uppercase == true){
    var confirmup = "Uppercase letters";
    dataset.push(alphabetupper);
  }
  else{
    var confirmup = "NO uppercase letters";
  }

  var numeric = window.confirm("Your password will contain: "+ "\n" + confirmlow + "\n" + confirmup + "\nWould you like the password to contain numbers?");
  if (numeric == true){
    var confirmnum = "Numbers";
    dataset.push(numbers);
  }
  else{
    var confirmnum = "NO numbers";
  }

  var special = window.confirm("Your password will contain: "+ "\n" + confirmlow + "\n" + confirmup + "\n" + confirmnum +"\nWould you like the password to contain special characters?");
  if (special == true){
    var confirmspecial = "Special characters";
    dataset.push(specialchar);
  }
  else{
    var confirmspecial = "NO special characters";
  }

    if (special == true || lowercase == true || uppercase == true || numeric == true){
      window.confirm("Your password will contain: "+ "\n" + confirmlow + "\n" + confirmup + "\n" + confirmnum + "\n" + confirmspecial + "\n"+ pwlength + " Total characters" + "\nIf this is acceptable please click OK.");
  } else{
    window.alert("ERROR: You must select at least one character type, please try again.");
    return;
  }
//END GATHERING AND CONFIRMATION OF PASSWORD CRITERIA

//CREATE PASSWORD


  // let specialchar = [];
  // for (let i=32; i<127; i++)
  //   specialchar.push(String.fromCharCode(i));
  //console.log(lowercase,uppercase,numeric,special,length,specialchar);

  // var password = [];
  // for (let i = 0; i<pwlength; i++){

  // }

  console.log(dataset);
  password = dataset;
  return(password);
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

