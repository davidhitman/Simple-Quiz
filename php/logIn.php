<?php
//Include the PHP functions to be used on the page 
	include('common1.php');
	//Output header
	outputHeader();
?>
<!--
	link to the external css file, close the head tag and open the body tag
-->
<link rel="stylesheet" type="text/css" href="../CSS/login.css">
<script type="text/javascript" src="../javascrit/login.js"></script>

<!-- Close of the header tag and openning of the body tag-->
</head>
<body>

<?php
// output logo, navigation, body and whiteDiv
	logo();
	navigation("LogIn");
	body();
	whiteDiv();
?>
<!--
	Display labels, input-textfield, button and  for the user to login
-->
<div id="logDiv">
	<label type="text" class="label"> Email</label>
    <input type="email" id="emailInput" class="input" placeholder="Enter your Email"><br>
    <label type="password" class="label1">Password</label>
    <input type="password" id="passwordInput" class="input1" placeholder="Enter your Password"><br>
    <button onclick="login()" class="button">Login</button>
</div>
<!-- paragraph to be display when your login is not successfull -->
<p id="fail" class="Fail"></p>

</div> <!--close the whiteDiv.. opened by the whiteDiv function-->
<?php
// output footer
	footer();
?>