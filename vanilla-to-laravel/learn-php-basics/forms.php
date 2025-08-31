<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms in PHP</title>
</head>
<body>
    <h1>Forms in PHP</h1>
    <form action="/vanilla-to-laravel/learn-php-basics/forms.php" method="post">
        <input type="text" name="username" placeholder="Enter your username">
        <input type="submit" name="submit" value="CLICK">
    </form>
</body>
</html>

<?php

if(isset($_POST['submit'])){
    $name = $_POST['username'];
    echo "<h2>Hello, $name!</h2>";
}
