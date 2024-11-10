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
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type  : 'fade',
      rewind: true,
      heightRatio: 0.5, // Ajusta la relación de altura para hacer las imágenes más grandes
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
    });
  
    splide.mount();
  });
  // Cambia la imagen automáticamente cuando se selecciona una opción
document.addEventListener('DOMContentLoaded', function() {
    const dynamicImage = document.getElementById('dynamic-image');
    const radioButtons = document.querySelectorAll('input[name="option"]');
  
    radioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
        if (radio.value === 'opcion1') {
          dynamicImage.src = 'imagen1.jpg'; // Cambia a la ruta de la imagen para Opción 1
        } else if (radio.value === 'opcion2') {
          dynamicImage.src = 'imagen2.jpg'; // Cambia a la ruta de la imagen para Opción 2
        }
      });
    });
  });
  