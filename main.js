// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from(".nav-bar",{
    duration: 1,
    yPercent: -100,
    opacity: 0,
    ease: Bounce.easeOut,
  },"<");
tl.from(".head",{
    duration: 1,
    yPercent: -100,
    ease: Bounce.easeOut,
  },"<");

tl.from(".row1h1",{
    duration: 1,
    x: -480,
    opacity: 0.5,
  },"<");

tl.from(".teext",{
    duration: 1,
    x: -450,
    opacity: 0.5,
});

tl.from(".fromb", {
  duration: 1,
  y: 150,
  opacity: 0,
});

tl.from(".col-right", {
  duration: 1,
  xPercent: 100,
  opacity: 0,
}, "<");

tl.from(".row2h1", {
    scrollTrigger:{
        trigger:".row2h1",
        start:"top 90%",
        end:"bottom center",
        scrub:1,
    },
    duration:1.5,
    x:-300,
    opacity:0.5
},"<")
tl.from(".row2text", {
  scrollTrigger: {
    trigger: ".row2text",
    start: "top 90%",
    end: "bottom center",
    scrub: 1,
  },
  duration: 1.5,
  x: -300,
  opacity:0.5
}, "<");
tl.from(".row2button", {
  scrollTrigger: {
    trigger: ".row2button",
    start: "top 90%",
    end: "top 70%",
    scrub: true,
  },
  duration: 0.1,
  opacity:0
}, "<");
tl.from(".row2right", {
  scrollTrigger: {
    trigger: ".row2text",
    start: "top 90%",
    end: "bottom center",
    scrub: 1,
  },
  duration: 1,
  x: 350,
  opacity:0
});

tl.from(".row3h1", {
    scrollTrigger: {
        trigger:".row3h1",
        start:"top 90%",
        end:"bottom center",
        scrub:1,
    },
    duration:1,
    y:100,
    scale:0.5,
    // opacity:0
})
tl.from(".row3colleft", {
    scrollTrigger: {
        trigger:".row3colleft",
        start:"top 90%",
        end:"center 60%",
        scrub:1,
    },
    duration:1,
    x:-350,
    scale:0.5
})
tl.from(".row3colmid", {
  scrollTrigger: {
    trigger: ".row3colmid",
    start: "top 98%",
    end: "top 70%",
    scrub: 1,
  },
  duration: 1,
  y: 150,
  scale: 0.5,
});
tl.from(".row3colright", {
  scrollTrigger: {
    trigger: ".row3colright",
    start: "top 90%",
    end: "center 60%",
    scrub: 1,
  },
  duration: 1,
  x: 350,
  scale: 0.5,
});
gsap.utils.toArray(".row").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true,
      pinSpacing:false,
    });
})
tl.from(".row4col", {
  scrollTrigger: {
    trigger: ".row4col",
    start: "top 90%",
    end: "center center",
    scrub: 1,
  },
  duration: 1,
  y: 100,
  scale: 0.5,
});
tl.from(".row5img", {
  scrollTrigger: {
    trigger: ".row5img",
    start: "top 90%",
    end: "center center",
    scrub: 1,
  },
  duration: 1,
  x: 350,
  scale: 0,
});
tl.from(".row5right", {
  scrollTrigger: {
    trigger: ".row5img",
    start: "top 90%",
    end: "center center",
    scrub: 1,
    markers: true,
  },
  duration: 1,
  x: -350,
  scale: 0,
});



