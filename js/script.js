document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
            
            // Change hamburger to X when open
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('nav-active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.nav-links a');
    if (mobileLinks.length > 0) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    
                    // Reset hamburger icon
                    const spans = menuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }

   
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Check for error parameter in URL
    const formMessage = document.getElementById('form-message');
    if (formMessage) {
        const urlParams = new URLSearchParams(window.location.search);
        const errorParam = urlParams.get('error');
        
        if (errorParam === 'mail_error') {
            formMessage.classList.remove('hidden', 'success');
            formMessage.classList.add('error');
            formMessage.textContent = 'Sorry, there was an error sending your message. Please try again later.';
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // Form submission handling
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            // Let Formspree handle the form submission
            // No need to prevent default or handle AJAX

            // Change button text to show processing
            const submitButton = quoteForm.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<span class="pulse-dot"></span>Sending...';
            submitButton.disabled = true;
            
            // Button will stay in "sending" state until form redirects
            // Formspree handles the rest!
        });
    }
}); 