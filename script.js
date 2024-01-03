document.getElementById('signUp').addEventListener('click', function() {
    document.getElementById('container').classList.add('right-panel-active');
  });
  
  document.getElementById('signIn').addEventListener('click', function() {
    document.getElementById('container').classList.remove('right-panel-active');
  });
  
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your signup form validation logic here
    // For example, you can check if the email is valid, if the passwords match, etc.
    // If validation passes, you can redirect the user or perform further actions.
  });
  
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your login form validation logic here
    // For example, you can check if the email and password are correct.
    // If validation passes, you can redirect the user or perform further actions.
  });
  