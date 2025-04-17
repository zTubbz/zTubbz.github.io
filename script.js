// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navItems = document.querySelector('.nav-items');
const logoText = document.getElementById('logo-text');
const blinkElement = document.querySelector('.blink');
const contentTitle = document.querySelector('.content h1');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
  navItems.classList.toggle('active');
});

// Logo text change on hover
logoText.addEventListener('mouseenter', () => {
  // Remove the blink element first
  if (blinkElement) {
    blinkElement.remove();
  }
  
  // Change text to Tubbzy
  logoText.textContent = 'Tubbzy';
  
  // Add the blink element back after the new text
  const newBlinkElement = document.createElement('span');
  newBlinkElement.className = 'blink';
  logoText.appendChild(newBlinkElement);
});

logoText.addEventListener('mouseleave', () => {
  // Remove the blink element first
  const currentBlinkElement = logoText.querySelector('.blink');
  if (currentBlinkElement) {
    currentBlinkElement.remove();
  }
  
  // Change text back to Code Engineer
  logoText.textContent = 'Code Engineer';
  
  // Add the blink element back after the original text
  const newBlinkElement = document.createElement('span');
  newBlinkElement.className = 'blink';
  logoText.appendChild(newBlinkElement);
});

// Welcome title text change on hover
contentTitle.addEventListener('mouseenter', () => {
  contentTitle.textContent = 'Tubbzy.rip';
});

contentTitle.addEventListener('mouseleave', () => {
  contentTitle.textContent = 'Welcome to my dev space';
});

// Set current year for copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

