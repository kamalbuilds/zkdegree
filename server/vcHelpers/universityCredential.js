module.exports = {
    // VC type: UniversityDegreesVC-6
    // https://schema.dock.io/UniversityDegreesVC6-V7-1693856303133.json
    UniversityDegreesVC6: (credentialSubject) => ({
      id: 1,
      circuitId: "credentialAtomicQuerySigV2",
      query: {
        allowedIssuers: ["*"],
        type: "UniversityDegreesVC-6", // Modify according to your schema
        context: "https://schema.dock.io/UniversityDegreesVC6-V7-1693856303133.json",
        credentialSubject,
      },
    }),
  };
  