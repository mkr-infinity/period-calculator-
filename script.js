document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const giftContainer = document.getElementById('gift-container');
    const birthdayBox = document.getElementById('birthday-box');
    const heroSection = document.getElementById('hero-section');
    const mainTitle = document.getElementById('main-title');
    const subTitle = document.getElementById('sub-title');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const cardsSection = document.getElementById('cards-section');
    const starsContainer = document.getElementById('stars-container');

    // Initial Particle System Setup
    createParticles();

    // Box Click Interaction
    birthdayBox.addEventListener('click', () => {
        birthdayBox.classList.add('box-open');
        
        setTimeout(() => {
            giftContainer.style.opacity = '0';
            setTimeout(() => {
                giftContainer.classList.add('hidden');
                startRevealSequence();
            }, 1000);
        }, 500);
    });

    function startRevealSequence() {
        heroSection.classList.remove('opacity-0');
        
        // Reveal "Happy Birthday"
        requestAnimationFrame(() => {
            mainTitle.classList.add('reveal-visible');
        });

        // Reveal "With lots of good wishes"
        setTimeout(() => {
            subTitle.classList.add('reveal-visible');
        }, 800);

        // Reveal Scroll Indicator
        setTimeout(() => {
            scrollIndicator.classList.add('reveal-visible');
        }, 2000);

        // Reveal Cards
        setTimeout(() => {
            cardsSection.classList.add('reveal-visible');
        }, 2500);
    }

    // Particle System
    function createParticles() {
        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 3;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}vw`;
        particle.style.top = `${y}vh`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Red/Rose Theme Colors
        const colors = ['#fff', '#ef4444', '#f43f5e', '#fb7185'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        if (Math.random() > 0.5) {
            particle.style.filter = `blur(${Math.random()}px)`;
        }

        starsContainer.appendChild(particle);
    }
});