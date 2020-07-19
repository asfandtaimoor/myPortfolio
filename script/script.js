let headNavigation = document.getElementById("headNavigation");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");
let menuPanel = document.getElementById("menu-panel");
let projects = document.getElementById('p-list');





// Header show on scroll up

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('headNavigation').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
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