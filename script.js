document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.getElementById('learnMore');
    
    learnMoreButton.addEventListener('click', () => {
        alert('Thank you for your interest! More information will be available soon.');
    });
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your message has been sent. Thank you!');
        contactForm.reset();
    });
});


