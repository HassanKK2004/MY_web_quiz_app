<?php
include "config.php";
session_start();
if (isset($_GET['action']) && $_GET['action'] == 'clicked') {

    session_destroy();
    header('Location: login.html');
    exit();
} 


if (isset($_SESSION['user_id']) && isset($_SESSION['first_name'])) {
    setcookie("first_name", $_SESSION['first_name'], time() + (86400 * 30), "/");
}
/*Welcome,
Warning: Undefined array key "first_name" in C:\xampp\htdocs\quiz_app\index.php on line 35
!*/ 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    
    <title>Quiz App</title>
</head>
<body id="index">
    <div class="container">
        <div id="home" class="flex-center flex-column">
            <h1>Take a Quiz</h1>
            
            <?php if (isset($_SESSION['userID'])): ?>
                <!-- User is logged in -->
               
                <a href="which_game.php" class="btn">Play</a>
                <a href="highscore.php" class="btn">View High Scores</a>
                <a href="index.php?action=clicked" class="btn">Logout</a>
                
            <?php else: ?>
                <!-- User is not logged in -->
                <a href="guest.php?action=clicked" class="btn">Play as Guest</a>
                <a href="login.html" class="btn">Login to Play</a>
                
            <?php endif; ?>

           
            
        </div>
    </div>

 
</body>
</html>
