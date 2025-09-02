<?php
require('../database.php');

if(isset($_POST['create'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $queryCreate = "INSERT INTO accounts (user_name, password) VALUES(?, ?)";
    $sqlCreate = $connection->prepare($queryCreate);
    $sqlCreate->execute([$username, $password]);

    echo '<script>alert("User added successfully!"); window.location.href="../index.php";</script>';
}else{
    echo '<script> window.location.href="../index.php";</script>';
}