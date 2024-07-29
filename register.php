<?php
include "config.php";

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Register user
if (isset($_POST['register'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $play_name = $_POST['PlayName'];

    // Check if email already exists in the database
    $checkQuery = "SELECT * FROM users WHERE email = '$email' ";
    $result = mysqli_query($con, $checkQuery);

    $checkQuery2 = "SELECT * FROM users WHERE play_name = '$play_name' ";
    $result2 = mysqli_query($con, $checkQuery2);

    if (mysqli_num_rows($result) > 0) {
        echo "<script>alert('Email already registered. Please use a different email address.');
        window.location.href = 'register.html';</script>";
    }elseif(mysqli_num_rows($result2) > 0){
        echo "<script>alert('This name is already taken, try a different name.');
        window.location.href = 'register.html';</script>";
     }else {
        // Validate password criteria
        if (preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,20}$/', $password)) {
            // Generate a unique user ID
            $userID = substr($firstName, 0, 3) . substr($lastName, 0, 3) . rand(100, 999) . substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'), 0, 3);

            // Hash the password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Insert the new user into the database
            $query = "INSERT INTO users (user_id, first_name, last_name, email, password,play_name) VALUES 
            ('$userID', '$firstName', '$lastName', '$email', '$hashedPassword','$play_name')";
            session_start();
            $_SESSION['play_name']=$play_name;
            $_SESSION['user_id']=$userID;
            $_SESSION['first_name']=$firstName;
     setcookie("first_name", $firstName, time() + (86400 * 30), "/");

            if (mysqli_query($con, $query)) {
                echo "<script>alert('Registration successful! Your User ID is $userID');";
                echo "window.location.href = 'login.html';</script>";
            } else {
                echo "<script>alert('Error: " . mysqli_error($con) . "');</script>";
            }
        } else {
            echo "<script>alert('Password does not meet the criteria.');</script>";
        }
    }
}

mysqli_close($con);
?>
