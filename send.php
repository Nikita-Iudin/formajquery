<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$body = $_POST['body'];
$file = fopen("myform.php","at");
fwrite($file,"\n $name:$phone:$body \n");
fclose($file);
echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время."; 
