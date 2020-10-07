const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePickupInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.date = !isEmpty(data.date) ? data.date : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.cell = !isEmpty(data.cell) ? data.cell : "";
  data.luggage = !isEmpty(data.luggage) ? data.luggage : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.to = !isEmpty(data.to) ? data.to : "";
  data.flightNo = !isEmpty(data.flightNo) ? data.flightNo : "";
  data.airline = !isEmpty(data.airline) ? data.airline : "";
  

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  
// Other checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = "Date field is required";
  }

  if (Validator.isEmpty(data.cell)) {
    errors.cell = "Cell field is required";
  }
  if (Validator.isEmpty(data.luggage)) {
    errors.luggage = "Luggage field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From field is required";
  }
  if (Validator.isEmpty(data.to)) {
    errors.to = "To field is required";
  }
  if (Validator.isEmpty(data.flightNo)) {
    errors.flightNo = "Flight No field is required";
  }
  if (Validator.isEmpty(data.airline)) {
    errors.airline = "Airline field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
