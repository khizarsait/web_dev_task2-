function submitForm(event) {
    event.preventDefault();

    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password strength requirements
    // At least 8 characters, at least one uppercase letter, one lowercase letter, and one number.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
        return;
    }

    // If validation passes, you can submit the form to a server or show a confirmation message.
    showConfirmation();
}

function showConfirmation() {
    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
}

