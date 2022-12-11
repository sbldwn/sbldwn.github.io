const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementByld("collapsibleNavbar");
navLinks.forEach((l) => {
    l.addEventListener("click", ()
    => {
        new
        bootstrap.Collapse(menuToggle).toggle();
    })
})