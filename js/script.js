function Switch() {
   var element = document.body;
   element.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", function () {
  // JavaScript 1 - Left to Right Scroll
  const scrollLeft = document.getElementById("scrollLeft");

  if (scrollLeft) {
    const spans = scrollLeft.querySelectorAll("h3");
    const spanWidth = spans[0].offsetWidth;
    const containerWidth = scrollLeft.offsetWidth;

    let positionLeft = 0;

    // Clone the spans for smooth looping transition 2 times
    scrollLeft.innerHTML = scrollLeft.innerHTML + scrollLeft.innerHTML + scrollLeft.innerHTML;

    function loopAnimationLeft() {
      positionLeft--;

      // Calculate when to reset the position
      if (positionLeft <= -containerWidth * 2) {
        positionLeft = 0;
      }

      scrollLeft.style.transform = `translateX(${positionLeft}px)`;
      requestAnimationFrame(loopAnimationLeft);
    }

    loopAnimationLeft();
  } else {
    console.error("Element with id 'scrollLeft' not found.");
  }

  // JavaScript 2 - Right to Left Scroll
  const scrollRight = document.getElementById("scrollRight");

  if (scrollRight) {
    const spans = scrollRight.querySelectorAll("h3");
    const spanWidth = spans[0].offsetWidth;
    const containerWidth = scrollRight.offsetWidth;

    // Set the initial position to the opposite of the container width
    let positionRight = -containerWidth;

    // Clone the spans for smooth looping transition 2 times from the left
    scrollRight.innerHTML = scrollRight.innerHTML + scrollRight.innerHTML + scrollRight.innerHTML;

    function loopAnimationRight() {
      positionRight++;

      // Calculate when to reset the position
      if (positionRight >= 0) {
        positionRight = -containerWidth;
      }

      scrollRight.style.transform = `translateX(${positionRight}px)`;
      requestAnimationFrame(loopAnimationRight);
    }

    loopAnimationRight();
  } else {
    console.error("Element with id 'scrollRight' not found.");
  }

  // JavaScript 3 - Navigation Underline
  const navLinks = document.querySelectorAll(".navlink");
  const underline = document.querySelector(".underline");
  const initialLink = document.querySelector(".navlink.current");

  function updateUnderline(link) {
    underline.style.width = `${link.offsetWidth * 0.5}px`;
    underline.style.transform = `translateX(${link.offsetLeft}px)`;
  }

  updateUnderline(initialLink);

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      updateUnderline(this);
    });

    link.addEventListener("mouseleave", function () {
      updateUnderline(initialLink);
    });
  });
});