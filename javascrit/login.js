window.onload = loginStatus();// call function check

// function to check if the user is login
function loginStatus(){
    if(sessionStorage.loggedInUserEmail !== undefined){ // check if the users email is stored in the session storage
        // if the user is loggedIn in keep the game page displayed
        window.location.href = "../php/game.php";
    }
}

// function to logIn
function login(){

    // get the email entered from the email textfield
    let email = document.getElementById("emailInput").value;
    
    // if the email is not found in the localhost
    if(localStorage[email] === undefined){
    // print appropriate message  
    document.getElementById("fail").innerHTML = "Email not recognized. Sign Up to create a new account";
    return; 
    }
    else{ // if it's found
        // store all details related to the key email in object userObject 
        // JSON.parse turns it into object from string first
        let userObject = JSON.parse(localStorage[email]);
        // get value entered in password field
        let password = document.getElementById("passwordInput").value;
        // compare password enter with password in object userObject
        if(password === userObject.password){
        
            // load the game.php page
            window.location.href = "../php/game.php";
            // don't display anything
            document.getElementById("fail").innerHTML = " ";
            // store the email in the sessionstorage
            sessionStorage.loggedInUserEmail = userObject.email;
        }
        else{ // if not 
            // print the appropriate message
            document.getElementById("fail").innerHTML = "Password not correct. Please try again.";
        }
    }
}

