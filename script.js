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
