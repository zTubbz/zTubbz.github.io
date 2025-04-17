// DOM elements
const mobileMenu = document.querySelector('.mobile-menu');
const navItems = document.querySelector('.nav-items');
const logoText = document.getElementById('logo-text');
const contentTitle = document.querySelector('.content h1');
const contactForm = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');
const modalClose = document.querySelector('.modal-close');
const faqItems = document.querySelectorAll('.faq-item');

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
  contentTitle.textContent = 'Say Hello!';
});

contentTitle.addEventListener('mouseleave', () => {
  contentTitle.textContent = 'Contact Me';
});

// Toggle FAQ answers
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Toggle the 'open' class on the FAQ item
    item.classList.toggle('open');
    
    // Find all other open FAQ items and close them
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('open')) {
        otherItem.classList.remove('open');
      }
    });
  });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    subject: contactForm.elements.subject.value,
    message: contactForm.elements.message.value
  };
  
  // Simulate sending data (in a real implementation, this would be an API call)
  simulateSendingData(formData)
    .then(() => {
      // Show success modal
      successModal.style.display = 'block';
      
      // Reset form
      contactForm.reset();
    })
    .catch(error => {
      console.error('Error sending message:', error);
      // Here you could implement an error modal or notification
    });
});

// Close modal when clicking the X
modalClose.addEventListener('click', () => {
  successModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === successModal) {
    successModal.style.display = 'none';
  }
});

// Function to simulate sending data (replace with actual API call in production)
function simulateSendingData(formData) {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      console.log('Form data:', formData);
      resolve({ success: true });
    }, 1000);
  });
};

// Set current year for copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add input field animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formInputs.forEach(input => {
  // Add focus effect
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('input-focus');
  });
  
  // Remove focus effect
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('input-focus');
  });
});

// Add hover effects to contact methods
document.addEventListener('DOMContentLoaded', () => {
  const contactMethods = document.querySelectorAll('.contact-method');
  
  contactMethods.forEach(method => {
    method.addEventListener('mouseenter', () => {
      method.style.transform = 'translateX(5px)';
    });
    
    method.addEventListener('mouseleave', () => {
      method.style.transform = '';
    });
  });
  
  // Add subtle animation to availability items
  const availabilityItems = document.querySelectorAll('.availability-list li');
  
  availabilityItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.paddingLeft = '5px';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.paddingLeft = '';
    });
  });
});
