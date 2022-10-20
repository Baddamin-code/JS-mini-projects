// grab button
const btn = document.querySelector('.nav-toggle')
// grab pages
const pages = document.querySelector('.page-nav')

btn.addEventListener('click', function() {
    // lengthy code to toggle nav button onclick
    // if (pages.classList.contains('show-links')) {
    //     pages.classList.remove('show-links')
    // } else {
    //     pages.classList.add('show-links')
    // }
    // one-liner code to toggle the nav button onclick
    pages.classList.toggle('show-links')
})