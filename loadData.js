var currentListings
// Function to pull listings from the database
function loadData() {
  console.log("Getting listings from DB");
  fetch('/getListings.php')
    .then(response => response.json())
    .then(data => {
    currentListings = data;
    // Populate listings table with data
    console.log(currentListings);
    console.log(currentListings[0][0]);
    for (let i=0; i < data.length; i++) {
      populateRow(i)
    }
  });
}

// Function for populating the home page listings table.
function populateTable(numOfEntries) {
    for (let i = 0; i < numOfEntries; i++) {
        populateRow(i);
    }
}

// Function for populating each indiviudal row in the listings table.
function populateRow(row) {
    var tableBody = document.querySelector("tbody");
    var name = "test";
    tableBody.innerHTML += `
        <tr>
            <td> ${currentListings[row["State"]]} </td>
            <td> ${name} </td>
            <td> ${name} </td>
        </tr>`
    ;
}
