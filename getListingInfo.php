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

// Get house_id variable from JS
$house_id = $_REQUEST["house_id"];

// Get the listing information from the house_id
$query = "SELECT * FROM current_listings INNER JOIN house ON current_listings.house_id = house.house_id INNER JOIN agent ON current_listings.agent_id = agent.agent_id WHERE house.house_id = '" . $house_id . "'";
$result = $conn->query($query);

while ($row = $result->fetch_array()) {
  $data[] = $row;
}

$query2 = "SELECT * from prior_listings WHERE house_id = '" . $house_id . "'";
$result2 = $conn->query($query2);
while ($row2 = $result2->fetch_array()) {
  $data2[] = $row2;
}
$data[] += $data2;

echo json_encode($data);

// Close the connection
mysqli_close($conn);

?>
