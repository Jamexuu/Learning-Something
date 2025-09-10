<?php
require 'db.connection.php';

if (isset($_POST['signup'])) {
  $username = trim($_POST['username']);
  $password = trim($_POST['password']);

  if (empty($username) || empty($password)) {
    echo "Username or Password cannot be empty";
  } else {
    $queryCreateUser = "INSERT INTO accounts (username, password) VALUES (?, ?)";
    $sqlCreateUser = $connection->prepare($queryCreateUser);
    $sqlCreateUser->execute([$username, md5($password)]);
    echo "User created successfully. You can now <a href='login.php'>login</a>.";
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup</title>
</head>

<body>
  <form action="signup.php" method="post">
    <input type="text" name="username" placeholder="Enter Username">
    <input type="password" name="password" placeholder="Enter Password">
    <input type="submit" name="signup" value="Sign Up">
  </form>
</body>

</html>