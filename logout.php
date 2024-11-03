<?php
// logout.php

// Start the session
session_start();

// Unset and destroy the session to log out the user
session_unset();
session_destroy();
?>
