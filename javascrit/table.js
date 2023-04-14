window.onload = table; // call the function table once the window is opened

// function table that gets 
//the username and score from the localStorage and displays it
function table(){

	let title = document.createElement("p");
	title.classList.add("usrName");
	title.innerHTML = "UserName";
	document.body.appendChild(title);

	let score = document.createElement("p");
	score.classList.add("Score");
	score.innerHTML = "Score";
	document.body.appendChild(score);

	for(var i=0; i<localStorage.length; i++){
	
		let key = localStorage.key(i);
		let value = JSON.parse(localStorage.getItem(key)); 
		let usrName = value.username;
		let score = value.score;
		console.log(score);

		let usrPara = document.createElement("p");
		usrPara.classList.add("usrNameP");
		document.body.appendChild(usrPara);
		usrPara.innerHTML = usrName;

		let scorePara = document.createElement("span");
		scorePara.classList.add("scoreP");
		usrPara.appendChild(scorePara);
		scorePara.innerHTML = score;
	}
}


