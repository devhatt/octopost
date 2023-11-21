module.exports = async () => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests-examples/**/*.spec.ts'],
    roots: ['<rootDir>'],
    moduleNameMapper: {
      '^~config(.*)$': '<rootDir>/src/config$1',
      '^~pages(.*)$': '<rootDir>/src/pages$1',
      '^~components(.*)$': '<rootDir>/src/components$1',
      '^~styles(.*)$': '<rootDir>/src/styles$1',
      '^~store(.*)$': '<rootDir>/src/store$1',
      '^~snippets(.*)$': '<rootDir>/src/snippets$1',
      '^~interfaces(.*)$': '<rootDir>/src/interfaces$1',
      '^~services(.*)$': '<rootDir>/src/services$1',
      '^~constants(.*)$': '<rootDir>/src/constants$1',
      '^~utils(.*)$': '<rootDir>/src/utils$1',
      '^~hooks(.*)$': '<rootDir>/src/hooks$1',
      '^~types(.*)$': '<rootDir>/src/types$1',
      '^~enums(.*)$': '<rootDir>/src/enums$1',
    },
  };
};
