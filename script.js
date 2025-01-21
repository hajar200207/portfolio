document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.transition = "transform 1s ease-in-out";
    header.style.transform = "translateY(0)";
});

// Animation au chargement de la page
window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300);
    });
});
