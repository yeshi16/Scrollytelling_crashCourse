gsap.to(".squareTo", {
    duration: 5, // in second
    x: 500 // pixle
})
gsap.from(".squareFrom", {
    duration: 5, // in second
    x: 500 // pixle
})
gsap.fromTo(".squareFromTo", {
    backgroundColor: "red"
},
{
    duration: 5,
    backgroundColor: "blue"
})