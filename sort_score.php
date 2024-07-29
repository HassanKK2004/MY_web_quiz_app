<?php
session_start();
include "config.php";
$sortOrder = "";
$game="";
$query="";
$userID = $_SESSION['userID']; // Assuming the user ID is stored in the session

if (isset($_POST['sort_date'])) {
  
 
    if($_POST['sort_date']=='latest'){
        $sortOrder='DESC';
    }else{
        $sortOrder='ASC';
    }
     
    $query = "SELECT score, saved_at, game_type FROM scores WHERE user_id = '$userID' 
    ORDER BY saved_at $sortOrder";

}else if(isset($_POST['sort_score'])){
    
    if($_POST['sort_score']=='lowest'){
        $sortOrder='ASC';
    }else{
        $sortOrder='DESC';
    }
    $query = "SELECT play_name, score, saved_at, game_type FROM scores WHERE user_id = '$userID' 
    ORDER BY score $sortOrder";
}else if(isset($_POST['sort_game'])){
  $game = $_POST['sort_game'];
  $query = "SELECT score, saved_at, game_type FROM scores WHERE user_id = '$userID' 
    AND game_type = '$game' ORDER BY saved_at DESC"; // Default sort order for game type
}
  
   $result = mysqli_query($con,$query);

        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" . $row['score'] . "</td>";
            echo "<td>" . $row ['game_type'] . "</td>";
            echo "<td>" . $row['saved_at'] . "</td>";
            echo "<td><input type='checkbox' name='delete[]' value='" . $row['play_name'] . "'></td>";
            echo "</tr>";
        }

?>
