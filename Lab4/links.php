<html>
<body>

<?php

  session_start();
  $_SESSION['firstName'] = $_POST["firstName"];
  $_SESSION['secondName'] = $_POST["secondName"];
  $_SESSION['phoneNumber'] = $_POST["phoneNumber"];
  $_SESSION['email'] = $_POST["email"];

  $_SESSION['university'] = $_POST["university"];
  $_SESSION['faculty'] = $_POST["faculty"];
  $_SESSION['year'] = $_POST["year"];

  $_SESSION['hobby'] = $_POST["hobby"];

?>

<a href="/user.php">Контактна інформація</a><br>
<a href="/university.php">Інформація про ваш навчальний заклад</a><br>
<a href="/hobby.php">Ваші захоплення</a>

</body>
</html>