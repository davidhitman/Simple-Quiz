<?php
//Include the PHP functions to be used on the page 
	include('./php/common1.php');         
	//Output header
	outputHeader();
?>
<!--
	link to the external css file, close the head tag and open the body tag
-->
<link rel="stylesheet" type="text/css" href="./CSS/index.css">
</head>
<body>
<?php
	// output logo, navigation, body and whiteDiv
	logo();
	navigation("Home");
	body();
	whiteDiv();
?>
<!--
	output the paragraphs "Welcome to XOX"
-->
<p class="par1">WELCOME</p>
<p class="par2">TO</p>
<p class="par3"><span class="h">H</span><span class="d-letter">D</span></p>
</div> <!--close the whiteDiv.. opened by the whiteDiv function-->

<?php
// output footer
	footer();
?>

