document.addEventListener("DOMContentLoaded", function() {
  // --- Navegación interna ---
  const navLinks = document.querySelectorAll("header nav ul li a");
  const sections = document.querySelectorAll("main section");

  function showSection(sectionId) {
    sections.forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add("active");
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      showSection(sectionId);
      // Actualiza el hash en la URL para bookmarking
      window.location.hash = sectionId;
    });
  });

  // Muestra la sección según el hash al cargar la página
  const initialHash = window.location.hash.substring(1);
  if (initialHash) {
    showSection(initialHash);
  } else {
    showSection("inicio");
  }

  // --- Cambio de tema ---
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "Tema Claro";
    } else {
      themeToggle.textContent = "Tema Oscuro";
    }
  });

  // --- Envío del formulario de Contacto vía AJAX ---
  const contactForm = document.getElementById("contact-form");
  const contactResult = document.getElementById("contact-result");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Evita el envío por defecto
      const formData = new FormData(contactForm);
      
      fetch("process_contact.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        contactResult.textContent = data;
        contactForm.reset(); // Reinicia el formulario
      })
      .catch(error => {
        contactResult.textContent = "Error al enviar la información. Por favor, inténtelo de nuevo.";
      });
    });
  }
});
