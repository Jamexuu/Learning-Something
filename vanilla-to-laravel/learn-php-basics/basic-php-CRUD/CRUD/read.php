<?php
require('./database.php');

$queryAccounts = "SELECT * FROM accounts";
$sqlAccounts = $connection->prepare($queryAccounts);
$sqlAccounts->execute();

$accounts = $sqlAccounts->fetchAll();

