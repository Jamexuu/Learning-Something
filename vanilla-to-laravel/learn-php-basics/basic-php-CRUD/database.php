<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'usersdb';

try{
    $connection = new PDO("mysql:host=$host;dbname=$database", $user, $password);

    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
}catch (PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}

