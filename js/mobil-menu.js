(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll(".mobile-menu-link"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");

    if (refs.modal.classList.contains("is-open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
})();
