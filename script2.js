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
  document.addEventListener( 'DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
      type    : 'loop',
      padding : '5rem',
      perPage : 1,  // Número de diapositivas visibles
      perMove : 1,  // Número de diapositivas que se desplazan cada vez
      autoplay: true, // Opcional: reproducción automática
      interval: 3000, // Opcional: tiempo entre diapositivas en ms
    } );
    
    splide.mount();
  } );


