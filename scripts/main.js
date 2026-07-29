gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.fromTo(".hero_title",
    {
        y:80,
        opacity : 0
    },
    {
        y : 50,
        opacity : 1,
        duration : 1.1,
        ease: "power2.out"
    },"-=0.6")
tl.fromTo(".hero_subtitle",
    {
      y : 80,
      opacity : 0  
    },
    {
      y:70,
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
    .fromTo(".hero_section_img",
    {
        opacity:0,
        scale:0.7,
        y:120 
    },
    {
        opacity:0.99,
        scale:0.9,
        y:0,
        duration:1.5,
        ease:"power4.out"
    },"-=0.3")
    .to(".hero_section_img",{
        y : -2,
        repeat : -1,
        yoyo : true,
        ease : "sine.inOut"
    })

const t2 =  gsap.timeline(
        {
  scrollTrigger: {
    trigger: ".time",  // The element that triggers the animation
    start:"top 80%" ,
   toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up back past start
    // scrub:true
}
}
);


t2.fromTo(".historyText",
    {
        y:60,
        opacity : 0
    },
    {
        y:0,
        opacity : 1,
        duration : 1.1
    }
)
.fromTo(".line",{
        y:60,
        opacity : 0
    },
    {
        y:0,
        opacity : 1,
        duration : 1.1
    },"-=0.5")

.fromTo("#timeItems1",{
        y:60,
        opacity : 0
    },
    {
        y:0,
        opacity : 1,
        duration : 1.1
    },"-=0.5")
.fromTo("#timeItems2",
{
    y:60,
    opacity:0
},
{
    y:0,
    opacity:1,
    duration:1.1,
    scrollTrigger:{
        trigger:"#timeItems2",
        start:"top 80%",
        toggleActions:"play none none reverse"
    }
});