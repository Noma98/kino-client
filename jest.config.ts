export default {
  // The directory where Jest should store its cached dependency information
  cacheDirectory: '.jest/cache',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,
  preset: 'react-native',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  watchPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
};
