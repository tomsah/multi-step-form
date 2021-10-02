import type {Config} from '@jest/types'
import {defaults} from 'jest-config'

const config: Config.InitialOptions = {
  moduleDirectories: ['node_modules', 'utils', 'src'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': require.resolve('./utils/style-mock.js'),
  },
  modulePaths: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
  verbose: true,
}
export default config
