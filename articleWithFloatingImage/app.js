gsap.registerPlugin(ScrollTrigger) 

// console.log(gsap.utils.toArray(".arrow"))



gsap.utils.toArray(".arrow").forEach((arrow) => {
   
    gsap.fromTo(arrow,
        {
         autoAlpha: 0.7,  // similar to opacity: 0,
          filter: "grayscale(100%)",
        },
        {
          duration: 3,
          opacity: 1,
          filter: "grayscale(0)",
          ScrollTrigger: {
            trigger: arrow,
            start: "top center", // top of the image and center of the view point (window)
            end: "botom 30%", // bottom of the image and 30% bellow the top of view point
            marker: true,
            toggleActions: "restart reverse none reverse" // onEnter, onLeave, onEnterBack, onLeaveBack
          }
        }
      );
});