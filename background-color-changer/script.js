/*
#007bff, #6610f2, #6f42c1, #e83e8c;#dc3545, #fd7e14, #ffc107, #28a745, #20c997, #17a2b8, #fff, #6c757d, #343a40, #007bff, #6c757d, #28a745, #17a2b8, #ffc107, #dc3545, #f8f9fa, #343a40
*/
// get div container
let cont = document.getElementById("container");
//  get html button
let btn = document.getElementById("btn");
// array of colors
let colors = [
  "#007bff",
  "#6610f2",
  "#6f42c1",
  "#e83e8c",
  "#dc3545",
  "#fd7e14",
  "#ffc107",
  "#28a745",
  "#20c997",
  "#17a2b8",
  "#fff",
  "#6c757d",
  "#343a40",
  "#007bff",
  "#6c757d",
  "#28a745",
  "#17a2b8",
  "#ffc107",
  "#dc3545",
  "#f8f9fa",
  "#343a40",
];

btn.addEventListener("click", function () {
  // randomize and store random colors in a variable
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  // change cont bgc when button is clicked
  cont.style.backgroundColor = randomColor;
  let colorValue = document.getElementById("bg-label");
  colorValue.textContent = randomColor;
});
