const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting by default

  // Validate the user's input
  if (
    validateUsername(usernameInput.value) &&
    validatePassword(passwordInput.value) 
  ) {
    // alert('Signup successful!');
	window.location.href = 'our_centers.html'
   
  } else {
    alert('Please fill in all fields correctly.');
  }
});

function validateUsername(name) {
  // Validate the first and last name inputs
  return /^[a-zA-Z]+$/.test(name); // Only allow letters
}

function validatePassword(password) {
  // Validate the password input
  return password.length >= 8; // Only allow passwords with at least 8 characters
}
