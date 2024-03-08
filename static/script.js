"use strict";

// Automatically calculate the age
const  today = new Date()
const current_year = today.getFullYear()
// document.getElementById('age').innerHTML = `${current_year - 1985} ans`
// copyright year
document.getElementById('current__year').innerHTML = `${current_year}`



// Change the theme

const toggle = document.getElementById("toggle__theme");
let theme = window.localStorage.getItem("theme");

if (theme=="dark") {
    console.log("Page just loaded")
    document.querySelector(".resume__container").classList.add("dark");
    toggle.innerHTML = `<i class="bi bi-brightness-alt-low-fill"></i>`
}

toggle.addEventListener("click", function(e){
    e.preventDefault();
    theme = window.localStorage.getItem("theme");
    if (theme === "dark"){ 
        console.log("Dark them apply")
        document.querySelector(".resume__container").classList.remove("dark");
        toggle.innerHTML = `<i class="bi bi-brightness-high"></i>`
        window.localStorage.setItem('theme', 'light')
        // theme = "light"
        
    }else{
        console.log("Light them apply")
        document.querySelector(".resume__container").classList.add("dark");
        toggle.innerHTML = `<i class="bi bi-brightness-alt-low-fill"></i>`
        window.localStorage.setItem('theme', 'dark')
        // theme = "dark"
    }

} )






// localStorage.setItem('theme', 'light');

// const toggle = document.getElementById("toggle__theme");
// let theme = window.localStorage.getItem("theme");


// toggle.addEventListener("click", function(e){
//     e.preventDefault();
//     if (theme === "light"){
//         document.querySelector(".resume__container").classList.add("dark");
//         localStorage.setItem('theme', 'dark')
//         theme = window.localStorage.getItem("theme")
//         toggle.innerHTML = `<i class="fas fa-toggle-on"></i>`
        
//     }else{
//         document.querySelector(".resume__container").classList.remove("dark");
//         localStorage.setItem('theme', 'light')
//         theme = window.localStorage.getItem("theme")
//         toggle.innerHTML = `<i class="fas fa-toggle-off"></i>`

//     }

// } )


// if (theme === "dark") document.querySelector(".resume__container").classList.add("dark");