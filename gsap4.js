 function page1Animation(){
let t1=gsap.timeline(0)
t1.from("nav h1,nav a, nav button",{
    y:-30,
    duration:0.6,
    delay:1,
    opacity:0,
    stagger:0.3,
})
t1.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.4,
})
t1.from(".center-part1 p",{
    y:-100,
    opacity:0,
    delay:0.3,
    duration:1,
    stagger:0.3,
},"-=0.3")
t1.from(".center-part1 button",{
   
    opacity:0,
    duration:0.5,
})
t1.from(".center-part2 img" , {
    opacity:0,
    duration:0.5,
},"-=1")
}
page1Animation();
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        markers:true,
        start:"top 50%",
        scrub:2,
        end:"top 0",
    }
})

tl2.from(".services" ,{
    y:30,
    opacity:0,
    duration:0.5,
    stagger:0.4,
})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
})
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1,
})
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1,
})
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1,
})
