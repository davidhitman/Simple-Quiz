<?php
//Include the PHP functions to be used on the page 
	include('common1.php');
	//Output header
	outputHeader();
?>
<!--
	link to the external css file, close the head tag and open the body tag
-->
<link rel="stylesheet" type="text/css" href="../CSS/try.css">
<script type="text/javascript" src="../javascrit/game.js"></script>

</head>
<body>
<?php
// output logo, navigation, body and whiteDiv
	logo();
	navigation("LogIn");
	body();
	whiteDiv();
?>
<!-- different divs that contains the questions and the buttons that call the function to check for the answers -->
	<div class="dialogue" id="Dialogue">
		<div id="Div1">
			<p class="para">Question <span>1</span></p>
			<p class="questions">2 * ( 4 + 8 ) - 6 </p>

			<label class="Opt1" >Answer:</label><br>
			<input type="text" id="opt1" class="opt1">
			
			
			<button class="submit" onclick="question1Check()">Submit</button>
			<button class="continue" onclick="Question2()">Continue</button>
		</div>

		<div id="Div2" style=" display: none">
			<p class="para">Question 2</p>
			<p class="questions"> 6 * 4 - 8 + 2</p>

			<label class="Opt1" >Answer:</label><br>
			<input type="text" id="opt2" class="opt1">

			<button class="submit" onclick="question2Check()">Submit</button>
			<button class="continue" onclick="Question3()">Continue</button>
		</div>

		<div id="Div3" style=" display: none">
			<p class="para">Question 3</p>
			<p class="questions"> ( 6 * 6 ) ^ 2</p>

			<label class="Opt1" >Answer:</label><br>
			<input type="text" id="opt3" class="opt1">

			<button class="submit" onclick="question3Check()">Submit</button>
			<button class="continue" onclick="Question4()">Continue</button>
		</div>

		<div id="Div4" style=" display: none">
			<p class="para">Question 4</p>
			<p class="questions"> 16 * 8</p>

			<label class="Opt1" >Answer:</label><br>
			<input type="text" id="opt4" class="opt1">

			<button class="submit" onclick="question4Check()">Submit</button>
			<button class="continue" onclick="Question5()">Continue</button>
		</div>

		<div id="Div5" style=" display: none">
			<p class="para">Question 5</p>
			<p class="questions"> 6 + 2 ( 2 ^ 4 ) / 4</p>

			<label class="Opt1" >Answer:</label><br>
			<input type="text" id="opt5" class="opt1">

			<button class="submit" onclick="question5Check()">Submit</button>
			<button class="continue" onclick="logOut()">Finish</button>
		</div>

	</div>
	<!-- logOut Button that logs out the user -->
	<button class="logOut" onclick="logOut()">logOut</button>

<!-- the score paragraph to display the score-->
<p class="score" id="score" >Score:</p>
<p id= "num" class="Num">0</p>
<p class="output" id="Output"></p>


<!--close the whiteDiv.. opened by the whiteDiv function-->
</div> <!-- white div close -->

<?php
// output footer
	footer();
?>
