<?php

$host = 'localhost';
$user = 'sa';
$password = '';
$database = 'mydb';

try{
    $connection = new PDO("sqlsrv:Server=$host;Database=$database", $user, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
}catch (PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}
