// MENÚ (MOBILE)
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = mobileMenu.querySelectorAll('a');

function openMenu() {
  mobileMenu.classList.remove('translate-x-full');
  menuOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  menuOverlay.classList.add('hidden');
  document.body.style.overflow = '';
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
    closeMenu();
  }
});

// FAQ 
document.querySelectorAll('.faq-toggle').forEach((button, i) => {
  const content = button.nextElementSibling;
  content.id = content.id || `faq-content-${i}`;
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', content.id);

  button.addEventListener('click', () => {
    const currentContent = button.nextElementSibling;
    const currentIcon = button.querySelector('svg');
    const isCurrentlyHidden = currentContent.classList.contains('hidden');

    document.querySelectorAll('.faq-toggle').forEach(otherButton => {
      const otherContent = otherButton.nextElementSibling;
      const otherIcon = otherButton.querySelector('svg');
      if (!otherContent.classList.contains('hidden')) {
        otherContent.classList.add('hidden');
        otherIcon.classList.remove('rotate-180');
        otherButton.setAttribute('aria-expanded', 'false');
      }
    });

    if (isCurrentlyHidden) {
      currentContent.classList.remove('hidden');
      currentIcon.classList.add('rotate-180');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

// FORMULARIO DE CONTACTO: validación + honeypot anti-spam
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const formStatus = document.getElementById('formStatus');

  function showError(input, message) {
    const errorEl = input.parentElement.querySelector('.error-msg');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    input.classList.add('border-red-500');
  }

  function clearError(input) {
    const errorEl = input.parentElement.querySelector('.error-msg');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
    input.classList.remove('border-red-500');
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = '';

    // Honeypot: si este campo oculto viene completo, es un bot
    const honeypot = contactForm.querySelector('#empresa_web');
    if (honeypot && honeypot.value.trim() !== '') {
      // Se ignora el envío silenciosamente, sin dar pistas al bot
      return;
    }

    let valid = true;
    const nombre = contactForm.querySelector('#nombre');
    const email = contactForm.querySelector('#email');
    const mensaje = contactForm.querySelector('#mensaje');

    [nombre, email, mensaje].forEach(clearError);

    if (nombre.value.trim().length < 2) {
      showError(nombre, 'Ingresá tu nombre completo.');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError(email, 'Ingresá un email válido.');
      valid = false;
    }

    if (mensaje.value.trim().length < 20) {
      showError(mensaje, 'Contame un poco más sobre tu proyecto.');
      valid = false;
    }

    if (!valid) {
      formStatus.textContent = 'Revisá los campos marcados.';
      formStatus.classList.add('text-red-600');
      return;
    }

    // TODO: reemplazar por el envío real (fetch a tu backend, Formspree, etc.)
    formStatus.classList.remove('text-red-600');
    formStatus.classList.add('text-green-600');
    formStatus.textContent = '¡Gracias! Te responderé a la brevedad.';
    contactForm.reset();
  });
}

function switchTab(tab) {
  const indContainer = document.getElementById('individuals-container');
  const compContainer = document.getElementById('companies-container');
  const btnInd = document.getElementById('btn-individuals');
  const btnComp = document.getElementById('btn-companies');

  // Clases para estado activo
  const activeClasses = 'bg-black text-white shadow-sm';
  // Clases para estado inactivo
  const inactiveClasses = 'text-gray-500 hover:text-gray-800 bg-transparent';

  if (tab === 'individuals') {
    // Mostrar/ocultar contenedores
    indContainer.classList.remove('hidden');
    compContainer.classList.add('hidden');
    
    // Activar botón Individuos
    btnInd.className = `px-6 py-2 rounded-full text-sm font-medium transition-all ${activeClasses}`;
    
    // Desactivar botón Empresas
    btnComp.className = `px-6 py-2 rounded-full text-sm font-medium transition-all ${inactiveClasses}`;
  } else {
    // Mostrar/ocultar contenedores
    compContainer.classList.remove('hidden');
    indContainer.classList.add('hidden');
    
    // Activar botón Empresas
    btnComp.className = `px-6 py-2 rounded-full text-sm font-medium transition-all ${activeClasses}`;
    
    // Desactivar botón Individuos
    btnInd.className = `px-6 py-2 rounded-full text-sm font-medium transition-all ${inactiveClasses}`;
  }
}