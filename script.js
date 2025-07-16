// Preloader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preloader').classList.add('hide');
    }, 1000);
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const emailForm = document.getElementById('signupForm');
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('.email-input');
        const email = emailInput.value;
        
        if (validateEmail(email)) {
            // Simulate form submission
            this.reset();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `
                <div style="position: fixed; top: 20px; right: 20px; background: #2ecc71; color: white; padding: 15px 25px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); z-index: 2000; animation: fadeIn 0.5s;">
                    <i class="fas fa-check-circle"></i> Obrigado por se inscrever! Em breve enviaremos mais informações.
                </div>
            `;
            document.body.appendChild(successMessage);
            
            // Remove message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        } else {
            alert('Por favor, insira um endereço de e-mail válido.');
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Animation on scroll for elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .step, .about-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Initialize VLibras
document.addEventListener('DOMContentLoaded', function() {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
});
