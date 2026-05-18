document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-toggle]");
  if (!btn) return;

  const id = btn.getAttribute("data-toggle");
  const box = document.getElementById(id);
  if (!box) return;

  const hidden = box.classList.toggle("is-hidden");
  btn.setAttribute("aria-expanded", String(!hidden));
});
