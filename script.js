function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    let valid = true;
    let errorMsg = '';

    // Name Validation
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
      valid = false;
      errorMsg = 'Name is required.';
      nameInput.focus();
    }

    // Email Validation
    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      valid = false;
      errorMsg = 'Please enter a valid email address.';
      emailInput.focus();
    }

    // Message Validation
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
      valid = false;
      errorMsg = 'Message is required.';
      messageInput.focus();
    }

    if (!valid) {
      alert(errorMsg);
      event.preventDefault();
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show button when scrolling past the 'About' section
  window.addEventListener('scroll', function () {
    const aboutSection = document.getElementById('about').offsetTop;
    if (window.scrollY > aboutSection) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
