gsap.registerPlugin(ScrollTrigger)

gsap.to(".squareOne", {
    duration: 5,
    x: 500,
    scrollTrigger:{
        trigger: ".squareOne",     // the target that the screoll is used on 
    }
}) 
gsap.to(".squareTwo", {
    duration: 5,
    x: 500,
    scrollTrigger:{
        trigger: ".squareTwo", // the target that the screoll is used on 
        start: "top center", // top of the trigger(.square) and center of the view point    
        markers: true
    }
}) 