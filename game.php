<?php
include "config.php";
session_start();

// Determine which game was selected
if (isset($_POST['game'])) {
  $game = $_POST['game'];
  $_SESSION['game'] = $game;
} else {
  $game = 'frontend';
}
// Default to frontend if not set
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="game.css">
    <title>Game</title>
</head>
<body>

    <div class="container">
      <div id="game" class="justify-center flex-column">
        <div id="hud">
          <div id="hud-item">
            <p class="hud-prefix" id="progressText">
              Question
            </p>
            <div id="progressBar">
              <div id="progressBarFull"></div>
            </div>
            <h1 class="hud-main-text" id="questionCounter"></h1>
          </div>
        
          <div id="hud-item">
            <p class="hud-prefix">
              Score
            </p>
            <h1 class="hud-main-text" id="score">
              0
            </h1>
          </div>
        </div>

        <h2 id="question">What is the answer to this question?</h2>
        <div class="choice-container">
          <p class="choice-prefix">A</p>
          <p class="choice-text" value ="1">Choice 1</p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">B</p>
          <p class="choice-text" value="2">Choice 2</p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">C</p>
          <p class="choice-text" value="3">Choice 3</p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">D</p>
          <p class="choice-text" value="4">Choice 4</p>
        </div>
      </div>
    </div>

    <?php
    // Load the appropriate game script based on the selected game
    if ($game == 'frontend') {
        echo '<script src="game.js"></script>';
    } else {
        echo '<script src="game2.js"></script>';
    }
    ?>
</body>
</html>
