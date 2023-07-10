// fixed menu bar js code
window.addEventListener("scroll", function(){
    const navMenu = document.getElementById("nevMenu");
        navMenu.classList.toggle("activeNavMenu",window.scrollY > 100 );
    // console.log(this.scrollY)
});


// Menubar fade in 
const menuIcon = document.getElementById('mobileMenuIcon');
const menuArea = document.getElementById('topbar-center');

menuIcon.addEventListener("click", function(){
    menuIcon.classList.toggle('fa-xmark');
    menuArea.classList.toggle("activeMenu");

});
// menu item click to fade up menu
const menuListItem = document.querySelectorAll("#menuListItem");


for(var i = 0; i < menuListItem.length;i++){
    menuListItem[i].addEventListener('click', function(e) {
        menuArea.classList.remove('activeMenu');
        menuIcon.classList.remove('fa-xmark');
    });
};

// this code is written for set fade in animation

let fadeInDivs = document.querySelectorAll(".fadeInDivs")

window.addEventListener('scroll', function(e){
    for(let i = 0; i < fadeInDivs.length; i++){
        let scrollbar = 100;
        // console.log(fadeInDivs[i])
        let innerHeight = this.innerHeight
        console.log('inner height is :' + innerHeight)
        let fadeIndivsDistence = fadeInDivs[i].getBoundingClientRect().top
        console.log('Distence is: ' + fadeIndivsDistence)
        if(fadeIndivsDistence < innerHeight - scrollbar ){
            fadeInDivs[i].classList.add('activeFadeIn')
        }
        else{
            fadeInDivs[i].classList.remove('activeFadeIn')
        }
    }
})

























































