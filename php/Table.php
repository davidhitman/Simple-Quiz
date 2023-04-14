<?php
//Include the PHP functions to be used on the page 
	include('common1.php');
	//Output header
	outputHeader();
?>
<link rel="stylesheet" type="text/css" href="../CSS/table.css">
<script type="text/javascript" src="../javascrit/table.js"></script>
<!--
	link to the external css file, close the head tag and open the body tag
-->
</head>
<body>
<?php
// output logo, navigation, body and whiteDiv
	logo();
	navigation("Table");
	body();
	whiteDiv();
?>

</div> <!--close the whiteDiv.. opened by the whiteDiv function-->

<?php
// output footer
	footer();
?>