"use strict";

// DOM Elements selection
const mainCard = document.querySelector(".container");
const successCard = document.querySelector(".success-card");

const errorMsg = document.querySelector("#error-msg");
const emailInput = document.querySelector("#email-address");
const buttonSignup = document.querySelector(".btn-signup");

const emailSuccess = document.querySelector("#email-signed");
const buttonDismiss = document.querySelector("#btn-dismiss");

// Regex for email pattern matching
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Event handler for Signup button
buttonSignup.addEventListener("click", function (e) {
  e.preventDefault();

  // Variable to store user email
  const email = emailInput.value;

  // Checks if email address is valid
  const isValidEmail = emailPattern.test(email);
  if (isValidEmail) {
    mainCard.classList.add("hidden");
    successCard.classList.remove("hidden");
    emailSuccess.textContent = email;
  } else {
    errorMsg.classList.remove("display-error");
    emailInput.classList.add("error-box");
  }
});

// Event handling function for Dismiss button
buttonDismiss.addEventListener("click", function (e) {
  e.preventDefault();

  errorMsg.classList.add("display-error");
  emailInput.classList.remove("error-box");
  mainCard.classList.remove("hidden");
  successCard.classList.add("hidden");
  emailInput.value = "";
  emailInput.focus();
});
