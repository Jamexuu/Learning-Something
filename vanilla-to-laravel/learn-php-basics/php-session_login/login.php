<?php
    require 'db.connection.php'; 

    session_start();

    if ($_SESSION['status'] == 'invalid' || empty($_SESSION['status'])){
        $_SESSION['status'] = 'invalid';
    }

    if ($_SESSION['status'] == 'valid'){
        echo "<script>window.location.href='index.php'</script>";
    }

    if (isset($_POST['login'])){
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if (empty($username) || empty($password)){
            echo "Username or Password cannot be empty";
        } else{
            $queryValidate = "SELECT * FROM accounts WHERE username = ? AND password = ?";
            $sqlValidate = $connection->prepare($queryValidate);
            $sqlValidate->execute([$username, md5($password)]);
            
            if ($sqlValidate->rowCount() > 0){
                $_SESSION['status'] = 'loggedin';
                echo "<script>window.location.href='index.php'</script>";
            } else{
                $_SESSION['status'] = 'invalid';
                echo "Invalid Username or Password";
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="login.php" method="post">
        <input type="text" name="username" placeholder="Enter Username">
        <input type="password" name="password" placeholder="Enter Password">
        <input type="submit" name="login" value="Login">
    </form>
</body>
</html>