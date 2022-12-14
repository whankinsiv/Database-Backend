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
    updateTable()
}
          
async function updateTable() {
    var agentName = document.getElementById('agentFirstName') + " " + document.getElementById('agentLastName')
    var licNum = document.getElementById('licenseNumberInput')
    var firmName = document.getElementById('firm_name')
    var script = "/getListingInfo.php?agent_name=" + encodeURIComponent(agentName) + "&licence_reference_number=" + encodeURIComponent(licNum) + "&firm_name=" + encodeURIComponent(firmName);
    const response = await fetch(script);
    console.log(response)
    return clickedListingInfo;
}          
