// DOM elements
const mobileMenu = document.querySelector('.mobile-menu');
const navItems = document.querySelector('.nav-items');
const logoText = document.getElementById('logo-text');
const contentTitle = document.querySelector('.content h1');

// Toggle mobile menu functionality
mobileMenu.addEventListener('click', () => {
  navItems.classList.toggle('active');
});

// Logo text change on hover
logoText.addEventListener('mouseenter', () => {
  // Remove the blink element first
  const blinkElement = logoText.querySelector('.blink');
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

// Title text change on hover
contentTitle.addEventListener('mouseenter', () => {
  contentTitle.textContent = 'Tubbzy.rip';
});

contentTitle.addEventListener('mouseleave', () => {
  contentTitle.textContent = 'About Me';
});

// Pet cards animation
document.addEventListener('DOMContentLoaded', () => {
  const petCards = document.querySelectorAll('.pet-card');
  
  petCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // The custom hover colors are now handled by CSS
      // This just adds additional behavior if needed
      const pet = card.getAttribute('data-pet');
      console.log(`Hovering over ${pet}`);
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset handled by CSS
    });
    
    // Click to show a small animation
    card.addEventListener('click', () => {
      card.classList.add('pet-pulse');
      
      // Remove the animation class after it completes
      setTimeout(() => {
        card.classList.remove('pet-pulse');
      }, 500);
    });
  });
});

// Set current year for copyright
document.getElementById('current-year').textContent = new Date().getFullYear();