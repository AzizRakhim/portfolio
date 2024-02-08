document.addEventListener("DOMContentLoaded", function () {
  var animationDelay = 2500,
    barAnimationDelay = 3800,
    barWaiting = barAnimationDelay - 3000,
    lettersDelay = 50,
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    revealDuration = 600,
    revealAnimationDelay = 1500;

  initHeadline();

  function initHeadline() {
    singleLetters(document.querySelectorAll(".cd-headline.letters b"));
    animateHeadline(document.querySelectorAll(".cd-headline"));
  }

  function singleLetters(words) {
    words.forEach(function (word) {
      var letters = word.textContent.split(""),
        selected = word.classList.contains("is-visible");
      for (var i = 0; i < letters.length; i++) {
        if (word.closest(".rotate-2")) {
          letters[i] = "<em>" + letters[i] + "</em>";
        }
        letters[i] = selected
          ? '<i class="in">' + letters[i] + "</i>"
          : "<i>" + letters[i] + "</i>";
      }
      var newLetters = letters.join("");
      word.innerHTML = newLetters;
      word.style.opacity = 1;
    });
  }

  function animateHeadline(headlines) {
    var duration = animationDelay;
    headlines.forEach(function (headline) {
      if (headline.classList.contains("loading-bar")) {
        duration = barAnimationDelay;
        setTimeout(function () {
          headline
            .querySelector(".cd-words-wrapper")
            .classList.add("is-loading");
        }, barWaiting);
      } else if (headline.classList.contains("clip")) {
        var spanWrapper = headline.querySelector(".cd-words-wrapper");
        var newWidth = spanWrapper.offsetWidth + 10;
        spanWrapper.style.width = newWidth + "px";
      } else if (!headline.classList.contains("type")) {
        var words = headline.querySelectorAll(".cd-words-wrapper b");
        var width = 0;
        words.forEach(function (word) {
          var wordWidth = word.offsetWidth;
          if (wordWidth > width) width = wordWidth;
        });
        headline.querySelector(".cd-words-wrapper").style.width = width + "px";
      }
      setTimeout(function () {
        hideWord(headline.querySelector(".is-visible"));
      }, duration);
    });
  }

  function hideWord(word) {
    var nextWord = takeNext(word);
    if (word.closest(".cd-headline").classList.contains("type")) {
      var parentSpan = word.parentElement.closest(".cd-words-wrapper");
      parentSpan.classList.add("selected");
      parentSpan.classList.remove("waiting");
      setTimeout(function () {
        parentSpan.classList.remove("selected");
        word.classList.remove("is-visible");
        word.classList.add("is-hidden");
        word.querySelector("i").classList.remove("in");
        word.querySelector("i").classList.add("out");
      }, selectionDuration);
      setTimeout(function () {
        showWord(nextWord, typeLettersDelay);
      }, typeAnimationDelay);
    } else if (word.closest(".cd-headline").classList.contains("letters")) {
      var bool =
        word.querySelectorAll("i").length >=
        nextWord.querySelectorAll("i").length
          ? true
          : false;
      hideLetter(word.querySelectorAll("i")[0], word, bool, lettersDelay);
      showLetter(
        nextWord.querySelectorAll("i")[0],
        nextWord,
        bool,
        lettersDelay
      );
    } else if (word.closest(".cd-headline").classList.contains("clip")) {
      var wrapper = word.closest(".cd-words-wrapper");
      wrapper.style.width = "2px";
      setTimeout(function () {
        switchWord(word, nextWord);
        showWord(nextWord);
      }, revealDuration);
    } else if (word.closest(".cd-headline").classList.contains("loading-bar")) {
      var wrapper = word.closest(".cd-words-wrapper");
      wrapper.classList.remove("is-loading");
      switchWord(word, nextWord);
      setTimeout(function () {
        hideWord(nextWord);
      }, barAnimationDelay);
      setTimeout(function () {
        wrapper.classList.add("is-loading");
      }, barWaiting);
    } else {
      switchWord(word, nextWord);
      setTimeout(function () {
        hideWord(nextWord);
      }, animationDelay);
    }
  }

  function showWord(word, duration) {
    if (word.closest(".cd-headline").classList.contains("type")) {
      showLetter(word.querySelector("i"), word, false, duration);
      word.classList.add("is-visible");
      word.classList.remove("is-hidden");
    } else if (word.closest(".cd-headline").classList.contains("clip")) {
      var wrapper = word.closest(".cd-words-wrapper");
      wrapper.style.width = word.offsetWidth + 10 + "px";
      setTimeout(function () {
        hideWord(word);
      }, revealAnimationDelay);
    }
  }

  function hideLetter(letter, word, bool, duration) {
    letter.classList.remove("in");
    letter.classList.add("out");
    if (!letter.nextElementSibling) {
      var nextWord = takeNext(word);
      if (bool) {
        setTimeout(function () {
          hideWord(nextWord);
        }, animationDelay);
      }
      if (!document.documentElement.classList.contains("csstransitions")) {
        switchWord(word, nextWord);
      }
    }
    if (
      document.documentElement.classList.contains("no-csstransitions") &&
      !letter.nextElementSibling
    ) {
      var nextWord = takeNext(word);
      switchWord(word, nextWord);
      setTimeout(function () {
        hideWord(nextWord);
      }, animationDelay);
    }
  }

  function showLetter(letter, word, bool, duration) {
    letter.classList.add("in");
    letter.classList.remove("out");
    if (!letter.nextElementSibling) {
      if (word.closest(".cd-headline").classList.contains("type")) {
        setTimeout(function () {
          word.parentElement
            .closest(".cd-words-wrapper")
            .classList.add("waiting");
        }, 200);
      }
      if (!bool) {
        setTimeout(function () {
          hideWord(word);
        }, animationDelay);
      }
    }
  }

  function takeNext(word) {
    return !word.nextElementSibling
      ? word.parentElement.children[0]
      : word.nextElementSibling;
  }

  function switchWord(oldWord, newWord) {
    oldWord.classList.remove("is-visible");
    oldWord.classList.add("is-hidden");
    newWord.classList.remove("is-hidden");
    newWord.classList.add("is-visible");
  }
});
