function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var membershipType = document.getElementById("membershipType").value;
    var phoneNumber = prompt("Enter your mobile number");

    if (name === "" || email === "" || membershipType === "") {
        alert("Please fill out all the fields in the form.");
        return false;
    }

    // Check if the phone number is exactly 10 digits
    if (phoneNumber && phoneNumber.length === 10 && !isNaN(phoneNumber)) {
        alert("Form successfully submitted!");
    } else {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}


       
  