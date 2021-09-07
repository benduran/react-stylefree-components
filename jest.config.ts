import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  testPathIgnorePatterns: ['./dist'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};

export default config;
