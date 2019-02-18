// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const navItem = document.querySelectorAll('.nav-item');

// //Set initial state of menu
// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {

//     if (!showMenu) {
//         //add all the classes that will be designed with css using addList
//         menuBtn.classList.add('close');
//         menu.classList.add('show');
//         menuNav.classList.add('show');
//         navItem.forEach(item => item.classList.add('show')); //loop through all the classes navItem.

//         //change state
//         showMenu = true;
//     } else {
//         menuBtn.classList.remove('close');
//         menu.classList.remove('show');
//         menuNav.classList.remove('show');
//         navItem.forEach(item => item.classList.remove('show'));

//         //change the state back to false
//         showMenu = false;

//     }
// }

const slides = document.querySelectorAll('.slides > div');

//first hide the slides
hideSlides(slides);

//then dispaly the first one
slides[0].style.display = "block";

//select the right arrow and add an event listener to it.
const arrowRight = document.querySelector('#arrow-right')
const arrowLeft = document.querySelector('#arrow-left')

let nextElem = slides[1];
nextElem.classList.add('currentlyVisible');

arrowRight.addEventListener('click', () => {
    nextSlide();
})

arrowLeft.addEventListener('click', () => {
    prevSlide();
})

//function to always hide all the divs
function hideSlides(elemsToHide) {
    elemsToHide.forEach(elem => {
        elem.style.display = "none";
    })
}
//this function hides the slides then displays nextElem first.
function nextSlide() {
    hideSlides(slides);

    let currentSlide = document.querySelector('.currentlyVisible');
    currentSlide.style.display = "block"

    if (currentSlide.nextElementSibling == null) {
        //this means if the next slide after current one which is null, doesnt exist...return to [0]   
        nextElem = slides[0];
    } else {
        //else return the next sibling
        nextElem = currentSlide.nextElementSibling;
    }

    currentSlide.classList.remove('currentlyVisible');
    nextElem.classList.add('currentlyVisible');
}

function prevSlide() {
    hideSlides(slides);

    let currentSlide = document.querySelector
        ('.currentlyVisible');
    currentSlide.style.display = "block"


    if (currentSlide.previousElementSibling == null) {
        nextElem = slides[slides.length - 1]
    } else {
        nextElem = currentSlide.previousElementSibling
    }

    currentSlide.classList.remove('currentlyVisible');
    nextElem.classList.add('currentlyVisible');
}

setInterval(nextSlide, 3000);

