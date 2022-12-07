const filterButton = document.getElementById("filterButton")
filterButton.addEventListener('click', () => {
    openFilterPopup()
})

const overlay = document.getElementById('overlay')
const filterPopup = document.getElementById('filterPopup')
function openFilterPopup() {
    filterPopup.classList.add('active')
    overlay.classList.add('active')
}

const setFilterButton = document.getElementById("setFilter")
/* The table needs to be reloaded on this event */
setFilterButton.addEventListener('click', () => {
    closeFilterPopup()
})

function closeFilterPopup() {
    filterPopup.classList.remove('active')
    overlay.classList.remove('active')
}

const resetFilterButton = document.getElementById("resetFilter")
/* All filter parameters must be reset on this event */
resetFilterButton.addEventListener('click', () => {
    resetFilter()
})

/* Function to reset filter parameters */
function resetFilter() {

}