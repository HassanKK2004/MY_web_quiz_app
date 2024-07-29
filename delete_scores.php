<?php
session_start();
include "config.php";

$userID = $_SESSION['userID'];

if (isset($_POST['deleteSelected']) && isset($_POST['delete_ids'])) {
    // Delete selected scores
    $deleteIds = $_POST['delete_ids'];
    $deleteIds = implode("','", $deleteIds);
    
    $sql = "DELETE FROM scores WHERE user_id='$userID' AND saved_at IN ('$deleteIds')";
    mysqli_query($con, $sql);
} elseif (isset($_POST['deleteAll'])) {
    // Delete all scores
    $sql = "DELETE FROM scores WHERE user_id='$userID'";
    mysqli_query($con, $sql);
}

header("Location: highscore.php");
exit();
?>
