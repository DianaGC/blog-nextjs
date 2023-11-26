const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom/dist/index.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ["./**/*.{ts,tsx}"],
  coverageDirectory: "../coverage",
  coverageThreshold: {
    global: {
      branches: 79, // temp
      functions: 88, // temp
      lines: 85, // temp
      statements: 85, // temp
    },
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/react-app-env.d.ts",
    "src/app/root.component.tsx",
    "src/app/shared",
    ".module.scss",
    "tailwind.config.ts",
    "/.next/",
    "app/layout",
    "app/page"
  ],
}

module.exports = createJestConfig(customJestConfig)