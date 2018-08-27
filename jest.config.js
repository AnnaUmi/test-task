module.exports = {
  testURL: 'http://localhost:3000/',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '.yarn'],
  collectCoverageFrom: ['src/**/*.js'],
  testMatch: ['<rootDir>/src/**/?(*.)(spec).js?(x)'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
