document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el ícono de la hamburguesa
    const menuIcon = document.querySelector(".menu-icon span");
  
    // Verifica si el elemento existe antes de agregar el evento
    if (menuIcon) {
      // Añade un evento de clic al ícono de hamburguesa
      menuIcon.addEventListener("click", function() {
        // Alterna la clase "active" para mostrar/ocultar el menú desplegable
        document.querySelector(".menu-icon").classList.toggle("active");
      });
    }
});
document.addEventListener('DOMContentLoaded', function() {
  var splide = new Splide('.splide', {
    type     : 'loop',
    height   : '20rem',  // Aumenta la altura del carrusel
    focus    : 'center',
    autoWidth: true
  });

  splide.mount();
});
