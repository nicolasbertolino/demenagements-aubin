(function () {
  let curScroll = prevScroll = window.scrollY || document.documentElement.scrollTop;
  let curDirection = prevDirection = 0;
  let navResponsive = document.getElementsByTagName("header")[0];
  let checkScroll = function() {
    curScroll = window.scrollY || document.documentElement.scrollTop;
    if (curScroll > prevScroll) {
      curDirection = 2;
    }
    else {
      curDirection = 1;
    }
    if (curDirection !== prevDirection) {
      toggleNav();
    }
    prevDirection = curDirection;
    prevScroll = curScroll;
  }
  let toggleNav = function() {
    if (curDirection === 2) {
      navResponsive.classList.add("hide");
    }
    else if (curDirection === 1) {
      navResponsive.classList.remove("hide");
    }
  }
  window.addEventListener("scroll", checkScroll);
})();


let navResponsive = document.getElementsByTagName("header")[0];
let hamburgerMenu = document.getElementsByClassName("hamburger")[0];
let overlayMenu = document.getElementsByClassName("overlay")[0];
hamburgerMenu.addEventListener("click", function() {
  navResponsive.classList.toggle("open");
  overlayMenu.classList.toggle("appear");
})
overlayMenu.addEventListener("click", function() {
  navResponsive.classList.remove("open");
  this.classList.remove("appear");
})


window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navResponsive.classList.remove("transparent");
  } else {
    navResponsive.classList.add("transparent");
  }
}


function scrollToContainer() {
  const element = document.getElementById("scrollTarget");
  const yOffset = -79;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}


function scrollToContainerBis() {
  const element = document.getElementById("scrollTargetBis");
  const yOffset = -79;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
