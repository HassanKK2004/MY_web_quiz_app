<?php
session_start(); // Start the session to access session variables

// Include necessary files and establish database connection
include "config.php";

// Check if user is logged in
$isLoggedIn = isset($_SESSION['userID']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finish Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body id="endbody">
    <div class="container">
        <div id="end" class="flex-center flex-column">
            
            <!-- Display the final score -->
            <h1 id="finalscore">0</h1>
            
            <!-- Form to save the score -->
            <form action="end.php" method="POST">
                <!-- Hidden input to store the final score -->
                <input type="hidden" id="finalScoreInput" name="finalscore">
                <button type="submit" class="btn" id="savebtn" <?php if (!$isLoggedIn) echo 'disabled'; ?>>Save Score</button>
            </form>

            <!-- Links to other pages -->
            <a class="btn" href="game.php">Play Again</a>
            <a class="btn" href="index.php">Return to Main Menu</a>
        </div>
    </div>

    <!-- Script to set the final score value and handle form submission -->
    <script src="end.js"></script>

   
</body>
</html>

<?php
// If user is logged in and the form is submitted
if ($isLoggedIn && $_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve score and current timestamp
    $score = $_POST['finalscore'];
    $saved_at = date("Y-m-d H:i:s ");

    // Prepare SQL statement to insert score into database
    $userID = $_SESSION['userID'];
    $play_name = $_SESSION['play_name'];
    $game_type = "";
  
        if($_SESSION['game'] =='backend'){
            $game_type = 'Backend Web Development';
        }else{
            $game_type='Frontend Web Development';
        }
   
    $query = "INSERT INTO scores (user_id, play_name, score, saved_at,game_type) VALUES ('$userID', '$play_name', '$score', '$saved_at','$game_type')";

    if (mysqli_query($con, $query)) {
        // Score saved successfully
        echo "<script>alert('Score saved successfully.');
              window.location.href = 'index.php';</script>";
    } else {
        // Error saving score
        echo "<script>alert('Error saving score: " . mysqli_error($con) . "');
              window.location.href = 'which_game.php';</script>";
    }

    mysqli_close($con);
}
?>
