/*
set initial count
 grab .count from alt.html
grab buttons
*/
let count = 0;
let value = document.querySelector(".count");
let btns = document.querySelectorAll(".btn");

// create for each function to select each button
btns.forEach(function (btn) {
    // add event listener to listen for button click
    btn.addEventListener('click', function(e) {
        // create a var that targets each button through the class name
        const clickBtn = e.currentTarget.classList;
        // if statement to increase value
        if (clickBtn.contains("increase")){
            count++;
        } 
    })
})
