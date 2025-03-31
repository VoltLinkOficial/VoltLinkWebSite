document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para activar la animación al cargar la página

    // Efecto suave al hacer clic en los enlaces del menú
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
