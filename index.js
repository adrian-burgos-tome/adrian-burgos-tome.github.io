// Animación de fade-in para las secciones al cargar

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, i) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    setTimeout(() => {
      section.style.transition = 'opacity 1s cubic-bezier(.77,0,.18,1), transform 1s cubic-bezier(.77,0,.18,1)';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, 400 + i * 200);
  });
});

// Animación para el hero
window.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'scale(0.98)';
    setTimeout(() => {
      hero.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)';
      hero.style.opacity = 1;
      hero.style.transform = 'scale(1)';
    }, 200);
  }
});
