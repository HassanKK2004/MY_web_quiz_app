<?php

// Database connection
$con = mysqli_connect("localhost:3307", "root", "", "quiz_app");
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Login user
if (isset($_POST['login'])) {
    $userID = $_POST['userID'];
    $password = $_POST['password'];

    $query = "SELECT password FROM users WHERE user_id='$userID'";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row['password'])) {
            session_start(); 
            $_SESSION['userID'] = $userID;
            header("Location: index.php");
            exit();
        } else {
            echo "<script>alert('Invalid password.');</script>";
            header("Location: login.html");
        }
    } else {
        echo "<script>alert('User ID not found.');
        window.location.href ='login.html'</script>";
    }
}

mysqli_close($con);
?>
