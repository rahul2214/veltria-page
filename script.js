const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sideNav = document.getElementById('side-nav');

menuBtn.addEventListener('click', () => {
    sideNav.style.left = '0';
});

closeBtn.addEventListener('click', () => {
    sideNav.style.left = '-100%';
});
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the clicked button
        const faqItem = button.nextElementSibling;
        const isActive = button.classList.contains('active');

        // Close all open answers
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.classList.remove('active');
        });

        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
        });

        // Open the clicked question if it was not active before
        if (!isActive) {
            button.classList.add('active');
            faqItem.classList.add('active');
        }
    });
});
