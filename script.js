// Mobile Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav-wrapper');
const navBackdrop = document.querySelector('.nav-backdrop');
const navLinks = document.querySelectorAll('.nav-menu a');

function toggleMenu() {
    if (window.innerWidth <= 768) {
        hamburger.classList.toggle('active');
        navWrapper.classList.toggle('active');
        navBackdrop.classList.toggle('active');
        document.body.style.overflow = navWrapper.classList.contains('active') ? 'hidden' : '';
    }
}

hamburger.addEventListener('click', toggleMenu);
navBackdrop.addEventListener('click', toggleMenu);

// Close menu when clicking links on mobile
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Initialize menu state based on screen size
function checkScreenSize() {
    if (window.innerWidth > 768) {
        // Ensure menu is visible on desktop
        navWrapper.style.right = '';
        navWrapper.classList.remove('active');
        hamburger.classList.remove('active');
        navBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Check on load and resize
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

// Theme toggle functionality
const themeSwitch = document.getElementById('theme-switch');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
    document.body.setAttribute('data-theme', 'dark');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        
        this.classList.add('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update active link on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
            } else {
                const techUsed = card.getAttribute('data-tech');
                if (techUsed.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const responseDiv = document.getElementById('formResponse');
    
    responseDiv.innerHTML = '<p style="color: var(--primary-color)">Sending message...</p>';
    responseDiv.style.color = 'var(--primary-color)';

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            responseDiv.innerHTML = `<p style="color: var(--primary-color)">${data.message}</p>`;
            form.reset();
        } else {
            responseDiv.innerHTML = `<p style="color: #e74c3c">${data.message}</p>`;
        }
    })
    .catch(error => {
        responseDiv.innerHTML = '<p style="color: #e74c3c">Oops! There was a problem sending your message.</p>';
    });
});

// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();
