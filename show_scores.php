<?php
session_start();
include "config.php";
$userID = $_SESSION['userID'];

if (isset($_POST['show']) && $_POST['show'] == 1) {
    $sql1 = mysqli_query($con, "SELECT score, game_type, saved_at FROM scores WHERE user_id ='$userID'");
    while ($urow = mysqli_fetch_array($sql1)) {
        echo "<tr>
            <td>{$urow['score']}</td>
            <td>{$urow['game_type']}</td>
            <td>{$urow['saved_at']}</td>
            <td><input type='checkbox' name='delete_ids[]' value='{$urow['saved_at']}'></td>
        </tr>";
    }
}
?>
