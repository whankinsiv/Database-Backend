const filterButton = document.getElementById("filterButton")
const setFilterButton = document.getElementById("setFilter")
const resetFilterButton = document.getElementById("resetFilter")
const overlay = document.getElementById('overlay')
const filterPopup = document.getElementById('filterPopup')
const minPriceForum = document.getElementById('minPrice')
const maxPriceForum = document.getElementById('maxPrice')
const minBedsForum = document.getElementById('minBeds')
const minSquareFeetForum = document.getElementById('minSquareFeet')
const minBathroomForum = document.getElementById('minBathroom')
var filteredArray = [];
var minPrice
var maxPrice
var minBeds
var minSquareFeet
var minBathroom
var count = 0;

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

minSquareFeetForum.addEventListener("input", function() {
    minSquareFeet = minSquareFeetForum.value;
});

minBathroomForum.addEventListener("input", function() {
    minBathroom = minBathroomForum.value;
});

// Function to produce reduced data array based on filter parameters 
function setFilter() {
    filteredArray = []
    let filteredArray1 = []
    let filteredArray2 = []
    let filteredArray3 = []
    let filteredArray4 = []
    let filteredArray5 = []
    // Filter by Min Price
    if (minPrice != null) {
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
    if (maxPrice != null) {
        for (let j=0; j < filteredArray1.length; j++) {
            if (filteredArray1[j]["asking_price"] <= maxPrice) {
                filteredArray2.push(filteredArray1[j])
            }
        }
    }
    // If Max Price is empty push entire filteredArray1
    else {
        filteredArray2 = filteredArray1
    }

    // Filter by Min Beds
    if (minBeds != null) {
        for (let k=0; k < filteredArray2.length; k++) {
            count = filteredArray2[k]["bedroom_count"]
            if (count >= minBeds) {
                filteredArray3.push(filteredArray2[k])
            }
        }
    }
    // If Min Beds is empty push entired filteredArray2 
    else {
        filteredArray3 = filteredArray2
    }
    
    // Filter By Min Bathroom Count
    if (minBathroom != null) {
        for (let m=0; m < filteredArray3.length; m++) {
            count = filteredArray3[m]["bathroom_count"]
            if (count >= minBathroom) {
                filteredArray4.push(filteredArray3[m])
            }
        }
    }
    // If MinBathroomCount is empty push entired filteredArray2 
    else {
        filteredArray4 = filteredArray3
    }
    
    //Filter By Min Square Feet
    if (minSquareFeet != null) {
        for (let l=0; l < filteredArray4.length; l++) {
            count = filteredArray4[l]["square_feet"]
            console.log(square_feet)
            if (count >= minSquareFeet) {
                filteredArray5.push(filteredArray4[l])
                console.log(filteredArray4[l]["square_feet"]);
            }
        }
    }
    // If MinSquareFeet is empty push entired filteredArray2 
    else {
        filteredArray5 = filteredArray4
    }
    
    
    
    
    console.log(filteredArray5)
    
    // Set the main filter array after completing all filtering
    filteredArray = filteredArray5
    
    // Update home page listings based on new array
    updateListings(filteredArray)
}

// Function to update homepage listings based on the filteredArray
function updateListings(filteredArray) {
    var tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ``;
    for (let i=0; i < filteredArray.length; i++) {
        let askingPriceInt = parseInt(filteredArray[i]["asking_price"])
        let askingPriceFormated = askingPriceInt.toLocaleString()
        tableBody.innerHTML += `
        <tr onclick="listingClicked(${filteredArray[i]["house_id"]});">
            <td> ${filteredArray[i]["street_address"]} </td>
            <td> ${filteredArray[i]["city"]}, ${filteredArray[i]["State"]} </td>
            <td> $${askingPriceFormated} </td>
        </tr>`
    ;
    }
}

// Function to reset filter parameters
function resetFilter() {
    var tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ``;
    minPriceForum.value = ''
    maxPriceForum.value = ''
    minBedsForum.value = ''
    minSquareFeetForum.value = ''
    minBathroomForum.value = ''
    populateTable(currentListings.length);
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

