<?php
    require('./CRUD/read.php');
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

        .create-main {
            margin-bottom: 40px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 6px;
            background-color: #f9f9f9;
        }

        .create-main h3 {
            margin-bottom: 15px;
            color: #333;
        }

        .create-main input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        .create-main input[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            margin-top: 10px;
        }

        .create-main input[type="submit"]:hover {
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

        .user-table input[value="Edit"] {
            background-color: #28a745;
            color: white;
        }

        .user-table input[value="Edit"]:hover {
            background-color: #218838;
        }

        .user-table input[value="Delete"] {
            background-color: #dc3545;
            color: white;
        }

        .user-table input[value="Delete"]:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <div class="main">
        <form action="/learn-php-basics/basic-php-CRUD/CRUD/create.php" class="create-main" method="post">
            <h3>CREATE USER</h3>
            <input type="text" name="username" placeholder="Enter username" required>
            <input type="text" name="password" placeholder="Enter password" required>
            <input type="submit" name="create" value="Create User">
        </form>

        <div class="read-main">
            <h3>USER LIST</h3>
            <table class="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <?php foreach($accounts as $account){ ?>
                <tbody>
                    <td><?php echo $account['id']; ?></td>
                    <td><?php echo $account['user_name']; ?></td>
                    <td><?php echo $account['password']; ?></td>
                    <td>
                        <form action="/learn-php-basics/basic-php-CRUD/CRUD/update.php" method="post">
                            <input type="hidden" name="editID" value="<?php echo $account['id']; ?>">
                            <input type="hidden" name="editUsername" value="<?php echo $account['user_name']; ?>">
                            <input type="hidden" name="editPassword" value="<?php echo $account['password']; ?>">
                            <input type="submit" name="edit" value="Edit">
                        </form>
                        <form action="/learn-php-basics/basic-php-CRUD/CRUD/delete.php" method="post">
                            <input type="submit" name="delete" value="Delete">
                            <input type="hidden" name="deleteID" value="<?php echo $account['id']; ?>">
                        </form>
                    </td>
                </tbody>
                <?php } ?>
            </table>
        </div>
    </div>
</body>
</html>