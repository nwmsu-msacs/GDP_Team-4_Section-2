const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateEventInput(data) {
    let errors = {};
   // let presentdate= Date.now().toString(M/d/yyyy);

    // Convert empty fields to an empty string so we can use validator functions
    data.eventname = !isEmpty(data.eventname) ? data.eventname : "";
    data.eventdate = !isEmpty(data.eventdate) ? data.eventdate : "";
    data.eventvenue = !isEmpty(data.eventvenue) ? data.eventvenue : "";
    data.description = !isEmpty(data.description) ? data.description : "";


    // Event Name check
    if (Validator.isEmpty(data.eventname)) {
        errors.eventname = "Event Name field is required";
    }

    // Event Date checks
    if (Validator.isEmpty(data.eventdate)) {
        errors.eventdate = "Event Date field is required";
    }
    // else if (!(data.eventdate >= presentdate)) {
    //     errors.eventdate = "Enter a valid date";
    // }

    // Event venue checks

    if (Validator.isEmpty(data.eventvenue)) {
        errors.eventvenue = "Event Venue field is required";
    }

    // Event description check

    if (Validator.isEmpty(data.description)) {
        errors.description = "Event description field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };


};
