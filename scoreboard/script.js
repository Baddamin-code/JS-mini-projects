
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

