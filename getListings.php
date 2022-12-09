<?php
$servername = "localhost";
$database = "u658727581_MLSDatabase";
$username = "u658727581_MLSUser";
$password = "Project1234";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected";
?>
