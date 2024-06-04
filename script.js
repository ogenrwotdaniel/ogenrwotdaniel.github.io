// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Example: Adding a scroll-to-top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerText = "↑";
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
});
