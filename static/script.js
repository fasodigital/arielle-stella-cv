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




// Smooth scroll for float btn to navbar
document.getElementById("float__btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".resume__body").scrollIntoView({ behavior: "smooth" });
  });
  
  // Show the float btn when the navbar move from viewport
  const floaterBtnContainer = document.getElementById("foat__btn__container");
  const navigationBar = document.querySelector(".navigation__bar");
  const obsCallback = function (entries) {
    const [entry] = entries;
      console.log(entry.target);
    if (!entry.isIntersecting) floaterBtnContainer.classList.remove("visually-hidden");
    else floaterBtnContainer.classList.add("visually-hidden");
    //   if (!entry.isIntersecting) return;
    //   entry.target.classList.remove("section--hidden");
    //   observer.unobserve(entry.target);
  };
  const obsOptions = {
    root: null,
    threshold: 0,
  };
  const observer = new IntersectionObserver(obsCallback, obsOptions);
  observer.observe(navigationBar);

