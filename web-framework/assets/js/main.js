// ============================================
// MAIN.JS - Funcionalidades principales
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScroll();
    initParallaxEffect();
});

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initParallaxEffect() {
    let ticking = false;
    document.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateBlobsPosition(e);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateBlobsPosition(e) {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 15;
        blob.style.transform = `translate(${x * speed}}px, ${y * speed}px)`;});
}

// Hace que el botón de "Contactanos" baje al footer con scroll suave
document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('btn-contact-hero');
    if (contactBtn) {
        contactBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const footer = document.querySelector('#contacto');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const moreBtn = document.getElementById('btn-more-hero');
    if (moreBtn) {
        moreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});