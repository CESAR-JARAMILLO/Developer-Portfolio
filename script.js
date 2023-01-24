const form = document.querySelector("#myForm");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const messageInput = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

submitBtn.addEventListener("click", e => {
  e.preventDefault();

 // Check if name input is not empty
 if (nameInput.value === "") {
  nameError.textContent = "Name is required";
  return;
} else {
  nameError.textContent = "";
}

// Check if email input is valid
if (!isValidEmail(emailInput.value)) {
  emailError.textContent = "Please enter a valid email address";
  return;
} else {
  emailError.textContent = "";
}

// Check if message input is not empty
if (messageInput.value === "") {
  messageError.textContent = "Please enter a message";
  return;
} else {
  messageError.textContent = "";
}

// If all input fields are valid, submit the form
form.submit();
});

// Function to check if email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
