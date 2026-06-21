// Array de mensajes
const messages = [
    "Hello World",
    "¡Hola Mundo!",
    "Welcome to Web Development",
    "¡Bienvenido al Desarrollo Web!",
    "Keep Learning 🚀",
    "¡Sigue Aprendiendo! 🚀"
];

let currentIndex = 0;

// Obtener elementos del DOM
const messageElement = document.querySelector('.message');
const changeBtn = document.getElementById('changeBtn');

// Agregar evento al botón
changeBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % messages.length;
    messageElement.textContent = messages[currentIndex];
    messageElement.style.animation = 'none';
    
    // Reiniciar la animación
    setTimeout(() => {
        messageElement.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
});

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
