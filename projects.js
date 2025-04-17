// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navItems = document.querySelector('.nav-items');
const logoText = document.getElementById('logo-text');
const projectsTitle = document.getElementById('projects-title');

// Toggle mobile menu - ensure elements exist before adding listeners
if (mobileMenu && navItems) {
  mobileMenu.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });
}

// Logo text change on hover - with null checks
if (logoText) {
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
}

// Projects title text change on hover - with null check
if (projectsTitle) {
  projectsTitle.addEventListener('mouseenter', () => {
    projectsTitle.textContent = 'Code Creations';
  });

  projectsTitle.addEventListener('mouseleave', () => {
    projectsTitle.textContent = 'My Development Projects';
  });
}

// Add hover effect to project boxes - with proper error handling
document.addEventListener('DOMContentLoaded', () => {
  const projectBoxes = document.querySelectorAll('.project-box');
  if (projectBoxes.length > 0) {
    projectBoxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        // Add a subtle glow effect on hover
        box.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.6)';
        box.style.transform = 'translateY(-8px)';
      });
      
      box.addEventListener('mouseleave', () => {
        // Remove the glow effect
        box.style.boxShadow = '';
        box.style.transform = '';
      });
    });
  }

  // Initialize animation for project tags
  const tags = document.querySelectorAll('.tag');
  if (tags.length > 0) {
    tags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        tag.style.backgroundColor = 'var(--projects-accent)';
        tag.style.color = '#000';
      });
      
      tag.addEventListener('mouseleave', () => {
        tag.style.backgroundColor = '';
        tag.style.color = '';
      });
    });
  }

  // Set current year for copyright
  document.getElementById('current-year').textContent = new Date().getFullYear();
});