const tl = gsap.timeline();
const logo = document.querySelector(".logo");

gsap.set("nav", { y: 0, opacity:1});
gsap.from("nav", {
    duration: 1, 
    y: -50, 
    opacity: 0, 
    stagger: 0.2
});

gsap.set(".info-section", { x: 0, opacity:1});

gsap.from(".info-section", {
    duration: 1, 
    x: -400, 
    opacity: 0, // Corrected opacity value
    // stagger: 0.2
});

gsap.set(".service-card", { y: 0, opacity:1}); // Corrected opacity value

gsap.from(".service-card", {
    duration: .5, 
    y: 400, 
    opacity: 0, // Corrected opacity value
    scrollTrigger: {
        trigger: ".services-container",
        start: "top 70%",
        end: "bottom 90%",
        scrub: true,
        markers: false,
        toggleActions: "restart none none none"
    },
    stagger: 0.1
});

gsap.set(".map", {x: 0, opacity: 1});

gsap.from(".map", {
    duration:2,
    opacity: 0,
    x: 400,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        end: "bottom 100%",
        scrub: true,
        markers: true,
        // toggleActions: "restart none none none"
    }
})
gsap.set(".contact-content", {x: 0, opacity: 1});

gsap.from(".map", {
    duration:2,
    opacity: 0,
    x: -400,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        end: "bottom 100%",
        scrub: true,
        markers: true,
        // toggleActions: "restart none none none"
    }
})

