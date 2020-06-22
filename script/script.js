let headNavigation = document.getElementById("headNavigation");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");
let menuPanel = document.getElementById("menu-panel");

//  Change background of header  when user Scroll


// Project list


// window.onscroll = function() { myFunction() };

// function myFunction() {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         headNavigation.style.backgroundColor = "black";
//     } else {
//         headNavigation.style.backgroundColor = "transparent";
//     }
// }


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