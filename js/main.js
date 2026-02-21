const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const bars = hamburger.querySelectorAll('.ham-bar');

hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    // Animate bars into X
    bars[0].style.transform = isOpen ? 'translateY(8px) rotate(45deg)' : '';
    bars[1].style.opacity = isOpen ? '0' : '1';
    bars[2].style.transform = isOpen ? 'translateY(-8px) rotate(-45deg)' : '';
});

function closeMenu() {
    mobileMenu.classList.remove('open');
    bars[0].style.transform = bars[2].style.transform = '';
    bars[1].style.opacity = '1';
}

// ── Testimonial slider ─────────────────────────────────────────────
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

function updateSlider() {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === currentSlide);
    });
    dots.forEach((d, i) => {
        d.style.background = i === currentSlide ? '#C94B2C' : 'rgba(28,24,20,.2)';
        d.style.width = i === currentSlide ? '24px' : '8px';
        d.style.borderRadius = '9999px';
    });
}

let slideInterval;

function startInterval() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 6000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

function changeSlide(dir) {
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    updateSlider();
    resetInterval();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetInterval();
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => changeSlide(-1));
}
if (nextBtn) {
    nextBtn.addEventListener('click', () => changeSlide(1));
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

startInterval();
updateSlider();

// ── Sticky nav shadow on scroll ────────────────────────────────────
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,.4)' : 'none';
});
