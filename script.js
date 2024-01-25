function lokomotive () {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
lokomotive ();


function photos () {
  var elemC = document.querySelector("#container");
var fixed = document.querySelector("#fixed");
var line = document.querySelectorAll(".elem");
elemC.addEventListener("mouseenter", function () {
    fixed.style.opacity = 1
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.opacity = 0
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        
        fixed.style.backgroundImage = `url(${image})`
    })
})
}
photos ();

function swiper () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
  });
}
swiper ();

async function loader () {
  var loader = document.querySelector("#loader");

var boss = await setTimeout(() => {
  gsap.to("#loader",{
    y:"-100%",
  })
},4000);
}
loader ();

var main = document.querySelector(".swiper");
var cur = document.querySelector(".slider");
var page6 = document.querySelector("#page6")

page6.addEventListener("mousemove",function(dets) {
    gsap.to(".slider",{
      x:dets.x + "px" ,
      y : dets.y + "px" 
    })
})

page6.addEventListener("mouseenter",function () {
  cur.style.opacity = 1
})

page6.addEventListener("mouseleave",function () {
  cur.style.opacity = 0
})