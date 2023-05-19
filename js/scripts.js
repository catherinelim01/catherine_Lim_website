// @prepros-append vendor/jquery-3.3.1.min.js
// @prepros-append vendor/popper.min.js
// @prepros-append vendor/bootstrap.min.js
// @prepros-append vendor/owl.carousel.min.js
// @prepros-append vendor/aos.js
// @prepros-append vendor/isotope.pkgd.min.js
// @prepros-append vendor/jquery.animateNumber.min.js
// @prepros-append vendor/jquery.waypoints.min.js
// @prepros-append vendor/TweenMax.min.js
// @prepros-append vendor/jquery.easing.1.3.js
// @prepros-append vendor/jarallax.min.js
// @prepros-append vendor/jarallax-video.min.js
// @prepros-append vendor/jquery.validate.min.js
// @prepros-append vendor/jquery.fancybox.min.js
// @prepros-append vendor/stickyfill.min.js
// @prepros-append vendor/imagesloaded.pkgd.min.js
// @prepros-append vendor/ScrollMagic.min.js
// @prepros-append vendor/scrollmagic.animation.gsap.min.js

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;