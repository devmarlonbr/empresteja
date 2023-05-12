const header = document.querySelector("#header");

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
