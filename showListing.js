const listingPopup = document.getElementById("showListingPopup");

// Function for when an individual listing is clicked.
function listingClicked(house_id) {
    listingPopup.classList.add('active');
    overlay.classList.add('active');
}
