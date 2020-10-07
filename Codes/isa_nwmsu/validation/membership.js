const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateMembershipInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.major = !isEmpty(data.major) ? data.major : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.contactNo = !isEmpty(data.contactNo) ? data.contactNo : "";
  

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  
// Other checks
if (Validator.isEmpty(data.firstName)) {
    errors.firstNname = "first name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "last name field is required";
  }

  if (Validator.isEmpty(data.major)) {
    errors.major = "major field is required";
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
