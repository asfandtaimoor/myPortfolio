let headNavigation = document.getElementById("headNavigation");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");
let menuPanel = document.getElementById("menu-panel");
let projects = document.getElementById('p-list');

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
    if (screen.width <= 768) {
        menuPanel.style.display = 'none';
    }
}


// Filter Project 

// select all Project
let hideBlock = document.querySelectorAll('.pl-elem');

function filter(activeClass) {

    // Hide all project

    for (let i = 0; i < hideBlock.length; i++) {
        let hideCurrentBlock = hideBlock[i];

        hideCurrentBlock.style.display = "none";
    };


    // select the project to show
    let projectBlock = document.querySelectorAll(`.${activeClass}`);

    // filter the project to show
    for (let j = 0; j < projectBlock.length; j++) {
        let currentBlock = projectBlock[j];

        currentBlock.style.display = "block";
    }

}


window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 100) {
        console.log("working")
    } else {
        console.log("working Too")
    }
}