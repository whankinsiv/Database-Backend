const listingPopup = document.getElementById("showListingPopup");
const listingPopupHeader = document.getElementById("showLIstingPopupHeader");

// Global variable to hold the property info about the last clicked listing.
var clickedListingInfo

// Function for when an individual listing is clicked.
async function listingClicked(house_id) {
    
    // Get listing information from the database using the house_id
    await getListingData(house_id);
    
    // Populate showingListingPopup
    listingPopupHeader.innerHTML = clickedListingInfo[0]["nearest_school"];
    
    listingPopup.classList.add('active');
    overlay.classList.add('active');
}

// Function to query database for listing info based on house_id
async function getListingData(house_id) {
    var script = "/getListingInfo.php?house_id=" + encodeURIComponent(house_id);
    fetch(script)
    .then(response => response.json())
    .then(data => {
    
    // Set Global variable  holding currently clicked listing info. 
    clickedListingInfo = data;
    });
}

// Function to close the listing popup
function closeShowListingPopup() {
    listingPopup.classList.remove('active');
    overlay.classList.remove('active');
}
