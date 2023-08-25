const { UniversityCheckCredential } = require("./vcHelpers/KYCAgeCredential");

const humanReadableAuthReason = "Must be Issued by this University";

const proofRequest = UniversityCheckCredential();

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
