<?php
include "config.php";
if(isset($_GET['action'])&&$_GET['action']=='clicked'){
    session_start();
    session_destroy();
    session_start();
    header('Location: which_game.php');
    exit();
}
?>