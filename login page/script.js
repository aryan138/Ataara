// Selecting elements
const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// Adding event listener for register link
registerLink.addEventListener('click', () => {
    // Adding 'active' class to logregBox to display register form
    logregBox.classList.add('active');
});

// Adding event listener for login link
loginLink.addEventListener('click', () => {
    // Removing 'active' class from logregBox to display login form
    logregBox.classList.remove('active');
});
