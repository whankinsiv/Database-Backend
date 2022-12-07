// Add event listener to Input New Listing button on home page
const newListingButton = document.getElementById("newListingButton")
newListingButton.addEventListener('click', () => {
    openNewListingPopup()
})

// Add event listener to Submit button inside New Listing popup
const submitNewListingButton = document.getElementById("submitNewListingButton")
submitNewListingButton.addEventListener('click', () => {
    submitButtonPushed()
})

// Open New Listing Popup
const newListingPopup = document.getElementById('newListingPopup')
function openNewListingPopup() {
    newListingPopup.classList.add('active')
    overlay.classList.add('active')
}

// Close New Listing Popup
function closeNewListingPopup() {
    newListingPopup.classList.remove('active')
    overlay.classList.remove('active')
}

// Send New Listing to Database
function submitButtonPushed() {
    // Check if all required fields all filled out and valid

    // Add entries to appripriate tables

}