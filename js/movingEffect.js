document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  aali_tm_moving_animation();
});

function aali_tm_moving_animation() {
  "use strict";
  var details = document.querySelectorAll(".moving_effect");
  var offset = 0;

  details.forEach(function (detail) {
    var element = detail;
    var direction = element.getAttribute("data-direction");

    window.addEventListener("scroll", function () {
      offset = window.pageYOffset || document.documentElement.scrollTop;
      var viewportHeight = window.innerHeight;
      var rect = element.getBoundingClientRect();

      // Check if the top or bottom of the element is within the viewport
      var isInView =
        (rect.top >= 0 && rect.top <= viewportHeight) ||
        (rect.bottom >= 0 && rect.bottom <= viewportHeight);

      if (isInView) {
        var i = rect.top - viewportHeight;

        if (element.getAttribute("data-reverse") == "yes") {
          i *= -1;
        }

        var x = direction === "x" ? (i * 70) / viewportHeight : 0;
        var y = direction === "y" ? (i * 70) / viewportHeight : 0;

        if (element.getAttribute("data-reverse") == "yes") {
          i *= -1;
        }

        element.style.transform = "translate3d(" + x + "px, " + y + "px, 0px)";
      }
    });
  });
}
