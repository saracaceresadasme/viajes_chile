/*
  Script principal  Viajes Chile
  Incluye smooth scroll con jQuery, tooltips Bootstrap y eventos simples.
*/
// Inicialización de JavaScript */
$(document).ready(function () {
  // Smooth scroll para links internos del navbar.
  $("a.nav-link, .navbar-brand").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        700
      );
    }
  });

  // Mensaje simple al enviar formulario.
  $("form").on("submit", function (event) {
    event.preventDefault();
    alert("Gracias por contactarnos. Pronto responderemos tu mensaje.");
  });
});

// Inicialización de tooltips de Bootstrap.
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

[...tooltipTriggerList].forEach(function (tooltipTriggerEl) {
  new bootstrap.Tooltip(tooltipTriggerEl);
});