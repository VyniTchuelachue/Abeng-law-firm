// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Scroll-to-top button
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('visible', window.scrollY > 400);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> mailto fallback (no backend available)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const phone = data.get('phone') || '';
  const subject = data.get('subject') || 'Website Inquiry';
  const message = data.get('message') || '';

  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
  const mailto = `mailto:contact@abenglawfirm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
