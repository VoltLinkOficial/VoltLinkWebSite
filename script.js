document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("header nav ul li a");
  const sections = document.querySelectorAll("main section");

  // Función para mostrar la sección seleccionada
  function showSection(sectionId) {
    sections.forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add("active");
    }
  }

  // Asignar eventos a cada enlace del menú
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      showSection(sectionId);
      // Actualiza el hash en la URL para bookmarking
      window.location.hash = sectionId;
    });
  });

  // Al cargar la página, mostrar la sección según el hash (si existe)
  const initialHash = window.location.hash.substring(1);
  if (initialHash) {
    showSection(initialHash);
  } else {
    showSection("inicio");
  }
});
