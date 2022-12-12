const listingPopup = document.getElementById("showListingPopup");
const listingPopupHeader = document.getElementById("showListingPopupHeader");
const listingPopupBody = document.getElementById("showListingPopupBody");
const listingPopupInfo = document.getElementById("showListingPopupInfo");
const listingPopupFooter = document.getElementById("showListingPopupFooter");

// Global variable to hold the property info about the last clicked listing.
var clickedListingInfo

// Function for when an individual listing is clicked.
async function listingClicked(house_id) {
    
    // Get listing information from the database using the house_id
    const result = await getListingData(house_id);
    
    // Collect variables from JSON
    var address = clickedListingInfo[0]['street_address'];
    var state = clickedListingInfo[0]['State'];
    var city = clickedListingInfo[0]['city'];
    
    var sqft = clickedListingInfo[0]['square_feet'];
    var bedroomCount = clickedListingInfo[0]['bedroom_count'];
    var bathroomCount = clickedListingInfo[0]['bathroom_count'];
    var garageSize = clickedListingInfo[0]['garage_size'];
    var pool = clickedListingInfo[0]['pool'];
    var guestHouse = clickedListingInfo[0]['detached_house'];
    var solarInstalled = clickedListingInfo[0]['solar_installed'];
    var heatingType = clickedListingInfo[0]['heating_type'];
    var coolingType = clickedListingInfo[0]['cooling_type'];
    var streetParking = clickedListingInfo[0]['street_parking'];
    var nearestSchool = clickedListingInfo[0]['nearest_school'];

    var askingPrice = clickedListingInfo[0]['asking_price'];
    
    var listDate = clickedListingInfo[0]['market_enter_date'];
    var listAgent = clickedListingInfo[0]['agent_name'];
    var listBrokerage = clickedListingInfo[0]['firm_name'];
    var licenseNumber = clickedListingInfo[0]['licence_reference_number'];
    
    
    // Populate showingListingPopupHeader
    let askingPriceInt = parseInt(askingPrice)
    let askingPriceFormated = askingPriceInt.toLocaleString()
    listingPopupHeader.innerHTML = "<div>" + address + " " + city + ", " + state + "<\div>";
    listingPopupHeader.innerHTML += "<div>$" + askingPriceFormated + "<\div>";
    
    // Populate property information
    listingPopupInfo.innerHTML = "Property Info:";
    listingPopupInfo.innerHTML += "<div>sqft: " + sqft + "<\div>";
    listingPopupInfo.innerHTML += "<div>Bedrooms: " + bedroomCount + "<\div>";
    listingPopupInfo.innerHTML += "<div>Bathrooms: " + bathroomCount + "<\div>";
    listingPopupInfo.innerHTML += "<div>Garage Size: " + garageSize + "<\div>";
    listingPopupInfo.innerHTML += "<div>Solar Installed: " + solarInstalled + "<\div>";
    listingPopupInfo.innerHTML += "<div>Guest House: " + guestHouse + "<\div>";
    listingPopupInfo.innerHTML += "<div>Pool: " + pool + "<\div>";
    listingPopupInfo.innerHTML += "<div>Street Parking: " + streetParking + "<\div>";
    listingPopupInfo.innerHTML += "<div>Heating Type: " + heatingType + "<\div>";
    listingPopupInfo.innerHTML += "<div>Cooling Type: " + coolingType + "<\div>";
    listingPopupInfo.innerHTML += "<div>Closest High School: " + nearestSchool + "<\div>";

    // Populate footer
    listingPopupFooter.innerHTML = "<div>Listed " + listDate + " by " + listAgent + ".</div>"; 
    listingPopupFooter.innerHTML += "<div>License #: " + licenseNumber + "</div>"
    listingPopupFooter.innerHTML += "<div>List Brokerage: " + listBrokerage + "</div>";
    
    // Make Popup visable
    listingPopup.classList.add('active');
    overlay.classList.add('active');
}

// Function to query database for listing info based on house_id
async function getListingData(house_id) {
    var script = "/getListingInfo.php?house_id=" + encodeURIComponent(house_id);
    const response = await fetch(script);
    const data = await response.json();
    
    // Set Global variable  holding currently clicked listing info. 
    clickedListingInfo = data;
    console.log(clickedListingInfo);
    return clickedListingInfo;
}

// Function to close the listing popup
function closeShowListingPopup() {
    listingPopup.classList.remove('active');
    overlay.classList.remove('active');
}
