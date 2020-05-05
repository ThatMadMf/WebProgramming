<html>
<body>
  <?php
    
    session_start();
    echo "Назва ВУЗу:" . " <b>" . $_SESSION['university'] . "</b><br>";
    echo "Факультет::" . " <b>" . $_SESSION['faculty'] . "</b><br>";
    echo "Курс:" . " <b>" . $_SESSION['year'] . "</b><br>";
  
  ?>

</body>
</html>