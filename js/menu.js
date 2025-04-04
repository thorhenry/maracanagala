document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle navigation
            navLinks.classList.toggle('active');
            
            // Animate burger
            burger.classList.toggle('active');
            
            // Toggle body scroll
            body.classList.toggle('menu-open');
        });
    }
}); 