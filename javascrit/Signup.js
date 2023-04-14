// function storeUser that will store the entered details into the 
//local host after it meets all conditions
function storeUser(){

	var userObject = {}; //declare object userObject
	// store the details the user has entered into the userObject
	userObject.name = document.getElementById("name").value;
	userObject.email = document.getElementById("email").value;
	userObject.username = document.getElementById("userName").value;
	userObject.password = document.getElementById("password").value;
	userObject.score = 0; 

	let format = fomart(); // the value that is returned by function fomart is assigned 
	// to variable format
	let passValid = passwordValid(); // the value that is returned by function passwordValid is assigned 
	// to variable passValid
	let notBlank = checkform(); // the value that is returned by function checksum is assigned 
	// to variable notBlank

	// if condition to check if all functions return true and the store the data
	if (notBlank == true && passValid == true && format == true){

		// change the data type of user object to string then store it in the 
		//local storage with the key being the email 
		localStorage[userObject.email] = JSON.stringify(userObject);

		// set the paragraph with id "Result" to display Registration successful
		document.getElementById("Result").innerHTML = "<b>Registration successful.</b>";

		// delect the details in the textfield after registration
		document.getElementById("name").value ="";
		document.getElementById("email").value="";
		document.getElementById("userName").value="";
		document.getElementById("password").value="";
		document.getElementById("password2").value="";
	}
}


// function to check if all the information has been Entered and there's no
// blank fields
function checkform(){

	// check if the user entered nothing in the textfield
	if (document.getElementById("name").value ==""){
		// print the appropriate message
		document.getElementById("Result").innerHTML = "<b>Please Enter your full name.</b>";
		return false;
	} else if (document.getElementById("email").value ==""){
		document.getElementById("Result").innerHTML = "<b>Please Enter your Email.</b>";
		return false;
	} else if (document.getElementById("userName").value ==""){
		document.getElementById("Result").innerHTML = "<b>Please Enter your User Name.</b>";
		return false;
	} else if (document.getElementById("password").value ==""){
		document.getElementById("Result").innerHTML = "<b>Please Enter your Password.</b>";
		return false;
	} else if (document.getElementById("password2").value ==""){
		document.getElementById("Result").innerHTML = "<b>Please Re-enter your Password.</b>";
		return false;
	} else{
		return true;
		// returns true if all the text fields have been entered if not 
		// it returns false as seen above
	}
}


//function to check if the password matches a given condition and compare the 
// password to the password check and if they match then return true
// otherwise return false
function passwordValid(){
	var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");//the password condition 
	let password = document.getElementById("password").value;
	let password2 = document.getElementById("password2").value;

	if (passwordRegex.test(password)){ // chach f the password meets the conditions
		if (password == password2){ // compare both passwords
			return true;
		}else{
			// print the appropriate message
			document.getElementById("Result").innerHTML = "<b>Passwords don't match.</b>";
			return false;
		}
	}else{
		document.getElementById("Result").innerHTML = "<b> Your password should be 8 characters with <br> an upper case letter, lower case letter <br> and a number.</b>";
		return false;
	}
}


// function to check if the name and userName are in the right format
function fomart(){
	var nameRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])"); // the condition for the name and UserName
	var numRegex = new RegExp("^(?=.*[0-9])"); // the condition for numbers
	let Name = document.getElementById("name").value;
	let userName = document.getElementById("userName").value;

	if (nameRegex.test(Name)){ // check if the name matches the conditions
		if (nameRegex.test(userName)){ // check if the Username matches the conditions
			if(!numRegex.test(Name)){ // check if there are no numbers in the name
				if(!numRegex.test(userName)){ // check if there are no numbers in the userName
					return true;
				}else{
					document.getElementById("Result").innerHTML = "<b> Your User Name should not contain <br> any numbers.</b>";
					return false;
				}
			}else{
				document.getElementById("Result").innerHTML = "<b> Your Name should not contain any numbers.</b>";
				return false;
			}
		}else{
			// print the appropriate message
			document.getElementById("Result").innerHTML = "<b> Your User Name should contain atleast one <br> upper case letter and one lower case letter.</b>";
			return false;
		}
	}else{
		// print the appropriate message
		document.getElementById("Result").innerHTML = "<b> Your Name should contain atleast one <br> upper case letter and one lower case letter.</b>";
		return false;
	}	
}