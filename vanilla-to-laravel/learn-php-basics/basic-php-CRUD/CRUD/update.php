<?php
require('../database.php');

if(isset($_POST['edit'])){
    $editID = $_POST['editID'];
    $editUsername = $_POST['editUsername'];
    $editPassword = $_POST['editPassword'];
}


if(isset($_POST['update'])){
    $updateID = $_POST['updateID'];
    $updateUsername = $_POST['updateUsername'];
    $updatePassword = $_POST['updatePassword'];

    $queryUpdate = "UPDATE accounts SET user_name = ?, password = ? WHERE id = ?";
    $sqlUpdate = $connection->prepare($queryUpdate);
    $sqlUpdate->execute([$updateUsername, $updatePassword, $updateID]);

    echo '<script>alert("User updated successfully!"); window.location.href="../index.php";</script>';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP CRUD</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }

        .main {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .update-main {
            margin-bottom: 40px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 6px;
            background-color: #f9f9f9;
        }

        .update-main h3 {
            margin-bottom: 15px;
            color: #333;
        }

        .update-main input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        .update-main input[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            margin-top: 10px;
        }

        .update-main input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .read-main h3 {
            margin-bottom: 15px;
            color: #333;
        }

        .user-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .user-table th,
        .user-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        .user-table th {
            background-color: #f8f9fa;
            font-weight: bold;
            color: #333;
        }

        .user-table tr:hover {
            background-color: #f5f5f5;
        }

        .user-table form {
            display: inline-block;
            margin-right: 5px;
        }

        .user-table input[type="submit"] {
            padding: 6px 12px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="main">
        <form action="/learn-php-basics/basic-php-CRUD/CRUD/update.php" class="update-main" method="post">
            <h3>UPDATE USER</h3>
            <input type="text" name="updateUsername" value="<?php echo $editUsername; ?>" required>
            <input type="text" name="updatePassword" value="<?php echo $editPassword; ?>" required>
            <input type="submit" name="update" value="Update User">
            <input type="hidden" name="updateID" value="<?php echo $editID; ?>">
        </form>

    </div>
</body>
</html>