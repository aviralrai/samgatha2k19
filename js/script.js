//Hamburger
var icon = document.getElementById("icon");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");


icon.addEventListener('click', function () {
  nav.classList.toggle('show');
});

//Change image on click
function changeColor()
{
    if (icon.getAttribute('src') == "img/rightham.png")
    {
        icon.src = "img/mobile/Closeicon.png";
        $('.hamburger-icon').css('right','2rem');
    }
    else
    {
        icon.src = "img/rightham.png"; 
        $('.hamburger-icon').css('right','0 ');
    }
}


