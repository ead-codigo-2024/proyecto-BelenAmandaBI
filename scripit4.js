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
var splide = new Splide('.splide', {
  type      : 'loop',
  perPage   : 3,
  focus     : 'center',
  autoplay  : true,       // Activa el desplazamiento automático
  interval  : 5000,       // Intervalo de desplazamiento cada 5 segundos
  pauseOnHover: false,    // Evita que se detenga cuando el mouse esté sobre el carrusel
  speed     : 1000        // Duración de la transición entre imágenes (1 segundo)
});

splide.mount();
