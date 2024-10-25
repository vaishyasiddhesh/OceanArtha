gsap.registerPlugin(ScrollTrigger);


const t1=gsap.timeline();
t1.to(".wrapper",10,{x:-window.innerWidth})



ScrollTrigger.create({
    animation:t1,
    trigger:".wrapper",
    start:"center center",
    end:"+=4000",
    scrub:true,
    pin:true
})
