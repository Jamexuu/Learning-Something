<?php 
  require 'session.php';
  include 'bootstrap.php'; 
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Session Login</title>
</head>

<body>
  <h1 class="text-center mt-5 mb-4">Welcome To Homepage!</h1>
  <form class="text-center" action="logout.php" method="post">
    <button type="submit" class="btn btn-danger">Logout</button>
  </form>
</body>
</html>