var currentListings
// Function to pull listings from the database
function loadData() {
  console.log("Getting listings from DB");
  fetch('/getListings.php')
    .then(response => response.json())
    .then(data => {
    currentListings = data;
    // Populate listings table with data
    populateTable(currentListings.length);
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
        <tr onclick="listingClicked(${currentListings[row]["house_id"]});">
            <td> ${currentListings[row]["street_address"]} </td>
            <td> ${currentListings[row]["city"]} </td>
            <td> ${currentListings[row]["State"]} </td>
        </tr>`
    ;
}

function listingClicked(house_id) {
  console.log(house_id + " Clicked");
}
