<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = $_POST['email'];
        $password = $_POST['password'];
        echo "Password: {$password} <br>
        Email: {$email} <br>";
    }
?>