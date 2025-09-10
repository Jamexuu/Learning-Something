<?php
if (isset($_POST['login'])) {
  header("Location: login.php");
  exit;
} elseif (isset($_POST['signup'])) {
  header("Location: signup.php");
  exit;
}
?>

<?php include 'bootstap.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign up or Login</title>
</head>

<body>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="container">
      <h1 class="text-center mb-4">Welcome! Please Login or Sign Up</h1>
      <form action="index.php" method="post" class="d-flex justify-content-center gap-3">
        <input type="submit" value="Login" name="login" class="btn btn-secondary btn-lg">
        <input type="submit" value="Sign Up" name="signup" class="btn btn-outline-secondary btn-lg">
      </form>
    </div>
  </div>
</body>

</html>