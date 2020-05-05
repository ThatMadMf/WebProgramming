<html>
<body>
  <?php
    
    session_start();
    echo "Прізвище:" . " <b>" . $_SESSION['secondName'] . "</b><br>";
    echo "Ім'я:" . " <b>" . $_SESSION['firstName'] . "</b><br>";
    echo "Домашній телефон:" . " <b>" . $_SESSION['phoneNumber'] . "</b><br>";
    echo "Електронна адреса" . " <b>" . $_SESSION['email'] . "</b><br>";

  ?>

</body>
</html>