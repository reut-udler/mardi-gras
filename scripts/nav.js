const toggleNav = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleNav.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
