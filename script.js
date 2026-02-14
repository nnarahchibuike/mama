let attemptCount = 0;
const correctPassword = /\b(Park|Ikeja|Soft|Cinema|ICM)\b/gi; // Regex to match desired keywords in any sentence

// Get elements from the DOM
const passwordInput = document.getElementById('passwordInput');
const showPasswordCheckbox = document.getElementById('showPassword');
const submitButton = document.getElementById('submitButton');

// Show or hide the password
showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// Submit password on Enter key press
passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

// Submit password on button click
submitButton.addEventListener('click', checkPassword);

function checkPassword() {
    const userInput = passwordInput.value.trim();
    attemptCount++;

    if (correctPassword.test(userInput)) {
        // Correct password entered, redirect to blank page
        window.location.href = 'main.html';  // For now, just display "Welcome!" or a blank page
    } else {
        if (attemptCount == 1) {
            alert('Incorrect password. Try again!');
        }
        if (attemptCount == 2) {
            document.getElementById('hint').style.display = 'block';
            alert('Incorrect password. Try again!');
        }

        if (attemptCount >= 3) {
            document.getElementById('hint1').style.display = 'block';
            alert("Wahala for who no sabi me 🙁");
        }
    }
}
