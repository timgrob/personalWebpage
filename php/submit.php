<?PHP

$name = $_POST['name'],
$email = $_POST['email'];
$message = $_POST['message'];
$to = "tim.grob@swissonline.ch";
$subject = "Webpage Contact Form Message";

// $body = <<<EMAIL 
// Hi! My name is $name

// $message

// from $name
// email $email

// EMAIL;

mail($to, $subject, $message, "From:".$email);

alert("Your message has been sent."); 

?>