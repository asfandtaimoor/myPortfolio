let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");
let menuPanel = document.getElementById("menu-panel");


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