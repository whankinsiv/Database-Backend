const filterButton = document.getElementById("filterButton")
const setFilterButton = document.getElementById("setFilter")
const resetFilterButton = document.getElementById("resetFilter")
const overlay = document.getElementById('overlay')
const filterPopup = document.getElementById('filterPopup')
const minPriceForum = document.getElementById('minPrice')
const maxPriceForum = document.getElementById('maxPrice')
const minBedsForum = document.getElementById('minBeds')

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
    console.log(currentListingsOrdered);
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

