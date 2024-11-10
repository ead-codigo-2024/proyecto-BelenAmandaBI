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
function showText() {
    const textContainer = document.getElementById("textContainer");
    textContainer.classList.toggle("text-visible");
  }
  function showText() {
    const textContainer = document.getElementById("textContainer");
    textContainer.classList.toggle("text-visible");
  }
  let currentIndex = 0;

function showImage(index) {
  const carouselImages = document.querySelector('.carousel-images');
  const totalImages = document.querySelectorAll('.carousel-image').length;

  // Asegúrate de que el índice esté dentro de los límites
  if (index >= totalImages) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex = index;
  }

  // Mueve el contenedor para mostrar la imagen actual
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

// Opcional: Auto-desplazamiento cada 3 segundos
setInterval(() => {
  nextImage();
}, 3000);