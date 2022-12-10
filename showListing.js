const listingPopup = document.getElementById("showListingPopup");
const listingPopupHeader = document.getElementById("showListingPopupHeader");
const listingPopupBody = document.getElementById("showListingPopupBody");

// Global variable to hold the property info about the last clicked listing.
var clickedListingInfo

// Function for when an individual listing is clicked.
async function listingClicked(house_id) {
    
    // Get listing information from the database using the house_id
    let test = await getListingData(house_id);
    
    // Collect variables from JSON
    var address = clickedListingInfo[0]['street_address'];
    var state = clickedListingInfo[0]['State'];
    var city = clickedListingInfo[0]['city'];
    
    var bedroomCount = clickedListingInfo[0]['bedroom_count'];
    var bathroomCount = clickedListingInfo[0]['bathroom_count'];

    var askingPrice = clickedListingInfo[0]['asking_price'];
    var listDate = clickedListingInfo[0]['market_enter_date'];
    
    // Populate showingListingPopupHeader
    listingPopupHeader.innerHTML = "<div>" + address + "<\div>";
    listingPopupHeader.innerHTML += "<div>$" + askingPrice + "<\div>";
    
    // Populate showingListingPopupBody
    listingPopupBody.innerHTML = "<div>Bedrooms: " + bedroomCount + "<\div>";
    listingPopupBody.innerHTML += "<div>Bathrooms: " + bathroomCount + "<\div>";
    
    // Make Popup visable
    listingPopup.classList.add('active');
    overlay.classList.add('active');
}

// Function to query database for listing info based on house_id
async function getListingData(house_id) {
    var script = "/getListingInfo.php?house_id=" + encodeURIComponent(house_id);
    await fetch(script)
    .then(response => response.json())
    .then(data => {
    
    // Set Global variable  holding currently clicked listing info. 
    clickedListingInfo = data;
    console.log(clickedListingInfo);
    return clickedListingInfo;
    });
}

// Function to close the listing popup
function closeShowListingPopup() {
    listingPopup.classList.remove('active');
    overlay.classList.remove('active');
}
