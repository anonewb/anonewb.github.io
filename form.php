<?php

$errorMSG = "";

// Name
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// Phone no
if (empty($_POST["phoneno"])) {
    $errorMSG .= "Phone no is required ";
} else {
    $phoneno = $_POST["phoneno"];
}

// Email
if (empty($_POST["email"])) {
  $errorMSG .= "Email is required ";
} else {
  $email = $_POST["email"];
}

// Company Name
if (empty($_POST["cname"])) {
  $errorMSG .= "Company's name is required ";
} else {
  $cname = $_POST["cname"];
}

// Subject
if (empty($_POST["subject"])) {
    $errorMSG .= "Subject is required ";
} else {
    $subject = $_POST["subject"];
}


// Message
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "anonewbe@gmail.com";
$Subject = "Msg from portfolio website";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;

$Body .= "\n";
$Body .= "Phone no: ";
$Body .= $phoneno;

$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;

$Body .= "\n";
$Body .= "Company's name: ";
$Body .= $cname;

$Body .= "\n";
$Body .= "Subject: ";
$Body .= $subject;

$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>