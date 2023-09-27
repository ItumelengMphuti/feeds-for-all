const form = document.querySelector('form');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-btn');


form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting by default

  const invalidFields = []; // Store the names of the invalid fields

  // Validate the user's input
  if (!validateName(firstNameInput.value)) {
    invalidFields.push('First Name');
  }

  if (!validateName(lastNameInput.value)) {
    invalidFields.push('Last Name');
  }

  if (!validateEmail(emailInput.value)) {
    invalidFields.push('Email Address');
  }

  if (!validatePassword(passwordInput.value)) {
    invalidFields.push('Password');
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    invalidFields.push('Confirm Password');
  }

  if (invalidFields.length === 0) {
    // Signup successful, redirect to "our_centers.html"
    window.location.href = 'our_centers.html';
  } else {
    const errorMessage = `Please fill in the following fields correctly: ${invalidFields.join(', ')}.`;
    alert(errorMessage);
  }
});

// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // Prevent the form from submitting by default

//   // Validate the user's input
//   if (
//     validateName(firstNameInput.value) &&
//     validateName(lastNameInput.value) &&
//     validateEmail(emailInput.value) &&
//     validatePassword(passwordInput.value) &&
//     confirmPasswordInput.value === passwordInput.value
//   ) {
//     // Signup successful, redirect to "our_centers.html"
//     window.location.href = 'our_centers.html';
//   } else {
//     alert('Please fill in all fields correctly.');
//   }
// });

function validateName(name) {
  // Validate the first and last name inputs
  return /^[a-zA-Z]+$/.test(name); // Only allow letters
}

function validateEmail(email) {
  // Validate the email input
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Use a regular expression to validate the email format
}

function validatePassword(password) {
  // Validate the password input
  // Password must have at least 8 characters, contain letters, numbers, and special characters
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
