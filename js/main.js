const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  autoHeight: true,
  breakpoints: {
    769: {
      direction: "horizontal",
      slidesPerView: "auto",
    },
    320: {
      direction: "vertical",
    },
  },
});

const modalWindow = document.querySelector(".modal");
const buttonModal = document.querySelector(".main-display__button");

buttonModal.addEventListener("click", () => {
  modalWindow.classList.add("active");
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "22px";
});

modalWindow.addEventListener("click", (e) => {
  /* отлавливаем нажатие на класс modal_inner */
  const isModal = e.target.closest(".modal__inner");
  if (isModal) {
    modalWindow.classList.add("active");
  } else {
    modalWindow.classList.remove("active");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "0";
  }
});
