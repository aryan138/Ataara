const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const loginLink2 = document.querySelector('.login-link2');
const registerLink = document.querySelector('.register-link');
const registerLink2 = document.querySelector('.register-link2');
const testLink = document.querySelector('.test-link');
const testLink2 = document.querySelector('.test-link2');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');
const testForm = document.querySelector('.form-box.test');

// Adding event listener for register link
registerLink.addEventListener('click', () => {
    // Hide login and test forms
    loginForm.style.transform = 'translateX(430px)';
    testForm.style.transform = 'translateX(430px)';
    // Show register form
    registerForm.style.transform = 'translateX(0)';
});
// Adding event listener for register link
registerLink2.addEventListener('click', () => {
    // Hide login and test forms
    loginForm.style.transform = 'translateX(430px)';
    testForm.style.transform = 'translateX(430px)';
    // Show register form
    registerForm.style.transform = 'translateX(0)';
});

// Adding event listener for login link
loginLink.addEventListener('click', () => {
    // Hide register and test forms
    registerForm.style.transform = 'translateX(430px)';
    testForm.style.transform = 'translateX(430px)';
    // Show login form
    loginForm.style.transform = 'translateX(0)';
});
// Adding event listener for login link
loginLink2.addEventListener('click', () => {
    // Hide register and test forms
    registerForm.style.transform = 'translateX(430px)';
    testForm.style.transform = 'translateX(430px)';
    // Show login form
    loginForm.style.transform = 'translateX(0)';
});

// Adding event listener for test link
testLink.addEventListener('click', () => {
    // Hide login and register forms
    loginForm.style.transform = 'translateX(430px)';
    registerForm.style.transform = 'translateX(430px)';
    // Show test form
    testForm.style.transform = 'translateX(0)';
});
// Adding event listener for test link
testLink2.addEventListener('click', () => {
    // Hide login and register forms
    loginForm.style.transform = 'translateX(430px)';
    registerForm.style.transform = 'translateX(430px)';
    // Show test form
    testForm.style.transform = 'translateX(0)';
});


