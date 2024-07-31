const scrollToTopButton = document.querySelector('.scroll-to-top');
const images = document.querySelectorAll('.image-gallery img');
let currentIndex = 0;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 450) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function openFullscreen(img, index) {
    currentIndex = index;
    const container = document.getElementById('fullscreenContainer');
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = img.src;
    container.style.display = 'flex';

    // Crear elementos para las mitades izquierda y derecha
    const leftHalf = document.createElement('div');
    leftHalf.classList.add('left-half');
    leftHalf.onclick = (event) => {
        event.stopPropagation(); // Evita que el evento cierre el contenedor
        prevImage();
    };
    
    const rightHalf = document.createElement('div');
    rightHalf.classList.add('right-half');
    rightHalf.onclick = (event) => {
        event.stopPropagation(); // Evita que el evento cierre el contenedor
        nextImage();
    };

    container.appendChild(leftHalf);
    container.appendChild(rightHalf);
}

function closeFullscreen() {
    const container = document.getElementById('fullscreenContainer');
    container.style.display = 'none';
    container.innerHTML = '<span class="close" onclick="closeFullscreen()">&times;</span><img id="fullscreenImage" class="fullscreen-image" src="" alt="Imagen en pantalla completa">'; // Resetear contenido
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = images[currentIndex].src;
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = images[currentIndex].src;
}
