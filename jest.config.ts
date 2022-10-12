export default {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  collectCoverage: false,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
