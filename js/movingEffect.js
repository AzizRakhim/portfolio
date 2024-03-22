document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  aali_tm_moving_animation();
});

function aali_tm_moving_animation() {
  "use strict";
  var details = document.querySelectorAll(".moving_effect");
  var offset = 0;

  details.forEach(function (detail) {
    var direction = detail.getAttribute("data-direction");
    window.addEventListener("scroll", function () {
      offset = window.pageYOffset || document.documentElement.scrollTop;
      var windowHeight = window.innerHeight;
      var elementOffsetTop = detail.getBoundingClientRect().top - offset;
      if (detail.getAttribute("data-reverse") == "yes") {
        elementOffsetTop *= -1;
      }
      var x = direction === "x" ? (elementOffsetTop * 70) / windowHeight : 0;
      var y = direction === "x" ? 0 : (elementOffsetTop * 70) / windowHeight;
      if (detail.getAttribute("data-reverse") == "yes") {
        elementOffsetTop *= -1;
      }
      if (
        elementOffsetTop * -1 < windowHeight + 300 &&
        elementOffsetTop < 300
      ) {
        detail.style.transform = "translate3d(" + x + "px, " + y + "px, 0px)";
      }
    });
  });
}
