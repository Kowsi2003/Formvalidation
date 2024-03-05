document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var nationality = document.getElementById('nationality').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
  
    if (
      firstName.trim() === '' || 
      lastName.trim() === '' || 
      mobileNumber.trim() === '' || 
      email.trim() === '' || 
      !gender || 
      nationality === '' || 
      password.trim() === '' || 
      dob.trim() === ''
    ) {
      document.getElementById('error-msg').innerText = 'Please fill in all fields.';
    } else {
      if (mobileNumber.length !== 10) {
        document.getElementById('error-msg').innerText = 'Mobile number must be 10 digits.';
        return;
      }
      document.getElementById('error-msg').innerText = 'Sign up successful!';
    }
  });
  