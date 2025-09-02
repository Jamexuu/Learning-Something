<?php
require('../database.php');

if(isset($_POST['delete'])){
    $deleteID = $_POST['deleteID'];

    $queryCreate = "DELETE FROM  accounts WHERE id = ?";
    $sqlCreate = $connection->prepare($queryCreate);
    $sqlCreate->execute([$deleteID]);

    echo '<script>alert("User deleted successfully!"); window.location.href="../index.php";</script>';
}else{
    echo '<script> window.location.href="../index.php";</script>';
}