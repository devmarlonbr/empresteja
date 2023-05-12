const accordion = document.querySelectorAll(".accordion-item");

const accordionVisibleClass = "accordion-active";

const accordionHandleClick = (e) => {
  console.log(e.target);
  console.log(e.target.parentNode.classList);

  const alreadyHasActive = e.target.parentNode.classList.contains(
    accordionVisibleClass
  );
  if (alreadyHasActive) {
    e.target.parentNode.classList.remove(accordionVisibleClass);
  } else {
    accordion.forEach((acc) => {
      acc.classList.remove(accordionVisibleClass);
    });

    e.target.parentNode.classList.add(accordionVisibleClass);
  }
};

accordion.forEach((accItem) => {
  console.log(accItem);
  accItem.addEventListener("click", accordionHandleClick);
});
