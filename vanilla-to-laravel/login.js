const password = document.getElementById('inputPassword6');
const eyeIcon = document.getElementById('eyeIcon');

function togglePassword() {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        password.type = "password";
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}