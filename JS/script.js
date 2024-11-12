var navToggle = document.getElementById("nav-toggle-btn");
var bar = gsap.timeline();
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

    })
});

bar.to('.bar-1', 0.5, {
    Attr: {
        d: "M8,2 L2,8"
    },
    x: 1,
    ease: Power2.easeInOut
}, "start");

bar.to('.bar-2', 0.5, {
    autoAlpha: 0
}, "start");

bar.to('.bar-3', 0.5, {
    Attr: {
        d: "M8,8 L2,2"
    },
    x: 1,
    ease: Power2.easeInOut
}, "start");

bar.reverse();

var t1 = gsap.timeline({ paused: true });

t1.to(".container", {
    duration: 0,
    display: "block",
    ease: "Expo.easeInOut"
});

t1.from(".nav-bg span", {
    duration: 1,
    x: "100%",
    stagger: 0.1,
    ease: "Expo.easeInOut"
});

t1.from(".nav-container li a", {
    duration: 1.5,
    y: "100%",
    stagger: 0.2,
    ease: "Expo.easeInOut"
}, "-=0.5");

t1.from(".social-links li", {
    duration: 1,
    y: "-100%",
    opacity:0,
    stagger: 0.1,
    ease: "Expo.easeInOut"
}, "-=0.5");

t1.reverse();

navToggle.addEventListener('click', function(){
    bar.reversed(!bar.reversed());
    t1.reversed(!t1.reversed());
});