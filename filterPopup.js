const filterButton = document.getElementById("filterButton")
const setFilterButton = document.getElementById("setFilter")
const resetFilterButton = document.getElementById("resetFilter")
const overlay = document.getElementById('overlay')
const filterPopup = document.getElementById('filterPopup')
const minPriceForum = document.getElementById('minPrice')
const maxPriceForum = document.getElementById('maxPrice')
const minBedsForum = document.getElementById('minBeds')
var filteredArray = [];

filterButton.addEventListener('click', () => {
    openFilterPopup()
})

/* All filter parameters must be reset on this event */
resetFilterButton.addEventListener('click', () => {
    resetFilter()
})

setFilterButton.addEventListener('click', () => {
    setFilter()
    closeFilterPopup()
})

minPriceForum.addEventListener("input", function() {
  minPrice = minPriceForum.value;
});

maxPriceForum.addEventListener("input", function() {
  maxPrice = maxPriceForum.value;
});

minBedsForum.addEventListener("input", function() {
  minBeds = minBedsForum.value;
});

// Function to produce reduced data array based on filter parameters 
function setFilter() {
    filteredArray = []
    let filteredArray1 = []
    let filteredArray2 = []
    let filteredArray3 = []
    // Filter by Min Price
    if (minPrice.length > 0) {
        for (let i=0; i < currentListingsOrdered.length; i++) {
            if (currentListingsOrdered[i]["asking_price"] >= minPrice) {
                filteredArray1.push(currentListingsOrdered[i])
            }
        }
    } 
    // If Min Price is empty push the entire currentListingsOrdered array to filteredArray
    else {
        for (let i=0; i < currentListingsOrdered.length; i++) {
            filteredArray1.push(currentListingsOrdered[i])
        }
    }
    
    // Filter by Max Price
    if (maxPrice.length > 0) {
        for (let j=0; j < filteredArray1.length; j++) {
            if (filteredArray1[j]["asking_price"] <= maxPrice) {
                filteredArray2.push(filteredArray1[j])
            }
        }
    }
    // If Max Price is empty push entire filteredArray1
    else {
        for (let j=0; j < filteredArray1.length; j++) {
            filteredArray2.push(filteredArray1[j])
        }
    }
    
    
    // Set the main filter array after completing all filtering
    filteredArray = filteredArray2
    
    // Update home page listings based on new array
    updateListings(filteredArray)
    
    console.log(filteredArray1);
    console.log(filteredArray2);
}

// Function to update homepage listings based on the filteredArray
function updateListings(filteredArray) {
    var tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ``;
    for (let i=0; i < filteredArray.length; i++) {
        tableBody.innerHTML += `
        <tr onclick="listingClicked(${filteredArray[i]["house_id"]});">
            <td> ${filteredArray[i]["street_address"]} </td>
            <td> ${filteredArray[i]["city"]}, ${filteredArray[i]["State"]} </td>
            <td> $${filteredArray[i]["asking_price"]} </td>
        </tr>`
    ;
    }
}

// Function to reset filter parameters
function resetFilter() {
    var tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ``;
    minPriceForum = ''
    maxPriceForum = ''
    minBedsForum = ''
    populateTable(currentListings);
}

// Function to open popup when filter button is pushed
function openFilterPopup() {
    filterPopup.classList.add('active')
    overlay.classList.add('active')
}

// Function to close the popup
function closeFilterPopup() {
    filterPopup.classList.remove('active')
    overlay.classList.remove('active')
}

