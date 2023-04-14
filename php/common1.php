<?php
//Ouputs the header for the page and link to the external css file
function outputHeader(){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>Quiz Website</title>';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="../CSS/styles1.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="utf-8">';
}
// function to display the logo image and the text "XOX GAMES" besides the logo
function logo(){
	echo'<div class="logo">
    <i class="fa fa-american-sign-language-interpreting" style="font-size: 50px;"></i>
	<P class="logoText"> <span class="h">H</span> <span class="d">D</span>ASSESSMENT</P>
	</div>';
}
// function to display navigation bar, the selected class is applied to the 
// page that matches the page name variable
function navigation($pageName){
	//Output the Div with class name navigation that would contain the navigation bar
    echo '<div class="navigation">';
    
    //Arrays with the names and the links used in the navigation bar
    $Names = array("Home", "LogIn", "SignUp", "Table", "About");
    $links = array("index.php", "logIn.php", "SignUp.php", "Table.php", "About.php");
    
    //Output navigation bar
    for($counter = 0; $counter < count($Names); $counter++){
        echo '<a ';
        if($Names[$counter] == $pageName){
            echo 'class="selected" ';
        }
        echo 'href="' . $links[$counter] . '">' . $Names[$counter] . '</a>';
    }
    echo '</div>';
}

// function to output the image on the page, the image that comes after the navigation bar 
function body(){
	echo'<div class="bodyDiv">
	<img class="bodyImg" src="../images/gameBack.jpeg" alt="game Image">
	</div>';
}
// function to display the white box in the middle of the body picture
function whiteDiv(){
	echo '<div class="whiteDiv" id="WhiteDiv">';
}
//Outputs closing body tag, closing HTML tag and the footer that contanies the contact infomation
function footer(){
	echo '  <div class="footer">
            <p class="footer1">SUPPORT AND CONTACT</p>
            <img class="insta" src="../images/image1.png" alt="instagram">
            <a class="footer2" href="">d.a.v.i.d_hitman</a>
            <img class="twitter" src="../images/image2.png" alt="twitter">
            <a class="footer3" href="">d.a.v.i.d_hitman</a>
            <img class="email" src="../images/image3.png" alt="email">
            <p class="myEmail">hitimanadav47@gmail.com</p>
            <img class="phone" src="../images/image4.png" alt="phone">
            <p class="myPhone">+447479299556</p>
       		</div>
       		</body>
       		</html>';
}
?>
