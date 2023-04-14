<?php
//Include the PHP functions to be used on the page 
	include('common1.php');
	//Output header
	outputHeader();
?>

<!--
	link to the external css and javascript files close the head tag and open the body tag
-->

<link rel="stylesheet" type="text/css" href="../CSS/Signup.css">
<script type="text/javascript" src="../javascrit/Signup.js"></script> 

<!-- Close of the header tag and openning of the body tag-->
</head>
<body>

<?php
// output logo, navigation, body and whiteDiv
	logo();
	navigation("SignUp");
	body();
	whiteDiv();
?>
<!--
	code for labels, input-textfield and button in the form tag, that allows the user to SignUp
-->
<form class="form" id="form">
	<label class="label">Full Name</label>
	<input class="input" type="text" id="name" placeholder="Enter your Full Names">
	<label class="label1">Email</label>
	<input class="input1" type="email" id="email" placeholder="Enter your Email">
	<label class="label2">UserName</label>
	<input class="input2" type="text" id="userName" placeholder="Enter your User Name">
	<label class="label3">Password</label>
	<input class="input3" type="password" id="password" placeholder="Enter your Password">
	<label class="label4">Password Check</label>
	<input class="input4" type="password" id="password2" placeholder="Re-Enter your Password">
	<button class="button" type="button" onclick="storeUser()">SignUp</button>
</form>
 <p id="Result" class="result"></p> <!-- paragraph to be display when your registration is successfull or Not -->

</div> <!--close the whiteDiv.. opened by the whiteDiv function-->

<?php
// output footer
	footer();
?>

