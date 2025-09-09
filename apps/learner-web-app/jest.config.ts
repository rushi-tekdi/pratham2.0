export default {
  displayName: 'learner-web-app',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/learner-web-app',
  moduleNameMapper: {
    // Path aliases from tsconfig.learner.json
    '^@learner/(.*)$': '<rootDir>/src/$1',
    '^@shared-lib$': '<rootDir>/../../libs/shared-lib-v2/src/index.ts',
    '^@shared-lib-v2/(.*)$': '<rootDir>/../../libs/shared-lib-v2/src/$1',
    '^@content-mfes/(.*)$': '<rootDir>/../../mfes/content/src/$1',
    '^@login/(.*)$': '<rootDir>/../../mfes/login/src/$1',
    '^@forget-password/(.*)$': '<rootDir>/../../mfes/forget-password/src/$1',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost:3000',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/__tests__/**',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',
  ],
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.(test|spec).{ts,tsx}',
    '<rootDir>/specs/**/*.(test|spec).{ts,tsx}',
  ],
};
