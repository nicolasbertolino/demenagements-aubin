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

function scrollToContainer() {
  const element = document.getElementById("scrollTarget");
  const yOffset = -99;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function scrollToContainerBis() {
  const element = document.getElementById("scrollTargetBis");
  const yOffset = -99;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}