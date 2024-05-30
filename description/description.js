// cursor
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
 });
 
 
 function   cursorEffect(){
 let page1Content  =document.querySelector(".main");
 
     let mouseCursor = document.querySelector(".mouse-cursor");
     
     // // first method
     // page1Content.addEventListener("mousemove",function(hey){
     //   mouseCursor.style.left =hey.x+ "px";
     //   mouseCursor.style.top = hey.y+ "px";
     // })
     
     // second method 
     page1Content.addEventListener("mousemove",function(hey){
      gsap.to(mouseCursor,{
         x:hey.x,
         y:hey.y
     
      })
     })
     page1Content.addEventListener("mouseenter",function(hey){
       gsap.to(mouseCursor,{
          scale :1,
          opacity:1
      
       })
      })
          
      page1Content.addEventListener("mouseleave",function(hey){
       gsap.to(mouseCursor,{
         scale:0,
         opacity:1,
         
      
       })
      })
         
 }
         
 cursorEffect();
 
// toggle button
document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.navbar');

    toggler.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
