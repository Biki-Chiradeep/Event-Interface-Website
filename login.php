<?php
// login.php

// In a real-world scenario, you would validate the username and password against a database.
// For this example, we'll assume the credentials are "user123" and "password123".

// Retrieve the submitted username and password
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Check if the credentials are correct
    if ($username === "user123" && $password === "password123") {
        // Start the session and store the username in the session
        session_start();
        $_SESSION["username"] = $username;
        echo "success";
    } else {
        echo "error";
    }
}
?>
