<?php
include "config.php"; // Assuming "config.php" contains your database connection settings

// SQL query to create the users table
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL UNIQUE,
    play_name VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)";

// SQL query to create the scores table
$sql1 = "CREATE TABLE IF NOT EXISTS scores (
    
    user_id VARCHAR(255) ,
    play_name VARCHAR(255) NOT NULL,
    score INT NOT NULL,
    saved_at DATETIME NOT NULL,
    game_type VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)";

// Execute queries
$result = mysqli_query($con, $sql);
$result1 = mysqli_query($con, $sql1);

if ($result && $result1) {
    echo "Tables created successfully.";
} else {
    echo "Error creating tables: " . mysqli_error($con);
}

mysqli_close($con);
?>
