<?php
//Include the PHP functions to be used on the page 
	include('common1.php');
	//Output header
	outputHeader();
?>
<!--
	link to the external css file, close the head tag and open the body tag
-->
<link rel="stylesheet" type="text/css" href="../CSS/about.css">
</head>
<body>
<?php
// output logo, navigation, body and whiteDiv
	logo();
	navigation("About");
	body();
	whiteDiv();
?>
<!--
	out the paragraph displayed in the about section.
-->
<p class="about">In this Quiz you will be ask math question to assess<br>
your general knowldge in Math. There are 5 questions <br> in this quiz and each question carries one mark.<br>If you pass the question you will score one mark, <br> the score is recorded in a table that you can later view  <br>on the table link in the navigation bar.</p>
</div> <!--close the whiteDiv.. opened by the whiteDiv function-->
<?php
// output footer
	footer();
?>