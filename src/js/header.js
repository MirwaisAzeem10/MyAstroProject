document
  .querySelector(".header__button_menu")
  .addEventListener("click", function () {
    const menu = document.querySelector(".small__screen_menu");
    menu?.classList.toggle("hidden");
  });
