module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "clover"],
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.vue",
    "<rootDir>/src/plugins/**/*.js",
  ],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(svg|png|jpg|jpeg|gif|ttf|eot|woff|woff2)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testResultsProcessor: "jest-sonar-reporter",
};
