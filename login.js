function login(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Find user by username
  var user = users.find(function(user) {
    return user.username === username;
  });

  // Check if user exists and password is correct
  if (user && user.password === password) {
    if (user.active) {
      showMessage('Login successful!', 'success');
    } else {
      showMessage('Login failed. User is deactivated.', 'error');
    }
  } else {
    showMessage('Login failed. Invalid credentials.', 'error');
  }
}

function showMessage(message, messageType) {
  var messageContainer = document.getElementById('message');
  messageContainer.textContent = message;
  messageContainer.className = messageType;
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  var showPasswordCheckbox = document.getElementById('showPassword');

  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}
