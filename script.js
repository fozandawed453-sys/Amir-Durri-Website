// Login and Signup Toggle
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupForm.style.display = 'flex';
    loginForm.style.display = 'none';
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
});

// Enter Website after Login or Signup
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('mainWebsite').style.display = 'block';
});

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('mainWebsite').style.display = 'block';
});

// Smooth animation when scrolling
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.background = '#000';
    } else {
        header.style.background = 'rgba(0,0,0,0.8)';
    }
});

// Welcome Message
window.onload = function () {
    alert('Welcome to Amir Durri Car Import & Export Business Website');
};