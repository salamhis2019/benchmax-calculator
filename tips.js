// DEFINE UI VARS
const hamburger = document.querySelector('.fa-align-justify');
const links = document.querySelector('.links')

// ADD EVENT LISTENER TO HAMBURGER ICON
hamburger.addEventListener('click', showMenu)

// SHOW MENU FUNCTION
function showMenu() {
    // REVEAL THE NAV MENU
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
        hamburger.classList.add('fa-align-justify')
    // REMOVE HAMBURGER AND ADD 'X'
    } else {
        links.classList.add('show-links');
        hamburger.classList.remove('fa-align-justify');
        hamburger.classList.add('fa-remove')
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});