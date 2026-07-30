gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.fromTo(".hero_title",
    {
        y:0,
        opacity : 0
    },
    {
        y : 30,
        opacity : 1,
        duration : 2,
        ease: "power2.out"
    },"-=0.6")
tl.fromTo(".hero_subtitle",
    {
      y : 10,
      opacity : 0  
    },
    {
      y:30,
      opacity : 1,
      duration : 1.1,
      ease: "power2.out"
    } ,"-=0.5")
    .fromTo(".hero_name",
    {
      y : 80,
      opacity : 0  
    },
    {
      y:30,
      opacity : 1,
      duration : 1.1,
      ease: "power2.out"
    },"-=0.4")
    .to(".hero_section_img",
    {
        opacity:0.99,
        scale:0.9,
        y:0,
        opacity : 0.9,
        duration:1.5,
        ease:"power4.out"
    },"-=0.3")
    
    .to(".hero_section_img",{
        y : 5 ,
        repeat : -1,
        yoyo : true,
        ease : "sine.inOut"
    })



gsap.utils.toArray(".toTrigger").forEach((section) => {

    const times = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "+=600",      // Increase for slower animation
            scrub: 1,           // Smooth scrubbing
            markers: true
        }
    });

    // Animate In
    times.fromTo(
        section.querySelector(".times-first"),
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        }
    )

    .fromTo(
        section.querySelector(".times-second"),
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        },
        "-=0.5"
    )

    .fromTo(
        section.querySelector(".times-third"),
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        },
        "-=0.5"
    )

    .fromTo(
        section.querySelector(".times-four"),
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        },
        "-=0.5"
    )
    .fromTo(
        section.querySelector(".timeline-path"),
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        },
        "-=0.5"
    )

    // Stay visible for a while
    .to({}, { duration: 1 })



});

const bikeImg = document.querySelector(".hero_section_img");
const audio = document.getElementById("bulletSound");

bikeImg.addEventListener("mouseenter", () => {
    audio.currentTime = 0;
    console.log("ENtered")
    audio.play();
});

bikeImg.addEventListener("mouseleave", () => {
    audio.pause();
    audio.currentTime = 0;
});