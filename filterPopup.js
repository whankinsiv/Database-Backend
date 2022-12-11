const filterButton = document.getElementById("filterButton")
const setFilterButton = document.getElementById("setFilter")
const resetFilterButton = document.getElementById("resetFilter")
const overlay = document.getElementById('overlay')
const filterPopup = document.getElementById('filterPopup')

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

// Function to produce reduced data array based on filter parameters 
function setFilter() {
    let forumEntries = document.querySelectorAll(".inputForum");
    // Loop through the selected elements and get the text content
    let entryTexts = [];
    for (let entry of forumEntries) {
      console.log(entry.innerHTML);
      entryTexts.push(entry.innerHTML);
    }
    
    console.log(entryTexts)
    console.log("Setting Filter")
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

