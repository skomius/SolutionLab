module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json"
        }
    },
    roots: ['<rootDir>/src'],
    moduleFileExtensions: [
        "ts",
        'tsx',
        "js"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: [
        "*.spec.(ts|js)"
    ],
    testEnvironment: "node"
};
