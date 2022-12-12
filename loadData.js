// Global Variables for listings data
var currentListings
var currentListingsOrdered

// Function to pull listings from the database and display them to the home screen
function loadData() {
  console.log("Getting listings from DB");
  fetch('/getListings.php')
    .then(response => response.json())
    .then(data => {
    
    // Set Global variable for all current listings. 
    currentListingsOrdered = data;
    
    // currentListings is the displayed shuffled listings so user does not see same listings on each page load
    currentListings = currentListingsOrdered;
    
   /* Shuffle array to be displayed to user */
   for (var i = currentListings.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = currentListings[i];
       currentListings[i] = currentListings[j];
       currentListings[j] = temp;
   }
    
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
    let askingPriceInt = parseInt(currentListings[row]["asking_price"])
    let AskingPriceFormated = askingPriceInt.toLocaleString()
    tableBody.innerHTML += `
        <tr onclick="listingClicked(${currentListings[row]["house_id"]});">
            <td> ${currentListings[row]["street_address"]} </td>
            <td> ${currentListings[row]["city"]}, ${currentListings[row]["State"]} </td>
            <td> $${AskingPriceFormated} </td>
        </tr>`
    ;
}
