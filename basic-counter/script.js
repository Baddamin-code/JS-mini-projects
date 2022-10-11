// Initialize count
// grab .clicked button and link to var count

let count = 0
let increase = document.querySelector('.clicked')


// write a function that increments count by one everytime .click button is clicked

function increment() {
    count++;
    increase.textContent = count;
}

// Write a function that saves and logs the previous entry everytime .save button is clicked

let prevEntries = document.getElementById("save")

function save() {
    let prevCount = " " + count + " - "
    prevEntries.textContent += prevCount
    count = 0
}