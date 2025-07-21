
import "./conatactMessage.js"


window.addEventListener("load", ()=>{
  slideRocket({top:-20, left: -48})

})

const navbarFullDiv = document.querySelector(".navbarFullDiv");
const toggle = document.querySelector(".toggler");
const togBtn = document.querySelector(".togBtn");
const toggleNav = document.querySelector(".toggleNav");




toggle.addEventListener("click", ()=>{
    togBtn.classList.toggle("active");
    toggleNav.classList.toggle("active")
});





const body = document.querySelector("body");
const MainBodyInfoStart = document.querySelector(".MainBodyInfoStart");
const title = document.querySelector(".title");
const displayCardMainDiv = document.querySelector(".displayCardMainDiv");
const aboutSection =  document.querySelector(".about-section");
const serviceCardMainDiv = document.querySelector(".serviceCardMainDiv");
const serviceCardabout = document.querySelector(".service-card");
const serviceCardAll = document.querySelectorAll(".serviceCard");

serviceCardAll.forEach((serviceCard, i)=>{
  serviceCard.setAttribute("data-ride", i+ 1)

  serviceCard.style.transitionDelay=`${i * 0.1}s`

  window.addEventListener("scroll", ()=>{


    let ab = serviceCard.getClientRects()[0].top;
    let abM = serviceCardMainDiv.getClientRects()[0].top;

  
    if((window.innerHeight/1.5) > abM){
      serviceCard.classList.add("anim")
      title.classList.add("active")
      serviceCard.style.animationDelay=`${i + 1}s`;

    }
   
  })
})






window.addEventListener("scroll", (e)=>{
    let windHeight = (window.innerHeight / 4); // 1000px
    let objectFromTop = title.getClientRects()[0].top; // from top 500px
    let abServiceCardabout = serviceCardabout.getClientRects()[0].top;

    let aboutSectionTop = aboutSection.getClientRects()[0].top; // from top 500px
    // let displayCardMainDivFromTop = displayCardMainDiv.getClientRects()[0].top; 

    let equal = ( windHeight > objectFromTop)
    // let equal2 = ( windHeight > displayCardMainDivFromTop)

  if(window.scrollY > 400){
      navbarFullDiv.classList.add("bg_change")

    }else{
      navbarFullDiv.classList.remove("bg_change")
    }

    // console.log(aboutSectionTop);
    
   
    // aboutSection/....................
      
    ((window.innerHeight / 2) > aboutSectionTop) && aboutSection.classList.add("active"); MainBodyInfoStart.classList.add("active");
    // aboutSection/....................
 
    
    if((window.innerHeight/1.5) > abServiceCardabout){
      serviceCardabout.classList.add("active");
    }


    // console.log("windowHeght " + windHeight + "     vfvfvfvfvfvfv" + equal);
    
    

})



function slideRocket({ top = null, bottom = null, left = null, right = null , msg= null, deg=null}) {
  const bee = document.getElementById("superbee");

  bee.style.transition = "all 0.8s ease-in-out";


  if(deg != null){
    bee.style.rotate = `${deg}deg`
    setTimeout(() => {
    bee.style.rotate = `0deg`
      
    }, 800);
  }

  if(msg != null){
    bee.setAttribute("msg-add", msg)
    bee.classList.add("msg");
  }

  
  


  if (top !== null) {
    bee.style.top = `${top}%`;
    bee.style.bottom = "auto"; // avoid conflict
  }
  if (bottom !== null) {
    bee.style.top = `${window.innerHeight - bottom}%`;
    bee.style.bottom = "auto"; // avoid conflict
  }
  if (left !== null) {
    bee.style.left = `${left}%`;
    bee.style.right = "auto"; // avoid conflict
  }
  if (right !== null) {
    
    bee.style.left = `${window.innerWidth - right}%`;
    bee.style.right = "auto"; // avoid conflict
  }


}







// window.addEventListener("scroll", () => {
//   const target1 = document.getElementById("target1").getBoundingClientRect();
//   const target2 = document.getElementById("target2").getBoundingClientRect();

//   if (target1.top < window.innerHeight && target1.top > 0) {
//     moveBeeTo(target1.left, target1.top);
//   } else if (target2.top < window.innerHeight && target2.top > 0) {
//     moveBeeTo(target2.right, target2.top);
//   }
// });

// function moveBeeTo(x, y) {
//   bee.style.transition = "all 1s ease-in-out";
//   bee.style.left = `${x}px`;
//   bee.style.top = `${y + 250}px`; // Adjust for bee height
// }
