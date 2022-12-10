const listingPopup = document.getElementById("showListingPopup");
var clickedListingInfo
// Function for when an individual listing is clicked.
function listingClicked(house_id) {
    
    // Get listing information from the database using the house_id
    getListingData(house_id);
    
    listingPopup.classList.add('active');
    overlay.classList.add('active');
}

function getListingData(house_id) {
    var script = "/getListingInfo.php?houseid=" + encodeURIComponent(house_id);
    fetch(script)
    .then(response => response.json())
    .then(data => {
    
    // Set Global variable for all current listings. 
    clickedListingInfo = data;
    console.log(clickedListingInfo);
    });

}





function closeShowListingPopup() {
    listingPopup.classList.remove('active');
    overlay.classList.remove('active');
}
