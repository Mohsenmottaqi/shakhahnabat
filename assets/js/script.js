// Language Toggle
let currentLang = 'en';

function toggleLanguage() {
    const body = document.body;
    const html = document.documentElement;
    const langButton = document.querySelector('.lang-text');
    
    if (currentLang === 'en') {
        currentLang = 'fa';
        body.classList.add('rtl');
        html.setAttribute('lang', 'fa');
        html.setAttribute('dir', 'rtl');
        langButton.textContent = 'English';
        
        // Update text content
        document.querySelectorAll('[data-fa]').forEach(element => {
            element.textContent = element.getAttribute('data-fa');
        });
        
        // Update form placeholders
        updateFormPlaceholders('fa');
    } else {
        currentLang = 'en';
        body.classList.remove('rtl');
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langButton.textContent = 'فارسی';
        
        // Update text content
        document.querySelectorAll('[data-en]').forEach(element => {
            element.textContent = element.getAttribute('data-en');
        });
        
        // Update form placeholders
        updateFormPlaceholders('en');
    }
}

// Update form placeholders based on language
function updateFormPlaceholders(lang) {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');
    const messageInput = document.getElementById('messageInput');
    
    if (lang === 'fa') {
        if (nameInput) {
            nameInput.placeholder = 'نام';
            nameInput.style.direction = 'rtl';
        }
        if (emailInput) {
            emailInput.placeholder = 'ایمیل';
            emailInput.style.direction = 'ltr'; // Email stays LTR
        }
        if (phoneInput) {
            phoneInput.placeholder = 'تلفن';
            phoneInput.style.direction = 'rtl'; // Phone RTL in Persian
        }
        if (messageInput) {
            messageInput.placeholder = 'پیام';
            messageInput.style.direction = 'rtl';
        }
    } else {
        if (nameInput) {
            nameInput.placeholder = 'Name';
            nameInput.style.direction = 'ltr';
        }
        if (emailInput) {
            emailInput.placeholder = 'Email';
            emailInput.style.direction = 'ltr';
        }
        if (phoneInput) {
            phoneInput.placeholder = 'Phone';
            phoneInput.style.direction = 'ltr'; // Phone LTR in English
        }
        if (messageInput) {
            messageInput.placeholder = 'Message';
            messageInput.style.direction = 'ltr';
        }
    }
}

// Initialize placeholders on page load
document.addEventListener('DOMContentLoaded', () => {
    updateFormPlaceholders('en');
});

// Category Filter
function showCategory(category) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active-category');
    });
    event.target.classList.add('active-category');
    
    const foodCards = document.querySelectorAll('.food-card');
    foodCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 50);
        } else {
            card.style.display = 'none';
        }
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Form Submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = currentLang === 'en' 
            ? '✅ Thank you! We will contact you soon.' 
            : '✅ متشکریم! به زودی تماس خواهیم گرفت.';
        alert(message);
        contactForm.reset();
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    if (menu) {
        menu.classList.toggle('hidden');
        // Animate hamburger icon
        if (btn) {
            btn.classList.toggle('rotate-90');
        }
    }
}

// Active Navigation Links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Console Greeting
console.log('%c🍽️ SHAKHAH NABAT Restaurant 🍽️', 'color: #E63946; font-size: 20px; font-weight: bold;');
console.log('%cرستوران شاخه نبات', 'color: #F77F00; font-size: 16px;');
