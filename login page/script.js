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

        // Handling sign up form submission
        document.getElementById('signupForm').addEventListener('submit', function (e) {
            e.preventDefault();
            // Get user input values
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            // Create user object
            const user = {
                name: name,
                email: email,
                password: password
            };

            // Store user object in local storage
            localStorage.setItem('user', JSON.stringify(user));

            // Switch to sign-in form after signing up
            logregBox.classList.remove('active');
        });

        // Handling sign in form submission
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();
            // Get user input values
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Retrieve user object from local storage
            const storedUser = JSON.parse(localStorage.getItem('user'));

            // Check if the stored user exists and if the entered credentials match
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                // Redirect to index page
                window.location.href = '../index.html';
            } else {
                alert('Invalid email or password');
            }
        });
