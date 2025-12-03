// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Simple validation
        if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        });

        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 600ms ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.stat-card, .featured-card, .project-detailed, .cover-card, .hobby-card, .community-item, .value-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fadeInUp animation to stylesheet if not exists
if (!document.querySelector('style[data-anim]')) {
    const style = document.createElement('style');
    style.setAttribute('data-anim', 'true');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Console message
console.log('%cWelcome to Dmitriy\'s Portfolio!', 'font-size: 20px; color: #7c3aed; font-weight: bold;');
console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'font-size: 14px; color: #666;');
