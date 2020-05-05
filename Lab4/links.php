<html>
<body>

<?php

  session_start();
  $_SESSION['firstName'] = $_POST["firstName"];
  $_SESSION['secondName'] = $_POST["secondName"];
  $_SESSION['phoneNumber'] = $_POST["phoneNumber"];
  $_SESSION['email'] = $_POST["email"];


?>

<a href="/user.php">example</a>
</body>
</html>