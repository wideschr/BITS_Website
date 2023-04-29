<?php
// Get form data
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['boodschap'];

// Set recipient email address
$to = 'wito.ds@gmail.com';

// Set email subject
$subject = 'Nieuw formulier van BITS website';

// Set email message
$body = "Name: $name\n\nTelephone: $tel\n\nEmail: $email\n\nMessage:\n$message";

// Send email
mail($to, $subject, $body);

// Redirect to thank you page
header('Location: thank_you.html');
?>
