const hamburgerMenuBtn = document.querySelector('.hamburgerMenu');
const navbarMenu = document.querySelector('.navbar')



hamburgerMenuBtn.addEventListener('click', dropDownMenu);


function dropDownMenu() {
    navbarMenu.style.display = "block";
    navbarMenu.style.backgroundColor = "orange";
}
