// 1. Scroll suave
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 3. Animaciones al hacer scroll
const revealElements = document.querySelectorAll('.section, .card-section');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 4. Validación de formulario y 5. Mensaje de agradecimiento
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = form.querySelector('input[type="text"]').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const mensaje = form.querySelector('textarea').value.trim();

    if (!nombre || !correo || !mensaje) {
      alert('Por favor completá todos los campos.');
      return;
    }

    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    form.reset();
  });
}