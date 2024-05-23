var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navmenu.classList.remove("active");
}))