let menu = document.querySelector("header .container nav");  
let menuBtn = document.querySelector(".menu");  
menuBtn.onclick =_=> {
  menu.classList.toggle("active");
}

// let videoScreen = document.querySelector(".screen");
// let playBtn = document.querySelector(".video .container .content span");
// let closeScreenBtn = document.querySelector(".screen button");

// playBtn.addEventListener("click" , _=> {
//   videoScreen.style.cssText = "display: block"
// })

// closeScreenBtn.addEventListener("click" , _=> {
//   videoScreen.style.cssText = "display: block"
// })

// Loading Screen
let loadingAnimation = document.querySelector(".load");
setInterval( _=> {
  loadingAnimation.style.cssText = "display: none"
}
, 6000);

