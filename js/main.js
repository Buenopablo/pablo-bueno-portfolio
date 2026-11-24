(() => {
  const backdrop = document.getElementById("cv-modal-backdrop");
  const panel = document.getElementById("cv-modal-container");
  if (!backdrop || !panel) return;

  const openButtons = [
    document.getElementById("open-cv-modal-btn"),
    document.getElementById("open-cv-modal-btn-header"),
  ].filter(Boolean);
  const closeButtons = [
    document.getElementById("close-cv-modal-top"),
    document.getElementById("close-cv-modal-bottom"),
  ].filter(Boolean);
  let previousOverflow = "";

  function openModal() {
    backdrop.classList.remove("is-hidden");
    panel.classList.remove("is-collapsed");
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    backdrop.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    backdrop.classList.add("is-hidden");
    panel.classList.add("is-collapsed");
    document.body.style.overflow = previousOverflow;
    backdrop.setAttribute("aria-hidden", "true");
  }

  openButtons.forEach((button) => button.addEventListener("click", openModal));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeModal();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !backdrop.classList.contains("is-hidden")) {
      closeModal();
    }
  });
  backdrop.setAttribute("aria-hidden", "true");
})();
