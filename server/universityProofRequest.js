const { UniversityDegreesVC6 } = require("./vcHelpers/universityCredential");

// Design your custom authentication requirements here

const humanReadableAuthReason = "Your custom authentication reason here";

const credentialSubject = {
  semesterNumber: {
    // Define your condition based on your university schema
    $lt: 8, // Modify as needed
  },
  // Add other fields as required by your schema
};

const proofRequest = UniversityDegreesVC6(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
