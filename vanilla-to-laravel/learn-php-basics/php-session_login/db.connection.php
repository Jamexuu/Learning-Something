<?php
$config = include('db.config.php');

try {
  $dsn = "sqlsrv:Server={$config['host']};Database={$config['db']}";
  $connection = new PDO($dsn, $config['user'], $config['pass']);
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
