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
    console.log(currentListingsOrdered);
    console.log(currentListingsOrdered[1]);
    // Filter by Min Price
    if (minPrice.length > 0) {
        let j = 0
        for (let i=0; i < currentListingsOrdered.length - 1; i++) {
            if (currentListingsOrdered[i]["asking_price"] >= minPrice) {
                filteredArray1.push(currentListingsOrdered[i])
                j++;
            }
        }
        console.log(filteredArray);
    } 
    // If Min Price is empty push the entire currentListingsOrdered array to filteredArray
    else {
        for (let i=0; i < currentListingsOrdered.length - 1; i++) {
            filteredArray1.push(currentListingsOrdered[i])
        }
    }
    
    // Filter by Max Price
    if (maxPrice.length( > 0 ) {
        let l = 0
        for (let k=0; k < filteredArray1.length - 1; k++) {
            if (filteredArray1[i]["asking_price"] <= maxPrice) {
                filteredArray2.push(filteredArray1[i])
                j++;
            }
        }
    }
    // If Max Price is empty push entire filteredArray1
    else {
        for (let i=0; i < filteredArray1.length - 1; i++) {
            filteredArray2.push(filteredArray1[i])
        }
    }
    console.log(filteredArray2);

    /*
    */
    console.log("Min Price: " + minPrice);
    console.log("Max Price: " + maxPrice);
    console.log("Min Beds: " + minBeds);
    console.log("Setting Filter");
}

// Function to reset filter parameters
function resetFilter() {

}

// Function to open popup when filter button is pushed
function openFilterPopup() {
    filterPopup.classList.add('active')
    overlay.classList.add('active')
}

// Function to close the popup
function closeFilterPopup() {
    setFilter()
    filterPopup.classList.remove('active')
    overlay.classList.remove('active')
}

