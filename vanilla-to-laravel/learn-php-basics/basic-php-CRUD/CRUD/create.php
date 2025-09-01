<?php
require('../database.php');

if(isset($_POST['create'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $queryCreate = "INSERT INTO accounts (user_name, password) VALUES(?, ?)";
    $sqlCreate = $connection->prepare($queryCreate);
    $sqlCreate->execute([$username, $password]);

    echo "<script> alert('User created successfully!'); </script>";
    echo "<script> window.location.href = '/vanilla-to-laravel/learn-php-basics/basic-php-CRUD/index.php'; </script>";
}else{
    echo "<script> window.location.href = '/vanilla-to-laravel/learn-php-basics/basic-php-CRUD/index.php'; </script>";
}