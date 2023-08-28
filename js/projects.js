function Switch() {
   var element = document.body;
   element.classList.toggle("dark");
}

$(document).ready(function(){
    var lastHoveredClass = null;

    $('.section.projects > .container').hover(function(){
        var className = $(this).attr('class').split(' ')[1]; // Get the second class name
        $('.section.glass > .im').removeClass().addClass('im ' + className + ' show');
        $(this).addClass('show').siblings().removeClass('show');
        lastHoveredClass = className;
    }, function(){
        // Do nothing on hover out, class will stay
    });

    $('.section.glass').hover(function(){}, function(){
        if (lastHoveredClass) {
            $('.section.projects > .container.' + lastHoveredClass).removeClass('show');
            lastHoveredClass = null;
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
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