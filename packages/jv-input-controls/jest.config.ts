import { Config } from 'jest';

const conf: Config = {
    verbose: true,
    watchPathIgnorePatterns: [
        'node_modules',
        'dist',
        'coverage',
        'build',
    ],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.([tj]s|[tj]sx|mjs)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(\\@babel/runtime/helpers/esm|\\@mui/material|\\@mui/icons-material|\\@jaspersoft)/)',
    ],
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)",
        "**/?(*.)+(spec|test).mjs"
    ],
    moduleNameMapper: {
        '^@jaspersoft/jv-ui-components(.*)$': '<rootDir>/../jv-ui-components/dist/material-ui$1',
        '^@mui/material/(.*)$': '<rootDir>/../jv-ui-components/node_modules/@mui/material/$1',
        '^@mui/icons-material/(.*)$': '<rootDir>/../jv-ui-components/node_modules/@mui/icons-material/$1',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mjs'],
};

export default conf;