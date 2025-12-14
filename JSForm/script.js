function submit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("Dob").value.trim();

  if (!name || !email || !phone || !dob) {
    alert("All fields are required.");
    return;
  }

  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  //validation

  const dateOfBirth = new Date(dob);
  const today = new Date();
  if (dateOfBirth >= today) {
    document.getElementById("dateError").innerHTML =
      "Date of Birth must be in the past.";
    return;
  }

  const currentYear = today.getFullYear();
  const birthYear = dateOfBirth.getFullYear();
  const age = currentYear - birthYear;
  if (age < 18) {
    document.getElementById("dateError").innerHTML =
      "You must be at least 18 years old.";
    return;
  }

  const nameExpression = /^[a-zA-Z][a-zA-Z ]+$/;
  if (!nameExpression.test(name)) {
    document.getElementById("nameError").innerHTML =
      "Name must contain only letters and spaces.";
    return;
  }
  const phoneExpression = /^\d{10}$/;
  if (!phoneExpression.test(phone)) {
    document.getElementById("phoneError").innerHTML =
      "Phone number must be exactly 10 digits.";
    return;
  }
  const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailExpression.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email address.";
    return;
  }

  const data = {
    name: name,
    email: email,
    phone: phone,
    dob: dob,
  };

  console.log(data);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("Dob").value = "";
}
