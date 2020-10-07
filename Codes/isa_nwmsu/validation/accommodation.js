const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAccommodationInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.non = !isEmpty(data.non) ? data.non : "";
  data.daysRequired = !isEmpty(data.daysRequired) ? data.daysRequired : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.contactNo = !isEmpty(data.contactNo) ? data.contactNo : "";
  


  
// Other checks
if (Validator.isEmpty(data.firstName)) {
    errors.firstNname = "first name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "last name field is required";
  }

  if (Validator.isEmpty(data.non)) {
    errors.non = "919# field is required";
  }

  if (Validator.isEmpty(data.daysRequired)) {
    errors.daysRequired = "days required field is required";
  }

  if (Validator.isEmpty(data.contactNo)) {
    errors.contactNo = "contact Number field is required";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "gender field is required";
  }

return {
    errors,
    isValid: isEmpty(errors)
  };
};
