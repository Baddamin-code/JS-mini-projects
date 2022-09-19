// Initialize count
// grab .clicked button and link to var count

let count = 0
document.getElementsByClassName('clicked')[0].textContent = count


// write a function that increments count by one everytime .click button is clicked

function increment() {
    document.getElementsByClassName('clicked')[0].textContent = count++
}

// Write a function that saves and logs the previous entry everytime .save button is clicked

let prevEntries = document.getElementById("save")

function save() {
    let prevCount = " " + count + " - "
    prevEntries.textContent += prevCount
}