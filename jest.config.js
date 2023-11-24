// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  rootDir: "src/app",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["../node_modules/(?!@kushki)"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(png)$": "identity-obj-proxy",
    "\\.(svg)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "../node_modules/@testing-library/jest-dom/dist/index.js",
  ],
  coverageThreshold: {
    global: {
      branches: 79, // temp
      functions: 88, // temp
      lines: 85, // temp
      statements: 85, // temp
    },
  },
  coverageDirectory: "../coverage",
  collectCoverageFrom: ["./**/*.{ts,tsx}"],
  setupFiles: ["../jest.global.jsx"],
  coveragePathIgnorePatterns: [
    "src/app",
  ],
};
