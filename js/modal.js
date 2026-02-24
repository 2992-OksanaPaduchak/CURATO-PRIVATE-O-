(() => {
  const refs = {
    openBtns: document.querySelectorAll("[data_modal_open]"),
    closeBtn: document.querySelector("[data_modal_close]"),
    backdrop: document.querySelector("[data_modal]"),
  };

  refs.openBtns.forEach((btn) => btn.addEventListener("click", openModal));

  refs.closeBtn.addEventListener("click", closeModal);
  refs.backdrop.addEventListener("click", onBackdropClick);
  window.addEventListener("keydown", onEscPress);

  function openModal() {
    refs.backdrop.classList.add("is_open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    refs.backdrop.classList.remove("is_open");
    document.body.style.overflow = "";
  }

  function onBackdropClick(e) {
    if (e.target === refs.backdrop) {
      closeModal();
    }
  }

  function onEscPress(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  }
})();
