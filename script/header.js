const header = document.querySelector("#header");
const headerNavbar = document.querySelector("#header-navbar-list");
const buttonNavbar = document.querySelector("#button-navbar");

window.onscroll = function () {
  handleScroll();
};

const handleScroll = () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 84) {
    header.classList.add("bg-fixed");
  } else {
    header.classList.remove("bg-fixed");
  }
};

function handleNavbarClick(e) {
  if (headerNavbar.classList.contains("active-navbar")) {
    headerNavbar.classList.remove("active-navbar");
    return;
  }

  headerNavbar.classList.add("active-navbar");
}
buttonNavbar.addEventListener("click", handleNavbarClick);
