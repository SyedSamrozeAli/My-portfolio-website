
var open_bar = document.querySelector(".openbar");
var closebar_bar = document.querySelector(".closebar");
var navlist = document.querySelector(".nav-list");


open_bar.addEventListener("click", function () {

    navlist.style.display = "block";
    closebar_bar.style.display="block"

});

closebar_bar.addEventListener("click", function () {
      navlist.style.display = "none";
    closebar_bar.style.display="none"
    
});



