document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Simple smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
