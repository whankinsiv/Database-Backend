function loadData() {
  console.log("Getting listings from DB");
  fetch('/getListings.php')
    .then(response => response.json())
    .then(data => {
    // Do something with the data
    console.log(data);
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
    tableBody.innerHTML += `
        <tr>
            <td>Image Here</td>
            <td>Address Here</td>
            <td>Listing Price Here</td>
        </tr>
    `;
}
