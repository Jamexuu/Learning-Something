<?php
$host = 'localhost';
$user = 'root';
$password = 'AstaxNoelle22';
$database = 'mydatabase';

try{
    $connection = new PDO("mysql:host=$host;dbname=$database", $user, $password);

    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = $connection->prepare("SELECT * FROM users");
    $query->execute();

    $results = $query->fetchAll(PDO::FETCH_ASSOC);

    foreach ($results as $row){
        echo "ID: " . $row['user_id'] . "<br>";
        echo "First Name: " . $row['first_name'] . "<br>";
        echo "Last Name: " . $row['last_name'] . "<br>";
        echo "Age: " . $row['age'] . "<br>";
        echo "<hr>";
    }

}catch (PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}

