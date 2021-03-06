<?php
$to="versilife@gmail.com";
$subject="Versi Contact Form";
$message="First Name: ".$_POST["firstName"]."<br>".
"Last Name: ".$_POST["lastName"]."<br>".
"E-Mail: ".$_POST["email"]."<br>".
"Telephone: ".$_POST["telephone"]."<br>".
"AGE: ".$_POST["age"]."<br>".
"GENERO: ".$_POST["genero"]."<br>".
"BENEFICIARY: ".$_POST["beneficiary"]."<br>".
"COVERAGE AMOUNT: ".$_POST["coverageamount"]."<br>".
"TOBACCO OR NICOTINE: ".$_POST["tobaccoornicotine"]."<br>".
" ";
$headers = "MIME-Version: 1.0" ."\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers.='From: VersiForm <no-reply@dev.igrapetech.com>' . "\r\n"; 
$success= mail($to,$subject,$message,$headers);
/*echo $_POST["firstName"]."<br>".
$_POST["lastName"]."<br>".
$_POST["email"]."<br>".
$_POST["telephone"]."<br>".
$_POST["age"]."<br>".
$_POST["genero"]."<br>".
$_POST["beneficiary"]."<br>".
$_POST["coverageamount"]."<br>".
$_POST["tobaccoornicotine"]."<br>".
" Sender";*/
if(!$success){
    echo error_get_last()['message'];
} else {
    echo "We will contact you soon";
}

?>