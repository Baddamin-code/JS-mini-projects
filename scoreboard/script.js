
let score1 = 0
let homeScore = 0
// grab home score element
homeScore = document.querySelectorAll(".score")[0]

// function to increase home score by 1
function increaseHomeBy1() {
    score1++
    homeScore.textContent = score1
}

// function to increase home score by 1
function increaseHomeBy2() {
    score1 += 2
    homeScore.textContent = score1
}

// function to increase home score by 1
function increaseHomeBy3() {
    score1 += 3
    homeScore.textContent = score1
}

let score2 = 0
let guestScore = 0
guestScore = document.querySelectorAll(".score")[1]

// function to increase away score by 1
function increaseAwayBy1() {
    score2++
    guestScore.textContent = score2
}

// function to increase away score by 2
function increaseAwayBy2() {
    score2 += 2
    guestScore.textContent = score2
}

// function to increase away score by 3
function increaseAwayBy3() {
    score2 += 3
    guestScore.textContent = score2
}