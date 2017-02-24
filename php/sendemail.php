<?php
	require 'PHPMailerAutoload.php';

	$name = $_POST['name'];
	$phone = $_POST['phone'];

	if (strlen($name) == 0 || strlen($name) > 64 ) {
		echo "{error: 'name incorrect'}";
		exit -1;
	}

	if (strlen($phone) == 0 || strlen($phone) > 20 ) {
		echo "{error: 'phone incorrect'}";
		exit -1;
	}


	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->CharSet = 'UTF-8';

	$mail->Host = "smtp.gmail.com";
	$mail->SMTPDebug  = 0;     // enables SMTP debug information (for testing)
	$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
	$mail->Port = 465; // or 587
	$mail->SMTPAuth   = true;  // enable SMTP authentication

	$mail->Username   = "insidecheb@gmail.com"; 	// SMTP account username example
	$mail->Password   = "5j4*4xi&v*xG";        		// SMTP account password example
	$mail->SetFrom("insidecheb@gmail.com");

	$mail->AddAddress("inside21@bk.ru");
	$mail->Subject = "Новая заявка инсайд21.рф";
	$mail->Body = "Имя: " . $name . ", Телефон: " . $phone;

	if(!$mail->Send()) {
	  echo "{error: 'Mailer Error: " . $mail->ErrorInfo . "\'}";
	  exit -1;
	}


 $result = array("success" => "Message has been sent");
 echo json_encode($result);

?>