// Get DOM elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const authContainer = document.getElementById('authContainer');
const mainWebsite = document.getElementById('mainWebsite');

// Helper function to switch forms
function switchForm(showLogin) {
    if (showLogin) {
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    } else {
        signupForm.style.display = 'flex';
        loginForm.style.display = 'none';
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    }
}

// Login button click
loginBtn.addEventListener('click', () => {
    switchForm(true);
});

// Signup button click
signupBtn.addEventListener('click', () => {
    switchForm(false);
});

// Helper function to validate login form
function validateLoginForm() {
    const username = loginForm.querySelector('input[type="text"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();
    
    if (!username || !password) {
        alert('Please fill in all fields');
        return false;
    }
    if (username.length < 3) {
        alert('Username must be at least 3 characters');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return false;
    }
    return true;
}

// Helper function to validate signup form
function validateSignupForm() {
    const fullName = signupForm.querySelector('input[type="text"]').value.trim();
    const email = signupForm.querySelector('input[type="email"]').value.trim();
    const password = signupForm.querySelector('input[type="password"]').value.trim();
    
    if (!fullName || !email || !password) {
        alert('Please fill in all fields');
        return false;
    }
    if (fullName.length < 3) {
        alert('Full name must be at least 3 characters');
        return false;
    }
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return false;
    }
    return true;
}

// Login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateLoginForm()) {
        authContainer.style.display = 'none';
        mainWebsite.style.display = 'block';
        loginForm.reset();
    }
});

// Signup form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateSignupForm()) {
        authContainer.style.display = 'none';
        mainWebsite.style.display = 'block';
        signupForm.reset();
    }
});

// Smooth header animation on scroll with debounce
let scrollTimeout;
window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        const header = document.querySelector('header');
        
        if (header) {
            if (window.scrollY > 50) {
                header.style.background = '#000';
            } else {
                header.style.background = 'rgba(0,0,0,0.8)';
            }
        }
    }, 10);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
