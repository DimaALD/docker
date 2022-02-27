import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from '../../tsconfig.json';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    rootDir: process.cwd(),
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testMatch: ['**/tests/**/*.test.ts'],
    moduleFileExtensions: ['js', 'ts'],
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'Test Report',
            },
        ],
    ],
    testResultsProcessor: './node_modules/jest-html-reporter',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
};

export default config;
