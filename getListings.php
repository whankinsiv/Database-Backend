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
$query1 = "SELECT house_id, asking_price FROM current_listings";
$result1 = $conn->query($query1);

// Process the result
while ($row1 = $result1->fetch_array()) {
  $query2 = "SELECT street_address, city, State FROM house where house_id = '" . $row1["house_id"]] . "'";
  $result2 = mysqli_query($conn, $query2);
  
  // Process result of second query
  while ($row2 = mysqli_fetch_array($result2)) {
    $data[] = $row2;
  }
}
echo json_encode($data);

// Close the connection
mysqli_close($conn);

?>
