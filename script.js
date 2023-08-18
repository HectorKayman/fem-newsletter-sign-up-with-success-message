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
    console.log("Valid email address");
  } else {
    errorMsg.classList.remove("display-error");
    emailInput.classList.add("error-box");
    emailInput.style.cssText = "color: hsl(4, 100%, 60%)";
  }
});
