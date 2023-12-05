const inputs = document.querySelectorAll(".input");

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

function validateForm() {
    // Validate Date of Birth, Age, Password, and Confirm Password
    const dobInput = document.getElementById("dob");
    const ageInput = document.getElementById("age");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmpassword");



    // Validate Date of Birth (DOB) with DD-MM-YYYY format
    const dobValue = dobInput.value;
    const dobPattern = /^\d{2}-\d{2}-\d{4}$/;

    if (!dobPattern.test(dobValue)) {
        alert("Please enter a valid Date of Birth in DD-MM-YYYY format.");
        return false;
    }

    // Validate Age
    const ageValue = ageInput.value;

    if (!ageValue || isNaN(ageValue) || ageValue < 0) {
        alert("Please enter a valid age.");
        return false;
    }

    // Calculate the user's age based on DOB
    const dobParts = dobValue.split("-");
    const dobDate = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();

    if (today < new Date(today.getFullYear(), dobDate.getMonth(), dobDate.getDate())) {
        age--;
    }

    // Check if the calculated age matches the entered Age
    if (parseInt(ageValue) !== age) {
        alert("Age must match the Date of Birth.");
        return false;
    }

    // Validate Password and Confirm Password
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

    if (!passwordPattern.test(password)) {
        alert("Password does not meet the requirements. Please check your input.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password must match.");
        return false;
    }

    // Display a success message on successful form submission
    alert("You have signed up successfully!");
    return true;
}

function submitLoginForm() {
    alert("Login successful!"); 
    return true; 
  }
  