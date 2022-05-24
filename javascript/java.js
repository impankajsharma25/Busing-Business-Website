// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction01()};

function scrollFunction01() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar001").style.top = "0";
  } else {
    document.getElementById("navbar001").style.top = "-200px";
  }
}


//  ================= off canvas side menu==============
function openSidenav() {
    document.getElementById("menu-sidebar").style.width = "350px";
  }
  function closeSidenav() {
  document.getElementById("menu-sidebar").style.width = "0";;
  
  }



//   ===== sliders i say ================




  var menu = document.getElementById("full-sidebar");
  var cross = document.getElementById("cross-button");

  function myFunction() {
    menu.style.display = "block";
    cross.style.display = "block";
  }

  function myFunction2() {
    menu.style.display = "none";
    cross.style.display = "none";
  }

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  //   ============================ main div js ===================

  let slideIndex1 = 1;
  showSlides1(slideIndex1);

  function plusSlides1(n) {
    showSlides1((slideIndex1 += n));
  }

  function currentSlide1(n) {
    showSlides1((slideIndex1 = n));
  }

  function showSlides1(n) {
    let i;
    let slides1 = document.getElementsByClassName("mySlides1");
    let dots1 = document.getElementsByClassName("dot1");
    if (n > slides1.length) {
      slideIndex1 = 1;
    }
    if (n < 1) {
      slideIndex1 = slides1.length;
    }
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
  }


  // ======================= back to top button ============

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// ===============
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
