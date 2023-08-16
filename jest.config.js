module.exports = {
  preset: "jest-playwright-preset",
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  }
};
reporters: [
  "default",
    [
      "jest-junit",
       {
        classNameTemplate: (vars) => {
          return vars.classname.toUpperCase();
        },
        "outputDirectory": "reports",
        "outputName": "test_report.xml"
      }
    ]
]