// let img = document.querySelector("img")
// img.setAttribute('src', img1)

// grab image paths
const img1 = "img/avatar2.jpg"
const img2 = "img/avatar3.jpg"
const img3 = "img/avatar4.jpeg"
const img4 = "img/avatar5.jpg"

// review data
const reviews = [
  {
    id: 1,
    name: "Elizabeth Smith",
    job: "UX designer",
    img: img1,
    text: "Impression up admiration he by partiality is. Instantly immediate his saw one day perceived. Old blushes respect but offices hearted minutes effects. ",
  },

  {
    id: 2,
    name: "John Doe",
    job: "Web Developer",
    img: img2,
    text: "Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely mrs one yet outweigh",
  },

  {
    id: 3,
    name: "Kristen Rovers",
    job: "Web Designer",
    img: img3,
    text: "So feel been kept be at gate. Be september it extensive oh concluded of certainty. In read most gate at body held it ever no. Talking justice welcome message inquiry in started of am me.",
  },

  {
    id: 4,
    name: "Matt Downey",
    job: "Data Analyst",
    img: img4,
    text: "Occasional middletons everything so to. Have spot part for his quit may. Enable it is square my an regard. Often merit stuff first oh up hills as he.",
  },
];

// select items
let img = document.getElementById('img')
let author = document.getElementById('author')
let job = document.getElementById('job')
let review = document.getElementById('review')

// select buttons
const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')

let currentItem = 0


nextBtn.addEventListener('click', function () {
    const item = reviews[currentItem];
    // change following data onClick
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.text;
    // increment current item
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
});

