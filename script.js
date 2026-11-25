const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  navbar.classList.toggle("menu-open", !isOpen);

  menuToggle.setAttribute("aria-expanded", !isOpen);
});
