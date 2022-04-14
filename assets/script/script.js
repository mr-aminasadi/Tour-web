// search bar 
let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')
// login form
let loginBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form-container')
let formClose = document.querySelector('#form-close')
// menu bar
let menu = document.querySelector("#menu-bar")
let navbar = document.querySelector(".navbar")
// video button
let videoBtn = document.querySelectorAll(".vid-btn")

// ================================================


// search bar code
searchBtn.addEventListener('click',() => {
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})

window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
    // with search bar
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

// navbar code
menu.addEventListener('click',() => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

// login form code
loginBtn.addEventListener('click',() => {
    loginForm.classList.add('active')
})
formClose.addEventListener('click',() => {
    loginForm.classList.remove('active')
})

// video button code
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // change btn controls
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        // change video background
        let src = btn.getAttribute('data-src')
        document.querySelector("#video-slider").src = src
    })
});


