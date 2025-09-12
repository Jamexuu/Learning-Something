<?php
session_start();
session_unset();
session_destroy();
$_SESSION['status'] = 'invalid';
header('Location: index.php');
exit();
