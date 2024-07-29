function validateForm() {
    var password = document.forms["registerForm"]["password"].value;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,20}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be between 4 to 20 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false;
    }
    return true;
}