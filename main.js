
function toggleMenu() {
    const toggleMenu = document.querySelector(".contactMenu");
    const navigation = document.querySelector(".navigation");

    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}

function toggleContact() {
    const toggleContact = document.querySelector(".toggleContact");
    const toggleMenu = document.querySelector(".contactMenu");

    toggleContact.classList.toggle("c-active");
    toggleMenu.classList.toggle("c-active");
}
