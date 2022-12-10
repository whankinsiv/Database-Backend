const listingPopup = document.getElementById("showListingPopup");
const listingPopupHeader = document.getElementById("showLIstingPopupHeader");

// Global variable to hold the property info about the last clicked listing.
var clickedListingInfo

// Function for when an individual listing is clicked.
function listingClicked(house_id) {
    
    // Get listing information from the database using the house_id
    getListingData(house_id);
    
    // Populate showingListingPopup
    listingPopupHeader.innerHTML = clickedListingInfo;
    
    listingPopup.classList.add('active');
    overlay.classList.add('active');
}

// Function to query database for listing info based on house_id
function getListingData(house_id) {
    var script = "/getListingInfo.php?house_id=" + encodeURIComponent(house_id);
    fetch(script)
    .then(response => response.json())
    .then(data => {
    
    // Set Global variable  holding currently clicked listing info. 
    clickedListingInfo = data;
    console.log(clickedListingInfo);
    });
}

// Function to close the listing popup
function closeShowListingPopup() {
    listingPopup.classList.remove('active');
    overlay.classList.remove('active');
}
