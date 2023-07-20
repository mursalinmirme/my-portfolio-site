let menuIcon = document.getElementById("menu-icon");
let closeMenuIcon = document.getElementById("close-mark");

let menuArea = document.querySelector(".nav-lists");

menuIcon.addEventListener("click", function(){
    menuArea.classList.add('menu-active');
})

closeMenuIcon.addEventListener("click", function(){
    menuArea.classList.remove('menu-active');
})
