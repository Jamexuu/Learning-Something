<?php
session_start();

if ($_SESSION['status'] == 'invalid' || empty($_SESSION['status'])){
  $_SESSION['status'] = 'invalid';
}

if ($_SESSION['status'] == 'valid'){
  echo "<script>window.location.href='home.php'</script>";
}