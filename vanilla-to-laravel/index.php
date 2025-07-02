<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>
    <style>
        .email-field{
            width: 300px;
        }

        .password-field{
            width: 300px;
        }

        .login-form {
            display: flex;
            height: 80vh;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            width: 30%;
        }

        label{
            color: #fff;
        }

        .password-container {
            position: relative;
        }

        .eye-icon {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #6c757d;
        }

        .eye-icon:hover {
            color: #495057;
        }
        
    </style>

    <div class="container-fluid justify-content-center text-center bg-dark">
        <h1 class="text-white p-3">Login</h1>
    </div>
    
    <div class="container-fluid bg-secondary login-form">
        <form action="display.php" method="POST">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control email-field" id="exampleFormControlInput1" placeholder="name@example.com" name="email"> 
            </div>               
            <div class="mb-3">
                    <label for="inputPassword6" class="form-label">Password</label>
                    <div class="password-container">
                        <input type="password" id="inputPassword6" class="form-control password-field" aria-describedby="passwordHelpInline" name="password">
                        <i class="fas fa-eye eye-icon" id="eyeIcon" onclick="togglePassword()"></i>
                    </div>
                    <span id="passwordHelpInline" class="form-text text-white">
                        Must be 8-20 characters long.
                    </span>
                </div>
            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1DKg1ERo0BZlK" crossorigin="anonymous"></script>
    <script src="login.js"></script>
</body>
</html>