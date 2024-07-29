<?php
session_start();
include "config.php";
$userID = $_SESSION['userID'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>High Scores</title>
    <link rel="stylesheet" href="style_score.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body id="score">
    <h1 id="high">High Scores</h1>
    <div class="scores_table">
        <form id="scoresForm" method="post" action="delete_scores.php">
            <table id="score_table">
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Game</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="score_body">
                    <!-- Scores will be loaded here dynamically -->
                </tbody>
            </table>
            <div class="container">
            <div id="download_container">
                <a href="download_file.php?file=Score.docx" class="btn" id="download">Download Table</a>
            </div>
            
                <div class="btn-container">
                    <a href="index.php" class="btn">Return to Main Menu</a>
                   
                    <button type="submit" name="deleteSelected" class="btn">Delete Selected</button>
                    <button type="submit" name="deleteAll" class="btn">Delete All</button>
                </div>
                
                <div class="btn-container2">
                    <button type="button" class="btn2" id="showScoresBtn">Display Scores</button>
                    
                    <div id="Sort_btn_container" style="display: none;">
                        <button type="button" class="btn2" id="SortDate">Sort By Date</button>
                        <button type="button" name ="Back" class = "btn" id ="Go_Back" style="display:none">Back</button>
                        <button type="button" name ="Back" class = "btn" id ="Go_Back2" style="display:none">Back</button>
                        <div id="Sort_By_Date" style="display: none;">
                            <button type="button" name="sortOldest" class="btn2" id="sortOldest">Sort by Oldest</button>
                            <button type="button" name="sortLatest" class="btn2" id="sortLatest">Sort by Latest</button>
                        </div>

                        <button type="button" class="btn2" id="SortScore">Sort By Score</button>
                        <div id="Sort_By_Score" style="display:none">
                            <button type="button" name="sortHighest" class="btn2" id="sortHighest">Sort by Highest Score</button>
                            <button type="button" name="sortLowest" class="btn2" id="sortLowest">Sort by Lowest Score</button>
                        </div>
                        
                        <button type="button" class='btn2' id="SortGame">Sort By Game</button>
                        <div id="Sort_By_Game" style="display:none">
                            
                        <?php 
                            $q = "SELECT DISTINCT game_type FROM scores WHERE user_id ='$userID'";
                            $r = mysqli_query($con, $q);
                            $i=0;
                            while($arr = mysqli_fetch_assoc($r)){
                            ?>
                            <button type="button" class="btn2" id="choose<?php $i;?>"><?php echo $arr['game_type']; ?></button>
                            <?php
                            $i++; 
                            } 
                            ?>
                            
                        </div>

                    </div>
                </div>
            </div>
        </form>
    </div>

    <script src="sort.js"></script>
  
</body>
</html>
