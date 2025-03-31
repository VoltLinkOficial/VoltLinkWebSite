document.addEventListener("DOMContentLoaded", function() {
  // Activar animación sin depender del scroll
  const section = document.querySelector("main > section");
  if(section) {
    section.classList.add("visible");
  }
});
