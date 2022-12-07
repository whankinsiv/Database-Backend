<?php
$host = "localhost";
$username = "username";
$password = "";
$dbname = "dbname";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
} else {
    echo("Connected successfully\n");
}

?>
