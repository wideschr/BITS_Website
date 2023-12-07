<?php
// Get form data
$name = $_POST['naam'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['boodschap'];

// Set recipient email address
$to = 'wito.ds@gmail.com';

// Set email headers
$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Set email message
$body = "<html><body>";
$body .= "<h2>Antwoord van jouw website</h2>";
$body .= "<p><strong>Naam:</strong> " . $name . "</p>";
$body .= "<p><strong>E-mailadres:</strong> " . $email . "</p>";
$body .= "<p><strong>Onderwerp:</strong> " .
$tel . "</p>";
$body .= "<p><strong>Bericht:</strong></p>";
$body .= "<p>" . $message . "</p>";
$body .= "</body></html>";

// Send email
if (mail($to,
$tel, $body, $headers)) {
  // Display confirmation message
  echo "<script>alert('Je bericht is verzonden. We nemen zo spoedig mogelijk contact met je op.');</script>";
} else {
  // Display error message
  echo "<script>alert('Er is iets misgegaan bij het verzenden van je bericht. Probeer het later opnieuw.');</script>";
}
?>
