import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  // Transform TypeScript/TSX files
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Map path aliases
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },

  // Setup testing-library matchers
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
