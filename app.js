const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

let showDropdown = false;

function buttonClicked() {
    showDropdown = !showDropdown;
    if (showDropdown) dropdownMenu.classList.add('show');
    else dropdownMenu.classList.remove('show');
}

menuButton.addEventListener('click', buttonClicked);
