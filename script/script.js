let headNavigation = document.getElementById("headNavigation");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");
let menuPanel = document.getElementById("menu-panel");

//  Change background of header  when user Scroll

window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        headNavigation.style.backgroundColor = "black";
    } else {
        headNavigation.style.backgroundColor = "transparent";
    }
}


// Show the menu panel and close icon

menu.addEventListener('click', () => {

    menuPanel.style.display = 'block'
    closeMenu.style.display = 'block';
});

// hide the menu panel
closeMenu.addEventListener('click', () => {
    menuPanel.style.display = 'none';
});

function jumpBlock() {
    menuPanel.style.display = 'none';
}


menuPanel.querySelectorAll("li").addEventListener('click', () => {
    console.log("Hello wold");
})