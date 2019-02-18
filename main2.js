function carouselSlider(options) {
    // let options = {
    //     container: '#slides',
    //     nextBtn: '#right-arrow',
    //     prevBtn: '#left-arrow'
    //     beforeSlide: function()
    //     afterSlide: function()
    // }

    const slides = document.querySelectorAll(options.container)
    const arrowLeft = document.querySelector(options.nextBtn)
    const arrowRight = document.querySelector(options.prevBtn)

    hideSlides(slides);

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

    function nextSlide() {
        // Before Slide
        if (typeof options.beforeSlide == 'function') {
            options.beforeSlide()
        }

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
        if (typeof options.afterSlide == 'function') {
            setTimeout(function () {
                options.afterSlide()
            }, 1000);
        }
    }

    function prevSlide() {
        hideSlides(slides);
        options.afterSlide();

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

    let interval = setInterval(nextSlide, 4000);

    function pauseSlide() {
        clearInterval(interval);
    }

    function resumeSlide() {
        interval = setInterval(nextSlide, 4000);
    }

    return {
        prevSlide,
        nextSlide,
        pauseSlide,
        resumeSlide
    }

}

let myCarouselOptions = {
    container: '.slides > div',
    nextBtn: '#arrow-right',
    prevBtn: '#arrow-left',
    beforeSlide: function () {
        console.log("Hey! i'm running before the slide starts")
    },
    afterSlide: function () {
        console.log("Hey I'm after slide")
    }
}
let carousel = carouselSlider(myCarouselOptions)