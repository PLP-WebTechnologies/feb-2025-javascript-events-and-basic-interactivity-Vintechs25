// Event Handling Examples

// Button Click Example
const button = document.querySelector('.change-text-btn');
button.addEventListener('click', () => {
  button.style.backgroundColor = 'green';
  button.textContent = 'Clicked!';
});

// Hover Effect Example
const hoverElement = document.querySelector('.hover-element');
hoverElement.addEventListener('mouseover', () => {
  hoverElement.style.backgroundColor = 'lightcoral';
});
hoverElement.addEventListener('mouseout', () => {
  hoverElement.style.backgroundColor = 'lightblue';
});

// Slideshow Example
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

const slideshowButton = document.querySelector('.next-slide');
const imageElement = document.querySelector('.image-gallery img');

slideshowButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
});

// Tabs Example
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Hide all content
    const allContent = document.querySelectorAll('.tab-content');
    allContent.forEach(content => content.classList.remove('active'));
    
    // Show the selected content
    const targetContent = document.querySelector(tab.dataset.target);
    targetContent.classList.add('active');
  });
});

// Form Validation Example

// Required Field Validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const requiredField = document.querySelector('.required');
  if (requiredField.value === '') {
    event.preventDefault();
    alert('This field is required!');
  }
});

// Email Format Validation
const emailInput = document.querySelector('.email-input');
form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value;
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(emailValue)) {
    event.preventDefault();
    alert('Please enter a valid email address.');
  }
});

// Password Validation (Min Length)
const passwordInput = document.querySelector('.password-input');
form.addEventListener('submit', (event) => {
  const passwordValue = passwordInput.value;
  if (passwordValue.length < 8) {
    event.preventDefault();
    alert('Password must be at least 8 characters long.');
  }
});

// Real-Time Password Feedback
passwordInput.addEventListener('input', () => {
  const feedback = document.querySelector('.password-feedback');
  if (passwordInput.value.length < 8) {
    feedback.textContent = 'Password is too short.';
  } else {
    feedback.textContent = 'Password length is good.';
  }
});
