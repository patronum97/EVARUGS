const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  autoHeight: true,
  breakpoints: {
    768: {
      direction: "horizontal",
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
});

modalWindow.addEventListener("click", (e) => {
  /* отлавливаем нажатие на класс modal_inner */
  const isModal = e.target.closest(".modal__inner");
  if (isModal) {
    modalWindow.classList.add("active");
  } else {
    modalWindow.classList.remove("active");
  }
});
