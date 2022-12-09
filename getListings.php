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
// Get the current listing id's and asking prices
$query = "SELECT listing_id, asking_price FROM current_listings";
$result = $conn->query($query);

// Process the result
while ($row = $result->fetch_array()) {
  $data[] = $row;
}
echo json_encode($data);

// Close the connection
mysqli_close($conn);

?>
