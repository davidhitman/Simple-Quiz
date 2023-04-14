// function to display question 2
function Question2(){
	document.getElementById("Output").style.display="none";
	document.getElementById("Div1").style.display="none";
	document.getElementById("Div2").style.display="block";
}
// function to display question 3
function Question3(){
	document.getElementById("Output").style.display="none";
	document.getElementById("Div2").style.display="none";
	document.getElementById("Div3").style.display="block";
}
// function to display question 4
function Question4(){
	document.getElementById("Output").style.display="none";
	document.getElementById("Div3").style.display="none";
	document.getElementById("Div4").style.display="block";
}
// function to display question 5
function Question5(){
	document.getElementById("Output").style.display="none";
	document.getElementById("Div4").style.display="none";
	document.getElementById("Div5").style.display="block";
}
// function for logOut, called when the logout button is clicked
function logOut(){
	sessionStorage.removeItem('loggedInUserEmail');
	window.location.href = "../php/logIn.php";
}

// these functions are called for each question when the button 
//submite is clicked, to check if the answer is right or not 
//and set the score.
function question1Check(){
	let Score = 0;
	var answer = document.getElementById("opt1").value;

	if (answer == 18){
		document.getElementById("Output").innerHTML="Correct";
		let email = sessionStorage.getItem("loggedInUserEmail");
		let usrObjt =  JSON.parse(localStorage[email]);
		Score = Score + 1;
		document.getElementById("num").innerHTML = Score;
		usrObjt.score = Score;
		localStorage[usrObjt.email] = JSON.stringify(usrObjt);
		return Score;
	}
	else{
		document.getElementById("Output").innerHTML="Incorrect";
		return Score;
	}
}

function question2Check(){
	var answer1 = document.getElementById("opt2").value;
	let Score = question1Check();
	if (answer1 == 14){
		document.getElementById("Output").style.display="block";
		document.getElementById("Output").innerHTML="Correct";
		let email = sessionStorage.getItem("loggedInUserEmail");
		let usrObjt =  JSON.parse(localStorage[email]);
		Score = Score + 1;
		document.getElementById("num").innerHTML = Score;

		usrObjt.score = Score;
		localStorage[usrObjt.email] = JSON.stringify(usrObjt);
		return Score;
	}
	else{
		document.getElementById("Output").style.display="block";
		document.getElementById("Output").innerHTML="Incorrect";
		return Score;
	}
}

function question3Check(){
	var answer1 = document.getElementById("opt3").value;

	let score = question2Check();

	if (answer1 == 1296){
		document.getElementById("Output").style.display="block";
		document.getElementById("Output").innerHTML="Correct";
		
		let email = sessionStorage.getItem("loggedInUserEmail");
		let usrObjt =  JSON.parse(localStorage[email]);
		score = score + 1;
		document.getElementById("num").innerHTML = score;
		usrObjt.score = score;
		localStorage[usrObjt.email] = JSON.stringify(usrObjt);
		return score;
	}
	else{
		document.getElementById("Output").style.display="block";
		document.getElementById("Output").innerHTML="Incorrect";
		return score;
	}
}

function question4Check(){
	var answer1 = document.getElementById("opt4").value;

	let score = question3Check();

	if (answer1 == 128){
		document.getElementById("Output").style.display="block";
		document.getElementById("Output").innerHTML="Correct";
		
		let email = sessionStorage.getItem("loggedInUserEmail");
		let usrObjt =  JSON.parse(localStorage[email]);

		score = score + 1;
		document.getElementById("num").innerHTML = score;
		usrObjt.score = score;
		localStorage[usrObjt.email] = JSON.stringify(usrObjt);
		return score;
	}
	else{
		document.getElementById("Output").style.display="block";
		document.getElementById("Output").innerHTML="Incorrect";
		return score;
	}
}

function question5Check(){
	var answer1 = document.getElementById("opt5").value;

	let score = question4Check();

	if (answer1 == 14){
		document.getElementById("Output").style.display="block";
		document.getElementById("Output").innerHTML="Correct";
		
		let email = sessionStorage.getItem("loggedInUserEmail");
		let usrObjt =  JSON.parse(localStorage[email]);
		
		score = score + 1;
		document.getElementById("num").innerHTML = score;

		usrObjt.score = score;
		localStorage[usrObjt.email] = JSON.stringify(usrObjt);
		return score;
	}
	else{
		document.getElementById("Output").style.display="block";
		document.getElementById("Output").innerHTML="Incorrect";
		return score;
	}
}